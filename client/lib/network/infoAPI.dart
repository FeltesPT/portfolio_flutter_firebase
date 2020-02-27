import 'dart:convert';
import 'package:http/http.dart';
import 'package:Feltes/models/Info.dart';
import 'package:firebase_auth/firebase_auth.dart';

class InfoAPIHelper {
  final String baseURL =
      'https://us-central1-feltes-portfolio.cloudfunctions.net/api/info';

  Future<String> _getToken() async {
    FirebaseUser user = await FirebaseAuth.instance.currentUser();
    IdTokenResult tokenResult = await user.getIdToken();
    return tokenResult.token;
  }

  Future<Info> getInfo() async {
    String url = baseURL;

    Response response = await get(url);

    if (response.statusCode == 200) {
      Map<String, dynamic> json = jsonDecode(response.body)['info'];

      Info info = Info.fromJson(json);

      if (json.length == 0) {}

      return info;
    } else {
      print("Failed to get user - Error Code: ${response.statusCode}");
    }

    return null;
  }

  Future<bool> saveInfo(Info info) async {
    String url = baseURL;

    String token = 'Bearer ${await _getToken()}';

    Response response =
        await post(url, headers: {'Authorization': token}, body: info.toJson());

    if (response.statusCode == 201) {
      return true;
    }

    print(
        "Failed to update info - Error Code: ${response.statusCode} - ${response.body}");
    return false;
  }
}
