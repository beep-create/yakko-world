function loadFlag() 
{ document.getElementById("imgFlagName").src= "flagimgs/"+document.getElementById("inputCountryName").value + ".png";
 console.log(document.getElementById("inputCountryName").value); 
 console.log(document.getElementById("imgFlagName").src); 
}
function knowMore()  
{  
     var txtFile = new XMLHttpRequest();  


     txtFile.open("GET", "../txtinfofiles/"+document.getElementById("inputCountryName").value + ".txt", true);  
     
     //Creating the wikipedia link
     var linkHyper="https://en.wikipedia.org/wiki/"+document.getElementById("inputCountryName").value;



     txtFile.onreadystatechange = function()   
     {  
          if (txtFile.readyState === 4)   
          {  
               // Makes sure the document is ready to parse.  
               if (txtFile.status === 200)   
               {  
                    // Along with the text creating anchor tag 
                    document.getElementById("pFlagDesc").innerHTML = "" + txtFile.responseText + "<a href=" + linkHyper + "  target=\"_blank\"><b>More Info</b></a>"  ;
               }  
          }  
     }  
     txtFile.send(null)  
}  