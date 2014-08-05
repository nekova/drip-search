'use strict';

var GOOGLE_URL = new RegExp("^http(s)?:\/\/www\.google\.[a-z.]+\/(search|#)(\\?)?q=.*");

chrome.browserAction.onClicked.addListener(function(tab) {
  if(GOOGLE_URL.test(tab.url)) {
    var newUrl = tab.url + "&tbs=qdr:y";
    chrome.tabs.update(tab.id, {url: newUrl});
  }
});
