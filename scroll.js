function scrollTab() {
    // get the section buttons on the sidebar
    var tabsToColor = document.getElementsByClassName("sidebarTabs");
    
    // get the current scroll position as a percentage of total page length
    var scrollPercent = document.querySelector(".container").scrollTop / (document.documentElement.clientHeight * tabsToColor.length);
    
    // reset their color to nothing
    for (i = 0; i < tabsToColor.length; i++) {
        tabsToColor[i].style.backgroundColor = "";
    }
    
    var percentInc = 1.0 / tabsToColor.length;
    var matchPercent = percentInc / 2;
    var counter = 0;
    
    // find which tab should be colored based on scroll position
    while (scrollPercent > matchPercent) {
        matchPercent += percentInc;
        counter++;
    }
    
    // color that tab gray
    tabsToColor[counter].style.backgroundColor = "#575757";
}

// Auto-color the correct tab on load
scrollTab();