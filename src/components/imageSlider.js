import imageOne from '../assets/img1.jpg';
import imageTwo from '../assets/img2.jpg';
import imageThree from '../assets/img3.jpg';

function showCurrentImage(imageElement, imageSource, index) {
  imageElement.src = imageSource[index];
  imageElement.classList.add('show__image');
  setTimeout(() => {
    imageElement.classList.remove('show__image');
  }, 250);
}
function setCurrentIndicator(sliderIndicator, index) {
  sliderIndicator.forEach((indicator) => {
    indicator.classList.remove('active');
  });

  sliderIndicator[index].classList.add('active');
}

function sliderButtons(
  forwardButton,
  backwardButton,
  currentIndex,
  imageSource,
  sliderIndicator,
  imageElement
) {
  forwardButton.onclick = () => {
    currentIndex += 1;
    if (currentIndex >= imageSource.length) currentIndex = 0;
    showCurrentImage(imageElement, imageSource, currentIndex);
    setCurrentIndicator(sliderIndicator, currentIndex);
  };

  backwardButton.onclick = () => {
    currentIndex -= 1;
    if (currentIndex <= 0) currentIndex = 0;
    showCurrentImage(imageElement, imageSource, currentIndex);
    setCurrentIndicator(sliderIndicator, currentIndex);
  };
}

function changeImageSlide(
  imageElement,
  imageContainer,
  imageSource,
  forwardButton,
  backwardButton,
  sliderIndicator
) {
  //   onclick of image
  let currentIndex = 0;
  sliderIndicator[currentIndex].classList.toggle('active');

  imageContainer.forEach((img, index) => {
    img.src = imageSource[index];

    img.onclick = () => {
      currentIndex = index;
      showCurrentImage(imageElement, imageSource, index);
      setCurrentIndicator(sliderIndicator, currentIndex);
    };
  });

  sliderIndicator.forEach((indicator, index) => {
    indicator.onclick = () => {
      currentIndex = index;
      showCurrentImage(imageElement, imageSource, index);
      setCurrentIndicator(sliderIndicator, currentIndex);
    };
  });

  sliderButtons(
    forwardButton,
    backwardButton,
    currentIndex,
    imageSource,
    sliderIndicator,
    imageElement
  );
}

export default function ImageSlider() {
  const sliderContainer = document.querySelector('#imageSlider');
  const sliderImages = [imageOne, imageTwo, imageThree];

  const currentImage = new Image();
  currentImage.classList.add('slider__image');
  currentImage.src = sliderImages[0];

  const sliderBottomImages = Array.from(
    document.querySelectorAll('.slider__container--image')
  );

  const sliderIndicator = Array.from(
    document.querySelectorAll('.slider__indicator')
  );
  const sliderForward = document.querySelector('#sliderForward');
  const sliderBackward = document.querySelector('#sliderBackward');

  changeImageSlide(
    currentImage,
    sliderBottomImages,
    sliderImages,
    sliderForward,
    sliderBackward,
    sliderIndicator
  );

  sliderContainer.append(currentImage);
}
