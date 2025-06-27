function toggleStoryOptions() {
    var storyOptions = document.getElementById("storyOptions");
    if (storyOptions.style.display === "none" || storyOptions.style.display === "") {
        storyOptions.style.display = "block";
    } else {
        storyOptions.style.display = "none";
    }
}
