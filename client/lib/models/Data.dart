import 'package:flutter/cupertino.dart';
import 'package:firebase_auth/firebase_auth.dart';
// Users
import 'package:Feltes/backoffice/models/User.dart';
import 'package:Feltes/backoffice/network/userAPI.dart';
// Info
import 'package:Feltes/models/Info.dart';
import 'package:Feltes/network/infoAPI.dart';

class Data extends ChangeNotifier {
  FirebaseAuth _auth = FirebaseAuth.instance;
  FirebaseUser _firebaseUser;
  List<User> _allUsers;
  UserAPIHelper userAPI = UserAPIHelper();
  InfoAPIHelper infoAPI = InfoAPIHelper();

  Future<bool> isLoggedIn() async {
    FirebaseUser user = await _auth.currentUser();

    if (user != null) {
      _firebaseUser = user;
      return true;
    }

    return false;
  }

  List<User> get allUsers {
    return _allUsers;
  }

  User get currentUser {
    return _allUsers.firstWhere((i) => i.id == _firebaseUser.uid);
  }

  void fetchUsers() async {
    _allUsers = await userAPI.getUsers();
    notifyListeners();
  }

  Future<bool> deleteUser(User user) async {
    dynamic deleted = await userAPI.deleteUser(user);

    return deleted;
  }

  Future<bool> addUser(User user) async {
    dynamic added = await userAPI.addUser(
        displayName: user.username,
        password: user.password,
        email: user.email,
        role: user.role);

    fetchUsers();

    return added != null;
  }

  Future<FirebaseUser> signIn({String email, String password}) async {
    if (email == null || password == null) {
      return null;
    }
    AuthResult result = await _auth.signInWithEmailAndPassword(
        email: email, password: password);

    _firebaseUser = result.user;

    return _firebaseUser;
  }

  void signOut() {
    _auth.signOut();
    _firebaseUser = null;
  }

  Future<bool> updateUser(
      {String displayName, String password, String email, String role}) async {
    var success = await userAPI.updateUser(
        uid: _firebaseUser.uid,
        displayName: displayName,
        password: password,
        email: email,
        role: role);

    fetchUsers();

    return success;
  }

  Future<Info> getInfo() async {
    var info = await infoAPI.getInfo();

    return info;
  }

  Future<bool> saveInfo({
    firstname,
    lastname,
    title,
    email,
    location,
    about,
    twitter,
    linkedin,
    github,
  }) async {
    var success = await infoAPI.saveInfo(
      firstname,
      lastname,
      title,
      email,
      location,
      about,
      twitter,
      linkedin,
      github,
    );

    return success;
  }
}
