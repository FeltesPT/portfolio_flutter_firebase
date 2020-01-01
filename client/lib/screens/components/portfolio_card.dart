import 'package:Feltes/backoffice/components/add_project_screen.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'package:Feltes/screens/project_screen.dart';
import 'package:Feltes/models/project.dart';

class PortfolioCard extends StatelessWidget {
  final Project project;
  final bool isEditing;
  final Function onSave;
  final Function onDelete;

  const PortfolioCard({
    Key key,
    @required this.project,
    this.isEditing = false,
    this.onSave,
    this.onDelete,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.white,
      elevation: 2,
      child: InkWell(
        splashColor: Colors.blue.withAlpha(30),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) {
                return isEditing
                    ? AddProject(
                        project: project,
                        onSave: (project) {
                          onSave(project);
                        },
                        onDelete: (project) {
                          onDelete(project);
                        },
                      )
                    : ProjectScreen(
                        project: project,
                      );
              },
            ),
          );
        },
        child: GestureDetector(
          onLongPress: () {
            onDelete(project);
          },
          child: Container(
            constraints: BoxConstraints(maxWidth: 180),
            padding: EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                FittedBox(
                  child: Text(
                    project.title,
                    style:
                        TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
                    maxLines: 1,
                  ),
                ),
                SizedBox(
                  height: 8.0,
                ),
                Hero(
                  tag: project.title,
                  child: Image.network(
                    project.imageURL,
                    width: 150,
                    height: 100,
                  ),
                ),
                SizedBox(
                  height: 8.0,
                ),
                Text(
                  project.description,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 2,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
