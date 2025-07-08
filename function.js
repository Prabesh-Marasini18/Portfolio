 // For active links
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
         for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab");
    }

    const toggleBtn = document.getElementById("chatbot-toggle");
  const widget = document.getElementById("chatbot-widget");

// for toggel button
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click from firing
    widget.style.display = widget.style.display === "block" ? "none" : "block";
  });

  // Hide chatbot when clicking outside
  document.addEventListener("click", function (e) {
    if (!widget.contains(e.target) && !toggleBtn.contains(e.target)) {
      widget.style.display = "none";
    }
  });

  // Prevent clicks inside the chatbot from closing it
  widget.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when user scrolls down 100px from top
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Scroll smoothly to top when button clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});