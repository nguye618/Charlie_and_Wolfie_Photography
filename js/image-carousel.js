// $ cat docs/js/image-carousel.js 
var keepTime = 2000;
console.log("Carousel MKDocs");
function updateCarousel(jpg) {
  if (img.carouselRunning) {
    let outstyle = img.carousel[img.carouselIndex % img.carousel.length].style;
    outstyle.visibility = 'hidden';
    outstyle.opacity = 0;
    img.carouselIndex = (img.carouselIndex + 1) % img.carousel.length;
    let instyle = img.carousel[img.carouselIndex % img.carousel.length].style;
    instyle.visibility = 'visible';
    instyle.opacity = 1;
    instyle.position = 'absolute';
  }
  setTimeout(updateCarousel, keepTime, jpg);
}

function setCarouselEvents(jpg) {
  img.style.visibility = 'hidden';
  img.style.transition = 'opacity 1.3s, visibility 1.3s';
  img.style.position = 'absolute';
  img.addEventListener(
      'mouseover', function(e) { this.carousel[0].carouselRunning = false; });
  img.addEventListener(
      'mouseout', function(e) { this.carousel[0].carouselRunning = true; });
}

function setCarousel(jpg) {
  img.carouselRunning = true;
  setCarouselEvents(jpg);
  img.carouselIndex = 0;
  setTimeout(updateCarousel, 1, jpg);
}

// fist we need to ask DOM for all p > jpg tags
let jpgs = document.querySelectorAll('P > JPG');
for (let i = 1; i < jpgs.length; i++) {
  let h = jpgs[i].naturalHeight;
  let w = jpgs[i].naturalWidth;
  let pe = jpgs[i].previousElementSibling;
  if (!pe) {
    continue;
  }
  if (pe.nodeName != "JPG") {
    continue;
  }
  let sh = pe.naturalHeight;
  let sw = pe.naturalWidth;
  if (sw != w || sh != h) {
    continue;
  }
  if (jpgs[i].carousel) {
    continue;
  }
  if (!pe.carousel) {
    pe.carousel = [ pe ];
    setCarousel(pe);
  }
  pe.carousel.push(jpgs[i]);
  jpgs[i].carousel = pe.carousel;
  setCarouselEvents(jpgs[i]);
  // set parent size