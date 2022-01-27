var slider_img = document.querySelector('.slider-img');
var images = ['1.svg', '2.svg', '3.svg', '4.svg','5.svg', '6.svg'];
var topics= ['topic01.html','topic02.html','topic03.html','topic04.html','topic05.html','topic06.html'];
var i = 0;

function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();
}
function setImg(){
    slider_img.setAttribute('src','images/' + images[i]);
    slider_img.setAttribute('onclick',`location.href='${topics[i]}'`);
    return true;
}

