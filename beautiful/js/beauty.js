$(document).ready(function(){
	$("#top #one").mouseenter(function(){
		$("#top #one a").css({"background-color":"#27252e","color":"#fff"});
	})
	$("#top #one a").mouseout(function(){
		$("#top #one a").css({"background-color":"#322f3b","color":"#dedede"});
	})
	
		$("#top #two .apa").mouseenter(function(){
			$("#top #two .apa").css({"background-color":"#27252e","color":"#fff"})	;
			$("#top #two .apa span").css({"transform":"rotate(180deg)"});
			$("#app").animate({"height":"168px"},300);
		})	
		$("#top #two").mouseleave(function(){
				$("#top #two .apa").css({"background-color":"#322f3b","color":"#dedede"});
				$("#top #two .apa span").css({"transform":"rotate(0deg)"});
				$("#app").animate({"height":"0px"},300)	;			
		})
		$("#top #three .apa1").mouseenter(function(){
			$("#top #three .apa1").css({"background-color":"#27252e","color":"#fff"});
			$("#top #three .apa1 span").css({"transform":"rotate(180deg)"})	;
			$("#app1").animate({"height":"100px"},300);
		})	
		$("#top #three").mouseleave(function(){
				$("#top #three .apa1").css({"background-color":"#322f3b","color":"#dedede"});
				$("#top #three .apa1 span").css({"transform":"rotate(0deg)"});	
				$("#app1").animate({"height":"0px"},300);			
		})
		$("#top #four .apa2").mouseenter(function(){
			$("#top #four .apa2").css({"background-color":"#27252e","color":"#fff"});	
			$("#top #four .apa2 span").css({"transform":"rotate(180deg)"});	
			$("#app2").animate({"height":"168px"},300);
		})	
		$("#top #four").mouseleave(function(){
				$("#top #four .apa2").css({"background-color":"#322f3b","color":"#dedede"});
				$("#top #four .apa2 span").css({"transform":"rotate(0deg)"});		
				$("#app2").animate({"height":"0px"},300);				
		})
		$("#top ul .denglu").mouseenter(function(){
			$("#top ul .denglu a").css({"color":"#000"});
		})
		$("#top ul .denglu").mouseleave(function(){
			$("#top ul .denglu a").css({"color":"#dedede"});
		})
		/*logo开始*/
		function logo(_linth,_down,_lintha){
			$(_linth).mouseenter(function(){
				$(_lintha).css({"color":"#ee4985"});
				$(_down).stop().animate({"height":"0px"},300,function(){
					$(_linth).css({"border-bottom-color":"#ee4985"});
				}).animate({"height":"202px"},200)
			})
			$(_linth).mouseleave(function(){
				$(_lintha).css({"color":"#555555"});
				$(_down).stop().animate({"height":"202px"},500,function(){
					$(_linth).css({"border-bottom-color":"transparent"})
					$(_down).stop().animate({"height":"0px"},300)
				})
			})
			
			
		}
			logo(".logo ul li:nth-of-type(1)",".bglogo .down",".logo ul li:nth-of-type(1) a");
			logo(".logo ul li:nth-of-type(2)",".bglogo .down1",".logo ul li:nth-of-type(2) a");
			logo(".logo ul li:nth-of-type(3)",".bglogo .down2",".logo ul li:nth-of-type(3) a")
		
			$(".bglogo .down .small").find("div").mouseenter(function(){
					$(this).css({"color":"#ee4985"})
			})	
			$(".bglogo .down .small").find("div").mouseleave(function(){
					$(this).css({"color":"#555"})
			})	
		/*logo结束*/
		/*banner开始*/
		/*轮播图*/
				var i=$("#banner .box img").length;
				function loop(){
					$("#banner .box  img").eq(i-1).animate({"opacity":"1"},5000,function(){
						$("#banner #dian  span").eq(i-2).css({"opacity":"1"});
						$("#banner #dian  span").eq(i-2).siblings().css({"opacity":"0.6"});
					}).animate({"opacity":"0","z-index":"-1"},100)
						.animate({"opacity":"1","z-index":"1"},20000,loop);
					$("#banner .box  img").eq(i-2).animate({"opacity":"1"},10000,function(){
						$("#banner #dian  span").eq(i-3).css({"opacity":"1"});
						$("#banner #dian  span").eq(i-3).siblings().css({"opacity":"0.6"});
					}).animate({"opacity":"0"},100);
					$("#banner .box  img").eq(i-3).animate({"opacity":"1"},15000,function(){
						$("#banner #dian  span").eq(i-4).css({"opacity":"1"});
						$("#banner #dian  span").eq(i-4).siblings().css({"opacity":"0.6"});
					}).animate({"opacity":"0"},100);
					$("#banner .box  img").eq(i-4).animate({"opacity":"1"},20000,function(){
						$("#banner #dian  span").eq(i-5).css({"opacity":"1"});
						$("#banner #dian  span").eq(i-5).siblings().css({"opacity":"0.6"});
					}).animate({"opacity":"0"},100);
					$("#banner .box  img").eq(i-5).animate({"opacity":"1"},25000,function(){
						$("#banner #dian  span").eq(i-1).css({"opacity":"1"});
						$("#banner #dian  span").eq(i-1).siblings().css({"opacity":"0.6"});
					}).animate({"opacity":"0"},100);	
				}
				loop()
					
					/*banner左侧效果第一个*/
					$(".bgbanner .one").mouseenter(function(){
						$(this).css({"background-color":"#f53a89","color":"#fff"});
						$(".bgbanner .one a").css({"color":"#fff"});
						$(" .banner .one div li a").css({"color":"#222"});
						$(".bgbanner .one div").css({"display":"block"});
					})
					$(".bgbanner .one div li").mouseenter(function(){
						$(this).find("a").css({"color":"#ee4985"});
					})
					$(".bgbanner .one div li").mouseleave(function(){
						$(this).find("a").css({"color":"#222"});
					})
					$(".bgbanner .one").mouseleave(function(){
						$(this).css({"background":"rgba(17,0,18,0)"});
						$(".bgbanner .one ol a").css({"color":" #cfcfcf"});
						$(".bgbanner .one div").css({"display":"none"});
					})
					/*banner左侧效果中间三个*/
					$(".bgbanner .two").mouseenter(function(){
						$(this).css({"background-color":"#f53a89","color":"#fff"});
						$(this).find("a").css({"color":"#fff"});
						$(this).find("div").find("li").find("a").css({"color":"#222"});
						$(this).find("div").css({"display":"block"});
					})
					$(".bgbanner .two div li").mouseenter(function(){
						$(this).find("a").css({"color":"#ee4985"});
					})
					$(".bgbanner .two div li").mouseleave(function(){
						$(this).find("a").css({"color":"#222"});
					})
					$(".bgbanner .two").mouseleave(function(){
						$(this).css({"background":"rgba(17,0,18,0)"});
						$(this).find("ol").find("a").css({"color":" #cfcfcf"});
							$(this).find("div").css({"display":"none"});
					})
					
					$(".bgbanner #five").mouseenter(function(){
						$(this).css({"background-color":"#f53a89","color":"#fff"});
						$(this).find("a").css({"color":"#fff"});
						$(this).find("div").find("li").find("a").css({"color":"#222"});
						$(this).find("div").css({"display":"block"});
					})
					$(".bgbanner #five").mouseleave(function(){
						$(this).css({"background":"rgba(17,0,18,0)"});
						$(this).find("ol").find("a").css({"color":" #cfcfcf"});
							$(this).find("div").css({"display":"none"});
					})
		
		
		
		
		
		
		
		
		
		
		
		
		console.log($(".bgbanner .one a"))
})
