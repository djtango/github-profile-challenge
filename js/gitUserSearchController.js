githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users');
  var self = this;

  self.doSearch = function (){
    self.searchResult = searchResource.get(
      { q: self.searchTerm , access_token: "f1045bc5ec741c69e9edbb645ea0a6688cd36a30"}
      );
  };




}]);
