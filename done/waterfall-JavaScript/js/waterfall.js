window.onload=function(){
	waterfall('main','pin');
	var dataInt = {"data":[{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'}]}
	window.onscroll=function(){
		if (checkScrollSlide()) {
			var oParent = document.getElementById('main');
			for (var i = 0; i < dataInt.data.length; i++) {
				var oPin = document.createElement('div');
				oPin.className = 'pin';
				oParent.appendChild(oPin);
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oPin.appendChild(oBox);
				var oImg = document.createElement('img');
				oImg.src = 'images/'+dataInt.data[i].src;
				oBox.appendChild(oImg);
			}
			waterfall('main','pin');
		}
	}
}

function waterfall(parent,child)
{
	var oParent=document.getElementById(parent);
	var oBoxs = getByClass(oParent,child);
	var oWid = document.documentElement.clientWidth;
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(oWid/oBoxW);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
	var hArr = new Array();
	for (var i = 0; i < oBoxs.length; i++) {
		if (i<cols) 
		{
			hArr.push(oBoxs[i].offsetHeight);
		}
		else
		{
			var minH = Math.min.apply(null,hArr);
			var index = getMinhIndex(hArr,minH);

			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH +'px';
			oBoxs[i].style.left = oBoxW*index + 'px';

			hArr[index]+=oBoxs[i].offsetHeight;  //重新为该列计算高度
		}	
	}

}

function getByClass(parent,clsname)
{
	var arr = new Array();
	var oEle = parent.getElementsByTagName('*');
	for (var i = 0; i < oEle.length; i++) {
		if ( oEle[i].className == clsname) {
			arr.push(oEle[i]);
		}
		 
	}
	return arr;
}

function getMinhIndex(arr,val)
{
	for (var i in arr) {
		if (arr[i]==val) {
			return i;
		}
	}

}

function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,'pin');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scroll_Top = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH<scroll_Top+height)?true:false;
}