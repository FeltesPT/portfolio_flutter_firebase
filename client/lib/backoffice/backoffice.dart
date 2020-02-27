import 'package:Feltes/models/Data.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import 'package:Feltes/backoffice/login.dart';
import 'package:Feltes/backoffice/screens/info_screen.dart';
import 'package:Feltes/backoffice/screens/users_list.dart';
import 'package:Feltes/backoffice/screens/profile_screen.dart';
import 'package:Feltes/backoffice/screens/portfolio.dart';

class Backoffice extends StatefulWidget {
  @override
  _BackofficeState createState() => _BackofficeState();
}

class _BackofficeState extends State<Backoffice> {
  int _currentIndex = 0;
  String title = "";

  void checkUser() async {
    if (!await Provider.of<Data>(context, listen: false).isLoggedIn()) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) {
            return Login();
          },
        ),
      );
    } else {
      Provider.of<Data>(context, listen: false).fetchUsers();
    }
  }

  void _onItemTapped(int index) {
    setState(() {
      _currentIndex = index;
      switch (_currentIndex) {
        case 0:
          title = "Backoffice";
          break;
        case 1:
          title = "Info";
          break;
        case 2:
          title = "Portfolio";
          break;
        case 3:
          title = "Users";
          break;
        case 4:
          title = "User Details";
          break;
        default:
          break;
      }
    });
  }

  Widget getWidget() {
    switch (_currentIndex) {
      case 0:
        return emptyView();
      case 1:
        return InfoScreen();
      case 2:
        return Portfolio();
      case 3:
        return UsersList();
      case 4:
        return ProfileScreen();
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
    checkUser();

    return Consumer<Data>(
      builder: (context, data, child) {
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
                icon: Icon(FontAwesomeIcons.info),
                title: Text("Info"),
                backgroundColor: Color(0xFF2C3E50),
              ),
              BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.images),
                title: Text("Portfolio"),
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
            leading: Container(),
          ),
          body: getWidget(),
        );
      },
    );
  }
}
