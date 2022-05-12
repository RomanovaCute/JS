let pic1 = "/images/img1.png";
let pic2 = "/images/img2.jpg";

function nextPic(){
    document.getElementById('selector').src = pic2;
}
function backPic(){
    document.getElementById('selector').src = pic1;
}