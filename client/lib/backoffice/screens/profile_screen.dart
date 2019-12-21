import 'package:flutter/material.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';
// Models
import 'package:Feltes/backoffice/models/User.dart';
// Provider
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';

class ProfileScreen extends StatefulWidget {
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  bool isLoading;

  final successSnackBar = SnackBar(
    content: Text("Saved successfully."),
    duration: Duration(seconds: 2),
  );
  final failSnackBar = SnackBar(
    content: Text("Failed to save details."),
    duration: Duration(seconds: 2),
  );

  String role;
  TextEditingController nameController;
  TextEditingController emailController;
  TextEditingController passwordController;

  @override
  void initState() {
    super.initState();

    isLoading = true;
  }

  void getUser() async {
    User user = Provider.of<Data>(context, listen: false).currentUser;

    nameController = TextEditingController(text: user.username);
    emailController = TextEditingController(text: user.email);
    passwordController = TextEditingController();
    role = user.role == '' ? 'user' : user.role;

    setState(() {
      isLoading = false;
    });
  }

  void save() async {
    setState(() {
      isLoading = true;
    });

    var success = await Provider.of<Data>(context).updateUser(
        displayName: nameController.text,
        password: passwordController.text,
        email: emailController.text,
        role: role);

    if (success) {
      print("Saved successfully");
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      print("Not saved successfully");
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    setState(() {
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    getUser();

    return Consumer<Data>(
      builder: (context, data, child) {
        return ModalProgressHUD(
          inAsyncCall: isLoading,
          child: Container(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
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
                  MaterialButton(
                    child: Text("Logout"),
                    color: Colors.red,
                    textColor: Colors.white,
                    onPressed: () {
                      data.signOut();
                      Navigator.pop(context);
                    },
                  )
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
