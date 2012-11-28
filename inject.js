function niChrome_injectFrame() {
	var frm = document.createElement("iframe");
	frm.setAttribute("src",chrome.extension.getURL("toolbar.html"));
	frm.setAttribute("id","novaInitiaMasterFrame");
	frm.setAttribute("style","position: fixed; left: 0px; top: 0px; border: 0px; width: 100%; height: 45px; background-color: white");
	
	document.getElementsByTagName("body")[0].appendChild(frm);
}

window.addEventListener("load",niChrome_injectFrame());