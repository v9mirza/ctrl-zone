# 🎯 CTRL Zone - Focus Mode Chrome Extension

**CTRL Zone** is a Chrome extension that helps you stay focused by automatically closing distracting websites when you activate focus mode. Perfect for students, professionals, or anyone who wants to minimize digital distractions during work sessions.

## ✨ Features

- 🚀 **One-Click Focus Mode** - Instantly close all distracting tabs
- 🌙 **Dark Mode Interface** - Easy on the eyes with a modern design
- 📊 **Tab Counter** - See how many distracting tabs were closed
- ⚡ **Lightweight** - Minimal resource usage
- 🔧 **Customizable** - Easy to add/remove blocked websites
- 🔄 **Status Tracking** - Know when focus mode is active

## 🚫 Default Blocked Sites

The extension automatically closes tabs from these distracting websites:

- YouTube
- Facebook
- Twitter/X
- Instagram
- TikTok
- Reddit
- Netflix
- Twitch
- LinkedIn
- Pinterest
- Snapchat
- Discord

## 📦 Installation

### Method 1: Install from Chrome Web Store (Coming Soon)
*Extension will be available on the Chrome Web Store in the future*

### Method 2: Install as Developer Extension

1. **Download the Extension**
   ```bash
   git clone https://github.com/yourusername/ctrl-zone.git
   # OR download and extract the ZIP file
   ```

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - OR click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked"
   - Select the `ctrl-zone` folder containing the extension files
   - The extension should now appear in your extensions list

5. **Pin the Extension (Recommended)**
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "CTRL Zone" and click the pin icon
   - The extension icon will now be visible in your toolbar

## 🎮 How to Use

### Starting Focus Mode
1. Click the **CTRL Zone** icon in your Chrome toolbar
2. Click the **"🎯 Start Focus"** button
3. All tabs with distracting websites will be automatically closed
4. The status will show how many tabs were closed

### Stopping Focus Mode
1. Click the **CTRL Zone** icon again
2. Click the **"⏹️ Stop Focus"** button
3. Focus mode will be deactivated

### Checking Status
- The popup always shows your current focus mode status
- Green text indicates focus mode is active
- Gray text indicates focus mode is inactive

## 🛠️ Customization

### Adding or Removing Blocked Sites

1. **Open the extension folder** on your computer
2. **Edit `background.js`** in any text editor
3. **Find the `DISTRACTING_SITES` array** (around line 3):
   ```javascript
   const DISTRACTING_SITES = [
       'youtube.com',
       'facebook.com',
       'twitter.com',
       // Add your sites here
   ];
   ```
4. **Add new sites** by including them in quotes:
   ```javascript
   const DISTRACTING_SITES = [
       'youtube.com',
       'facebook.com',
       'twitter.com',
       'mynewsite.com',    // ← Add like this
       'anothersite.com'   // ← Or like this
   ];
   ```
5. **Remove sites** by deleting the line or commenting it out:
   ```javascript
   // 'twitter.com',    // ← Commented out (disabled)
   ```
6. **Save the file** and reload the extension in Chrome:
   - Go to `chrome://extensions/`
   - Find CTRL Zone and click the refresh icon

### Customizing the Interface

**Colors and Styling:**
- Edit `popup.html` to change colors, fonts, or button text
- Look for the `<style>` section to modify CSS

**Button Text:**
- Change button labels in the HTML section of `popup.html`
- Modify emoji icons or text as desired

## 📁 File Structure

```
ctrl-zone/
├── manifest.json      # Extension configuration
├── popup.html         # User interface (popup window)
├── popup.js          # Handles button clicks and UI updates
├── background.js     # Main logic (closes tabs)
└── README.md         # This file
└── icons             # Icons Folder

```

### File Descriptions

- **`manifest.json`** - Tells Chrome about your extension (permissions, files, etc.)
- **`popup.html`** - The interface users see when clicking the extension icon
- **`popup.js`** - Handles user interactions and communicates with background script
- **`background.js`** - The "brain" that actually closes distracting tabs

## 🔧 Technical Details

### Architecture
- **Manifest V3** - Uses the latest Chrome extension format
- **Service Worker** - Background script runs efficiently
- **Message Passing** - Secure communication between popup and background
- **Permissions** - Only requests necessary permissions for functionality

### Permissions Required
- **`tabs`** - To query and close browser tabs
- **`scripting`** - For advanced tab manipulation
- **`activeTab`** - To access current tab information
- **`<all_urls>`** - To check URLs of all websites

### Browser Compatibility
- ✅ **Google Chrome** (Version 88+)
- ✅ **Microsoft Edge** (Chromium-based)
- ✅ **Brave Browser**
- ✅ **Other Chromium-based browsers**
- ❌ Firefox (uses different extension format)

## 🐛 Troubleshooting

### Extension Won't Load
- **Check for JSON errors** in `manifest.json`
- **Ensure all files are present** in the extension folder
- **Check Chrome version** (needs Chrome 88+)

### Tabs Aren't Being Closed
- **Check console logs** (Developer Tools → Console)
- **Verify site URLs** in the `DISTRACTING_SITES` array
- **Ensure proper permissions** are granted

### UI Doesn't Respond
- **Reload the extension** in `chrome://extensions/`
- **Check for JavaScript errors** in popup console
- **Try clicking the buttons again**

### Debugging Steps
1. **Open Developer Tools** while popup is open (right-click popup → Inspect)
2. **Check Console tab** for error messages
3. **Look at background script logs** in `chrome://extensions/` → CTRL Zone → "background page"

## 🚀 Future Enhancements

### Planned Features
- ⏱️ **Focus Timer** - Set specific focus session durations
- 📈 **Productivity Stats** - Track focus sessions and blocked attempts
- 🔐 **Website Whitelist** - Allow specific pages even on blocked domains
- 🔔 **Smart Notifications** - Gentle reminders and focus tips
- 📱 **Sync Across Devices** - Keep settings consistent across Chrome instances
- 🎨 **Themes** - Light mode and custom color schemes
- 📊 **Analytics Dashboard** - Detailed productivity insights

### Contributing
Contributions are welcome! If you'd like to add features or fix bugs:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

### Getting Help
- **GitHub Issues** - Report bugs or request features
- **Email** - contact@ctrlzone.com (for direct support)
- **Documentation** - Check this README for common issues

### Feedback
We'd love to hear from you! Please let us know:
- How CTRL Zone has helped your productivity
- Features you'd like to see added
- Any bugs or issues you encounter

## 📊 Version History

### Version 1.0 (Current)
- ✅ Initial release
- ✅ Basic focus mode functionality
- ✅ Dark mode interface
- ✅ 12 default blocked sites
- ✅ Tab closing with counter
- ✅ Status tracking

### Upcoming Version 1.1
- 🔄 Focus timer functionality
- 🔄 Website whitelist feature
- 🔄 Improved error handling
- 🔄 Additional blocked sites

---

## 💡 Tips for Maximum Productivity

1. **Use focus mode before starting work** - Close distractions proactively
2. **Customize your blocked sites list** - Add sites that distract YOU specifically
3. **Combine with other productivity techniques** - Use with Pomodoro Timer, etc.
4. **Pin the extension** - Keep it easily accessible in your toolbar
5. **Check your focus stats** - Be aware of how often you need to activate focus mode

---

**Made with ❤️ by [@v9mirza](https://github.com/v9mirza) for productivity enthusiasts**


*Stay focused, stay productive! 🎯*