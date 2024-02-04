let lists = document.getElementsByClassName("List");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");

for (let List of lists) {
    List.addEventListener("dragstart", function (e) {
        let selected = e.target; // Initialize selected when drag starts

        rightbox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        function dropToRight(e) {
            rightbox.appendChild(selected);
            selected = null; // Reset selected after dropping
            rightbox.removeEventListener("drop", dropToRight);
            leftbox.removeEventListener("drop", dropToLeft);
        }

        rightbox.addEventListener("drop", dropToRight);

        leftbox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        function dropToLeft(e) {
            leftbox.appendChild(selected);
            selected = null; // Reset selected after dropping
            rightbox.removeEventListener("drop", dropToRight);
            leftbox.removeEventListener("drop", dropToLeft);
        }

        leftbox.addEventListener("drop", dropToLeft);
    });
}
