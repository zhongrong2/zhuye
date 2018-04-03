{
	function neirong(every){
		let pagers=every.querySelectorAll(".about_right_pagers div");
		let imgs=every.querySelectorAll(".about_describe_item");
		let imgbox=every.querySelector(".about_describe_items");
		console.log(pagers);

		let n=0;
			// rbtn.onclick=function(){
			// 	n++;
				
			// 	if(n===imgs.length){

			// 		n=imgs.length-1;
			// 		return;
			// 	}
			// 	imgbox.style.marginLeft=-296*n+"px";
			// 	pagers[n-1].classList.remove('active');
			// 	pagers[n].classList.add('active');

			// 	obj=pagers[n];

			// }
			// lbtn.onclick=function(){
			// 	n--;
				
			// 	if(n<0){
					
			// 		n=0;
			// 		return;
			// 	}
			// 	imgbox.style.marginLeft=-296*n+"px";
			// 	pagers[n+1].classList.remove('active');
			// 	pagers[n].classList.add('active');

			// 	obj=pagers[n];
			// }


		let obj=pagers[0];
		// let i=0;
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				// i++
				obj.classList.remove("about_describe_active");
				this.classList.add("about_describe_active");
				obj=this;


				imgbox.style.marginLeft=-675*index+"px";
				n=index;
				
				
			}
	});

	}
}
