// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
alert("browser button clicked, filter added")
chrome.tabs.executeScript({
file: 'promptAdd.js'
})
})
chrome.tabs.onActivated.addListener(function(activeInfo) {
    alert("tab switched, filter added")
    chrome.tabs.executeScript({
        file: 'promptAdd.js'
        })
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    alert("tab updated, filter added")
    chrome.tabs.executeScript({
        file: 'promptAdd.js'
        })
  })
//experimental 
chrome.omnibox.onInputEntered.addListener(
    function(txt) {
        alert(txt);
    });
