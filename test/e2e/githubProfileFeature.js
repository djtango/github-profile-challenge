describe('Github Profile finder', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    browser.get('http://localhost:8080');
    element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
    element(by.className('btn')).click();

    expect(element(by.binding('user.login')).getText()).
      toEqual('spike01');
  });
});
