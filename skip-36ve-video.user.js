// ==UserScript==
// @name         微知库跳视频
// @namespace    https://unresolved.github.io/
// @version      1.0
// @description  自动跳过观看微知库视频
// @author       unresolved
// @match        *://fyzyk.36ve.com/?q=items/student/study/*
// @grant        none
// ==/UserScript==

(function(){'use strict';window.onload=function(){const video=document.querySelector('video');try{video.muted=true;video.autoplay=true}catch(e){}console.log(video);setTimeout(function(){try{video.muted=false;video.currentTime=video.duration-3;video.play()}catch(e){}setTimeout(function(){const list=document.querySelectorAll("li");const newList=[];for(let i=0;i<list.length;i++){const el=list[i];if(el.attributes.onclick===undefined){continue}newList.push(el)}for(let i=0;i<newList.length;i++){const el=newList[i];if(el.className==="current"){const next=newList[i+1];const a=next.getElementsByTagName('a')[0];console.log(a);window.location.href=a.href}}},5000)},1000)}})();