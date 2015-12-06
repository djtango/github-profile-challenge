describe('Github Profile finder', function() {
  
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  var mockModule;
  var gitTokenModule;
  var gitURL = 'https://api.github.com/search/users?access_token='
  beforeEach(function(){
    mockModule = require('../../public/js/mock.js')
    gitTokenModule = require('./token.js');
  });

  beforeEach(function(){
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spike01');
  });

  it('mocks the module', function() {
    browser.addMockModule('httpBackendMock', function(){
      angular.module('httpBackendMock', ['GitUserSearch', 'ngMockE2E'])
        .run(function($httpBackend) {
          $httpBackend.whenGET(giturl + gitTokenModule.git_token + '&q=djtango').respond({"items": {0: {"login": "dumplings"}}});
        });
    });
    browser.get('https://api.github.com/search/users?access_token=' + gitTokenModule.git_token + '&q=djtango');
    // searchBox.sendKeys('djtango');
    // searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('dumplings');
  });
});
