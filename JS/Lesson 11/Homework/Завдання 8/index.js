const triangle = document.querySelector('.triangle');
const text = document.querySelector('.text');
let textWidth = parseInt(window.getComputedStyle(text).width);
let textHeigth = parseInt(window.getComputedStyle(text).height);
console.log(textWidth);
console.log(textHeigth);
let isPress = false;

function changeWidth(w,h){
        text.style.width = textWidth++ + 'px';
        text.style.height = textHeigth++ +'px';
    
}
triangle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isPress = true;
    
});
triangle.addEventListener('mouseup',(e) => {
    isPress = false;
})

triangle.addEventListener('mousemove', (e) => {
    e.preventDefault()
    //     text.style.width = (textWidth + (e.pageX - textWidth)) + 'px';
    //    text.style.height = (textHeigth + (e.pageY - textHeigth)) + 'px';
    if(isPress){
        changeWidth(e.pageX, e.pageY);
    }
   
    });
    