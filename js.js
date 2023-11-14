// get the color mode
var mode = document.getElementById('color_mode');
mode.onclick = function () {
    if (mode.innerText == "light_mode") {
        mode.innerText = "dark_mode";
        $(":root").css('--main-bgcoloralph', "rgb(0, 0, 0)")
        $(":root").css('--main-bgcolor', "rgb(0, 0, 0)")
        $(":root").css("--main-color", "rgb(255, 255, 255)")
        $(":root").css("--main-url", "url(./assite/backgroundark.jpg)")
    } else if (mode.innerText == "dark_mode") {
        mode.innerText = "light_mode";
        $(":root").css('--main-bgcoloralph', "rgb(0, 0, 0)")
        $(":root").css('--main-bgcolor', "rgb(255, 255, 255)")
        $(":root").css("--main-color", "rgb(0, 0, 0)")
        $(":root").css("--main-url", "url(./assite/backgroundark5.jpg)")
    }
}
// 
var string = `
Hello, I'm Ismail Elmghart, a passionate and versatile designer with a deep love for creating visually captivating experiences. As a creative enthusiast, I find joy in turning ideas into engaging designs that leave a lasting impact.

 Whether it's UI/UX design, graphic design, or illustration, I thrive on the challenge of marrying form with function.

In each project, I embark on a journey of exploration, weaving together aesthetics and functionality. From conceptualization to execution, my approach is rooted in a commitment to delivering not just designs but memorable and meaningful experiences.

Feel free to explore my portfolio, where each project tells a unique story of creativity, problem-solving, and the seamless integration of design principles. I'm excited about the potential for collaboration and the opportunity to bring your visions to life.

Let's create something extraordinary together!
               `; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 50); /* change 70 for speed */

}
frameLooper();
var names = ["i'm a UX Design", "i'm a UI Design:", "i'm a Graphic Design"]
var i = 0;
function frametitle() {
    if (i >= names.length) {
        i = 0
    }
    document.getElementById("title").innerHTML = names[i];
    i++
    setTimeout('frametitle()', 2000); /* change 70 for speed */
}
frametitle()
// ---------download
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button element
    const downloadButton = document.getElementById("downloadButton");

    // Add a click event listener to the button
    downloadButton.addEventListener("click", function () {
        // Define the file URL you want to download
        const fileUrl = "./assite/aitouchenIlias.pdf"; // Replace with the actual file URL

        // Create an invisible anchor element to trigger the download
        const link = document.createElement("a");
        link.href = fileUrl;

        // Specify the filename for the downloaded file
        link.download = "aitouchenIlias.pdf"; // Replace with your desired file name

        // Trigger a click event on the anchor element to initiate the download
        link.click();
    });
});
