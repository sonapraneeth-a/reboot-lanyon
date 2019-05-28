var toggle_sidebar = () => {
    //console.log("toggle sidebar caleed");
    let sidebar = document.getElementById("theme-sidebar");
    sidebar.classList.toggle("on");
    // let main_content = document.getElementById("main-content");
    // main_content.classList.toggle("off");
    // let sidebar_toggle = document.getElementById("theme-sidebar-toggle").parentNode;
    // /*console.log("Sidebar toggle");
    // console.log(sidebar_toggle);*/
    // sidebar_toggle.classList.toggle("off");
    // // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // let footer = document.getElementById("footer");
    // footer.classList.toggle("hidden");
};
(function(document) {
    var sidebar_toggle = document.querySelector("#theme-sidebar-toggle");
    var sidebar_id = document.getElementById("sidebar");
    var sidebar_close = document.querySelector("#theme-sidebar-close");
    var sidebar = document.querySelector("#theme-sidebar");

    document.addEventListener("click", function(e) {
        var target = e.target;
        let to_toggle = false;
        /*console.log("2");
        console.log(target);
        console.log(sidebar_close);
        console.log(sidebar);
        console.log(sidebar_id);
        console.log(sidebar_id.classList);
        console.log(typeof sidebar_id.classList);
        console.log(sidebar_id.classList.contains("on"));*/
        if (target === sidebar_toggle || target === sidebar_close) {
        //console.log("Hit 1");
        to_toggle = true;
        e.preventDefault();
        } else if (sidebar_id.classList.contains("on") === true && !sidebar.contains(target)) {
        /* click outside the sidebar when sidebar is open */
        //console.log("Hit 2");
        to_toggle = true;
        //e.preventDefault();
        }
        if(to_toggle === true) {toggle_sidebar();}
    }, false);
})(document);
