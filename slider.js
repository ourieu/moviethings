function makeSliderDraggable(sliderId) {
  const slider = document.getElementById(sliderId);
  
  if (!slider) {
    console.error(`❌ Element with ID '${sliderId}' not found!`);
    return;
  }

  console.log(`✅ Draggable slider initialized for: #${sliderId}`);

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse Down - Start dragging
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    slider.style.userSelect = 'none'; // Prevent text selection
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  // Mouse Leave - Stop dragging
  slider.addEventListener('mouseleave', () => {
    if (!isDown) return;
    isDown = false;
    slider.style.cursor = 'grab';
    slider.style.removeProperty('user-select');
  });

  // Mouse Up - Stop dragging
  slider.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    slider.style.cursor = 'grab';
    slider.style.removeProperty('user-select');
  });

  // Mouse Move - Handle dragging
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // Initial cursor style
  slider.style.cursor = 'grab';
  slider.style.overflowX = 'hidden'; // Hide scrollbars
}

// Initialize sliders when DOM loads
window.addEventListener('DOMContentLoaded', () => {
  makeSliderDraggable('slider');
  makeSliderDraggable('slider2');
});