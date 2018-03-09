var oneStepClick = (function(){
	var _this = null;
	var bclicked = false;
	function Init(obj, cal, notcal){
		_this = this;
		$(obj).click(function(event){
			if(!bclicked){
				bclicked = true;
				cal.bind(_this)();
			}else{
				event.stopImmediatePropagation();
				notcal();
			}
		})
	}
	function Done(){
		bclicked = false;
	}
	return {
		Init:Init,
		Done:Done
	}
})


$.fn.OneStepClick = function(cal,notcal){
	oneStepClick().Init(this, cal, notcal)
}