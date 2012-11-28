registerListeners = function() {
    chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		console.log(request);
	sendResponse(niChrome_injectPanel(request));
	}
);
}



function niChrome_injectPanel(request) {
	var frm = document.createElement("div");
	frm.setAttribute("id",request.id);
	console.log(request.id);
        switch(request.id){
            case ("nova_initia_trap_panel"):
                frm.setAttribute("style","position: fixed; left: 50px; top: 80px; border: 0px; width: 300px; height: 300px;background-repeat:no-repeat;background-image:url("+request.elements[0].val+")");
                frm.innerHTML = "<div style=\"width:200px;position:relative;margin-top:160px\"> <b id=\"" + request.elements[1].id+ "\">" + request.elements[1].val + "</b>" + "<br /><p style=\"margin-left:10px;\" id=\""+request.elements[2].id+"\">" + request.elements[2].val + "</p></div>";
                break;
            case ("nova_initia_spider_panel"):
                frm.setAttribute("style","position: fixed; left: 50px; top: 80px; border: 0px; width: 300px; height: 300px;background-repeat:no-repeat;background-image:url("+request.elements[0].val+")");
                frm.innerHTML = "<div style=\"width:200px;position:relative;margin-top:160px\"> <b id=\"" + request.elements[1].id+ "\">" + request.elements[1].val + "</b>" + "<br /><p style=\"margin-left:10px;\" id=\""+request.elements[2].id+"\">" + request.elements[2].val + "</p></div>";
                break;
            case ("nova_initia_barrel_panel"):
                frm.setAttribute("style","position: fixed; left: 50px; top: 280px; border: 0px; width: 300px; height: 300px;background-repeat:no-repeat;background-image:url(http://mikederoche.com/cs320/commoncode/skin/images/overlays/barrel_found.jpg)");
                frm.innerHTML = "<div style=\"width:280px;position:relative;margin-top:160px\"><a style=\"\" href=\"#\"><img style=\"margin-right:20px;float:left;\" src=\"http://mikederoche.com/cs320/commoncode/skin/images/overlays/open_button.png\" /></a> <a style=\"\" href=\"#\"><img style=\"float:left;\" src=\"http://mikederoche.com/cs320/commoncode/skin/images/overlays/dismiss_button.png\" /></a> </div>";
                break;
            case ("nova_initia_doorway_panel"):
                frm.setAttribute("style","position: fixed; left: 50px; top: 480px; border: 0px; width: 300px; height: 300px;background-repeat:no-repeat;background-image:url(http://mikederoche.com/cs320/commoncode/skin/images/overlays/doorway_set.png)");
                frm.innerHTML = "<div style=\"width:280px;position:relative;margin-top:160px\"><a style=\"\" href=\"#\"><img style=\"margin-right:20px;float:left;\" src=\"http://mikederoche.com/cs320/commoncode/skin/images/overlays/through_button.png\" /></a> <a style=\"\" href=\"#\"><img style=\"float:left;\" src=\"http://mikederoche.com/cs320/commoncode/skin/images/overlays/dismiss_button.png\" /></a> </div>";
                break;
            case ("nova_initia_signpost_panel"):
                frm.setAttribute("style","position: fixed; left: 50px; top: 480px; border: 0px; width: 300px; height: 300px;background-repeat:no-repeat;background-image:url(http://mikederoche.com/cs320/commoncode/skin/images/overlays/signpost_2.jpg)");
                frm.innerHTML = "<div style=\"width:280px;position:relative;margin-top:170px\"><a style=\"\" href=\"#\"><img style=\"margin-right:20px;float:left;\" src=\"http://mikederoche.com/cs320/commoncode/skin/images/overlays/start_button.png\" /></a> <a style=\"\" href=\"#\"><img style=\"float:left;\" src=\"http://mikederoche.com/cs320/commoncode/skin/images/overlays/dismiss_button.png\" /></a> </div>";
                break;
            
        }
        
	document.getElementsByTagName("body")[0].appendChild(frm);
        
}
function niChrome_sendURL() {
    chrome.extension.sendRequest({type:"SEND_URL", url: document.URL});
}
initialize = function() {
    niChrome_sendURL();
    registerListeners();
    
}


window.addEventListener("load", initialize, false);