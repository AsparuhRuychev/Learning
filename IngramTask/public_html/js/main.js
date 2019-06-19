function changeIcon() {
    var menu = document.getElementById("menu");
    if (menu !== null) {
        var menuClass = menu.className;
        if (menuClass === "collapse") {
            document.getElementById("icon").classList.remove("fa-chevron-down");
            document.getElementById("icon").classList.add("fa-chevron-up");
        } else {
            document.getElementById("icon").classList.remove("fa-chevron-up");
            document.getElementById("icon").classList.add("fa-chevron-down");
        }
    }
}

