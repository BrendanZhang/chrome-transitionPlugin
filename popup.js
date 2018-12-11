let selectNode = document.querySelector("#select")

selectNode.onchange = function() {
	console.log(this.value)
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		chrome.tabs.sendMessage(tabs[0].id, { switch: this.value }, function(
			response
		) {
			console.log("i am popup.js ,hear from content_script")
			console.log(response)
		})
	})
}
