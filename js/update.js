document.getElementById("update-button").addEventListener("click", function () {
    const defaultText = document.getElementById("default-text");

    const inputText = document.getElementById("input-text");

    defaultText.innerText = inputText.value;
    inputText.value = "";
})