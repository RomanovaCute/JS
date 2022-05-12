let colorCode = 0;
function colorChange(){
    document.getElementById('back').style.backgroundColor = `rgb(0, 0, ${colorCode % 255})`;
    colorCode += 50;
}