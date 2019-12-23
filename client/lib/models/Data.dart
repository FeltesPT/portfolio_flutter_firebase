import 'package:flutter/cupertino.dart';
import 'package:Feltes/backoffice/models/User.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:Feltes/backoffice/network/boAPI.dart';

class Data extends ChangeNotifier {
  FirebaseAuth _auth = FirebaseAuth.instance;
  FirebaseUser _firebaseUser;
  List<User> _allUsers;
  BOAPIHelper boAPI = BOAPIHelper();

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
    _allUsers = await boAPI.getUsers();
    notifyListeners();
  }

  Future<bool> deleteUser(User user) async {
    dynamic deleted = await boAPI.deleteUser(user);

    return deleted;
  }

  Future<bool> addUser(User user) async {
    dynamic added = await boAPI.addUser(
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
    var success = await boAPI.updateUser(
        uid: _firebaseUser.uid,
        displayName: displayName,
        password: password,
        email: email,
        role: role);

    fetchUsers();

    return success;
  }
}
