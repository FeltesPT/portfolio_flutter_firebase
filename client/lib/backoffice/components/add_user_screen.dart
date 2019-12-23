import 'package:Feltes/backoffice/models/User.dart';
import 'package:flutter/material.dart';

class AddUser extends StatefulWidget {
  AddUser({this.onSave});
  final Function onSave;

  @override
  _AddUserState createState() => _AddUserState();
}

class _AddUserState extends State<AddUser> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  String role;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
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
            obscureText: true,
            controller: passwordController,
            decoration: InputDecoration(
              labelText: "Update password",
            ),
          ),
          DropdownButton<String>(
            value: role,
            isExpanded: true,
            icon: Icon(Icons.arrow_downward),
            iconSize: 24,
            elevation: 16,
            onChanged: (String newValue) {
              setState(() {
                role = newValue;
              });
            },
            items: <String>['user', 'manager', 'admin']
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
              widget.onSave(
                User(
                  username: nameController.text,
                  email: emailController.text,
                  password: passwordController.text,
                  role: role,
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
