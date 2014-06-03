window.onload = function currentPage() {
    var page = window.location.pathname;
    if(page == "/index.html") {
        document.getElementById("home").style.borderTopColor="#30ACFF";
    }
    else if(page == "/") {
        document.getElementById("home").style.borderTopColor="#30ACFF";
    }
    else if(page == "/about.html") {
        document.getElementById("about").style.borderTopColor="#30ACFF";
    }
    else if(page == "/team.html") {
        document.getElementById("team").style.borderTopColor="#30ACFF";
    }
    else if(page== "/games.html") {
        document.getElementById("games").style.borderTopColor="#30ACFF";
    }
    else if(page == "/contact.html") {
        document.getElementById("contact").style.borderTopColor="#30ACFF";
    }
};