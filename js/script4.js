var img1="https://pbs.twimg.com/media/ENw9PwJUcAAMhZ0.jpg";
var img2="https://media-cdn.tripadvisor.com/media/photo-s/11/f4/ff/11/charminar.jpg"
var img3="https://4.bp.blogspot.com/-pVCD06KkWPk/VGchC7iCMPI/AAAAAAAABjE/LfxOBKNF5Ss/s1600/hussain-sagar-lake.jpg"
var img4="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgKkd1oG-1zqGKN4Gd72hN0RjeeeKmK0ZR47ua2Gu4hdTLz6ie"
var img5="https://b.zmtcdn.com/data/pictures/chains/2/91662/f6c49671da4030d947fde30a6fd48549_featured_v2.jpg"

var ctr=0;

function showimg(){

if(ctr==0)
document.getElementById("myimg1").src=img1;
if(ctr==1)
document.getElementById("myimg1").src=img2;
if(ctr==2)
document.getElementById("myimg1").src=img3;
if(ctr==3)
document.getElementById("myimg1").src=img4;
if(ctr==4)
document.getElementById("myimg1").src=img5;

ctr=(ctr+1)%5;

}
