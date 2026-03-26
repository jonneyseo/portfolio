	function setSlides(numCurrImage)
	{
        var arrImage = ["orange1", "orange2", "orange3", "orange4"];
	    var strThumbCode ="";

	    document.getElementById("imgMain").src = "img\\" + arrImage[numCurrImage] + "Full.jpg";
	    
	    for (let i = 0; i < arrImage.length; i++) 
	    {
            strThumbCode += "<img src=\"img\\" + arrImage[i] + "Thumb.jpg\" onclick=\"setSlides(" + i + ");\" class=\"clickable\" />"            
        }    	    
	     document.getElementById("divThumbArea").innerHTML = strThumbCode;
	} 