
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const status = document.getElementById('status');
    
    startBtn.addEventListener('click', function() {
        console.log('Start button clicked');
        
        status.textContent = 'Starting focus mode...';
        
        chrome.runtime.sendMessage({action: 'start'}, function(response) {
            if (response.success) {
                status.textContent = `Focus active! Closed ${response.count} tabs`;
            } else {
                status.textContent = 'Error starting focus mode';
            }
        });
    });
    
    stopBtn.addEventListener('click', function() {
        console.log('Stop button clicked');
        
        status.textContent = 'Stopping focus mode...';
        
        chrome.runtime.sendMessage({action: 'stop'}, function(response) {
            if (response.success) {
                status.textContent = 'Focus mode stopped';
            } else {
                status.textContent = 'Error stopping focus mode';
            }
        });
    });
    
});