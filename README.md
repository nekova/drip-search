#drip-search
A chrome-extension to filter search results by date.


##Usage
Install via Chrome Web Store.

https://chrome.google.com/webstore/detail/drip-search/lgjmghgpgnlpcdljdgaplcficabefohd/


You need to set a keyboard shortcut **manually**.

Go to ```chrome://extensions/``` and scroll down to the bottom of the page.

I set `Command+Shift+S` as a filtering command.

##Example
###pastYear
![](/app/images/drip-search.gif)

```
https://www.google.com/#q=news
↓
https://www.google.com/#q=news&tbs=qdr:y
```

###twoYearsAgo
![](/app/images/twoYearsAgo.gif)

```
https://www.google.com/#q=news
↓
https://www.google.com/#q=news&tbs=cdr%3A1%2Ccd_min%3A2012%2F01%2F01
```
