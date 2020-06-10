// var myAudio=document.getElementById("myAudio");
// //控制播放或者暂停的方法
// function playPause(){
// 	var ppButton=document.getElementById("playPause");
// 	if(myAudio.paused){//暂停
// 		myAudio.play();
// 		ppButton.innerHTML="暂停";
// 	}
// 	else{
// 		myAudio.pause();
// 		ppButton.innerHTML="播放";
// 	}
	
// }
// //控制快进快退的方法
// function goBack(val){
// 	myAudio.currentTime+=val;
// }
// //控制音量的方法
// function volume(val){
// 	myAudio.volume+=val;
// }
// //控制是否静音方法
// function isMuted(){
// 	var imButton=document.getElementById("isMuted");
// 	if(myAudio.muted){
// 		myAudio.muted=false;
// 		imButton.innerHTML="静音";
// 	}
// 	else{
// 		myAudio.muted=true;
// 		imButton.innerHTML="声音";
// 	}
// }







$(fuction(){
	$("#playPause").onclick(function(){
		if($("#myAudio").paused){
			$("#myAudio").play();
		}
		else{
			$("#myAudio").pause();
		}
	})
})