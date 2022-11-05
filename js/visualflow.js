var workspace = Blockly.inject(
	'blocklyDiv', 
	{
		toolbox: Control.prototype.createToolBox(),
		zoom: {
			controls: true,
			wheel: true,
			startScale: 1.0,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2,
			pinch: true
		},
		grid: {
			spacing: 20,
			length: 3,
			color: '#ccc',
			snap: true,
		},
		scrollbars: true,
		trashcan: true,
		maxBlocks: Control.prototype.getMaxBlocks()
	}
);

workspace.addChangeListener(updateCapacity);

var runButton = document.getElementById('runButton');
var stopButton = document.getElementById('stopButton');
var resetButton = document.getElementById('resetButton');
var hintButton = document.getElementById('hintButton');
var xmlButton = document.getElementById('xmlButton');

var robotSpeed = document.getElementById('robotSpeed');

var myInterpreter = null;

var highlightPause = false;
var latestCode = '';

var timeoutId = null;

// Load the interpreter now, and upon future changes.
generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
	if (!(event instanceof Blockly.Events.Ui)) {
		// Something changed. Parser needs to be reloaded.
		generateCodeAndLoadIntoInterpreter();
	}
});

createNavigate();

Control.prototype.initGame();
updateCapacity();

runButton.addEventListener("click", runCode, false);
stopButton.addEventListener("click", forceStop, false);
resetButton.addEventListener("click", resetMap, false);
hintButton.addEventListener("click", putHint, false);
xmlButton.addEventListener("click", showXML, false);
stopButton.disabled = true;
stopButton.setAttribute('class', 'hide');
Control.prototype.patternSelector.addEventListener("change", Control.prototype.beforeRun);

// resize workspace
var wsWidth = document.getElementById('workspaceColumn').parentNode.clientWidth - document.getElementById('mapColumn').clientWidth - 20;
if (wsWidth > 550) {
	document.getElementById('blocklyDiv').setAttribute('style', 'width: '+wsWidth+'px');
	Blockly.svgResize(workspace);
}

// hide buttons
xmlButton.setAttribute("style", "display: none");	// when develop, comment out here
if (Map.prototype.hintBlocks.length == 0) {
	hintButton.setAttribute("style", "display: none");
}

function createNavigate() {
	var pre = document.getElementById('previousLink');
	var nex = document.getElementById('nextLink');
	var linkText;
	if (Map.prototype.links.previous != "") {
		pre.setAttribute('href', '../' + Map.prototype.links.previous.toLowerCase() + '/');
		linkText = Map.prototype.links.previous.toUpperCase();
	}
	else {
		pre.removeAttribute('href');
		linkText = '前の問題';
	}
	for (var i = pre.childNodes.length - 1; i >= 0; i--) {
		pre.removeChild(pre.childNodes[i]);
	}
	pre.appendChild(document.createTextNode(linkText));
	if (Map.prototype.links.next != "") {
		nex.setAttribute('href', '../' + Map.prototype.links.next.toLowerCase() + '/');
		linkText = Map.prototype.links.next.toUpperCase();
	}
	else {
		nex.removeAttribute('href');
		linkText = '次の問題';
	}
	for (var i = nex.childNodes.length - 1; i >= 0; i--) {
		nex.removeChild(nex.childNodes[i]);
	}
	nex.appendChild(document.createTextNode(linkText));
	
	if (Map.prototype.links.question != "") {
		document.getElementById('title').appendChild(document.createTextNode(' (' + Map.prototype.links.question + ')'));
	}
}

function initApi(interpreter, globalObject) {
	// Add an API function for the alert() block, generated for "text_print" blocks.
	interpreter.setProperty(globalObject, 'alert',
			interpreter.createNativeFunction(function(text) {
		text = arguments.length ? text : '';
	}));

	// Add an API function for the prompt() block.
	var wrapper = function(text) {
		return interpreter.createPrimitive(prompt(text));
	};
	interpreter.setProperty(globalObject, 'prompt',
			interpreter.createNativeFunction(wrapper));

	// Add an API function for highlighting blocks.
	var wrapper = function(id) {
		id = String(id || '');
		return interpreter.createPrimitive(highlightBlock(id));
	};
	interpreter.setProperty(globalObject, 'highlightBlock',
			interpreter.createNativeFunction(wrapper));
	
	// 
	var wrapper = function(cmd, arg1, arg2, arg3) {
		cmd = String(cmd || '');
		return interpreter.createPrimitive(ControlOneTurn(cmd, arg1, arg2, arg3));
	};
	interpreter.setProperty(globalObject, 'ControlOneTurn',
			interpreter.createNativeFunction(wrapper));
}

function highlightBlock(id) {
	workspace.highlightBlock(id);
	highlightPause = true;
}

function resetStepUi(clearOutput) {
	workspace.highlightBlock(null);
	highlightPause = false;
}

function generateCodeAndLoadIntoInterpreter() {
	// Generate JavaScript code and parse it.
	Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
	Blockly.JavaScript.addReservedWords('highlightBlock');
	latestCode = Blockly.JavaScript.workspaceToCode(workspace);
	resetStepUi(true);
}

function stepOneBlock() {
	highlightPause = false;
	var hasMoreCode = false;
	if (myInterpreter instanceof Interpreter) {
		do {
			try {
				if ((myInterpreter !== null) && (typeof myInterpreter.step == 'function')) {
					hasMoreCode = myInterpreter.step();
				}
				else {
					hasMoreCode = false;
				}
			}
			finally {
				if (!hasMoreCode) {
					stopStep();
				}
			}
		}while(hasMoreCode && !highlightPause);
	}
}

function stopStep() {
	clearInterval(timeoutId);
	myInterpreter = null;
	resetStepUi(false);
	setTimeout(function() {
		runButton.disabled = false;
		runButton.setAttribute('class', '');
		stopButton.disabled = true;
		stopButton.setAttribute('class', 'hide');
		resetButton.disabled = false;
		resetButton.setAttribute('class', '');
		hintButton.disabled = false;
		hintButton.setAttribute('class', '');
		robotSpeed.setAttribute('class', '');
		
		Control.prototype.balloon.setAttribute('class', '');
		Control.prototype.showPatternSelector();
		Control.prototype.showLeftBlocks();
	}, 1000);
}

function runCode() {
	Control.prototype.beforeRun();
	
	if (!myInterpreter) {
		// DBG
		//alert(latestCode);
		
		runButton.disabled = true;
		runButton.setAttribute('class', 'hide');
		stopButton.disabled = false;
		stopButton.setAttribute('class', '');
		resetButton.disabled = true;
		resetButton.setAttribute('class', 'hide');
		hintButton.disabled = true;
		hintButton.setAttribute('class', 'hide');
		robotSpeed.setAttribute('class', 'hide');

		Control.prototype.balloon.setAttribute('class', 'hide');
		
		Control.prototype.patternSelector.setAttribute('class', 'hide');
		Control.prototype.leftBlocksDiv.setAttribute('class', 'hide');
		
		resetStepUi(true);
		myInterpreter = new Interpreter(latestCode, initApi);

		// DBG
		//alert(latestCode);
		
		var spd = 1000;
		switch(parseInt(robotSpeed.value)) {
			case 0:
				spd = 1500;
				break;
			case 2:
				spd = 700;
				break;
			case 3:
				spd = 400;
				break;
			case 4:
				spd = 200;
				break;
			default:
				break;
		}

		highlightPause = true;
		timeoutId = setInterval(stepOneBlock, spd);
	}
}

function ControlOneTurn(cmd, arg1, arg2, arg3) {
	var ret = Control.prototype.oneTurn(cmd, arg1, arg2, arg3);
	
	if (Control.prototype.goal) {
		stopStep();
		Control.prototype.patternSelector.children[Control.prototype.patternSelector.selectedIndex].setAttribute('class', 'pass');
		setTimeout(function() {
			Swal.fire({
				title: "&#128522;",
				text: "やったー！ゴールに着いたよ！",
			});
		}, 1000);
		return ret;
	}
	
	if (Control.prototype.emptyLife) {
		stopStep();
		setTimeout(function() {
			Swal.fire({
				title: "&#128555;",
				text: "命令が多くて、つかれちゃった……",
				confirmButtonText: "もう一度",
			});
		}, 1000);
		return ret;
	}
	
	return ret;
}

function forceStop() {
	stopStep();
}

function resetMap() {
	Control.prototype.beforeRun();
}

function updateCapacity() {
	Control.prototype.leftBlocks.textContent = workspace.remainingCapacity();
}

function putHint() {
	var xml = Blockly.Xml.textToDom(Map.prototype.hintBlocks);
	Blockly.Xml.domToWorkspace(xml, workspace);
	Swal.fire({
		title: "&#129300;",
		text: "ヒントの命令をおいたよ",
	});
}

function showXML() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var myBlockXml = Blockly.Xml.domToText(xml);
	
	// remove id attr
	var txt = "";
	while(myBlockXml.indexOf(" id=\"") >= 0) {
		var idx = myBlockXml.indexOf(" id=\"");
		txt += myBlockXml.substring(0, idx);
		myBlockXml = myBlockXml.substring(idx + 5);
		myBlockXml = myBlockXml.substring(myBlockXml.indexOf("\"") + 1);
	}
	txt += myBlockXml;
	
	console.log(txt);
}
