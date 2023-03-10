/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

      /*===== MENU SHOW =====*/
      /* Validate if constant exists */
      if (navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }

      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }

      /*==================== REMOVE MENU MOBILE ====================*/
      const navList = document.querySelectorAll(".nav__list");

      function linkAction() {
        const navMenu = document.getElementById("nav-menu");
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove("show-menu");
      }
      navList.forEach((n) => n.addEventListener("click", linkAction));


