describe('Github Profile finder', function() {
  
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  var mockModule;

  // beforeEach(function(){
  //   mockModule = require('../../js/mock.js')
  //     console.log(mockModule);
  // });

  beforeEach(function(){
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  // it('finds profiles', function() {
  //   searchBox.sendKeys('spike');
  //   searchButton.click();
  //   var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  //   expect(profiles.get(0).getText()).toEqual('spike01');
  // });

  // it('is targeting the right api in httpbackend', function() {
    var httpReq = 'https://api.github.com/search/users?access_token=4cfc8301695a115282a8e6308c4e2ac0e8a1b85b&q=djtango'
    var token = '4cfc8301695a115282a8e6308c4e2ac0e8a1b85b';
    var giturl = 'https://api.github.com/search/users?access_token=';
  //   expect(httpReq).toEqual(giturl + token + '&q=djtango')
  // });

  it('mocks the module', function() {
    browser.addMockModule('httpBackendMock', function(){
      angular.module('httpBackendMock', ['GitUserSearch', 'ngMockE2E'])
        .run(function($httpBackend) {
          $httpBackend.whenGET(giturl + token + '&q=djtango').respond({"items": {0: {"login": "dumplings"}}});
        });
    });
    browser.get('https://api.github.com/search/users?access_token=' + token + '&q=djtango');
    // searchBox.sendKeys('djtango');
    // searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('dumplings');
  });
});
