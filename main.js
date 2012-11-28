var _username;
var _password;
function niClientApp_getURL() {
    return localStorage.getItem("currentURL");
}
function niChrome_injectFrame() {
	var frm = document.createElement("iframe");
	frm.setAttribute("src",chrome.extension.getURL("toolbar.html"));
	frm.setAttribute("id","novaInitiaMasterFrame");
	frm.setAttribute("style","position: fixed; left: 0px; top: 0px; border: 0px; width: 100%; height: 45px; background-color: white");
	
	document.getElementsByTagName("body")[0].appendChild(frm);
}


function niClientApp_login() {
	_username = prompt("USERNAME", "");
	_password = prompt("PASSWORD", "");
	
	fnNovaInitia_setUserLogin(_username,_password);
	window.NovaInitia.Toolbar.process_login(null)
	
}
function niClientApp_loadURL(button) {
        console.log(button.id);
        chrome.extension.sendRequest({type:"REDIRECT",button:button.id});
}

function niClientApp_catchPopup(which) {
   
   console.log("Caught panel... "+which.id);
   var panel = new Object();
   panel.elements = new Object();
   panel.type = "POPUP";
   panel.id = which.id;
   panel.elements = which.elements;
   
   if (which.elements) {
      for (var i=0; i<which.elements.length; i++) {
          //panel.elements[i].id = which.elements[i].id;
          //panel.elements[i].val = which.elements[i].val;
         console.log("  Element '"+which.elements[i].id+"' set to '"+which.elements[i].val+"'");
      }
     chrome.extension.sendRequest(panel);

      
   } else {
          
      // handle barrels
      if (which.id == "nova_initia_tool_barrel") {
         var sg = prompt("Enter SG: ","0");
         var traps = prompt("Enter Traps: ","0");
         var barrels = prompt("Enter Barrels: ","0");
         var spiders = prompt("Enter Spiders: ","0");
         var shields = prompt("Enter Shields: ","0");
         var doorways = prompt("Enter Doorways: ","0");
         var signposts = prompt("Enter Signposts: ","0");
         var message = prompt("Enter Message: ","Blah blah blah!");
         window.NovaInitia.Toolbar.stash_barrel(sg,traps,barrels,spiders,shields,doorways,signposts,message);
      }
      
      // handle signposts
      if (which.id == "nova_initia_tool_signpost") {
         var signpost_panel_popup_title = prompt("Enter title: ","");
         var signpost_panel_popup_comment = prompt("Enter comment: ","");
         var signpost_panel_popup_nsfw = false;
         window.NovaInitia.Toolbar.place_signpost(signpost_panel_popup_title,signpost_panel_popup_comment,signpost_panel_popup_nsfw);
      }
        
      //handle doorways
      if (which.id == "nova_initia_tool_doorway") {
         var doorway_popup_panel_URL = prompt("URL:","");
         var doorway_popup_panel_hint = prompt("Hint:","");
         var doorway_popup_panel_comment = prompt("Comment:","");
         var doorway_popup_panel_nsfw = false;
         window.NovaInitia.Toolbar.open_doorway(doorway_popup_panel_URL, doorway_popup_panel_hint,doorway_popup_panel_comment, doorway_popup_panel_nsfw);
      }
   }
}

window.addEventListener("load",niChrome_injectFrame());