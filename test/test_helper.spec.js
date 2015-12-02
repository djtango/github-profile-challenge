var items = [
  {
    "login": "tansaku",
    "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
    "html_url": "https://github.com/tansaku"
  },
  {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
  }
];

var httpBackend;
var stubGET = function($httpBackend) {
  httpBackend = $httpBackend
  httpBackend
    .expectGET("https://api.github.com/search/users?access_token=" + git_token + "&q=hello")
    .respond(
        { items: items }
        );
};
