import 'package:flutter/material.dart';
import 'package:Feltes/backoffice/backoffice.dart';
// API
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';
// UI
import 'package:Feltes/utils/constants.dart';
import 'package:Feltes/backoffice/components/rounded_button.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool isLoading = false;
  String email;
  String password;

  void checkUser() async {
    if (await Provider.of<Data>(context, listen: false).isLoggedIn()) {
      userLoggedIn();
    }
  }

  void login() async {
    setState(() {
      isLoading = true;
    });

    final user = await Provider.of<Data>(context)
        .signIn(email: email, password: password);

    if (user != null) {
      userLoggedIn();
    } else {
      setState(() {
        isLoading = false;
      });
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
    checkUser();

    return Consumer<Data>(
      builder: (context, data, child) {
        return Scaffold(
          appBar: AppBar(
            title: Text("Feltes - Backoffice"),
          ),
          backgroundColor: Colors.white,
          body: Container(
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
                      onPressed: () {
                        login();
                      },
                    )
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
