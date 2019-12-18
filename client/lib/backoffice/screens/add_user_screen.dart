import 'package:Feltes/backoffice/network/boAPI.dart';
import 'package:flutter/material.dart';
// Firebase
import 'package:firebase_auth/firebase_auth.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';
// Models
import 'package:Feltes/backoffice/models/User.dart';

class AddUserScreen extends StatefulWidget {
  const AddUserScreen({@required this.user});
  final FirebaseUser user;

  @override
  _AddUserScreenState createState() => _AddUserScreenState();
}

class _AddUserScreenState extends State<AddUserScreen> {
  final _auth = FirebaseAuth.instance;
  BOAPIHelper api;
  List<User> users;
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
    api = BOAPIHelper();

    getUsers();

    nameController = TextEditingController();
    emailController = TextEditingController();
    passwordController = TextEditingController();
  }

  void getUsers() async {
    List<User> u = await api.getUsers();
    setState(() {
      users = u;
    });
  }

  void save() async {
    setState(() {
      isLoading = true;
    });

    var savedUser = await api.addUser(
      displayName: nameController.text,
      password: passwordController.text,
      email: emailController.text,
      role: role,
    );

    if (savedUser != null) {
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

  Column viewWithUsers() {
    return Column(
      children: users.map((user) => Text(user.email)).toList(),
    );
  }

  Center emptyView() {
    return Center(
      child: Text("Nothing to show"),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ModalProgressHUD(
      inAsyncCall: isLoading,
      child: Container(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: <Widget>[
              users == null ? emptyView() : viewWithUsers(),
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
          ),
        ),
      ),
    );
  }
}
