document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".box");
    let delay = 1;

    gridItems.forEach((item) => {
        setTimeout(() => {
            item.style.transform = "scaleY(1)";
        }, delay * 1000); // Converte segundos em milissegundos
        delay++;
    });
});