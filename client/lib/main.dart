import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:Feltes/screens/home.dart';
import 'package:Feltes/screens/home_web.dart';
import 'package:provider/provider.dart';
import 'package:Feltes/models/Data.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<Data>(
      create: (_) => Data(),
      child: MaterialApp(
        title: 'Feltes',
        home: kIsWeb ? HomeWeb() : Home(),
      ),
    );
  }
}
