'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you 
on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets 
 the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with  the 'images' class, and resolve the promise. The fulfilled
  value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 second  using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the 
  createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by
 passing a wrong image path. Set the network speed to 'Fast 3G' in
  the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/

////from html
const imagesContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

///part 1
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(function (img) {
    currentImg = img;
    console.log('Image 1 is loaded');
    return wait(2);
  })
  .then(function () {
    console.log('2 seconds passed');
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(function (img) {
    console.log('Image 2 is loaded');
    return wait(2);
  })
  .then(function () {
    console.log('2 seconds passed');
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(function (img) {
    console.log('Image 3 is loaded');
  })
  .catch(function (err) {
    console.error(err);
  });
