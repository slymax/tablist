window.addEventListener("load", () => {
    chrome.tabs.query({ "currentWindow": true }, tabs => {
        const urls = tabs.map(tab => tab.url);
        const textarea = document.querySelector("textarea");
        textarea.value = urls.join("\n");
        textarea.select();
    });
    document.querySelector("button").addEventListener("click", () => {
        const urls = document.querySelector("textarea").value.split("\n");
        urls.map(url => chrome.tabs.create({ "url": url.trim(), "active": false }));
    });
});
