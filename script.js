
    const categories = {
      nature: [
        "/code/pexels-fr3nks-287229.jpg",
        "/code/pexels-rahulp9800-1212487.jpg",
        "/code/pexels-pixabay-158028.jpg",
        "/code/pexels-nout-gons-80280-248159.jpg",
        "/code/pexels-pixabay-158063.jpg"
      ],
      people: [
        "/code/1.jpg",
        "/code/2.jpg",
        "/code/3.jpg",
        "/code4.jpg"
      ],
      animals: [
        "/code/pexels-andre-mouton-1207875.jpg",
        "/code/pexels-laurathexplaura-3608263.jpg",
         "/code/pexels-dibert-635499.jpg",
          "/code/pexels-pixabay-34231.jpg",
          ]
   
        };

    let currentCategory = 'nature';
    let currentIndex = 0;

    const galleryImage = document.getElementById("gallery-pic");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateImage(direction = 'right') {
      const currentImagePath = categories[currentCategory][currentIndex];

      // Reset class
      galleryImage.className = '';

      setTimeout(() => {
        galleryImage.src = currentImagePath;
        galleryImage.classList.add('show');

        if (direction === 'right') {
          galleryImage.classList.add('slide-in-right');
        } else {
          galleryImage.classList.add('slide-in-left');
        }
      }, 50);
    }

    function changeCategory(category) {
      currentCategory = category;
      currentIndex = 0;
      updateImage();
    }

    prevBtn.addEventListener("click", () => {
      const imgs = categories[currentCategory];
      currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
      updateImage('left');
    });

    nextBtn.addEventListener("click", () => {
      const imgs = categories[currentCategory];
      currentIndex = (currentIndex + 1) % imgs.length;
      updateImage('right');
    });

    window.onload = () => updateImage();
