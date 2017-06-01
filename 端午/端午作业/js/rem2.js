(function (doc,win){
	function change()
	{
		document.documentElement.style.fontSize=document.documentElement.clientWidth*100/640+'px';
	}
	doc.addEventListener('DOMContentLoaded',change,false);
	win.addEventListener('resize',change,false);
})(document,window);