
// List of websites to block
const blockedSites = [
    'youtube.com',
    'facebook.com', 
    'twitter.com',
    'instagram.com',
    'tiktok.com',
    'reddit.com',
    'netflix.com'
];

let focusMode = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    
    if (message.action === 'start') {
        startFocus(sendResponse);
        
    } else if (message.action === 'stop') {
        stopFocus(sendResponse);
    }
    
    return true; 
});

// Function to start focus mode
function startFocus(sendResponse) {
    console.log('Starting focus mode...');
    focusMode = true;
    
    // Get all open tabs
    chrome.tabs.query({}, function(tabs) {
        let tabsToClose = [];
        
        // Check each tab
        for (let tab of tabs) {
            if (tab.url) {
                // Check if tab contains blocked site
                for (let site of blockedSites) {
                    if (tab.url.includes(site)) {
                        tabsToClose.push(tab.id);
                        break;
                    }
                }
            }
        }
        
        // Close the blocked tabs
        if (tabsToClose.length > 0) {
            chrome.tabs.remove(tabsToClose, function() {
                console.log(`Closed ${tabsToClose.length} tabs`);
                sendResponse({success: true, count: tabsToClose.length});
            });
        } else {
            console.log('No blocked tabs found');
            sendResponse({success: true, count: 0});
        }
    });
}

// Function to stop focus mode
function stopFocus(sendResponse) {
    console.log('Stopping focus mode...');
    focusMode = false;
    sendResponse({success: true});
}