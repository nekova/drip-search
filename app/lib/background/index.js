'use strict';

let GOOGLE_URL = new RegExp('^http(s)?:\/\/www.google.[a-z.]+\/(?:webhp)?(?:search|(.*)#)(?:\\?)?q=.*');
chrome.commands.onCommand.addListener(command => {
    chrome.tabs.getSelected(null, tab => {
        if (GOOGLE_URL.test(tab.url)) {
          switch (command) {
          case 'pastYear':
              var newUrl = `${ tab.url }&tbs=qdr:y`;
              chrome.tabs.update(tab.id, { url: newUrl });
              break;
          case 'twoYearsAgo':
              let today = new Date();
              let twoYearsAgo = today.getFullYear() - 2;
              let thisMonth = today.getMonth() + 1;
              var newUrl = `${ tab.url }&tbs=cdr%3A1%2Ccd_min%3A${ twoYearsAgo }%2F${ thisMonth }%2F${ today.getDate() }`;
              chrome.tabs.update(tab.id, { url: newUrl });
              break;
          }
        }
    });
});
