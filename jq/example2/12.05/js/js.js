var myVideo=document.getElementById("myVideo");
//控制播放或者暂停的方法
function playPause(){
	var ppButton=document.getElementById("playPause");
	if(myVideo.paused){//暂停
		myVideo.play();
		ppButton.innerHTML="暂停";
	}
	else{
		myVideo.pause();
		ppButton.innerHTML="播放";
	}
	
}
//控制快进快退的方法
function goBack(val){
	myVideo.currentTime+=val;
}
//控制音量的方法
function volume(val){
	myVideo.volume+=val;
}
//控制是否静音方法
function isMuted(){
	var imButton=document.getElementById("isMuted");
	if(myVideo.muted){
		myVideo.muted=false;
		imButton.innerHTML="静音";
	}
	else{
		myVideo.muted=true;
		imButton.innerHTML="声音";
	}
}