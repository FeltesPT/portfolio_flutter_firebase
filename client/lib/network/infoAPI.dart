import 'dart:convert';
import 'package:http/http.dart';
import 'package:Feltes/models/Info.dart';
import 'package:firebase_auth/firebase_auth.dart';

class InfoAPIHelper {
  final String baseURL =
      'https://us-central1-feltes-portfolio.cloudfunctions.net/api/';

  Future<String> _getToken() async {
    FirebaseUser user = await FirebaseAuth.instance.currentUser();
    IdTokenResult tokenResult = await user.getIdToken();
    return tokenResult.token;
  }

  Future<Info> getInfo() async {
    String url = baseURL + 'info';

    Response response = await get(url);

    if (response.statusCode == 200) {
      Map<String, dynamic> json = jsonDecode(response.body)['info'];

      Info info = Info(
        first: json['first'],
        last: json['last'],
        title: json['title'],
        email: json['email'],
        location: json['location'],
        about: json['about'],
        twitter: json['twitter'],
        linkedIn: json['linkedin'],
        github: json['github'],
      );

      if (json.length == 0) {}

      return info;
    } else {
      print("Failed to get user - Error Code: ${response.statusCode}");
    }

    return null;
  }

  Future<bool> saveInfo(
    first,
    last,
    title,
    email,
    location,
    about,
    twitter,
    linkedin,
    github,
  ) async {
    String url = baseURL + 'info';

    String token = 'Bearer ${await _getToken()}';

    Response response = await post(url, headers: {
      'Authorization': token
    }, body: {
      'first': first,
      'last': last,
      'title': title,
      'email': email,
      'location': location,
      'about': about,
      'twitter': twitter,
      'linkedin': linkedin,
      'github': github,
    });

    if (response.statusCode == 201) {
      return true;
    }

    print(
        "Failed to update info - Error Code: ${response.statusCode} - ${response.body}");
    return false;
  }
}
