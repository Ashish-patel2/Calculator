var count = 1;
function fill(control)
{
         if (count<9)
     {
       if (count%2!=0)
          {
    document.getElementById(control.id).innerHTML="0"; 
          } else
          {
  document.getElementById(control.id).innerHTML="X"; 
  

          }
       count++;  
       
     }
else
     { 
       cleane();
document.getElementById('draw').innerText=' Match Draw'      
let ele = document.getElementById('draw')
ele.style.cssText +="color:black; background-image:url(../image/img.png)";


        
     }         
if (checkwin())
        {
     cleane();   
let winner = document.getElementById('draw')
winner.style.cssText +="color:black; background-image:url(../image/img.png)";
 document.getElementById('draw').innerHTML="You win the match"
        }
 
}
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
 document.getElementById('draw').innerHTML="";
}


function checkwin()
{
        if (checkcondition('div1','div2','div3')||checkcondition('div4','div5','div6')||checkcondition('div7','div8','div9')||checkcondition('div1','div4','div7')||checkcondition('div2','div5','div8')||checkcondition('div3','div6','div9')||checkcondition('div1','div5','div9')||checkcondition('div3','div5','div7')) 
        {
             return true;   
        }
}

 function checkcondition(div1, div2, div3)
 {
         if (document.getElementById(div1).innerHTML!= "" && document.getElementById(div2).innerHTML!= "" && document.getElementById(div3).innerHTML!= "" && document.getElementById(div1).innerHTML== document.getElementById(div2).innerHTML && document.getElementById(div1).innerHTML== document.getElementById(div3).innerHTML)
         {
                 return true;
         }
 }
 function clrbrdr(div,brblk){
  let clrb = document.getElementById(div);
  clrb.style.border ="none";
  clrb.style.border= brblk;
          }
  function cleane(back){
clrbrdr("div1")
  clrbrdr("div2")
  clrbrdr("div3")
  clrbrdr("div4")
  clrbrdr("div5")
  clrbrdr("div6")
  clrbrdr("div7")
  clrbrdr("div8")
  clrbrdr("div9")
  rough();
  }
  
  