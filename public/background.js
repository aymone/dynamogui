chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        id: "DynamoGUI",
        innerBounds: {
            width: 800,
            height: 500
        }
    });
});
