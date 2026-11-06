/* =====================================================
   PORTFOLIO WEBSITE - JAVASCRIPT

   This file controls:

   1. Hamburger menu
   2. Dark / Light theme
   3. Typing animation
   4. Profile photo scroll effect
   5. Resume button placeholders

   All sections have comments so you can
   understand and customize them later.
===================================================== */



/* =====================================================
   1. GET HTML ELEMENTS
===================================================== */


/*
    Menu button
*/

const menuButton =
    document.getElementById("menuButton");


/*
    Right side navigation menu
*/

const sideMenu =
    document.getElementById("sideMenu");


/*
    Dark overlay behind menu
*/

const menuOverlay =
    document.getElementById("menuOverlay");


/*
    Theme button
*/

const themeButton =
    document.getElementById("themeButton");


/*
    Theme icon
*/

const themeIcon =
    document.getElementById("themeIcon");


/*
    Profile photo container
*/

const profileContainer =
    document.getElementById("profileContainer");


/*
    Typing animation text
*/

const typingText =
    document.getElementById("typingText");



/* =====================================================
   2. OPEN / CLOSE MENU
===================================================== */


/*
    When user clicks hamburger button,
    open or close the menu.
*/

menuButton.addEventListener("click", function () {

    /*
        Add/remove "active" class
        from hamburger button.
    */

    menuButton.classList.toggle("active");


    /*
        Add/remove "active" class
        from side menu.
    */

    sideMenu.classList.toggle("active");


    /*
        Add/remove overlay.
    */

    menuOverlay.classList.toggle("active");

});



/* =====================================================
   3. CLOSE MENU WHEN OVERLAY IS CLICKED
===================================================== */

menuOverlay.addEventListener("click", function () {

    menuButton.classList.remove("active");

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

});



/* =====================================================
   4. CLOSE MENU WHEN A LINK IS CLICKED
===================================================== */


/*
    Find all links inside the menu.
*/

const menuLinks =
    document.querySelectorAll(".menu-link");


/*
    Add click event to every menu link.
*/

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        /*
            Close menu after selecting
            another page.
        */

        menuButton.classList.remove("active");

        sideMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

    });

});



/* =====================================================
   5. DARK / LIGHT THEME
===================================================== */


/*
    When theme button is clicked,
    switch between dark and light theme.
*/

themeButton.addEventListener("click", function () {


    /*
        Add/remove "light-theme"
        class from body.
    */

    document.body.classList.toggle("light-theme");


    /*
        Check which theme is currently active.
    */

    if (
        document.body.classList.contains(
            "light-theme"
        )
    ) {


        /*
            Light theme is active.

            Change icon to moon.
        */

        themeIcon.textContent = "☾";


        /*
            Save theme preference.

            This means the browser remembers
            the user's selected theme.
        */

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );


    } else {


        /*
            Dark theme is active.

            Change icon to sun.
        */

        themeIcon.textContent = "☼";


        /*
            Save dark theme preference.
        */

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    }

});



/* =====================================================
   6. LOAD SAVED THEME
===================================================== */


/*
    Check if user previously selected
    light theme.
*/

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


/*
    If saved theme is light,
    activate light theme.
*/

if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    themeIcon.textContent = "☾";

}



/* =====================================================
   7. TYPING ANIMATION
===================================================== */


/*
    These are the titles that will
    appear beside "BCA Student &"
*/

const words = [

    "Data Analytics Enthusiast",

    "Cloud Computing Enthusiast",

    "Technology Learner",

    "Problem Solver"

];



/*
    Current word number
*/

let wordIndex = 0;


/*
    Current character number
*/

let characterIndex = 0;


/*
    Is the animation deleting text?
*/

let deleting = false;



/*
    Main typing function
*/

function typeText() {


    /*
        Get current word.
    */

    const currentWord =
        words[wordIndex];



    /* -----------------------------------------
       TYPING
    ----------------------------------------- */

    if (!deleting) {


        /*
            Add one character.
        */

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;



        /*
            When the complete word
            has been written...
        */

        if (
            characterIndex ===
            currentWord.length
        ) {


            /*
                Start deleting after
                a short delay.
            */

            deleting = true;


            setTimeout(
                typeText,
                1800
            );


            return;

        }

    }


    /* -----------------------------------------
       DELETING
    ----------------------------------------- */

    else {


        /*
            Remove one character.
        */

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;



        /*
            When the word is completely
            deleted...
        */

        if (characterIndex === 0) {


            deleting = false;


            /*
                Move to next word.
            */

            wordIndex++;


            /*
                Start again from first word
                after the last word.
            */

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }



    /*
        Typing speed.

        Smaller number = faster.
    */

    const speed =
        deleting
            ? 45
            : 80;



    setTimeout(
        typeText,
        speed
    );

}


/*
    Start typing animation.
*/

typeText();



/* =====================================================
   8. PROFILE PHOTO SCROLL EFFECT
===================================================== */


/*
    Listen for page scrolling.
*/

window.addEventListener(
    "scroll",
    function () {


        /*
            Get current scroll position.
        */

        const scrollPosition =
            window.scrollY;



        /*
            If user has scrolled more than
            150 pixels...
        */

        if (scrollPosition > 150) {


            /*
                Make photo slightly smaller.

                The CSS class controls
                the actual size.
            */

            profileContainer.classList.add(
                "photo-small"
            );


        } else {


            /*
                Return photo to original size.
            */

            profileContainer.classList.remove(
                "photo-small"
            );

        }

    }
);



/* =====================================================
   9. RESUME BUTTONS
===================================================== */


/*
    Get resume buttons.
*/

const previewResume =
    document.getElementById(
        "previewResume"
    );


const downloadResume =
    document.getElementById(
        "downloadResume"
    );



/*
    TEMPORARY PREVIEW BUTTON

    Currently the URL is "#".

    We prevent the browser from
    jumping to the top and show
    a temporary message.

    Later DELETE this event listener
    and replace href="#" with
    your actual resume URL.
*/

// previewResume.addEventListener(
//     "click",
//     function (event) {

//         event.preventDefault();

//         alert(
//             "Add your resume preview URL here."
//         );

//     }
// );



// /*
//     TEMPORARY DOWNLOAD BUTTON
// */

// downloadResume.addEventListener(
//     "click",
//     function (event) {

//         event.preventDefault();

//         alert(
//             "Add your resume download URL here."
//         );

//     }
// );