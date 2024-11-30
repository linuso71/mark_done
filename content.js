// Function to add tick marks to each video
function addTickMarks() {
    const videos = document.querySelectorAll("#contents ytd-playlist-video-renderer");

    videos.forEach((video, index) => {
        const videoId = video.querySelector("a#video-title").href.split("&")[0];
        const isCompleted = localStorage.getItem(videoId) === "true";

        // Add tick mark if it doesn't exist
        if (!video.querySelector(".tick-marker")) {
            const tickButton = document.createElement("button");
            tickButton.innerText = isCompleted ? "✔" : "Mark Complete";
            tickButton.classList.add("tick-marker");

            // Toggle state on click
            tickButton.addEventListener("click", () => {
                const newStatus = localStorage.getItem(videoId) !== "true";
                localStorage.setItem(videoId, newStatus.toString());
                tickButton.innerText = newStatus ? "✔" : "Mark Complete";
            });

            video.appendChild(tickButton);
        }
    });
}

// Run the function when the playlist loads
setInterval(addTickMarks, 2000);
