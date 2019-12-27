define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const project = Object.create(dart.library);
  const CT = Object.create(null);
  const title$ = dart.privateName(project, "Project.title");
  const imageName$ = dart.privateName(project, "Project.imageName");
  const description$ = dart.privateName(project, "Project.description");
  const url$ = dart.privateName(project, "Project.url");
  const date$ = dart.privateName(project, "Project.date");
  project.Project = class Project extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get imageName() {
      return this[imageName$];
    }
    set imageName(value) {
      super.imageName = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
  };
  (project.Project.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let imageName = opts && 'imageName' in opts ? opts.imageName : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let date = opts && 'date' in opts ? opts.date : null;
    this[title$] = title;
    this[imageName$] = imageName;
    this[description$] = description;
    this[url$] = url;
    this[date$] = date;
    ;
  }).prototype = project.Project.prototype;
  dart.addTypeTests(project.Project);
  dart.setLibraryUri(project.Project, "package:Feltes/models/project.dart");
  dart.setFieldSignature(project.Project, () => ({
    __proto__: dart.getFields(project.Project.__proto__),
    title: dart.finalFieldType(core.String),
    imageName: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.String),
    date: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/models/project", {
    "package:Feltes/models/project.dart": project
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["project.dart"],"names":[],"mappings":";;;;;;;;;;;;;IACe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAEC;QAAY;QAAgB;QAAkB;QAAU;IAAxD;IAAY;IAAgB;IAAkB;IAAU;;EAAM","file":"project.ddc.js"}');
  // Exports:
  return {
    models__project: project
  };
});

//# sourceMappingURL=project.ddc.js.map
