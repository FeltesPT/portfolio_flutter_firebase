import 'package:flutter/material.dart';
import 'package:Feltes/backoffice/backoffice.dart';
// Firebase
import 'package:firebase_auth/firebase_auth.dart';
// UI
import 'package:Feltes/utils/constants.dart';
import 'package:Feltes/backoffice/components/rounded_button.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _auth = FirebaseAuth.instance;
  bool isLoading = false;
  String email;
  String password;

  @override
  initState() {
    super.initState();
    checkUser();
  }

  void checkUser() async {
    if (await _auth.currentUser() != null) {
      userLoggedIn();
    }
  }

  void userLoggedIn() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) {
          return Backoffice();
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Feltes - Backoffice"),
      ),
      backgroundColor: Colors.white,
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: NetworkImage(
              "https://source.unsplash.com/1600x900/?technology",
            ),
            fit: BoxFit.fitHeight,
          ),
        ),
        child: ModalProgressHUD(
          inAsyncCall: isLoading,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 24.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                TextField(
                  textAlign: TextAlign.center,
                  keyboardType: TextInputType.emailAddress,
                  onChanged: (value) {
                    email = value;
                  },
                  decoration: kTextInputDecoration.copyWith(
                    hintText: 'Enter your Email',
                  ),
                ),
                SizedBox(
                  height: 8.0,
                ),
                TextField(
                  textAlign: TextAlign.center,
                  obscureText: true,
                  onChanged: (value) {
                    password = value;
                  },
                  decoration: kTextInputDecoration.copyWith(
                    hintText: 'Enter your passsword',
                  ),
                ),
                SizedBox(
                  height: 24.0,
                ),
                RoundedButton(
                  title: 'Log In',
                  color: Colors.lightBlueAccent,
                  onPressed: () async {
                    setState(() {
                      isLoading = true;
                    });

                    try {
                      final user = await _auth.signInWithEmailAndPassword(
                          email: email, password: password);
                      if (user != null) {
                        userLoggedIn();
                      }
                    } catch (e) {
                      print(e);
                    }

                    setState(() {
                      isLoading = false;
                    });
                  },
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
