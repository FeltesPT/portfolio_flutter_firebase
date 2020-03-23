class Project {
  final String uid;
  final String title;
  final String imageURL;
  final String description;
  final String url;
  final String date;
  final String lang;

  Project({
    this.uid,
    this.title,
    this.imageURL,
    this.description,
    this.url,
    this.date,
    this.lang,
  });

  factory Project.fromJson(Map<String, dynamic> json) {
    return Project(
      uid: json['uid'],
      title: json['title'],
      description: json['description'],
      imageURL: json['imageURL'],
      url: json['url'],
      date: json['date'],
      lang: json['lang'],
    );
  }

  Map<String, dynamic> toJson() {
    var json = {
      'title': title,
      'description': description,
      'url': url,
      'date': date,
      'lang': lang,
    };

    if (imageURL != null) {
      json['imageURL'] = imageURL;
    }

    return json;
  }
}
