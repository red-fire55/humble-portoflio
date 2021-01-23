window.onload = () => {
    $(".home").height(window.innerHeight);
    $(".skills").hide();
    //initializing the wow object
    new WOW().init();
    let toggleSkills = new Promise((resolve, reject) => {
        setTimeout(() => {
            // $(".personalInfo").hide(1000);
            $(".skills").show();
            resolve();
        }, 6000);
    });
    toggleSkills.then(() => {});

    $(function() {
        $(".btn-group-fab").on("click", ".btn", function() {
            $(".btn-group-fab").toggleClass("active");
        });
        $("has-tooltip").tooltip();
    });

    $(".togglePersonal").click(() => {
        $(".personalInfo").show(3000);
    });
    //redirect to facebook
    $(".fa-facebook-square").click(() => {
            window.open("https://www.facebook.com/red.eagle.7543/", '_blank');
        })
        //redirect to linkedin
    $(".fa-linkedin").click(() => {
            window.open("https://www.linkedin.com/in/mahmod-salah-00213a1a0/", '_blank');
        })
        //redirect to github
    $(".fa-github-square").click(() => {
            window.open("https://github.com/red-fire55", '_blank');
        })
        //redirect to whatsapp
    $(".fa-whatsapp-square").click(() => {
        window.open("https://wa.me/+201112115404", '_blank');
    })
};