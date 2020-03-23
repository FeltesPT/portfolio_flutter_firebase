import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
// API
import 'package:Feltes/network/portfolioAPI.dart';
// Components
import 'package:Feltes/screens/components/sectionTitle.dart';
import 'package:Feltes/screens/components/portfolio_card.dart';
// Models
import 'package:Feltes/models/project.dart';

class Portfolio extends StatefulWidget {
  @override
  _PortfolioState createState() => _PortfolioState();
}

class _PortfolioState extends State<Portfolio> {
  PortfolioAPIHelper api;
  List<Project> myProjects;

  @override
  void initState() {
    super.initState();

    api = PortfolioAPIHelper();
    getData();
  }

  void getData() async {
    var data = await api.getPortfolio();

    if (data == null) {
      return;
    }

    List<Project> projects = [];
    for (var projInfo in data) {
      var proj = Project(
        title: projInfo.title,
        description: projInfo.description,
        imageURL: projInfo.imageURL,
        url: projInfo.url,
      );

      projects.add(proj);
    }

    setState(() {
      myProjects = projects;
    });
  }

  List<Row> createList(int numInRow) {
    List<Row> list = [];

    for (var project in myProjects) {
      if (list.isNotEmpty && list.last.children.length <= numInRow - 1) {
        list.last.children.add(
          PortfolioCard(
            project: project,
          ),
        );
      } else {
        list.add(
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              PortfolioCard(
                project: project,
              ),
            ],
          ),
        );
      }
    }

    return list;
  }

  @override
  Widget build(BuildContext context) {
    bool isBigScreen = MediaQuery.of(context).size.width > 1200;
    bool isMediumScreen =
        MediaQuery.of(context).size.width > 800 && !isBigScreen;
    bool isTinnyScreen = MediaQuery.of(context).size.width < 400;

    int numInRow = isBigScreen ? 4 : isMediumScreen ? 3 : isTinnyScreen ? 1 : 2;

    if (myProjects == null) {
      return Container(
        constraints: BoxConstraints(
          minHeight: 400,
        ),
        decoration: BoxDecoration(color: Colors.white),
        child: Center(child: SpinKitCubeGrid(
          itemBuilder: (BuildContext context, int index) {
            return DecoratedBox(
              decoration: BoxDecoration(
                color: Color(0xFF2c3e50),
              ),
            );
          },
        )),
      );
    }

    return Container(
      constraints: BoxConstraints(
        maxWidth: 1200,
      ),
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: <Widget>[
          SectionTitle(
            title: "Portfolio",
            color: Colors.black,
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: createList(numInRow),
          )
        ],
      ),
    );
  }
}
