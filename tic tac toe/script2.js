let num = 1;

function fill(control)
{
    if (num<9)
{ 
        if (num%2!=0)
        { slet(control.id,"0") }
        else
        { slet(control.id,"X") }
   num++;
        
}   else {
slet('draw',"Match Draw")
let ele = document.getElementById('draw')
ele.style.cssText += "color:black; background-image:url(../image/img.png)";}
}
//functions
function slet(div,text,any)
{const take = document.getElementById(div).innerHTML=text;   }

function rough(){ 
  slet("div1");
  slet("div2").innerHTML="";
  slet("div3").innerHTML="";
  slet("div4").innerHTML="";
  slet("div5").innerHTML="";
  slet("div6").innerHTML="";
  slet("div7").innerHTML="";
  slet("div8").innerHTML="";
  slet("div9").innerHTML="";
  count=1;
let ele = document.getElementById('draw')
ele.style.cssText +="color:none; background-image:none;"
 document.getElementById('draw').innerHTML="";}
 //function for declare winner
function checkwin()
{
        if (checkcondition('div1','div2','div3')||checkcondition('div4','div5','div6')||checkcondition('div7','div8','div9')||checkcondition('div1','div4','div7')||checkcondition('div2','div5','div8')||checkcondition('div3','div6','div9')||checkcondition('div1','div5','div9')||checkcondition('div3','div5','div7')) 
        {
             return true;   
        }
}
//part of declare fun..
function checkcondition(div1, div2, div3)
{
        if (document.getElementById(div1).innerHTML != "" && document.getElementById(div2).innerHTML != "" && document.getElementById(div3).innerHTML != "" && document.getElementById(div1).innerHTML == document.getElementById(div2).innerHTML && document.getElementById(div1).innerHTML == document.getElementById(div3).innerHTML)
        {
                return true;
        }
}        
        