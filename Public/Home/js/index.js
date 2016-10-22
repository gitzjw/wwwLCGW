var chinaPet = (function (){
		var MarGin = $('.banner').height()+145;
		function init(n){
			if(ScollPostion().top>MarGin){
				return false;
			}
			//console.log(MarGin-n);
			//$('.content').css({'margin-top':MarGin-n});
			//console.log($('.banner').height()+145)
		}
		
		function NavScroll(that){
			$('.nav li').removeClass('ShowOn');
			that.find('li').addClass('ShowOn');
			var title = that.attr('data-title');
			if(title == 0){
				var top = title;
			}else{
				var top = $(title).offset().top;
			}

			$('body,html').stop().animate({scrollTop:top - 145 }, 800);
		}
		var ids = ['#home','#about','#news','#recruiting','#me'];
		function winScroll(winTop){
			var winHeight =  $(window).height();
			for(var i = 0 ; i<ids.length ; i++){
				//var n =i+1?i==5:i=4:i=i;
				console.log(winTop , $(ids[i]).offset().top ,$(ids[i+1]));
				if(winTop+winHeight <= $(ids[i]).offset().top && winTop+winHeight >= $(ids[i+1]).offset().top){
					Tab(i);
				}
			}
		}
		function Tab(i){
			$('.nav li').removeClass('ShowOn');
			$('.nav li').eq(i).addClass('ShowOn');
		}
		function  ScollPostion() {
			var t, l, w, h;
			if (document.documentElement && document.documentElement.scrollTop) {
				t = document.documentElement.scrollTop;
				l = document.documentElement.scrollLeft;
				w = document.documentElement.scrollWidth;
				h = document.documentElement.scrollHeight;
			} else if (document.body) {
				t = document.body.scrollTop;
				l = document.body.scrollLeft;
				w = document.body.scrollWidth;
				h = document.body.scrollHeight;
			}
			return { top: t, left: l, width: w, height: h };
		}
		
		function slide(that){
			$('.r-nav li').eq(that.index()).addClass('on').siblings().removeClass('on');
			$('.rting-list .cont').eq(that.index()).fadeIn("slow").siblings().fadeOut();
		}
		function submit(){
			var regPhone = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
			var regEmail =  /\w+[@]{1}\w+[.]\w+/;
			if($('.name').val() == ''){
				alert('用户名不能为空');
				//$('.name').css({'border':'1px solid red'});
				return false;	
			}
			if($('.phone').val() == ''){
				alert('手机号不能为空');
				//$('.phone').css({'border':'1px solid red'});
				return false;
			}
			if(!regPhone.test($('.phone').val())){
				//$('.phone').css({'border':'1px solid red'});
				alert('手机号格式错误');
				return false;
			}
			if(!regEmail.test($('.email').val())){
				//$('.email').css({'border':'1px solid red'});
				alert('邮箱格式错误');
				return false;
			}
			if($('.email').val() == ''){
				alert('邮箱不能为空');
				//$('.email').css({'border':'1px solid red'});
				return false;
			}
			$.ajax({
					type: "post",
					url: "/index.php?s=/Home/Index/contact",
					data:{
					'name':$('.name').val(),
					'mobile':$('.phone').val(),
					'email':$('.email').val(),
					'notes':$('.notes').val()
				},
			   dataType: "json", 
			   beforeSend:function(XMLHttpRequest){
				  $('.cover').show();
			   },
			   success: function (data) {
				   if(data.status == 1){
					   alert('添加成功');
					  window.location.href='.';
				   }
					console.log(data);
			   },error: function (XMLHttpRequest, textStatus, errorThrown) { 
				  $('.cover').hide();
				  alert('网络错误，请重试')
			   } 
			  });
		}
		return {
			init:init,
			NavScroll:NavScroll,
			slide:slide,
			submit:submit,
			winScroll:winScroll
		}
})();
