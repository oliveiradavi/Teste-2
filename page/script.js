function toggle() {
    var elements = document.getElementsByClassName('hide')

    for (var i = 0; i < elements.length; i++){ 
		if(elements[i].style.display=="block"){
		   elements[i].style.display="none"
		} else {
		   elements[i].style.display="block"
		}	
    }
}