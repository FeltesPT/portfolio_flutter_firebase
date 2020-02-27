class Project {
  final String uid;
  final String title;
  final String imageURL;
  final String description;
  final String url;
  final String date;

  Project({
    this.uid,
    this.title,
    this.imageURL,
    this.description,
    this.url,
    this.date,
  });

  factory Project.fromJson(Map<String, dynamic> json) {
    return Project(
      uid: json['uid'],
      title: json['title'],
      description: json['description'],
      imageURL: json['imageURL'],
      url: json['url'],
      date: json['date'],
    );
  }

  Map<String, dynamic> toJson() {
    var json = {
      'title': title,
      'description': description,
      'url': url,
      'date': date,
    };

    if (imageURL != null) {
      json['imageURL'] = imageURL;
    }

    return json;
  }
}
