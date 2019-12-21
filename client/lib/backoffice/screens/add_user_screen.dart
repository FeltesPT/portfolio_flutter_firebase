import 'package:flutter/material.dart';
// Firebase
import 'package:modal_progress_hud/modal_progress_hud.dart';
// Models
import 'package:Feltes/backoffice/models/User.dart';
// Provider
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';

class AddUserScreen extends StatefulWidget {
  @override
  _AddUserScreenState createState() => _AddUserScreenState();
}

class _AddUserScreenState extends State<AddUserScreen> {
  bool isLoading;

  final successSnackBar = SnackBar(
    content: Text("Saved successfully"),
    duration: Duration(seconds: 2),
  );
  final failSnackBar = SnackBar(
    content: Text("Not saved."),
    duration: Duration(seconds: 2),
  );

  var user;
  String role;
  TextEditingController nameController;
  TextEditingController emailController;
  TextEditingController passwordController;

  @override
  void initState() {
    super.initState();

    isLoading = false;

    nameController = TextEditingController();
    emailController = TextEditingController();
    passwordController = TextEditingController();
  }

  void save() async {
    setState(() {
      isLoading = true;
    });

    var success = await Provider.of<Data>(context).addUser(
      displayName: nameController.text,
      password: passwordController.text,
      email: emailController.text,
      role: role,
    );

    if (success) {
      print("Saved successfully");
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      print("Not saved.");
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    setState(() {
      isLoading = false;
    });
  }

  Widget viewWithUsers(List<User> users) {
    return ListView.builder(
      itemCount: users.length,
      itemBuilder: (BuildContext context, int index) {
        User user = users.elementAt(index);
        return Column(
          children: <Widget>[
            ListTile(
              title: Text("${user.username}"),
              subtitle: Text("${user.email}"),
            ),
            Divider(
              height: 2.0,
            ),
          ],
        );
      },
    );
  }

  Widget emptyView() {
    return Column(
      children: <Widget>[
        TextField(
          controller: nameController,
          decoration: InputDecoration(
            labelText: "Your username.",
          ),
        ),
        TextField(
          controller: emailController,
          decoration: InputDecoration(
            labelText: "Your email",
          ),
        ),
        TextField(
          obscureText: true,
          controller: passwordController,
          decoration: InputDecoration(
            labelText: "Update password",
          ),
        ),
        DropdownButton<String>(
          value: role,
          icon: Icon(Icons.arrow_downward),
          iconSize: 24,
          elevation: 16,
          onChanged: (String newValue) {
            setState(() {
              role = newValue;
            });
          },
          items: <String>['', 'admin', 'manager', 'user']
              .map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value),
            );
          }).toList(),
        ),
        MaterialButton(
          child: Text("Save"),
          color: Color(0xFF2C3E50),
          textColor: Colors.white,
          onPressed: () {
            save();
          },
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<Data>(
      builder: (context, data, child) {
        return ModalProgressHUD(
          inAsyncCall: isLoading,
          child: Container(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: data.allUsers == null
                  ? emptyView()
                  : viewWithUsers(data.allUsers),
            ),
          ),
        );
      },
    );
  }
}
