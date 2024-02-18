const cursor = document.querySelector(".cursor"); // corrected the selector
let timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = "block";

    function mousestopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mousestopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
