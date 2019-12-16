import 'dart:convert';
import 'package:http/http.dart';
import 'package:firebase_auth/firebase_auth.dart';

class BOAPIHelper {
  final _auth = FirebaseAuth.instance;

  final String baseURL =
      'https://us-central1-feltes-portfolio.cloudfunctions.net/api/';

  Future<String> _getToken() async {
    FirebaseUser user = await _auth.currentUser();
    IdTokenResult tokenResult = await user.getIdToken();
    return tokenResult.token;
  }

  Future getUsers() async {
    String url = baseURL + 'users';

    String token = 'Bearer ${await _getToken()}';

    Response response = await get(url, headers: {'Authorization': token});

    if (response.statusCode == 200) {
      String data = response.body;

      return jsonDecode(data);
    } else {
      print("Failed to get users - Error Code: ${response.statusCode}");
    }
  }

  Future getUser(String id) async {
    String url = baseURL + 'users/$id';

    String token = 'Bearer ${await _getToken()}';

    Response response = await get(url, headers: {'Authorization': token});

    if (response.statusCode == 200) {
      String data = response.body;

      return jsonDecode(data);
    } else {
      print("Failed to get user - Error Code: ${response.statusCode}");
    }
  }

  Future addUser({
    String text,
    String id,
    String displayName,
    String password,
    String email,
    String role,
  }) async {
    String url = baseURL + 'users/';

    String token = 'Bearer ${await _getToken()}';

    Response response = await post(url, headers: {
      'Authorization': token
    }, body: {
      'displayName': displayName,
      'password': password,
      'email': email,
      'role': role,
    });

    if (response.statusCode == 201) {
      String data = response.body;

      return jsonDecode(data);
    } else {
      print("Failed to update user - Error Code: ${response.statusCode}");
    }
    return;
  }

  Future updateUser(
      {String uid,
      String text,
      String id,
      String displayName,
      String password,
      String email,
      String role}) async {
    String url = baseURL + 'users/$id';

    String token = 'Bearer ${await _getToken()}';

    Response response = await patch(url, headers: {
      'Authorization': token
    }, body: {
      'displayName': displayName,
      'password': password,
      'email': email,
      'role': role,
    });

    if (response.statusCode == 204) {
      String data = response.body;

      return jsonDecode(data);
    } else {
      print("Failed to update user - Error Code: ${response.statusCode}");
    }
    return;
  }
}
