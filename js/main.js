var action = 1;

$("#menu-icon").on("click", openNav);

function openNav() {
    if ( action == 1 ) {
        document.getElementById("sidebar-nav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        action = 2;
    } else {
          document.getElementById("sidebar-nav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
          action = 1;
    }
}