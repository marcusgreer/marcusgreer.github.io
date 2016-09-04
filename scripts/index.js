$(document).ready(function () {
    $(document).on("mouseenter","div.container", function() {
        $('div').remove('.waves');
        $("div.container").append("\
        <div class='clouds'>\
        <nav>\
            <!-- <div class='nav_wraper'> -->\
                <ul>\
                    <li><a href='/'>Home</a></li>\
                    <li><a href='/Marcus_Greer_Resume.pdf'>About</a></li>\
                    <li><a href='/projects'>Projects</a></li>\
                    <li><a href='/Marcus_Greer_Resume.pdf'>Resume</a></li>\
                    <li><a href='/blog'>Raps</a></li>\
                </ul>\
            <!-- </div> -->\
        </nav>\
        </div>");
    });
    $(document).on("mouseleave","div.container", function() {
        $('div').remove('.clouds');
        $("div.container").append("\
            <div class='waves'>\
                <canvas id='waves'></canvas>\
                <script src='scripts/waves.js'></script>\
            </div>");
    });
});