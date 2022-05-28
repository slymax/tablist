const textarea = document.querySelector("textarea");
chrome.tabs.query({ currentWindow: true }, tabs => {
    const urls = tabs.map(tab => tab.url);
    textarea.value = urls.join("\n");
    textarea.select();
});
document.querySelector("button").onclick = () => {
    textarea.value.split("\n").forEach(text => {
        try {
            const url = new URL(text).href;
            chrome.tabs.create({ url, active: false });
        } catch {
            chrome.tabs.create({ active: false }, tab => {
                chrome.search.query({ text, tabId: tab.id });
            });
        }
    });
};
