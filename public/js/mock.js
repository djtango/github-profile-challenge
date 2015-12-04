exports.search_request = function() {
  var expected_response = {"items": {0: {"login": "dumplings"}}};

  angular.module('httpBackendMock', ['GitUserSearch', 'ngMockE2E'])
    .run(function($httpBackEnd) {
      $httpBackEnd.whenGET('https://api.github.com/search/users?access_token='+ git_token +'&q=djtango')
        .respond(function() {
          return [200, expected_response];
        });
      $httpBackEnd.whenGET(/.*/).passThrough();
  });
};
