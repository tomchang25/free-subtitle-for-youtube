chrome.runtime.onInstalled.addListener(() =>
	chrome.storage.sync.set({ open: true })
);

chrome.action.onClicked.addListener((tab) => {
	chrome.storage.sync.get("open", (res) => {
		chrome.storage.sync.set({ open: !res.open }, () => {
			chrome.action.setIcon({
				path: `images/${!res.open ? "icon128" : "closed"}.png`
			});
		});
	});
	// chrome.tabs.reload(tab.id);
});
