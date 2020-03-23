import 'dart:convert';
import 'dart:async';
import 'dart:io';
import 'package:http/http.dart';
import 'package:Feltes/models/project.dart';
// Firebase
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';

class PortfolioAPIHelper {
  final String storageURL = 'gs://feltes-portfolio.appspot.com';
  final String baseURL =
      'https://us-central1-feltes-portfolio.cloudfunctions.net/api/portfolio/';

  // final String baseURL =
  //     'http://localhost:5001/feltes-portfolio/us-central1/api/portfolio/';

  Future<String> uploadImage(File file, String filename) async {
    final StorageReference storageReference =
        FirebaseStorage().ref().child(filename);

    final StorageUploadTask uploadTask = storageReference.putFile(
      file,
      StorageMetadata(
        contentType: 'image/jpeg',
      ),
    );

    double percentage = 0;

    final StreamSubscription<StorageTaskEvent> streamSubscription =
        uploadTask.events.listen((event) {
      print('EVENT ${event.type}');
      percentage =
          event.snapshot.bytesTransferred / event.snapshot.totalByteCount;

      print('Percentage $percentage');
    });

    // Cancel your subscription when done.
    var dowurl = await (await uploadTask.onComplete).ref.getDownloadURL();
    streamSubscription.cancel();

    return dowurl.toString();
  }

  Future<String> _getToken() async {
    FirebaseUser user = await FirebaseAuth.instance.currentUser();
    IdTokenResult tokenResult = await user.getIdToken();
    return tokenResult.token;
  }

  Future<List<Project>> getPortfolio() async {
    String url = baseURL;

    Response response = await get(url);

    if (response.statusCode == 200) {
      Map<String, dynamic> json = jsonDecode(response.body);

      List<Project> portfolio = [];

      for (var j in json['projects']) {
        Project project = Project.fromJson(j);
        portfolio.add(project);
      }

      return portfolio;
    }

    print("Failed to get portfolio - Error Code: ${response.statusCode}");
    return null;
  }

  Future<Project> getProject(String uid) async {
    String url = "$baseURL$uid";

    Response response = await get(url);

    if (response.statusCode == 200) {
      Map<String, dynamic> json = jsonDecode(response.body)['portfolio'];

      Project project = Project.fromJson(json);

      return project;
    }

    print("Failed to get project - Error Code: ${response.statusCode}");
    return null;
  }

  Future<bool> saveProject(Project project) async {
    String token = 'Bearer ${await _getToken()}';

    var header = {'Authorization': token};
    var body = project.toJson();

    Response response;

    if (project.uid == null) {
      response = await post(baseURL, headers: header, body: body);
    } else {
      response =
          await patch('$baseURL${project.uid}', headers: header, body: body);
    }

    if (project.uid == null && response.statusCode == 201) {
      return true;
    } else if (project.uid != null && response.statusCode == 204) {
      return true;
    }

    print(
        "Failed to update project - Error Code: ${response.statusCode} - ${response.body}");
    return false;
  }

  Future<bool> deleteProject(String uid) async {
    String url = "$baseURL$uid";

    String token = 'Bearer ${await _getToken()}';

    var header = {'Authorization': token};

    Response response = await delete(
      url,
      headers: header,
    );

    if (response.statusCode == 204) {
      return true;
    }

    print(
        "Failed to delete project - Error Code: ${response.statusCode} - ${response.body}");
    return false;
  }

  Future<bool> reorderProjects(int oldIndex, int newIndex) async {
    String url = "$baseURL" + "reorder";

    String token = 'Bearer ${await _getToken()}';

    var header = {'Authorization': token};

    Response response = await put(url, headers: header, body: {
      "oldIndex": oldIndex.toString(),
      "newIndex": newIndex.toString()
    });

    if (response.statusCode == 204) {
      return true;
    }

    print(
        "Failed to reorder project - Error Code: ${response.statusCode} - ${response.body}");
    return false;
  }
}
