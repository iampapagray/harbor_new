////////////////////////////////
// All message into Unity are defined here
// Make sure that methods are implemented on Unity side
///////////////////////////////

function send_enter() {
	// BrowserInvoker - receiver object name - remains the same
	// Enter - name of method to invoke
	myGameInstance.SendMessage('BrowserInvoker', 'Enter');
}

function send_explore() {
	// BrowserInvoker - receiver object name - remains the same
	// Enter - name of method to invoke
	myGameInstance.SendMessage('BrowserInvoker', 'Explore');
}

function send_leave() {
	myGameInstance.SendMessage('BrowserInvoker', 'Leave');
}


function toggle_debug_layer() {
	myGameInstance.SendMessage('BrowserInvoker', 'ToggleDebugLayer');
}
