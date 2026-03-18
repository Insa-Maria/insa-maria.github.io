// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// Custom modal handling for project thumbs
document.addEventListener("DOMContentLoaded", function () {
  function openModalFromElement(el) {
    try {
      var href = el.getAttribute("href");
      var targetId = href && href.charAt(0) === "#" ? href.substring(1) : null;
      var modalOverlay = document.getElementById("modal-overlay");
      var modalScrollable = document.getElementById("modal-scrollable");
      if (!targetId || !modalOverlay || !modalScrollable) return;
      var source = document.getElementById(targetId);
      if (!source) {
        console.warn("Popup source not found:", targetId);
        return;
      }
      modalScrollable.innerHTML = source.innerHTML;
      modalOverlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    } catch (err) {
      console.error("openModalFromElement error:", err);
    }
  }

  document.querySelectorAll(".modal-link").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      openModalFromElement(a);
    });
  });

  var modalClose = document.getElementById("modal-close");
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      var modalOverlay = document.getElementById("modal-overlay");
      if (modalOverlay) modalOverlay.style.display = "none";
      document.body.style.overflow = "";
    });
  }

  var modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var mo = document.getElementById("modal-overlay");
      if (mo && mo.style.display === "flex") {
        mo.style.display = "none";
        document.body.style.overflow = "";
      }
    }
  });
});
