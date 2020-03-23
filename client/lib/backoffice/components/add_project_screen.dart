import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io';

import 'package:Feltes/models/project.dart';
import 'package:Feltes/network/portfolioAPI.dart';
import 'package:modal_progress_hud/modal_progress_hud.dart';

class AddProject extends StatefulWidget {
  const AddProject(
      {Key key, @required this.onSave, this.project, this.onDelete, this.lang})
      : super(key: key);
  final Function onSave;
  final Function onDelete;
  final Project project;
  final String lang;

  @override
  _AddProjectState createState() => _AddProjectState();
}

class _AddProjectState extends State<AddProject> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _urlController = TextEditingController();
  final TextEditingController _dateController = TextEditingController();

  String _lang;
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
      _lang = widget.lang;
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
        lang: _lang,
      ),
    );

    setState(() {
      isLoading = false;
    });
  }

  void deleteProject() async {
    setState(() {
      isLoading = true;
    });

    widget.onDelete(widget.project);

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
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.stretch,
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
                DropdownButton<String>(
                  value: _lang,
                  icon: Icon(Icons.arrow_downward),
                  iconSize: 24,
                  elevation: 16,
                  style: TextStyle(color: Colors.deepPurple),
                  underline: Container(
                    height: 2,
                    color: Colors.deepPurpleAccent,
                  ),
                  onChanged: (String newValue) {
                    setState(() {
                      _lang = newValue;
                    });
                  },
                  items: <String>[
                    "Objective-C",
                    'Swift',
                    'flutter',
                    'React Native'
                  ].map<DropdownMenuItem<String>>((String value) {
                    return DropdownMenuItem<String>(
                      value: value,
                      child: Text(value),
                    );
                  }).toList(),
                ),
                Container(
                  padding: EdgeInsets.all(16),
                  height: _image != null ||
                          (widget.project != null &&
                              widget.project.imageURL != null)
                      ? 150
                      : 0,
                  child: _image != null
                      ? Image.file(_image)
                      : widget.project != null &&
                              widget.project.imageURL != null
                          ? Image.network(widget.project.imageURL)
                          : null,
                ),
                RaisedButton.icon(
                  icon: Icon(FontAwesomeIcons.fileUpload),
                  label: Text("Upload image"),
                  color: Color(0xFF2C3E50),
                  textColor: Colors.white,
                  onPressed: getImage,
                ),
                RaisedButton.icon(
                  icon: Icon(FontAwesomeIcons.marker),
                  label: Text("Save"),
                  color: Color(0xFF2C3E50),
                  textColor: Colors.white,
                  onPressed: saveProject,
                ),
                Container(
                  child: widget.onDelete != null
                      ? RaisedButton.icon(
                          icon: Icon(FontAwesomeIcons.eraser),
                          label: Text("Delete"),
                          color: Color(0xFFa57282),
                          textColor: Colors.white,
                          onPressed: deleteProject,
                        )
                      : null,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
