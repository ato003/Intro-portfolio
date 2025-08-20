window.addEventListener("load", function(){
	var n=0;
	var h=0;
	var targety=0;
	var moving=false;
	var categoryActive=false; // added
	var total;
	var contents=document.getElementsByClassName("contents")[0]; // added
	var content=contents.children; // added
	var gnbLi=gnb.firstElementChild.children;
	var aside=document.getElementsByClassName("aside")[0];
	var asideLi=aside.firstElementChild.children;
	total=gnbLi.length;

	function moveCategory(){
		moving=true;
		h=window.innerHeight;
		targety=n*h;

		gsap.to(window, {scrollTo: targety, duration: 0.5, onComplete: function(){
			moving=false;

			for(var i=0; i<gnbLi.length; i++){
				if(i == n){
					gnbLi[i].classList.add("active");
					asideLi[i].classList.add("active");

					if(!categoryActive){ // added
						content[i].classList.add("active");
							
						if(n == (total-1)){
							categoryActive=true;
						}
					}
				}
				else{
					gnbLi[i].classList.remove("active");
					asideLi[i].classList.remove("active");
				}
			}
		}});
	}
	moveCategory();

	window.addEventListener("resize", moveCategory);

	document.addEventListener("mousewheel", function(e){
		if(moving) return;

		if(e.deltaY < 0){
			if(n > 0){
				n-=1;
			}
			else{
				return;
			}
		}
		else{
			if(n < total-1){
				n+=1;
			}
			else{
				return;
			}
		}
		moveCategory();
	});
	document.addEventListener("keydown", function(e){
		// if(moving) return;

		if(e.key == "ArrowUp"){
			if(n > 0){
				n-=1;
			}
			else{
				return;
			}
		}
		else if(e.key == "ArrowDown"){
			if(n < total-1){
				n+=1;
			}
			else{
				return;
			}
		}
		moveCategory();
	});

	for(var i=0; i<gnbLi.length; i++){
		gnbLi[i].index=i;
		asideLi[i].index=i;

		gnbLi[i].addEventListener("click", function(e){
			e.preventDefault();
			if(moving) return;

			if(n == e.currentTarget.index) return;
			n=e.currentTarget.index;
			moveCategory();
		});
		asideLi[i].addEventListener("click", function(e){
			e.preventDefault();
			if(moving) return;

			if(n == e.currentTarget.index) return;
			n=e.currentTarget.index;
			moveCategory();
		});
	}
});