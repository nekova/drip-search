'use strict';

var GOOGLE_URL = new RegExp("^http(s)?:\/\/www\.google\.[a-z.]+\/(?:webhp)?(?:search|#)(?:\\?)?q=.*");

chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.getSelected(null, function(tab){
        if(GOOGLE_URL.test(tab.url)) {
            switch (command) {
                case 'pastYear':
                    var newUrl = tab.url + '&tbs=qdr:y';
                    chrome.tabs.update(tab.id, {url: newUrl});
                    break;
                case 'imageSearch':
                    var newUrl = tab.url + '&tbm=isch'
                    chrome.tabs.update(tab.id, {url: newUrl});
                    break;
            }
        }
    })
});
