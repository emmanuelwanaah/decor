const slides = [
    {
      image: 'images/desktop-image-hero-1.jpg',
      title: 'Discover innovative a<br> ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property<br> owners across the country. Our experts combine form and<br> function in bringing your vision to life. Create a room in your<br> own style with our collection and make your property a<br> reflection of you and what you love.',
    },
    {
      image: 'images/desktop-image-hero-2.jpg',
      title: 'We are available all<br> across the globe',
      text: 'With stores all over the world, it\'s easy for you to find furniture<br> for your home or place of business. Locally, we’re in most<br> major cities throughout the country. Find the branch nearest<br> you using our store locator. Any questions? Don\'t hesitate to contact us today.',
    },
    {
      image: 'images/desktop-image-hero-3.jpg',
      title: 'Manufactured with<br> the best materials',
      text: 'Our modern furniture store provides a high level of quality. Our<br> company has invested in advanced technology to ensure that<br> every product is made as perfect and as consistent as<br> possible. With three decades of experience in this industry, we<br> understand what customers want for their home and office.',
    },
  ];
  
  const mobileSlides = [
    {
      image: 'images/mobile-image-hero-1.jpg',
      title: 'Discover innovative a<br> ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property<br> owners across the country. Our experts combine form and<br> function in bringing your vision to life. Create a room in your<br> own style with our collection and make your property a<br> reflection of you and what you love.',
    },
    {
      image: 'images/mobile-image-hero-2.jpg',
      title: 'We are available all<br> across the globe',
      text: 'With stores all over the world, it\'s easy for you to find furniture<br> for your home or place of business. Locally, we’re in most<br> major cities throughout the country. Find the branch nearest<br> you using our store locator. Any questions? Don\'t hesitate to contact us today.',
    },
    {
      image: 'images/mobile-image-hero-3.jpg',
      title: 'Manufactured with<br> the best materials',
      text: 'Our modern furniture store provides a high level of quality. Our<br> company has invested in advanced technology to ensure that<br> every product is made as perfect and as consistent as<br> possible. With three decades of experience in this industry, we<br> understand what customers want for their home and office.',
    },
  ];
  
  let currentSlideIndex = 0;
  let currentSlides = slides;
  
  // Check if the screen width is smaller than 768 pixels (mobile screen)
  if (window.innerWidth <= 767) {
    currentSlides = mobileSlides;
  }
  
  const updateSlide = () => {
    const currentSlide = currentSlides[currentSlideIndex];
    document.querySelector('.img').src = currentSlide.image;
    document.querySelector('h1').innerHTML = currentSlide.title;
    document.querySelector('.textp').innerHTML = currentSlide.text;
  };
  
  const showNextSlide = () => {
    currentSlideIndex = (currentSlideIndex + 1) % currentSlides.length;
    updateSlide();
  };
  
  const showPrevSlide = () => {
    currentSlideIndex = (currentSlideIndex - 1 + currentSlides.length) % currentSlides.length;
    updateSlide();
  };
  
  // Event listeners for next and previous buttons
  document.getElementById('nextSlide').addEventListener('click', showNextSlide);
  document.getElementById('prevSlide').addEventListener('click', showPrevSlide);
  
  // Initial slide update
  updateSlide();
  document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    const menuIcon = document.querySelector('.menu');
    const menuList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
      menuList.style.display = menuList.style.display === 'none' || menuList.style.display === '' ? 'flex' : 'none';
    });
  });