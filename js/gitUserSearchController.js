githubUserSearch.controller('GitUserSearchController', ['Search', function(search) {

  // var searchResource = $resource('https://api.github.com/search/users');
  var self = this;

  self.doSearch = function (){
    search.query(self.searchTerm).then(function(response){
      self.searchResult = response.data;
    });
  };




}]);
