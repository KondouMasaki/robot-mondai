var Control = function() {
};
Control.prototype = {
	"goal": false,
	"emptyLife": false,
	"broken": false,
	"goalNum": 1,
	"time": 0,
	// GUI elements
	"balloon": null,
	"runButton": null,
	"stopButton": null,
	"resetButton": null,
	"resetLabel": null,
	"xmlButton": null,
	"registers": null,
	"robotSpeed": null,
	"robotSpeedLabel": null,
	"patternSelector": null,
	"patternLabel": null,
	"hintButton": null,
	"leftBlocks": null,
	"leftBlocksDiv": null,
	"remainingEnergy": null,
	"remainingEnergyDiv": null,
};

/**
 * ツールボックスの作成
 */
Control.prototype.createToolBox = function() {
	const ptr = Map.prototype.robot;
	let xml = '<xml>';
	// Basic
	if (ptr.type >= 0) {
		xml += '<category name="Basic" colour="120">';
		if (ptr.Basic.forward) {
			xml += '<block type="forward"></block>';
		}
		if (ptr.Basic.turn_right) {
			xml += '<block type="turn_right"></block>';
		}
		if (ptr.Basic.turn_left) {
			xml += '<block type="turn_left"></block>';
		}
		if (ptr.Basic.nop) {
			xml += '<block type="nop"></block>'
		}
		xml += '</category>';
	}
	// Standard
	if (ptr.type >= 1) {
		xml += '<category name="Standard" colour="180">';
		if (ptr.Standard.floor_color_is) {
			xml += '<block type="floor_color_is">';
			xml += '<value name="color">';
			xml += '<block type="math_number"><field name="NUM">0</field></block>';
			xml += '</value></block>';
		}
		if (ptr.Standard.robot_direction_is) {
			xml += '<block type="robot_direction_is">';
			xml += '<value name="direction">';
			xml += '<block type="math_number"><field name="NUM">0</field></block>';
			xml += '</value></block>';
		}
		if (ptr.Standard.movable_is) {
			xml += '<block type="movable_is">';
			xml += '<value name="direction">';
			xml += '<block type="math_number"><field name="NUM">0</field></block>';
			xml += '</value></block>';
		}
		xml += '<block type="math_number"><field name="NUM">0</field></block>';
		xml += '</category>';
	}
	// Advanced
	if (ptr.type >= 2) {
		xml += '<category name="Advanced" colour="225">';
		if (ptr.Advanced.times_loop) {
			xml += '<block type="times_loop">';
			xml += '<value name="times">';
			xml += '<block type="math_number"><field name="NUM">2</field></block>';
			xml += '</value></block>';
		}
		if (ptr.Advanced.floor_color_loop) {
			xml += '<block type="floor_color_loop">';
			xml += '<value name="color">';
			xml += '<block type="math_number"><field name="NUM">0</field></block>';
			xml += '</value></block>';
		}
		if (ptr.Advanced.movable_loop) {
			xml += '<block type="movable_loop">';
			xml += '<value name="direction">';
			xml += '<block type="math_number"><field name="NUM">0</field></block>';
			xml += '</value></block>';
		}
		xml += '<block type="math_number"><field name="NUM">0</field></block>';
		xml += '</category>';
	}
	// Expert
	if (ptr.type >= 3) {
		xml += '<category name="Expert" colour="270">';
		if (ptr.Expert.write_register) {
			xml += '<block type="write_register"></block>';
		}
		if (ptr.Expert.read_register) {
			xml += '<block type="read_register"></block>';
		}
		if (ptr.Expert.get_floor_color) {
			xml += '<block type="get_floor_color"></block>';
		}
		if (ptr.Expert.get_direction) {
			xml += '<block type="get_direction"></block>';
		}
		xml += '<block type="math_number"><field name="NUM">0</field></block>';
		xml += '</category>';
	};
	// Enhanced
	if (ptr.type >= 4) {
		xml += '<category name="Enhanced" colour="300">';
		if (ptr.Enhanced.values_equal_is) {
			xml += '<block type="values_equal_is"></block>';
		}
		if (ptr.Enhanced.values_equal_loop) {
			xml += '<block type="values_equal_loop"></block>';
		}
		if (ptr.Enhanced.infinity_loop) {
			xml += '<block type="infinity_loop"></block>';
		}
		if (ptr.Enhanced.is_movable_to) {
			xml += '<block type="is_movable_to">';
			xml += '<value name="direction">';
			xml += '<block type="math_number"><field name="NUM">0</field></block>';
			xml += '</value></block>';
		}
		xml += '<block type="math_number"><field name="NUM">0</field></block>';
		xml += '</category>';
	}
	// Superior
	if (ptr.type >= 5) {
		xml += '<category name="Superior" colour="0">';
		if (ptr.Superior.add_register) {
			xml += '<block type="add_register"></block>';
		}
		if (ptr.Superior.sub_register) {
			xml += '<block type="sub_register"></block>';
		}
		if (ptr.Superior.add_register_index) {
			xml += '<block type="add_register_index"></block>';
		}
		if (ptr.Superior.sub_register_index) {
			xml += '<block type="sub_register_index"></block>';
		}
		if (ptr.Superior.set_register_index) {
			xml += '<block type="set_register_index"></block>';
		}
		if (ptr.Superior.get_register_index) {
			xml += '<block type="get_register_index"></block>';
		}
		xml += '<block type="math_number"><field name="NUM">0</field></block>';
		xml += '</category>';
	}
	if (ptr.type >= 6) {
		xml += '<category name="Replete" colour="30">';
		if (ptr.Replete.read_cell_value) {
			xml += '<block type="read_cell_value"></block>';
		}
		if (ptr.Replete.read_cell_value_index) {
			xml += '<block type="read_cell_value_index"></block>';
		}
		if (ptr.Replete.write_cell_value) {
			xml += '<block type="write_cell_value"></block>';
		}
		if (ptr.Replete.values_compare) {
			xml += '<block type="values_compare"></block>';
		}
		if (ptr.Replete.expression_if) {
			xml += '<block type="expression_if"></block>';
		}
		if (ptr.Replete.expression_loop) {
			xml += '<block type="expression_loop"></block>';
		}
		xml += '<block type="math_number"><field name="NUM">0</field></block>';
		xml += '</category>';
	}
	xml += '</xml>';
	return xml;
};

/**
 * ブロック数の制限を取得
 */
Control.prototype.getMaxBlocks = function() {
	return (Map.prototype.blocksLimit >= 1) ? Map.prototype.blocksLimit : Infinity;
};

/**
 * ゲーム開始時の処理
 */
Control.prototype.initGame = function() {
	Map.prototype.backupMap();
	Map.prototype.backupChars();
	
	Control.prototype.balloon = document.getElementById('robotBalloon');
	Control.prototype.balloon.children[0].appendChild(document.createTextNode(Map.prototype.hint));
	
	Control.prototype.runButton = document.getElementById('runButton');
	Control.prototype.runButton.addEventListener('click', runCode, false);
	
	Control.prototype.stopButton = document.getElementById('stopButton');
	Control.prototype.stopButton.addEventListener('click', forceStop, false);
	Control.prototype.hideStopButton();
	
	Control.prototype.resetButton = document.getElementById('resetButton');
	Control.prototype.resetLabel = document.getElementById('resetLabel');
	Control.prototype.resetButton.addEventListener('click', resetMap, false);
	
	Control.prototype.xmlButton = document.getElementById('xmlButton');
	Control.prototype.xmlButton.addEventListener('click', showXML, false);
	//Control.prototype.hideXMLButton();	// when develop, comment out here
	
	Control.prototype.registers = document.getElementById('registers');
	
	Control.prototype.robotSpeed = document.getElementById('robotSpeed');
	Control.prototype.robotSpeedLabel = document.getElementById('speedLabel');
	
	Control.prototype.patternSelector = document.getElementById('patternSelector');
	Control.prototype.patternLabel = document.getElementById('patternLabel');
	if (Map.prototype.isValidPatterns()) {
		let frg = document.createDocumentFragment();
		for (let i = 0; i < Map.prototype.patterns; i++) {
			const op = document.createElement('option');
			op.appendChild(document.createTextNode('パターン '+(i+1)));
			op.setAttribute('value', i);
			frg.appendChild(op);
		}
		Control.prototype.patternSelector.appendChild(frg);
	}
	Control.prototype.setPatternSelectorVisible();
	Control.prototype.patternSelector.addEventListener('change', Control.prototype.beforeRun);
	
	Control.prototype.hintButton = document.getElementById('hintButton');
	Control.prototype.hintButton.addEventListener('click', putHint, false);
	Control.prototype.setHintButtonVisible();
	
	Control.prototype.leftBlocks = document.getElementById('capacity');
	Control.prototype.leftBlocksDiv = document.getElementById('leftBlocks');
	Control.prototype.setLeftBlocksVisible();
	
	Control.prototype.remainingEnergy = document.getElementById('energy');
	Control.prototype.remainingEnergyDiv = document.getElementById('remainingEnergy');
	Control.prototype.hideRemainingEnergy();

	Control.prototype.createNavigate();
	
	Control.prototype.setFirstSpeed();

	Control.prototype.beforeRun();
};

/**
 * ナビゲーションを作る
 */
Control.prototype.createNavigate = function() {
	const pre = document.getElementById('previousLink');
	const nex = document.getElementById('nextLink');
	let linkText;
	if (Map.prototype.links.previous != '') {
		pre.setAttribute('href', '../' + Map.prototype.links.previous.toLowerCase() + '/');
		linkText = Map.prototype.links.previous.toUpperCase();
	}
	else {
		pre.removeAttribute('href');
		linkText = '前の問題';
	}
	for (let i = pre.childNodes.length - 1; i >= 0; i--) {
		pre.removeChild(pre.childNodes[i]);
	}
	pre.appendChild(document.createTextNode(linkText));
	if (Map.prototype.links.next != '') {
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
	
	if (Map.prototype.links.question != '') {
		document.getElementById('title').appendChild(document.createTextNode(' (' + Map.prototype.links.question + ')'));
	}
};

/**
 * ロボットの最初の速さを設定する
 */
Control.prototype.setFirstSpeed = function() {
	const speed = Map.prototype.getFirstSpeed();
	if (speed >= 0) {
		Control.prototype.setRobotSpeed(speed);
	}
};

/**
 * コード実行前の処理
 */
Control.prototype.beforeRun = function() {
	Control.prototype.initRobot();	// ロボット初期化
	
	Map.prototype.restoreMap();
	Map.prototype.restoreChars();
	Map.prototype.beforeStart(Control.prototype.patternSelector.value);
	
	Control.prototype.goal = false;
	Control.prototype.emptyLife = false;
	Control.prototype.broken = false;
	Control.prototype.goalNum = Map.prototype.goals;
	Control.prototype.time = 0;
	Control.prototype.drawMap();
	Control.prototype.drawRobot();
};

/**
 * マップ情報からロボットの初期化
 */
Control.prototype.initRobot = function() {
	var pos = Robot.prototype.position;
	var start = Map.prototype.start;
	pos.x = start.x;
	pos.y = start.y;
	Robot.prototype.direction = start.direction;
	Robot.prototype.life = start.life;
	Robot.prototype.initRegisters();
};


/**
 * メッセージバルーンを表示
 */
Control.prototype.showMessageBalloon = function() {
	Control.prototype.balloon.setAttribute('class', '');
};
/**
 * メッセージバルーンを非表示にする
 */
Control.prototype.hideMessageBalloon = function() {
	Control.prototype.balloon.setAttribute('class', 'hide');
};

/**
 * のこりブロックの状態をセット
 */
Control.prototype.setLeftBlocksVisible = function() {
	if (Map.prototype.blocksLimit >= 1) {
		Control.prototype.showLeftBlocks();
	}
	else {
		Control.prototype.hideLeftBlocks();
	}
};
/**
 * のこりブロックを表示
 */
Control.prototype.showLeftBlocks = function() {
	if (Map.prototype.blocksLimit >= 1) {
		Control.prototype.leftBlocksDiv.setAttribute('class', '');
	}
};
/**
 * のこりブロックを非表示
 */
Control.prototype.hideLeftBlocks = function() {
	Control.prototype.leftBlocksDiv.setAttribute('class', 'hide');
};

/**
 * のこりブロックを更新
 */
Control.prototype.updateLeftBlocks = function(num) {
	Control.prototype.leftBlocks.textContent = num;
};

/**
 * 残りエネルギーを表示
 */
Control.prototype.showRemainingEnery = function() {
	Control.prototype.remainingEnergyDiv.setAttribute('class', '');
};
/**
 * 残りエネルギーを非表示
 */
Control.prototype.hideRemainingEnergy = function() {
	Control.prototype.remainingEnergyDiv.setAttribute('class', 'hide');
};

/**
 * スタートボタンを表示
 */
Control.prototype.showRunButton = function() {
	Control.prototype.showButton(Control.prototype.runButton);
};
/**
 * スタートボタンを非表示
 */
Control.prototype.hideRunButton = function() {
	Control.prototype.hideButton(Control.prototype.runButton);
};
/**
 * ストップボタンを表示
 */
Control.prototype.showStopButton = function() {
	Control.prototype.showButton(Control.prototype.stopButton);
};
/**
 * ストップボタンを非表示
 */
Control.prototype.hideStopButton = function() {
	Control.prototype.hideButton(Control.prototype.stopButton);
};
/**
 * リセットボタンを表示
 */
Control.prototype.showResetButton = function() {
	Control.prototype.showButton(Control.prototype.resetButton);
	Control.prototype.showLabel(Control.prototype.resetLabel);
};
/**
 * リセットボタンを非表示
 */
Control.prototype.hideResetButton = function() {
	Control.prototype.hideButton(Control.prototype.resetButton);
	Control.prototype.hideLabel(Control.prototype.resetLabel);
};
/**
 * ロボットの速さを表示
 */
Control.prototype.showRobotSpeed = function() {
	Control.prototype.showButton(Control.prototype.robotSpeed);
	Control.prototype.showLabel(Control.prototype.robotSpeedLabel);
};
/**
 * ロボットの速さを非表示
 */
Control.prototype.hideRobotSpeed = function() {
	Control.prototype.hideButton(Control.prototype.robotSpeed);
	Control.prototype.hideLabel(Control.prototype.robotSpeedLabel);
};
/**
 * パターンを表示
 */
Control.prototype.showPatternSelector = function() {
	if (Map.prototype.isValidPatterns()) {
		Control.prototype.patternSelector.setAttribute('class', '');
		Control.prototype.showLabel(Control.prototype.patternLabel);
	}
};
/**
 * パターンを非表示
 */
Control.prototype.hidePatternSelector = function() {
	Control.prototype.patternSelector.setAttribute('class', 'hide');
	Control.prototype.hideLabel(Control.prototype.patternLabel);
};
/**
 * パータン表示状態をセットする
 */
Control.prototype.setPatternSelectorVisible = function() {
	if (Map.prototype.isValidPatterns()) {
		Control.prototype.showPatternSelector();
	}
	else {
		Control.prototype.hidePatternSelector();
	}
};
/**
 * ヒントボタンの表示状態をセットする
 */
Control.prototype.setHintButtonVisible = function() {
	if (Map.prototype.hintBlocks.length > 0) {
		Control.prototype.showHintButton();
	}
	else {
		Control.prototype.hideHintButton();
	}
};
/**
 * ヒントボタンを表示
 */
Control.prototype.showHintButton = function() {
	if (Map.prototype.hintBlocks.length > 0) {
		Control.prototype.showButton(Control.prototype.hintButton);
	}
};
/**
 * ヒントボタンを非表示
 */
Control.prototype.hideHintButton = function() {
	Control.prototype.hideButton(Control.prototype.hintButton);
};
/**
 * xmlボタンを表示
 */
Control.prototype.showXMLButton = function() {
	Control.prototype.showButton(Control.prototype.xmlButton);
};
/**
 * xmlボタンを非表示
 */
Control.prototype.hideXMLButton = function() {
	Control.prototype.hideButton(Control.prototype.xmlButton);
};

/**
 * 指定したボタンを表示する
 */
Control.prototype.showButton = function(btn) {
	btn.disabled = false;
	btn.setAttribute('class', '');
};
/**
 * 指定したボタンを非表示にする
 */
Control.prototype.hideButton = function(btn) {
	btn.disabled = true;
	btn.setAttribute('class', 'hide');
};
/**
 * 指定したラベルを表示する
 */
Control.prototype.showLabel = function(lbl) {
	lbl.setAttribute('class', 'super-small');
};
/**
 * 指定したラベルを非表示にする
 */
Control.prototype.hideLabel = function(lbl) {
	lbl.setAttribute('class', 'super-small hide');
};

/**
 * ロボットの速さを取得
 */
Control.prototype.getRobotSpeed = function() {
	return Control.prototype.robotSpeed.value;
};
/**
 * ロボットの速さをセット
 */
Control.prototype.setRobotSpeed = function(speed) {
	Control.prototype.robotSpeed.options[speed].selected = true;
};

/**
 * パターンを選択する
 */
Control.prototype.selectPattern = function(pattern) {
	Control.prototype.patternSelector.options[pattern].selected = true;
};
/**
 * パターンを取得する
 */
Control.prototype.getPattern = function() {
	return Control.prototype.patternSelector.selectedIndex;
};
/**
 * 現在のパターンをパスの状態にする
 */
Control.prototype.setPatternPass = function() {
	const p = Control.prototype.getPattern();
	Control.prototype.patternSelector.children[p].setAttribute('class', 'pass');
};
/**
 * すべてのパターンをパスではない状態にする
 */
Control.prototype.setPatternsNotPass = function() {
	const count = Map.prototype.patterns;
	if (count > 1) {
		for (let i = 1; i <= count; i++) {
			Control.prototype.patternSelector.children[i].setAttribute('class', '');
		}
	}
};

/**
 * マップのテーブルを表示
 */
Control.prototype.drawMap = function() {
	var map = Map.prototype.createTableMap();
	
	// 子ノードを消す
	var m = document.getElementById('map');
	for (var i = m.childNodes.length - 1; i >= 0; i--) {
		m.removeChild(m.childNodes[i]);
	}
	document.getElementById('map').appendChild(map);
};

/**
 * マップ上の対象のセルを再描画する
 */
Control.prototype.drawCell = function(pos) {
	Control.prototype.getCell(pos).setAttribute('class', Map.prototype.getCellClass(Map.prototype.map[pos.y][pos.x]));
	if (Map.prototype.chars[pos.y][pos.x] >= 0) {
		Control.prototype.getTextBox(pos).value = Map.prototype.chars[pos.y][pos.x];
	}
	else {
		Control.prototype.getTextBox(pos).value = '';
	}
};
Control.prototype.drawCells = function(ary) {
	var s = ary.length;
	for (var i = 0; i < s; i++) {
		Control.prototype.drawCell(ary[i]);
	}
};

/**
 * 対象のマップ上のセルを取得　{ "x": int, "y": int }
 */
Control.prototype.getCell = function(pos) {
	return document.getElementById('map_'+pos.y+'_'+pos.x);
};

/**
 * 対象マップ上の値を取得 { "x": int, "y": int }
 */
Control.prototype.getTextBox = function(pos) {
	return document.getElementById('value_'+pos.y+'_'+pos.x);
};

/**
 * ロボットを描画
 */
Control.prototype.drawRobot = function() {
	var cell = Control.prototype.getCell(Robot.prototype.position);
	if (!Control.prototype.broken) {
		cell.getElementsByTagName('img')[0].setAttribute('src', Map.prototype.image_file_dir+Robot.prototype.getImage());
	}
	else {
		cell.getElementsByTagName('img')[0].setAttribute('src', Map.prototype.image_file_dir+'broken.png');
	}
};

/**
 * ロボットのゴーストを描画
 */
Control.prototype.drawGhost = function(pos, dir) {
	var cell = Control.prototype.getCell(pos);
	cell.getElementsByTagName('img')[0].setAttribute('src', Map.prototype.image_file_dir+Robot.prototype.getGhost(dir));
};

/**
 * ロボットの現在位置と座標を保持
 */
Control.prototype.storePosDir = function() {
	return {
		"direction": Robot.prototype.direction,
		"x": Robot.prototype.position.x,
		"y": Robot.prototype.position.y
	};
};

/**
 * ロボットの現在地の床の値を取得
 */
Control.prototype.getRobotFloor = function() {
	var po = Robot.prototype.position;
	return (Map.prototype.map[po.y][po.x]);
}

/**
 * ゴールか判定
 */
Control.prototype.isGoal = function() {
	return (Control.prototype.getRobotFloor() == 5);
};

/**
 * 1 ターン実行する
 */
Control.prototype.oneTurn = function(cmd, arg1, arg2, arg3) {
	// マップの保存
	var oldMap = Map.prototype.copyMap();
	var oldChars = Map.prototype.copyChars();
	
	// 行動する
	var ret = Control.prototype.execute(cmd, arg1, arg2, arg3);
	
	// ロボットの処理
	Robot.prototype.life--;
	if (Robot.prototype.life == 0) {
		Control.prototype.emptyLife = true;
	}
	Control.prototype.remainingEnergy.textContent = Robot.prototype.life;
	if (Robot.prototype.life <= 15) {
		Control.prototype.remainingEnergyDiv.setAttribute('class', '');
	}
	Control.prototype.time++;
	
	Map.prototype.afterMoved(Control.prototype.time, Control.prototype.storePosDir());
	
	if (Control.prototype.isGoal()) {
		Control.prototype.goalNum--;
		if (Control.prototype.goalNum == 0) {
			Control.prototype.goal = true;
		}
		else {
			Control.prototype.goal = false;
			var po = Control.prototype.storePosDir();
			Map.prototype.map[po.y][po.x] = 0;
		}
	}
	
	if (!Control.prototype.emptyLife) {
		Control.prototype.drawCells(Map.prototype.compareMap(oldMap, oldChars));
	}
	
	return ret;
};
/**
 * コマンドを実行する
 */
Control.prototype.execute = function(cmd, arg1, arg2, arg3) {
	var old = Control.prototype.storePosDir();

	// DBG
	//console.log(cmd);
	cmd = JSON.parse(cmd);
	
	var ret = true;
	switch(cmd.opr) {
		// Basic
		case "forward":
			ret = Control.prototype.forward();
			break;
			
		case "turn_left":
			ret = Control.prototype.turnLeft();
			break;
			
		case "turn_right":
			ret = Control.prototype.turnRight();
			break;
			
		// Standard
		case "get_floor_color":
			ret = Control.prototype.getFloorColor();
			break;
			
		case "get_direction":
			ret = Control.prototype.getDirection();
			break;
			
		case "is_movable_forward":
			ret = Control.prototype.isMovableForward();
			break;
			
		case "is_movable":
			ret = Control.prototype.isMovable(cmd.direction);
			break;
		
		// Advanced
		case "set_register":
			ret = Control.prototype.setRegister(cmd.target, arg1);
			break;
			
		case "get_register":
			ret = Control.prototype.getRegister(cmd.target);
			break;
			
		// Superior
		case "add_register":
			ret = Control.prototype.addRegister(cmd.target, arg1);
			break;
			
		case "sub_register":
			ret = Control.prototype.subRegister(cmd.target, arg1);
			break;
			
		case "add_register_index":
			ret = Control.prototype.addRegister(arg1, arg2);
			break;
			
		case "sub_register_index":
			ret = Control.prototype.subRegister(arg1, arg2);
			break;
			
		case "set_register_index":
			ret = Control.prototype.setRegister(arg1, arg2);
			break;
			
		case "get_register_index":
			ret = Control.prototype.getRegister(arg1);
			break;
			
		// Replete
		case "read_cell_value":
			ret = Control.prototype.readCellValue(cmd.target);
			break;
			
		case "read_cell_value_index":
			ret = Control.prototype.readCellValue(arg1);
			break;
			
		case "write_cell_value":
			ret = Control.prototype.writeCellValue(arg1);
			break;
			
		case "values_compare":
			ret = Control.prototype.valuesCompare(cmd.type, arg1, arg2);
			break;
			
			
		case "nop":
		default:
			ret = Control.prototype.nop();
			break;
	}
	
	var cur = Control.prototype.storePosDir();
	
	if ((old.x != cur.x) || (old.y != cur.y)) {
		Control.prototype.drawGhost({"x": old.x, "y": old.y}, old.direction);
		Control.prototype.drawRobot();
	}
	else if (old.direction != cur.direction) {
		Control.prototype.drawRobot();
	}
	else if (Control.prototype.broken) {
		Control.prototype.drawRobot();
	}
	
	var ptr = Control.prototype.registers.getElementsByTagName('table')[0].children[1].children[1];
	for (var i = Robot.prototype.registers_index.length - 1; i >= 0; i--) {
		for (var j = ptr.children[i].childNodes.length - 1; j >= 0; j--) {
			ptr.children[i].removeChild(ptr.children[i].childNodes[j]);
		}
		ptr.children[i].appendChild(document.createTextNode(Robot.prototype.registers[Robot.prototype.getRegisterName(i)]));
	}
	
	// DBG
	//console.log(JSON.stringify(Robot.prototype.registers));
	
	return ret;
};

/**
 * 前方の座標を取得
 */
Control.prototype.getRobotForwardPosition = function() {
	var pos = {
		"x": Robot.prototype.position.x,
		"y": Robot.prototype.position.y
	};
	
	switch(Robot.prototype.direction) {
		case 0:
			pos.y--;
			break;
		case 1:
			pos.x++;
			break;
		case 2:
			pos.y++;
			break;
		case 3:
			pos.x--;
			break;
		default:
			break;
	}
	return pos;
};
Control.prototype.getRobotRightPosition = function() {
	var pos = {
		"x": Robot.prototype.position.x,
		"y": Robot.prototype.position.y
	};
	
	switch(Robot.prototype.direction) {
		case 0:
			pos.x++;
			break;
		case 1:
			pos.y++;
			break;
		case 2:
			pos.x--;
			break;
		case 3:
			pos.y--;
			break;
		default:
			break;
	}
	return pos;
};
Control.prototype.getRobotBackPosition = function() {
	var pos = {
		"x": Robot.prototype.position.x,
		"y": Robot.prototype.position.y
	};
	
	switch(Robot.prototype.direction) {
		case 0:
			pos.y++;
			break;
		case 1:
			pos.x--;
			break;
		case 2:
			pos.y--;
			break;
		case 3:
			pos.x++;
			break;
		default:
			break;
	}
	return pos;
};
Control.prototype.getRobotLeftPosition = function() {
	var pos = {
		"x": Robot.prototype.position.x,
		"y": Robot.prototype.position.y
	};
	
	switch(Robot.prototype.direction) {
		case 0:
			pos.x--;
			break;
		case 1:
			pos.y--;
			break;
		case 2:
			pos.x++;
			break;
		case 3:
			pos.y++;
			break;
		default:
			break;
	}
	return pos;
};

// Basic
Control.prototype.forward = function() {
	var f = Control.prototype.getRobotForwardPosition();
	
	var po = Robot.prototype.position;
	if (Map.prototype.map[f.y][f.x] != 1) {
		po.x = f.x;
		po.y = f.y;
	}
	else {
		if (Map.prototype.start.soft == true) {
			Robot.prototype.life = 1;	// no life
			Control.prototype.broken = true;
		}
	}
	
	Map.prototype.chars[po.y][po.x] = -1;
	
	return true;
};
Control.prototype.turnRight = function() {
	Robot.prototype.direction = (Robot.prototype.direction + 1) % 4;
	return true;
};
Control.prototype.turnLeft = function() {
	Robot.prototype.direction = (Robot.prototype.direction + 3) % 4;
	return true;
};
Control.prototype.nop = function() {
	return true;
};

// Standard
Control.prototype.getFloorColor = function() {
	switch(Control.prototype.getRobotFloor()) {
		case 0:	// whitle
			return 0;
			break;
			
		case 1:	// black
			return 5;
			break;
		
		case 2:	// red
			return 1;
			break;
		
		case 3:	// blue
			return 2;
			break;
		
		case 4:	// green
			return 3;
			break;
		
		case 5:	// yellow
			return 4;
			break;
			
		default:
			return 0;
			break;
	}
};
Control.prototype.getDirection = function() {
	return Robot.prototype.direction;
};
Control.prototype.isMovableForward = function() {
	var po = Control.prototype.getRobotForwardPosition();
	return (Map.prototype.map[po.y][po.x] != 1);
};
Control.prototype.isMovable = function(dir) {
	var po;
	switch(dir) {
		case 0:
			po = Control.prototype.getRobotForwardPosition();
			break;
			
		case 1:
			po = Control.prototype.getRobotRightPosition();
			break;
		
		case 2:
			po = Control.prototype.getRobotBackPosition();
			break;
		
		case 3:
			po = Control.prototype.getRobotLeftPosition();
			break;
		
		default:
			return false;
			break;
	}
	return (Map.prototype.map[po.y][po.x] != 1);
};

// Advanced
Control.prototype.setRegister = function(reg, value) {
	if (value >= 0 && value <= 65535) {
		Robot.prototype.registers[Robot.prototype.getRegisterName(reg)] = value;
	}
	return true;
};
Control.prototype.getRegister = function(reg) {
	if (reg >= 0 && reg <= 7) {
		return Robot.prototype.registers[Robot.prototype.getRegisterName(reg)];
	}
	else {
		return 0;
	}
};
// Expert

// Enhanced

// Superior
Control.prototype.addRegister = function(reg, value) {
	if (reg >= 0 && reg <= 7) {
		var v = Robot.prototype.registers[Robot.prototype.getRegisterName(reg)];
		Robot.prototype.registers[Robot.prototype.getRegisterName(reg)] = (v + value) % 65536;
	}
	return true;
};
Control.prototype.subRegister = function(reg, value) {
	if (reg >= 0 && reg <= 7) {
		var v = Robot.prototype.registers[Robot.prototype.getRegisterName(reg)];
		Robot.prototype.registers[Robot.prototype.getRegisterName(reg)] = (v - value + 65535) % 65536;
	}
	return true;
};

// Replete
Control.prototype.readCellValue = function(reg) {
	var po = Control.prototype.getRobotForwardPosition();
	var v = Map.prototype.chars[po.y][po.x];
	if (reg >= 0 && reg <= 7) {
		Robot.prototype.registers[Robot.prototype.getRegisterName(reg)] = (v >= 0) ? v : 0;
	}
	return true;
};
Control.prototype.writeCellValue = function(v) {
	var po = Control.prototype.getRobotForwardPosition();
	if (Control.prototype.getCell(po).getElementsByTagName('img')[0].getAttribute('src', 'img/none.png')) {
		if (v >= 0) {
			Map.prototype.chars[po.y][po.x] = v;
		}
	}
	return true;
};
Control.prototype.valuesCompare = function(type, v1, v2) {
	switch(type) {
		case 'equals':
			return (v1 == v2);
			break;
			
		case 'not_equals':
			return (v1 != v2);
			break;
			
		case 'larger':
			return (v1 > v2);
			break;
			
		case 'larger_equals':
			return (v1 >= v2);
			break;
			
		case 'smaller':
			return (v1 < v2);
			break;
			
		case 'smaller_equals':
			return (v1 <= v2);
			break;
			
		default:
			return false;
			break;
	}
};
