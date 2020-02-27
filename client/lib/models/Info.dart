class Info {
  final String first;
  final String last;
  final String title;
  final String email;
  final String location;
  final String about;
  final String twitter;
  final String linkedIn;
  final String github;

  Info({
    this.first,
    this.last,
    this.title,
    this.email,
    this.location,
    this.about,
    this.twitter,
    this.linkedIn,
    this.github,
  });

  factory Info.fromJson(Map<String, dynamic> json) {
    return Info(
      first: json['first'],
      last: json['last'],
      title: json['title'],
      email: json['email'],
      location: json['location'],
      about: json['about'],
      twitter: json['twitter'],
      linkedIn: json['linkedin'],
      github: json['github'],
    );
  }

  Map<String, String> toJson() {
    return {
      'first': first,
      'last': last,
      'title': title,
      'email': email,
      'location': location,
      'about': about,
      'twitter': twitter,
      'linkedin': linkedIn,
      'github': github,
    };
  }
}
