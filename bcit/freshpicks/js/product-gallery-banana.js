	function setSlides(numCurrImage)
	{
        var arrImage = ["banana1", "banana2", "banana3", "banana4"];
	    var strThumbCode ="";

	    document.getElementById("imgMain").src = "img\\" + arrImage[numCurrImage] + "Full.jpg";
	    
	    for (let i = 0; i < arrImage.length; i++) 
	    {
            strThumbCode += "<img src=\"img\\" + arrImage[i] + "Thumb.jpg\" onclick=\"setSlides(" + i + ");\" class=\"clickable\" />"            
        }    	    
	     document.getElementById("divThumbArea").innerHTML = strThumbCode;
	} 