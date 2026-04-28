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

  // Image Grid - Load images from images folder
  const imageFiles = [
    'research_3d_vis_(1).png',
    'research_3d_vis_(2).png',
    'research_virtual_tour_(1).png',
    'research_virtual_tour_(2).png',
    'research_coronohack_alpacas_(1).png',
    'research_coronohack_alpacas_(2).png',
    'research_image_aquisition_(1).jpg',
    'research_image_aquisition_(2).jpg',
    'research_immersive_analytics_ (1).png',
    'research_immersive_analytics_ (2).png',
    'researc_crewproject_(1).png',
    'researc_crewproject_(2).png',
    'researc_vis_(1).png',
    'researc_vis_(2).png',
    'conferences_coronahack.png',
    'career_timeline.png',
    'conferences_gcu_reserach.jpg',
    'conferences_GTC.jpg',
    'conferences_sicsa_conference.jpg'
  ];

  let imageGridTimer = null;
  let imageGridCells = [];
  let nextCellToUpdate = 0;

  function getGridLayout() {
    if (window.innerWidth >= 993) return { columns: 5, rows: 2 };
    if (window.innerWidth > 600) return { columns: 4, rows: 2 };
    if (window.innerWidth <= 420) return { columns: 1, rows: 3 };
    return { columns: 2, rows: 3 };
  }

  function createImageCell(cell, images) {
    // Show first image immediately
    let img = document.createElement('img');
    img.src = '/images/' + images[0];
    img.style.opacity = '1';
    cell.appendChild(img);

    imageGridCells.push({
      cell: cell,
      images: images,
      currentIndex: 0,
      img: img
    });
  }

  function transitionNextGridCell() {
    if (!imageGridCells.length) return;

    const gridCell = imageGridCells[nextCellToUpdate % imageGridCells.length];
    nextCellToUpdate = (nextCellToUpdate + 1) % imageGridCells.length;
    gridCell.currentIndex = (gridCell.currentIndex + 1) % gridCell.images.length;

    const newImg = document.createElement('img');
    newImg.src = '/images/' + gridCell.images[gridCell.currentIndex];
    newImg.style.opacity = '0';
    newImg.style.transition = 'opacity 1s ease-in-out';
    gridCell.cell.appendChild(newImg);

    // Fade in new, fade out old
    requestAnimationFrame(function() {
      newImg.style.opacity = '1';
      setTimeout(function() {
        if (gridCell.cell.contains(gridCell.img)) {
          gridCell.cell.removeChild(gridCell.img);
        }
        gridCell.img = newImg;
      }, 1000);
    });
  }

  function loadImageGrid() {
    const gridContainer = document.getElementById('imageGrid');
    if (!gridContainer) return;
    
    // Clear existing content and timer
    if (imageGridTimer) {
      clearInterval(imageGridTimer);
      imageGridTimer = null;
    }
    imageGridCells = [];
    nextCellToUpdate = 0;
    gridContainer.innerHTML = '';
    
    const layout = getGridLayout();
    const totalCells = layout.columns * layout.rows;
    
    // Create cells to fill the grid
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      
      const shuffled = imageFiles.slice().sort(function() { return 0.5 - Math.random(); });
      
      createImageCell(cell, shuffled);
      gridContainer.appendChild(cell);
    }

    imageGridTimer = setInterval(transitionNextGridCell, 2000);
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', loadImageGrid);
  
  // Re-create grid on resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(loadImageGrid, 250);
  });
