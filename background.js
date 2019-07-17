// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.executeScript({
file: 'promptAdd.js'
})
})
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.executeScript({
        file: 'promptAdd.js'
    })
});
//experimental 
chrome.omnibox.onInputEntered.addListener(
    function(txt) {
        alert(txt);
    });
