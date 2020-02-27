import 'package:flutter/material.dart';
// Views
import 'package:modal_progress_hud/modal_progress_hud.dart';
// Models
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';
import 'package:Feltes/models/Info.dart';

class InfoScreen extends StatefulWidget {
  @override
  _InfoScreenState createState() => _InfoScreenState();
}

class _InfoScreenState extends State<InfoScreen> {
  final TextEditingController firstnameController = TextEditingController();
  final TextEditingController lastnameController = TextEditingController();
  final TextEditingController titleController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController locationController = TextEditingController();
  final TextEditingController aboutController = TextEditingController();
  final TextEditingController twitterController = TextEditingController();
  final TextEditingController linkedinController = TextEditingController();
  final TextEditingController githubController = TextEditingController();

  bool isLoading;

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
    var info = await Provider.of<Data>(context, listen: false).getInfo();

    firstnameController.text = info.first;
    lastnameController.text = info.last;
    titleController.text = info.title;
    emailController.text = info.email;
    locationController.text = info.location;
    aboutController.text = info.about;
    twitterController.text = info.twitter;
    linkedinController.text = info.linkedIn;
    githubController.text = info.github;

    setState(() {
      isLoading = false;
    });
  }

  void save() async {
    bool success =
        await Provider.of<Data>(context, listen: false).saveInfo(Info(
      first: firstnameController.text,
      last: lastnameController.text,
      title: titleController.text,
      email: emailController.text,
      location: locationController.text,
      about: aboutController.text,
      twitter: twitterController.text,
      linkedIn: linkedinController.text,
      github: githubController.text,
    ));

    if (success) {
      Scaffold.of(context).showSnackBar(successSnackBar);
    } else {
      Scaffold.of(context).showSnackBar(failSnackBar);
    }

    setState(() {
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<Data>(
      builder: (context, data, child) {
        return Container(
          child: ModalProgressHUD(
            inAsyncCall: isLoading,
            child: Scaffold(
              body: SingleChildScrollView(
                child: Container(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Column(
                      children: <Widget>[
                        TextField(
                          controller: firstnameController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'First Name',
                          ),
                        ),
                        TextField(
                          controller: lastnameController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'Last Name',
                          ),
                        ),
                        TextField(
                          controller: titleController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'Professional Title',
                          ),
                        ),
                        TextField(
                          controller: emailController,
                          autocorrect: false,
                          textCapitalization: TextCapitalization.none,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'Email',
                          ),
                        ),
                        TextField(
                          controller: locationController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'Location',
                          ),
                        ),
                        TextField(
                          controller: aboutController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.sentences,
                          minLines: 1,
                          maxLines: 10,
                          decoration: InputDecoration(
                            labelText: 'About',
                          ),
                        ),
                        TextField(
                          controller: twitterController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'Twitter URL',
                          ),
                        ),
                        TextField(
                          controller: linkedinController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'LinkedIn URL',
                          ),
                        ),
                        TextField(
                          controller: githubController,
                          autocorrect: true,
                          textCapitalization: TextCapitalization.words,
                          enableSuggestions: true,
                          decoration: InputDecoration(
                            labelText: 'Github URL',
                          ),
                        ),
                        MaterialButton(
                          color: Color(0xFF2C3E50),
                          child: Text(
                            'Save',
                            style: TextStyle(color: Colors.white),
                          ),
                          onPressed: () {
                            save();
                          },
                        )
                      ],
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
