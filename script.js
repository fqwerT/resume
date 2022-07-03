document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".sidebar__link");
    for (const button of buttons) {
      button.addEventListener("click", function () {
        for (const btn of buttons) {
          btn.classList.remove("sidebar__link--active");
          btn.classList.add("sidebar__link")
         
          
        }
  
        this.classList.add("sidebar__link--active");
        this.classList.remove("sidebar__link")
        
  
        const slides = document.querySelectorAll(".content");
        for (const slide of slides) {
          slide.classList.add("hidden");
          slide.classList.remove("tilt-in-fwd-tr")
          
        }
  
        const identificate = this.href.split("#")[1];
        document.querySelector("#" + identificate).classList.remove("hidden");
        document.querySelector("#" + identificate).classList.add("tilt-in-fwd-tr");
      });
    }
  });