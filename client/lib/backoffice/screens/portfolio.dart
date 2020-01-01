import 'package:Feltes/backoffice/components/add_project_screen.dart';
import 'package:flutter/material.dart';
// Views
import 'package:modal_progress_hud/modal_progress_hud.dart';
import 'package:Feltes/screens/components/portfolio_card.dart';
// Models
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';
import 'package:Feltes/models/project.dart';

class Portfolio extends StatefulWidget {
  @override
  _PortfolioState createState() => _PortfolioState();
}

class _PortfolioState extends State<Portfolio> {
  final TextEditingController titleController = TextEditingController();
  final TextEditingController descriptionController = TextEditingController();
  final TextEditingController urlController = TextEditingController();

  bool isLoading;
  List<Project> portfolio = [];

  final successSnackBar = SnackBar(
    content: Text("Saved successfully"),
    duration: Duration(seconds: 2),
  );
  final failSnackBar = SnackBar(
    content: Text("Not saved."),
    duration: Duration(seconds: 2),
  );

  @override
  void initState() {
    super.initState();
    isLoading = true;

    getInfo();
  }

  void getInfo() async {
    var info = await Provider.of<Data>(context, listen: false).getPortfolio();

    setState(() {
      portfolio = info;
      isLoading = false;
    });
  }

  List<Row> createList(int numInRow) {
    List<Row> list = [];

    for (var project in portfolio) {
      if (list.isNotEmpty && list.last.children.length <= numInRow - 1) {
        list.last.children.add(
          PortfolioCard(
            project: project,
            isEditing: true,
            onSave: onSave,
            onDelete: onDelete,
          ),
        );
      } else {
        list.add(
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              PortfolioCard(
                project: project,
                isEditing: true,
                onSave: onSave,
                onDelete: onDelete,
              ),
            ],
          ),
        );
      }
    }

    return list;
  }

  void onSave(Project project) async {
    bool success =
        await Provider.of<Data>(context, listen: false).saveProject(project);
    Navigator.pop(context);

    if (success) {
      print("Saved successfully");
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      print("Not saved successfully");
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    getInfo();
  }

  void onDelete(Project project) async {
    bool success = await Provider.of<Data>(context, listen: false)
        .deleteProject(project.uid);
    Navigator.pop(context);

    if (success) {
      print("Deleted project successfully");
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      print("Coulnd't delete project");
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    getInfo();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<Data>(
      builder: (context, data, child) {
        return Container(
          child: ModalProgressHUD(
            inAsyncCall: isLoading,
            child: Scaffold(
              floatingActionButton: FloatingActionButton(
                backgroundColor: Colors.lightBlueAccent,
                child: Icon(Icons.add),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) {
                        return AddProject(
                          onSave: (project) {
                            onSave(project);
                          },
                        );
                      },
                    ),
                  );
                },
              ),
              body: SingleChildScrollView(
                child: Container(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Column(
                      children: createList(2),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
