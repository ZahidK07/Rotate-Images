
let imgContainer = document.querySelector('#img-container');

const nxtBtn = document.querySelector('#next');

const prvBtn = document.querySelector('#prev');

// 
let transformDeg = 0;

// an empty timer variable to reset the setTimeout function
let timer;

// Next Button
nxtBtn.addEventListener('click',()=>{
    transformDeg = transformDeg + 45;
    clearTimeout(timer)
    rotateGallery()
});

// Previous Button
prvBtn.addEventListener('click',()=>{
    transformDeg = transformDeg - 45;
    clearTimeout(timer)
    rotateGallery()
});

// Rotate images feature according to timer
function rotateGallery(){
    imgContainer.style.transform = `perspective(1000px) rotateY(${transformDeg}deg)`;      
    
    timer = setTimeout(()=>{
        transformDeg = transformDeg + 45;
        rotateGallery()
    },3000);
};