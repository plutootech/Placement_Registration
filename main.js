
   function openPopup()
   {

     var element=document.getElementById("popup");
     element.classList.add("open");

   }
   function closePopup()
   {
      var element=document.getElementById("popup");
     element.classList.remove("open");

   }


const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
