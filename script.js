window.addEventListener("load", () => {
    chrome.windows.getCurrent(window => {
        chrome.tabs.getAllInWindow(window.id, tabs => {
            const urls = tabs.map(tab => tab.url);
            const textarea = document.querySelector("textarea");
            textarea.value = urls.join("\n");
            textarea.select();
        });
    });
    document.querySelector("button").addEventListener("click", () => {
        const urls = document.querySelector("textarea").value.split("\n");
        for (url of urls) {
            chrome.tabs.create({ "url": url.trim(), "active": false });
        }
    });
});
