var mydata=[];
if(localStorage.getItem("mydata")){

mydata=JSON.parse(localStorage.getItem("mydata"));
for(var x in mydata)
{

var mytable=document.getElementById("mytable");
var mytable2=mytable.insertRow(1);

var cell1=mytable2.insertCell(0);
cell1.innerHTML=mydata[x]["name"];
var cell2=mytable2.insertCell(1);
cell2.innerHTML=mydata[x]["skill"];
var cell3=mytable2.insertCell(2);
cell3.innerHTML=mydata[x]["level"];
var cell4=mytable2.insertCell(3);
cell4.innerHTML=mydata[x]["comment"];

}
}

function mydata1(){

var name=document.getElementById('name').value;
var skill=document.getElementById('skill').value;
var level=document.getElementById('level').value;
var comment=document.getElementById('comment').value;
var mytable=document.getElementById('mytable');
var mytable2=mytable.insertRow(1);

cella=mytable2.insertCell(0);
cella.innerHTML=name;
cellb=mytable2.insertCell(1);
cellb.innerHTML=skill;
cellc=mytable2.insertCell(2);
cellc.innerHTML=level;
celld=mytable2.insertCell(3);
celld.innerHTML=comment;
mydata.push(
    {

     name : name,
     skill: skill,
     level: level,
     comment: comment,
    }
);
console.log(mydata);
localStorage.setItem("mydata",JSON.stringify(mydata));

}