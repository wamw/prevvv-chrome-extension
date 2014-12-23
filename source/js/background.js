
var id = 100;

chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.captureVisibleTab(function(screenshotUrl) {
        var viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++);
        var targetId = null;

        chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
            if (tabId != targetId || changedProps.status != "complete") {
                return;
            }
            chrome.tabs.onUpdated.removeListener(listener);

            var views = chrome.extension.getViews();
            for (var i = 0; i < views.length; i++) {
                var view = views[i];
                if (view.location.href == viewTabUrl) {
                    console.log(view);
                    view.setScreenshotUrl(screenshotUrl);
                    break;
                }
            }
        });

        chrome.tabs.create({url: viewTabUrl}, function(tab) {
            targetId = tab.id;
        });

    });
});