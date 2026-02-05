const pages = document.querySelectorAll(".page");
let currentPage = 0;

pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
});

pages.forEach((page, index) => {
    page.addEventListener("click", () => {
        if(index === currentPage){
            page.classList.add("turned");
            currentPage++;
        }
    });
});
