var RESIZE_OFFSET = 250;
chrome.browserAction.onClicked.addListener(function(){
	chrome.windows.getAll(null, function(windows){
		windows.forEach(function(win){
			try {
				chrome.windows.update(win.id, {left:win.left+20},function(){
					chrome.windows.update(win.id, {left:win.left});
				});	
			}
			catch (err) {
				console.log(err);
			}
		});
	});
});
