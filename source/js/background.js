chrome.browserAction.onClicked.addListener(function(tab) {

    var context = {};
    chrome.tabs.captureVisibleTab(function(captureData) {
        context.captureData = captureData;

        contextJson = JSON.stringify(context);
        chrome.tabs.executeScript(null, {code: 'var context = ' + contextJson + ';'}, function() {
            chrome.tabs.executeScript(null, {file: './js/init.js'}, function() {
                console.log("COMPLETE")
            });
        });
    });
});