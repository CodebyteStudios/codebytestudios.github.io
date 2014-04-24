window.onload = function currentPage() {
    page = window.location.pathname;
    if(page == "/index.html") {
        document.getElementById("home").style.borderTop="2px solid #30ACFF";
        document.getElementById("home").style.color="#30ACFF";
    }
    else if(page == "/") {
        document.getElementById("home").style.borderTop="2px solid #30ACFF";
        document.getElementById("home").style.color="#30ACFF";
    }
    else if(page == "/about.html") {
        document.getElementById("about").style.borderTop="2px solid #FF0000";
        document.getElementById("about").style.color="#FF0000";
    }
    else if(page == "/team.html") {
        document.getElementById("team").style.borderTop="2px solid #FF6600";
        document.getElementById("team").style.color="#FF6600";
    }
    else if(page== "/games.html") {
        document.getElementById("games").style.borderTop="2px solid #007A00";
        document.getElementById("games").style.color="#007A00";
    }
    else if(page == "/contact.html") {
        document.getElementById("contact").style.borderTop="2px solid #000000";
        document.getElementById("contact").style.color="#000000";
    }
}