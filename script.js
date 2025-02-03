// Button interaction logic
document.getElementById("yesBtn").addEventListener("click", function() {
    alert("Owk Annoying! I love you, Stephie! 💖🥰");
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    // Move the "NO MEANS YES" button when mouse hovers over it
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});
