document.addEventListener( 'DOMContentLoaded', function () {
  new Splide(
    '#image-carousel', {
      rewind: true,
      pagination: false,
      cover: true,
      heightRatio: 0.8,
      arrows: false,
      autoplay: true,
      interval: 3000
      }
    ).mount();
  }
);