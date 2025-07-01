const sliderWrapper = document.getElementById('sliderWrapper');

  let isDown = false;
  let startX;
  let scrollLeft;

  sliderWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderWrapper.classList.add('active');
    startX = e.pageX - sliderWrapper.offsetLeft;
    scrollLeft = sliderWrapper.scrollLeft;
    sliderWrapper.style.cursor = 'grabbing';
  });

  sliderWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    sliderWrapper.style.cursor = 'grab';
  });

  sliderWrapper.addEventListener('mouseup', () => {
    isDown = false;
    sliderWrapper.style.cursor = 'grab';
  });

  sliderWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderWrapper.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    sliderWrapper.scrollLeft = scrollLeft - walk;
  });