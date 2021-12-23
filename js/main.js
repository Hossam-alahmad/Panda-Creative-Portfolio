window.onload = () => {
    // Show Color Setting
    let rootCss = document.querySelector(":root"),
        setting = document.getElementById("setting"),
        controls = document.querySelector(".controls"),
        colorList = document.querySelectorAll("#colors-box li");

    if (window.localStorage.key("main-color") !== null) {
        rootCss.style.setProperty(
            "--main-color",
            window.localStorage.getItem("main-color")
        );
    }
    setting.addEventListener("click", () => {
        controls.classList.toggle("show-setting");
    });
    colorList.forEach((el) => {
        el.addEventListener("click", () => {
            window.localStorage.setItem("main-color", el.dataset.value);
            rootCss.style.setProperty("--main-color", el.dataset.value);
        });
    });
    // transmation between navigation bar
    let navList = document.querySelectorAll("#nav-list li");
    navList.forEach((el) => {
        el.firstElementChild.addEventListener("click", (e) => {
            navList.forEach((els) => {
                els.firstElementChild.classList.remove("active");
            });
            el.firstElementChild.classList.add("active");
        });
    });
    // Fixed header
    let header = document.getElementById("header");
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 90)
            header.classList.add("fixed");
        else header.classList.remove("fixed");
    };
    // this for show/hide navbar
    let menuBar = document.getElementById("menu-bar"),
        navbar = document.getElementById("nav-bar"),
        overlay = document.getElementById("overlay");

    menuBar.addEventListener("click", () => {
        navbar.classList.toggle("show-menu");
        overlay.classList.toggle("show-overlay");
    });

    // this for show video
    let videoScreen = document.getElementById("video-screen"),
        videoBtn = document.getElementById("btn-video"),
        closeVedioBtn = document.getElementById("close-btn"),
        video = document.getElementById("video");

    videoBtn.addEventListener("click", () => {
        videoScreen.classList.add("show-screen");
        video.classList.add("show");
    });
    closeVedioBtn.addEventListener("click", () => {
        videoScreen.classList.remove("show-screen");
        video.classList.remove("show");
    });

    // active types of portfolio
    let typesBtn = document.querySelectorAll(".portfolio-types ul li"),
        portfolioItems = document.querySelectorAll(".portfolio-box > div");
    typesBtn.forEach((el) => {
        el.addEventListener("click", () => {
            typesBtn.forEach((ele) => {
                ele.classList.remove("active-type");
            });
            portfolioItems.forEach((pi) => {
                pi.style.display = "none";
                pi.classList.remove("show-portfolios");
            });
            el.classList.add("active-type");
            portfolioItems.forEach((pi) => {
                if (
                    el.textContent === pi.dataset.text ||
                    el.textContent === "All"
                ) {
                    pi.style.display = "block";
                    setTimeout(() => {
                        pi.classList.add("show-portfolios");
                    }, 200);
                } else {
                    pi.style.display = "none";
                }
            });
        });
    });
};
