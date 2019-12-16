import 'package:flutter/material.dart';

class HomeBanner extends StatelessWidget {
  HomeBanner({this.name, this.title});

  final String name;
  final String title;

  @override
  Widget build(BuildContext context) {
    bool isTinnyScreen = MediaQuery.of(context).size.width < 400;

    return Container(
      child: Stack(
        alignment: Alignment.center,
        children: <Widget>[
          ColorFiltered(
            colorFilter: ColorFilter.mode(
              Colors.black.withOpacity(0.4),
              BlendMode.srcOver,
            ),
            child: Image.network(
              "https://source.unsplash.com/1600x900/?technology",
              fit: BoxFit.fill,
              height: 260,
            ),
          ),
          Container(
            margin: EdgeInsets.only(top: isTinnyScreen ? 40 : 80),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                CircleAvatar(
                  radius: 50.0,
                  backgroundImage:
                      NetworkImage("http://feltes.pt/img/profile.png"),
                ),
                Text(
                  name,
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
                Text(
                  title,
                  style: TextStyle(color: Colors.white),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
