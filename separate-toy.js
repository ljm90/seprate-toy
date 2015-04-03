$(function(){
	$(document).on("click",".map",function(e){
		

			var width = $(this).width();
			var xin_width = Math.floor(width/2);
			var height = $(this).height();
			var xin_height = Math.floor(height/2);
			$(this).empty();
			
			var newDiv = "<div class='map' style='width:"+xin_width+"px;height:"+xin_height+"px;float:left;'><img src='ad_01.jpg' style='width:"+xin_width+"px;height:"+xin_height+"px;'></div>";
			$(this).append(newDiv);
			$(this).append(newDiv);
			$(this).append(newDiv);
			$(this).append(newDiv);
		
		e.stopPropagation();
	})
	
	var b = [1,1,2,3,4,5,6,6,5,4,3];
	var shuzu = [33,22,44,55,66,77,88,99,22,33,44,55,66,77,88];
	
	chazhao = function(b){
		var js = {};
		var val = "";
		for(var i in b){
			var name = b[i];
			if(!js[name]){
				js[name]=1;
			}else{
				js[name]=2;
			}
		}
		for(var z in js){
			if(js[z]==1){
				val = parseInt(z);
				return val;
			}
		}
	}
	console.log(chazhao(b));
	console.log(chazhao(shuzu));
})