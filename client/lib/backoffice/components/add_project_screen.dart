import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io';

import 'package:Feltes/models/project.dart';
import 'package:Feltes/network/portfolioAPI.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';

class AddProject extends StatefulWidget {
  const AddProject({Key key, @required this.onSave, this.project})
      : super(key: key);
  final Function onSave;
  final Project project;

  @override
  _AddProjectState createState() => _AddProjectState();
}

class _AddProjectState extends State<AddProject> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _urlController = TextEditingController();
  final TextEditingController _dateController = TextEditingController();

  File _image;
  bool isLoading;

  @override
  void initState() {
    super.initState();

    isLoading = false;

    if (widget.project != null) {
      _titleController.text = widget.project.title;
      _descriptionController.text = widget.project.description;
      _urlController.text = widget.project.url;
      _dateController.text = widget.project.date;
    }
  }

  Future getImage() async {
    setState(() {
      isLoading = true;
    });

    var image = await ImagePicker.pickImage(source: ImageSource.gallery);

    setState(() {
      _image = image;
      isLoading = false;
    });
  }

  Future<String> saveImage() async {
    if (_titleController.text != null && _image != null) {
      var api = PortfolioAPIHelper();
      return await api.uploadImage(_image, _titleController.text);
    } else {
      // TODO: Throw warning to set the title first
    }
    return null;
  }

  void saveProject() async {
    setState(() {
      isLoading = true;
    });

    var url = await saveImage();
    widget.onSave(
      Project(
        uid: widget.project != null ? widget.project?.uid : null,
        title: _titleController.text,
        description: _descriptionController.text,
        url: _urlController.text,
        imageURL: url,
        date: _dateController.text,
      ),
    );

    setState(() {
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("New Project"),
        backgroundColor: Color(0xFF2C3E50),
      ),
      body: ModalProgressHUD(
        inAsyncCall: isLoading,
        child: SingleChildScrollView(
          child: Container(
            padding: EdgeInsets.all(16),
            child: Column(
              children: <Widget>[
                TextField(
                  controller: _titleController,
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
                Container(
                  padding: EdgeInsets.zero,
                  height: 150,
                  width: 150,
                  child: _image != null
                      ? Image.file(_image)
                      : widget.project != null &&
                              widget.project.imageURL != null
                          ? Image.network(widget.project.imageURL)
                          : null,
                ),
                MaterialButton(
                  child: Text("Save"),
                  color: Color(0xFF2C3E50),
                  textColor: Colors.white,
                  onPressed: () async {
                    saveProject();
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
