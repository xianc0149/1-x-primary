//计算对象
/*var calculator={
	//用于保存输入的数字和符号数据
	number:[],
	//计算方法
	numberClick:numberClick,
	operatorClick:operatorClick,
	equalClick:equalClick,
	cleanClick:cleanClick
}*/
number = [];
//输入数字方法
var numberClick=function(value){
	var val=document.getElementById("output").value;
	//显示框为0时，输入0无效
	if(value=="0" && val=="0"){
		return;
	}
	//如果显示框为0，则去掉0，只显示输入值
	if(val=="0"){
		document.getElementById("output").value=value;
	}else{
		//在显示框显示对应字符
		document.getElementById("output").value=val+value;
	}
}
//输入运算符方法
var operatorClick=function(value){
	var val=document.getElementById("output").value;
	//判断是否连续输入了两次运算符，运算符后面输入数字，不能练习输入多个运算符（运算符两端都有空格）
	if(val[val.length-1]==" "){
		return;
	}
	//在显示框显示对应运算符
	document.getElementById("output").value=val+" "+value+" ";
}
//计算并显示结果
var equalClick=function(){
	//分割算术数组
	number=document.getElementById("output").value.split(" ");
	
	for(var index=0;index<number.length;index++){
		//计算乘除
		//若输入的字符最后为"*"或"/"运算符，则在最后面加1
		if(this.number[index]=="*" || this.number[index]=="/"){
		if(this.number[index+1]==""){
			this.number[index+1]=1;
		}
		if(this.number[index]=="*"){
			//删除数组内已经计算的数字，并添加计算后的数字
			var index_num=Number(index);
			var firstNum=Number(this.number[index_num-1]);
			var secondNum=Number(this.number[index_num+1]);
			var result=firstNum*secondNum;
			this.number.splice(index_num-1,3,result);		//相当于减了两个数	
			
		}else if(this.number[index]=="/"){
			//删除数组内已经计算的数字，并添加计算后的数字
			var index_num=Number(index);
			var firstNum=Number(this.number[index_num-1]);
			var secondNum=Number(this.number[index_num+1]);
			var result=firstNum/secondNum;
			this.number.splice(index_num-1,3,result);
			
		}
		
		}
			//计算加减
	
		//若输入的字符最后为"+"或"-"运算符，则在最后面加1
		if(this.number[index]=="-" || this.number[index]=="+"){
		if(this.number[index+1]==""){
			this.number[index+1]=0;
		}
		if(this.number[index]=="+"){
			//删除数组内已经计算的数字，并添加计算后的数字
			var index_num=Number(index);
			var firstNum=Number(this.number[index_num-1]);
			var secondNum=Number(this.number[index_num+1]);
			var result=firstNum+secondNum;
			this.number.splice(index_num-1,3,result);	
			
		}else if(this.number[index]=="-"){
			//删除数组内已经计算的数字，并添加计算后的数字
			var index_num=Number(index);
			var firstNum=Number(this.number[index_num-1]);
			var secondNum=Number(this.number[index_num+1]);
			var result=firstNum-secondNum;
			this.number.splice(index_num-1,3,result);
			
		}
		
		}
		
	
	}

	document.getElementById("output").value=number[0]
}
//清空计算
var cleanClick=function(){
	document.getElementById("output").value="";
}

var fn=function(){
	var val=document.getElementById("output").value;
	var reg= new RegExp("^\\d+([+*/-]\\d+)+$")
}



