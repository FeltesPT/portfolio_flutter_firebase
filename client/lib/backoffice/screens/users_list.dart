import 'package:Feltes/backoffice/components/add_user_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
// Firebase
import 'package:modal_progress_hud/modal_progress_hud.dart';
// Models
import 'package:Feltes/backoffice/models/User.dart';
// Provider
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';

class UsersList extends StatefulWidget {
  @override
  _UsersListState createState() => _UsersListState();
}

class _UsersListState extends State<UsersList> {
  bool isLoading;

  final successSnackBar = SnackBar(
    content: Text("Saved successfully"),
    duration: Duration(seconds: 2),
  );
  final failSnackBar = SnackBar(
    content: Text("Not saved."),
    duration: Duration(seconds: 2),
  );

  var user;
  String role;

  @override
  void initState() {
    super.initState();

    isLoading = false;
  }

  void confirmDelete(User user) {
    showDialog(
      context: context,
      builder: (_) => Theme.of(context).platform == TargetPlatform.iOS
          ? CupertinoAlertDialog(
              title: Text(
                'Delete the user?',
              ),
              content: SingleChildScrollView(
                child: ListBody(
                  children: <Widget>[
                    Text('Do you really want to delete this user?'),
                  ],
                ),
              ),
              actions: <Widget>[
                FlatButton(
                  child: Text('Cancel'),
                  textColor: Colors.red,
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
                FlatButton(
                  child: Text('Delete'),
                  onPressed: () {
                    delete(user);
                    Navigator.of(context).pop();
                  },
                ),
              ],
            )
          : AlertDialog(
              title: Text(
                'Delete the user?',
              ),
              content: SingleChildScrollView(
                child: ListBody(
                  children: <Widget>[
                    Text('Do you really want to delete this user?'),
                  ],
                ),
              ),
              actions: <Widget>[
                FlatButton(
                  child: Text('Cancel'),
                  textColor: Colors.red,
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
                FlatButton(
                  child: Text('Delete'),
                  onPressed: () {
                    delete(user);
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
      barrierDismissible: true,
    );
  }

  void delete(User user) async {
    setState(() {
      isLoading = true;
    });

    var success = await Provider.of<Data>(context).deleteUser(user);

    if (success) {
      Provider.of<Data>(context).fetchUsers();
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    setState(() {
      isLoading = false;
    });
  }

  void save(User user) async {
    setState(() {
      isLoading = true;
    });

    var success = await Provider.of<Data>(context).addUser(user);

    if (success) {
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    setState(() {
      isLoading = false;
    });
  }

  Widget viewWithUsers(List<User> users) {
    return ListView.builder(
      itemCount: users.length,
      itemBuilder: (BuildContext context, int index) {
        User user = users.elementAt(index);
        return Column(
          children: <Widget>[
            ListTile(
              title: Text("${user.username}"),
              subtitle: Text("${user.email}"),
              onLongPress: () {
                confirmDelete(user);
              },
            ),
            Divider(
              height: 2.0,
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<Data>(
      builder: (context, data, child) {
        return ModalProgressHUD(
          inAsyncCall: isLoading,
          child: Scaffold(
            floatingActionButton: FloatingActionButton(
              backgroundColor: Colors.lightBlueAccent,
              child: Icon(Icons.add),
              onPressed: () {
                showModalBottomSheet(
                  context: context,
                  builder: (context) => AddUser(
                    onSave: (user) {
                      save(user);
                      Navigator.pop(context);
                    },
                  ),
                );
              },
            ),
            body: Container(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: viewWithUsers(data.allUsers),
              ),
            ),
          ),
        );
      },
    );
  }
}
