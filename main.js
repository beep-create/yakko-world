function loadFlag() 
{ document.getElementById("imgFlagName").src= "flagimgs/"+document.getElementById("inputCountryName").value + ".png";
 console.log(document.getElementById("inputCountryName").value); 
 console.log(document.getElementById("imgFlagName").src); 
}
function knowMore()  
{  console.log("it works?");

     //Creating the wikipedia link
     var linkHyper="https://en.wikipedia.org/wiki/"+document.getElementById("inputCountryName").value;

     document.getElementById("pFlagDesc").innerHTML = "To know more about " + document.getElementById("inputCountryName").value + ", Click this link: "  + "<a href=" + linkHyper + "  target=\"_blank\"><b>More Info</b></a>"  ;


    
}  