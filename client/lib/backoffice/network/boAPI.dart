import 'dart:convert';
import 'package:http/http.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'package:Feltes/backoffice/models/User.dart';

class BOAPIHelper {
  final _auth = FirebaseAuth.instance;

  final String baseURL =
      'https://us-central1-feltes-portfolio.cloudfunctions.net/api/';

  Future<String> _getToken() async {
    FirebaseUser user = await _auth.currentUser();
    IdTokenResult tokenResult = await user.getIdToken();
    return tokenResult.token;
  }

  Future<List<User>> getUsers() async {
    String url = baseURL + 'users';

    String token = 'Bearer ${await _getToken()}';

    Response response = await get(url, headers: {'Authorization': token});

    if (response.statusCode == 200) {
      Map<String, dynamic> usersJSON = jsonDecode(response.body);

      List<User> users = [];

      for (var j in usersJSON['users']) {
        User u =
            User(email: j['email'], username: j['username'], role: j['role']);
        users.add(u);
      }

      return users;
    } else {
      print("Failed to get users - Error Code: ${response.statusCode}");
    }

    return null;
  }

  Future<User> getUser(String id) async {
    String url = baseURL + 'users/$id';

    String token = 'Bearer ${await _getToken()}';

    Response response = await get(url, headers: {'Authorization': token});

    if (response.statusCode == 200) {
      Map<String, dynamic> userJSON = jsonDecode(response.body);

      User user = User(
        email: userJSON['user']['email'],
        username: userJSON['user']['displayName'],
        role: userJSON['user']['customClaims']['role'],
      );

      return user;
    } else {
      print("Failed to get user - Error Code: ${response.statusCode}");
    }

    return null;
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
    }

    print("Failed to update user - Error Code: ${response.statusCode}");
    return;
  }

  Future<bool> updateUser({
    String uid,
    String text,
    String displayName,
    String password,
    String email,
    String role,
  }) async {
    String url = baseURL + 'users/$uid';
    String token = 'Bearer ${await _getToken()}';

    Response response = await patch(url, headers: {
      'Authorization': token
    }, body: {
      'id': uid,
      'displayName': displayName,
      'password': password,
      'email': email,
      'role': role,
    });

    if (response.statusCode == 204) {
      return true;
    }

    print("Failed to update user - Error Code: ${response.statusCode}");
    return false;
  }
}
