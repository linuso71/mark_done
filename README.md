# YouTube Playlist MarkDone Extension

This browser extension allows users to mark YouTube playlist videos as "Completed" by adding a tick mark on each video. The completion status is stored locally using the browser's `localStorage`, allowing the status to persist across sessions. 

## Features

- **Mark videos as complete**: A button is added to each video in a playlist, allowing you to mark it as completed.
- **Persistence across sessions**: The completion status of each video is saved using `localStorage`, so the status is retained even after refreshing the page or closing the browser.
- **Customizable UI**: You can style the tick mark button as desired to match your preferences.

## How to Use

### 1. **Install the Extension**
   - To use this extension, you need to install it in your browser. This extension is designed to work with Chrome-based browsers.
   
### 2. **Enable Developer Mode** (For local installation):
   - Open `chrome://extensions/` in your browser.
   - Enable **Developer Mode** in the top right.
   - Click **Load Unpacked** and select the directory containing the extension files (including `manifest.json` and `content.js`).

### 3. **How to Use the Extension on YouTube**:
   - Once the extension is installed, navigate to a YouTube playlist.
   - The extension will automatically detect the videos and add a **Mark Complete** button on each video.
   - Click on the **Mark Complete** button to mark the video as complete.
   - When marked as complete, the button will change to show a **✔** tick mark.
   - The state is saved and will persist across browser sessions.

## How it Works

1. **Adding Tick Marks**:
   - The extension runs a script that checks for videos on the playlist page.
   - It adds a button (with "Mark Complete" text) to each video.
   - Clicking the button toggles the completion state for that video.
   - The state is stored in `localStorage` using the video URL as a unique identifier.

2. **Using `localStorage`**:
   - The completion state (marked as true or false) is saved in the browser’s local storage, which allows the status to persist even after refreshing the page or reopening the browser.
   
3. **Dynamic Playlist**:
   - The extension checks for new videos every few seconds (via `setInterval`) to ensure that tick marks are added to any new videos that appear.

## Files

- **manifest.json**: Configures the extension's behavior and permissions.
- **content.js**: The main script that interacts with the YouTube playlist page to add and manage the tick marks.
- **styles.css**: Optional file to style the button for marking videos as complete.

## Permissions

- **Storage**: To store the completion status of videos in `localStorage`.
- **Active Tab**: To modify the contents of the current tab (YouTube playlist page).

## Known Issues

- The extension may not work as expected if YouTube changes its HTML structure.
- Dynamic playlist loading (when scrolling) may cause occasional issues with button placement, but it will automatically update every few seconds.

## Future Enhancements

- **Export and Import Data**: Allow users to back up and restore video completion states across different browsers or devices.
- **Better UI**: Improve button styles and positioning for better visibility and user experience.
- **Track Progress**: Display a progress bar showing how many videos in the playlist have been completed.

## License

This extension is released under the MIT License.

## Disclaimer

This extension is not affiliated with YouTube or Google in any way. It is a third-party extension created to enhance the user experience while browsing YouTube playlists.

---

**Enjoy keeping track of your YouTube playlist progress!**
