import 'package:Feltes/backoffice/login.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
// API
import 'package:Feltes/network/api.dart';
// Screens
import 'package:Feltes/screens/sections/contact.dart';
import 'package:Feltes/screens/sections/footer.dart';
import 'package:Feltes/screens/sections/homeBanner.dart';
import 'package:Feltes/screens/sections/portfolio.dart';
import 'package:Feltes/screens/sections/about.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  APIHelper api;
  var myInfo;

  @override
  void initState() {
    super.initState();

    api = APIHelper();
    getData();
  }

  void getData() async {
    var data = await api.getMyInfo();

    setState(() {
      myInfo = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (myInfo == null) {
      return Container(
        decoration: BoxDecoration(
          color: Color(0xFF2C3E50),
        ),
        child: Center(child: SpinKitCubeGrid(
          itemBuilder: (BuildContext context, int index) {
            return DecoratedBox(
              decoration: BoxDecoration(
                color: Colors.white,
              ),
            );
          },
        )),
      );
    }

    return Scaffold(
        body: CustomScrollView(
      slivers: <Widget>[
        SliverAppBar(
          elevation: 6,
          forceElevated: true,
          backgroundColor: Color(0xFF2c3e50),
          title: Text(
            'Feltes',
            style: TextStyle(
              color: Colors.white,
              fontFamily: 'Poppins',
              fontSize: 20.0,
            ),
          ),
          actions: <Widget>[
            IconButton(
              icon: const Icon(FontAwesomeIcons.signInAlt),
              tooltip: 'Backoffice',
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    fullscreenDialog: true,
                    builder: (context) {
                      return Login();
                    },
                  ),
                );
              },
            ),
          ],
          pinned: true,
          expandedHeight: 210.0,
          flexibleSpace: FlexibleSpaceBar(
            background: HomeBanner(
              name: myInfo['name'],
              title: myInfo['title'],
            ),
          ),
        ),
        SliverList(
          delegate: SliverChildListDelegate(
            [
              Portfolio(),
              About(
                about: myInfo['about'],
              ),
              Contact(),
              Footer(
                location: myInfo['address'],
              ),
            ],
          ),
        )
      ],
    ));
  }
}
