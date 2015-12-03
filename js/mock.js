var expected_response = {"items": {0: {"login": "spike01"}}};

angular.module('GitUserSearchMock', ['GitUserSearch', 'ngMockE2E'])
  .run(function($httpBackEnd) {
    $httpBackEnd.whenGET('https://api.github.com/search/users?access_token='+ git_token +'&q=spike')
    .respond(function() {
      return [200, expected_response];
    });
  $httpBackEnd.whenGET(/.*/).passThrough();
});
