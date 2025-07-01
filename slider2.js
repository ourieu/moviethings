const sad = document.getElementById('sliderThings');

  let isDown = false;
  let startX;
  let scrollLeft;

  sad.addEventListener('mousedown', (e) => {
    isDown = true;
    sad.classList.add('active');
    startX = e.pageX - sad.offsetLeft;
    scrollLeft = sad.scrollLeft;
    sad.style.cursor = 'grabbing';
  });

  sad.addEventListener('mouseleave', () => {
    isDown = false;
    sad.style.cursor = 'grab';
  });

  sad.addEventListener('mouseup', () => {
    isDown = false;
    sad.style.cursor = 'grab';
  });

  sad.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sad.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    sad.scrollLeft = scrollLeft - walk;
  });