
chrome.runtime.onMessage.addListener(
    function(message, callback) {
        chrome.tabs.executeScript(
            {code: "mArray = message.split(',');addFilter(mArray[1], mArray[2], mArray[3])"}
            );
      }
   );