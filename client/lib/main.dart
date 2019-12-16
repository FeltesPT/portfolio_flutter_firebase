import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:Feltes/screens/home.dart';
import 'package:Feltes/screens/home_web.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Feltes',
      home: kIsWeb ? HomeWeb() : Home(),
    );
  }
}
