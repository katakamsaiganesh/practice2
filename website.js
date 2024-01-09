let bulbImg = document.getElementById("bulb-img");
let catImg = document.getElementById("cat-img");
let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");
let switchStatus = document.getElementById("Switch-status");


onBtn.onclick = function() {
    switchStatus.textContent = "Switched On";
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    offBtn.style.backgroundColor = "#e12d39"
    onBtn.style.backgroundColor = "#cbd2d9";
}

offBtn.onclick = function() {
    switchStatus.textContent = "Switched Off";
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    onBtn.style.backgroundColor = "#22c55e"
    offBtn.style.backgroundColor = "#cbd2d9";
}