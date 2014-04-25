window.onload = function currentPage() {
    var page = window.location.pathname;
    if(page == "/index.html") {
        document.getElementById("home").style.color="#30ACFF";
        document.getElementById("home").style.boxShadow="inset 0 0 15px rgba(0,0,0,0.5)";
    }
    else if(page == "/") {
        document.getElementById("home").style.color="#30ACFF";
        document.getElementById("home").style.boxShadow="inset 0 0 15px rgba(0,0,0,0.5)";
    }
    else if(page == "/about.html") {
        document.getElementById("about").style.color="#30ACFF";
        document.getElementById("about").style.boxShadow="inset 0 0 15px rgba(0,0,0,0.5)";
    }
    else if(page == "/team.html") {
        document.getElementById("team").style.color="#30ACFF";
        document.getElementById("team").style.boxShadow="inset 0 0 15px rgba(0,0,0,0.5)";
    }
    else if(page== "/games.html") {
        document.getElementById("games").style.color="#30ACFF";
        document.getElementById("games").style.boxShadow="inset 0 0 15px rgba(0,0,0,0.5)";
    }
    else if(page == "/contact.html") {
        document.getElementById("contact").style.color="#30ACFF";
        document.getElementById("contact").style.boxShadow="inset 0 0 15px rgba(0,0,0,0.5)";
    }
};