var open_sidebar = () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("off");
    sidebar.classList.add("on");
    let main_content = document.getElementById("main-content");
    main_content.classList.remove("on");
    main_content.classList.add("off");
    let sidebar_toggle = document.getElementById("sidebar-toggle");
    sidebar_toggle.classList.remove("on");
    sidebar_toggle.classList.add("off");
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    let footer = document.getElementById("footer");
    footer.classList.add("hidden");
};
var close_sidebar = () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("on");
    sidebar.classList.add("off");
    let main_content = document.getElementById("main-content");
    main_content.classList.remove("off");
    main_content.classList.add("on");
    let sidebar_toggle = document.getElementById("sidebar-toggle");
    sidebar_toggle.classList.remove("off");
    sidebar_toggle.classList.add("on");
    // document.body.style.backgroundColor = "white";
    let footer = document.getElementById("footer");
    footer.classList.remove("hidden");
};