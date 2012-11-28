var currentURL = "";

registerListeners = function() {
    chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		console.log(request);
	sendResponse(processRequest(request,sender));
	}
);
    
}
processRequest = function(request, sender)  {
        
        chrome.tabs.getSelected(null, function(tab) {
            
        if(request.type = "REDIRECT"){
        console.log(tab);
        switch(request.button){
            case "nova_initia_tool_profile":
                chrome.tabs.update(tab.id,{url:"http://www.nova-initia.com/remog/user/TeamBobTest"});
                break;
            case "nova_initia_tool_events":
                chrome.tabs.update(tab.id,{url:"http://www.nova-initia.com/remog/events"});
                break;
            case "nova_initia_tool_mail":
                chrome.tabs.update(tab.id,{url:"http://www.nova-initia.com/remog/mail"});
                break;
            case "nova_initia_tool_sg":
                chrome.tabs.update(tab.id,{url:"http://www.nova-initia.com/remog/mail"});
                break;
        }
        }
        
        if(request.type = "POPUP") {
            chrome.tabs.sendRequest(tab.id,request);
            
        }
        if(request.type = "SEND_URL") {
            
            localStorage.setItem('currentURL',request.url );
        }
         
    });
    
}
registerListeners();