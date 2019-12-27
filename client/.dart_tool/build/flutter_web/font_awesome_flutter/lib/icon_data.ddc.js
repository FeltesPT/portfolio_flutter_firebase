define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const icon_data$ = Object.create(dart.library);
  const CT = Object.create(null);
  icon_data$.IconDataBrands = class IconDataBrands extends icon_data.IconData {};
  (icon_data$.IconDataBrands.new = function(codePoint) {
    icon_data$.IconDataBrands.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeBrands", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataBrands.prototype;
  dart.addTypeTests(icon_data$.IconDataBrands);
  dart.setLibraryUri(icon_data$.IconDataBrands, "package:font_awesome_flutter/icon_data.dart");
  icon_data$.IconDataSolid = class IconDataSolid extends icon_data.IconData {};
  (icon_data$.IconDataSolid.new = function(codePoint) {
    icon_data$.IconDataSolid.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeSolid", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataSolid.prototype;
  dart.addTypeTests(icon_data$.IconDataSolid);
  dart.setLibraryUri(icon_data$.IconDataSolid, "package:font_awesome_flutter/icon_data.dart");
  icon_data$.IconDataRegular = class IconDataRegular extends icon_data.IconData {};
  (icon_data$.IconDataRegular.new = function(codePoint) {
    icon_data$.IconDataRegular.__proto__.new.call(this, codePoint, {fontFamily: "FontAwesomeRegular", fontPackage: "font_awesome_flutter"});
    ;
  }).prototype = icon_data$.IconDataRegular.prototype;
  dart.addTypeTests(icon_data$.IconDataRegular);
  dart.setLibraryUri(icon_data$.IconDataRegular, "package:font_awesome_flutter/icon_data.dart");
  dart.trackLibraries("packages/font_awesome_flutter/icon_data", {
    "package:font_awesome_flutter/icon_data.dart": icon_data$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_data.dart"],"names":[],"mappings":";;;;;;;;;4CAK2B;AACnB,uDACE,SAAS,eACG,kCACC;;EACd;;;;2CAIiB;AAClB,sDACE,SAAS,eACG,iCACC;;EACd;;;;6CAImB;AACpB,wDACE,SAAS,eACG,mCACC;;EACd","file":"icon_data.ddc.js"}');
  // Exports:
  return {
    icon_data: icon_data$
  };
});

//# sourceMappingURL=icon_data.ddc.js.map
