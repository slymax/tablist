chrome.tabs.query({ currentWindow: true }, tabs => {
    const textarea = document.querySelector("textarea");
    const urls = tabs.map(tab => tab.url);
    textarea.value = urls.join("\n");
    textarea.select();
});
document.querySelector("button").addEventListener("click", () => {
    const urls = document.querySelector("textarea").value.split("\n");
    urls.forEach(url => chrome.tabs.create({ url, active: false }));
});
