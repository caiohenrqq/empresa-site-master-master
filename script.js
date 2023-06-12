function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
    if (window.scrollY < 400) {
      const elements = document.getElementsByClassName("scrollTop");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    } else {
      const elements = document.getElementsByClassName("scrollTop");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
      }
    }
  });
  
  