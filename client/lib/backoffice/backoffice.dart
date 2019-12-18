import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import 'package:Feltes/backoffice/login.dart';
import 'package:Feltes/backoffice/network/boAPI.dart';
import 'package:Feltes/backoffice/screens/add_user_screen.dart';
import 'package:Feltes/backoffice/screens/profile_screen.dart';

class Backoffice extends StatefulWidget {
  Backoffice({Key key}) : super(key: key);

  @override
  _BackofficeState createState() => _BackofficeState();
}

class _BackofficeState extends State<Backoffice> {
  final _auth = FirebaseAuth.instance;
  BOAPIHelper api;
  FirebaseUser user;
  int _currentIndex = 0;
  String title = "";

  @override
  void initState() {
    super.initState();

    checkUser();

    api = BOAPIHelper();
  }

  void checkUser() async {
    user = await _auth.currentUser();

    if (user == null) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) {
            return Login();
          },
        ),
      );
    }
  }

  void _onItemTapped(int index) {
    setState(() {
      _currentIndex = index;
      switch (_currentIndex) {
        case 0:
          title = "Backoffice";
          break;
        case 2:
          title = "Users";
          break;
        case 3:
          title = "User Details";
          break;
          break;
        default:
          title = "Backoffice";
          break;
      }
    });
  }

  Widget getWidget() {
    switch (_currentIndex) {
      case 0:
        return emptyView();
      case 2:
        return AddUserScreen(
          user: user,
        );
      case 3:
        return ProfileScreen(
          user: user,
        );
        break;
      default:
        return Text("Backoffice");
    }
  }

  Center emptyView() {
    return Center(
      child: Text("Nothing to show"),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: _onItemTapped,
        fixedColor: Colors.white,
        items: [
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.home),
            title: Text("Home"),
            backgroundColor: Color(0xFF2C3E50),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.addressCard),
            title: Text("About"),
            backgroundColor: Color(0xFF2C3E50),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.users),
            title: Text("Users"),
            backgroundColor: Color(0xFF2C3E50),
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.user),
            title: Text("Profile"),
            backgroundColor: Color(0xFF2C3E50),
          ),
        ],
      ),
      appBar: AppBar(
        title: Text(title),
        backgroundColor: Color(0xFF2C3E50),
      ),
      body: getWidget(),
    );
  }
}
