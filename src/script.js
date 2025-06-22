    // Popup ảnh
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    document.querySelectorAll('.section img').forEach(img => {
      img.addEventListener('click', (e) => {
        popupImage.src = e.target.src;
        popup.classList.add('show');
      });
    });
    popup.addEventListener('click', () => {
      popup.classList.remove('show');
      setTimeout(() => popupImage.src = '', 300);
    });

    // Hiện section khi scroll xuống
    const hiddenSections = document.querySelector('.hidden-sections');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        hiddenSections.classList.add('show');
      }
    });


    // button war

    const warButton = document.querySelector('.button-war');
  warButton.addEventListener('click', () => {
    warButton.classList.add('shake');
    setTimeout(() => warButton.classList.remove('shake'), 300);
  });


  // nhac
  window.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
      music.play();
    }
  });