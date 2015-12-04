githubUserSearch.controller('GitUserSearchController', ['Search', function(search) {

  var self = this;
  self.doSearch = function (){
    search.query(self.searchTerm).then(function(response){
      self.searchResult = response.data;
    });
  };

}]);
