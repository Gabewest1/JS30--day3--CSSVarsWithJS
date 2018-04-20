function editImage(attributes, values) {
    let image = document.querySelector(".img-container img");
    for(var i=0; i<attributes.length; i++) {
        let attribute = attributes[i];
        let value = values[i];
        image.style[attribute] = value;   
    }
}
(function positionSliderHandler() {
    let spacingSlider = document.getElementsByName("position")[0];
    spacingSlider.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty("--top", `${e.target.value-50}px`);
        document.documentElement.style.setProperty("--left", `${e.target.value-50}px`);
    })
})();
(function opacitySliderHandler() {
    let opacitySlider = document.getElementsByName("opacity")[0];
    opacitySlider.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}`);
    })
})();
(function blurSliderHandler() {
    let blurSlider = document.getElementsByName("blur")[0];
    blurSlider.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}px`);
    })
})();
(function baseColorChangeHandler(e) {
    let colorInputs = document.querySelectorAll("input[type='color']");
    colorInputs.forEach(input => {
        input.addEventListener("change", (e) => {
            document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}`);
        })
    })
})();

(function memeTextHandler() {
    let form = document.getElementsByClassName("meme-text")[0];
    let input = form.children[0];
    let imageContainer = document.querySelector(".img-container");
    let newParagraph = document.createElement("p");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let text = input.value;
        newParagraph.textContent = text;
        imageContainer.appendChild(newParagraph);
        console.log(input, newParagraph, newParagraph.textContent);
    })
})();

