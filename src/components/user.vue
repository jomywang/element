<template>	
   <div class="usertxt">
   	<p class="user-logo"><img src="./../assets/user-avatar.png"></p>
   	<div class="user-txt">
	   	<p>jomywang</p>
	   	<p class="meta">web dev</p>
   	</div>

   </div>
</template>
<style>
.usertxt{padding: 10px 0 0px 0px;line-height: 20px;color: #48576;display: flex;height: 70px;overflow: hidden;box-sizing:border-box;background: #344C67;color: #fff;}
.user-logo{width:48px;margin: 0 15px 0 20px }
.usertxt img{width: 48px;height: 48px;border-radius: 50%;text-align: right;}	
.user-txt{flex:1;font-size: 16px;padding:5px 0 0 0;}
.meta{color: rgba(255,255,255,.6);font-size: 14px}
</style>