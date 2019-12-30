import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io';

import 'package:Feltes/models/project.dart';
import 'package:Feltes/network/portfolioAPI.dart';

class AddProject extends StatefulWidget {
  const AddProject({Key key, this.onSave}) : super(key: key);
  final Function onSave;

  @override
  _AddProjectState createState() => _AddProjectState();
}

class _AddProjectState extends State<AddProject> {
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _urlController = TextEditingController();
  final TextEditingController _dateController = TextEditingController();

  String _title;
  File _image;

  @override
  void initState() {
    super.initState();

    // if (widget.user != null) {
    //   nameController.text = widget.user.username;
    //   emailController.text = widget.user.email;
    //   role = widget.user.role;
    // }
  }

  Future getImage() async {
    var image = await ImagePicker.pickImage(source: ImageSource.gallery);

    setState(() {
      _image = image;
    });
  }

  Future<String> saveImage() async {
    if (_title != null && _image != null) {
      var api = PortfolioAPIHelper();
      return await api.uploadImage(_image, _title);
    } else {
      // TODO: Throw warning to set the title first
    }
    return '';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("New Project"),
        backgroundColor: Color(0xFF2C3E50),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(16),
          child: Column(
            children: <Widget>[
              TextField(
                onChanged: (newValue) {
                  setState(() {
                    _title = newValue;
                  });
                },
                decoration: InputDecoration(
                  labelText: "Project title.",
                ),
              ),
              TextField(
                controller: _descriptionController,
                decoration: InputDecoration(
                  labelText: "Project Description",
                ),
              ),
              TextField(
                controller: _urlController,
                decoration: InputDecoration(
                  labelText: "URL",
                ),
              ),
              TextField(
                controller: _dateController,
                decoration: InputDecoration(
                  labelText: "Date",
                ),
              ),
              MaterialButton(
                child: Text("Upload image"),
                color: Color(0xFF2C3E50),
                textColor: Colors.white,
                onPressed: getImage,
              ),
              MaterialButton(
                child: Text("Save"),
                color: Color(0xFF2C3E50),
                textColor: Colors.white,
                onPressed: () async {
                  var url = await saveImage();
                  widget.onSave(
                    Project(
                        title: _title,
                        description: _descriptionController.text,
                        url: _urlController.text,
                        imageURL: url,
                        date: _urlController.text),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
