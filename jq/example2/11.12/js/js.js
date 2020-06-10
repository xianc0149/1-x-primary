<script type="text/javascript" src="jquery-1.12.4.min.js"></script>


			$(function(){
				var t=[];
				var dt=$("dl.collapse dt");
				var dd=$("dl.coolapse dd");
				//遍历每一个对象
				dt.each(function(i){
					t[i]=false;//表示当前dd处于展开状态
					$(dt[i]).click(function(i,dd){
					return function(){
						if(t[i]){//为真表示处于收起状态
							$(dd).show();
							t[i]=false;
							}
						else{
							$(dd).hide();
							t[i=true];
							}
						};
					}(i,dd[i]));
				});
			})
		