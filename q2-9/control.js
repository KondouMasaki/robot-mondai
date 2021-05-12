var Control = function() {
};
Control.prototype = {
	"goal": false,
	"emptyLife": false,
	"goalNum": 1,
	"time": 0,
	"balloon": null,
	"registers": null,
	"patternSelector": null
};

/**
 * ツールボックスの作成
 */
Control.prototype.createToolBox = function() {
	var ptr = Map.prototype.robot;
	var xml = '<xml>';
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
 * ゲーム開始時の処理
 */
Control.prototype.initGame = function() {
	Map.prototype.backupMap();
	Map.prototype.backupChars();
	
	Control.prototype.balloon = document.getElementById('robotBalloon');
	Control.prototype.balloon.children[0].appendChild(document.createTextNode(Map.prototype.hint));
	
	Control.prototype.registers = document.getElementById('registers');
	
	Control.prototype.patternSelector = document.getElementById('patternSelector');
	if ((Map.prototype.patterns > 1) && (Map.prototype.patterns <= 16)) {
		var frg = document.createDocumentFragment();
		for (var i = 0; i < Map.prototype.patterns; i++) {
			var op = document.createElement('option');
			op.appendChild(document.createTextNode('パターン '+(i+1)));
			op.setAttribute('value', i);
			frg.appendChild(op);
		}
		Control.prototype.patternSelector.appendChild(frg);
	}
	else {
		Control.prototype.patternSelector.setAttribute('class', 'hide');
	}

	Control.prototype.beforeRun();
};
/**
 * コード実行前の処理
 */
Control.prototype.beforeRun = function() {
	Control.prototype.initRobot();	// ロボット初期化
	
	Map.prototype.restoreMap();
	Map.prototype.restoreChars();
	Map.prototype.beforeStart(Control.prototype.patternSelector.value);
	
	Control.prototype.drawMap();
	Control.prototype.drawRobot();
	Control.prototype.goal = false;
	Control.prototype.emptyLife = false;
	Control.prototype.goalNum = Map.prototype.goals;
	Control.prototype.time = 0;
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
 * マップパターン選択を開く
 */
Control.prototype.showPatternSelector = function() {
	if ((Map.prototype.patterns > 1) && (Map.prototype.patterns <= 16)) {
		Control.prototype.patternSelector.setAttribute('class', '');
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
	cell.getElementsByTagName('img')[0].setAttribute('src', 'img/'+Robot.prototype.getImage());
};

/**
 * ロボットのゴーストを描画
 */
Control.prototype.drawGhost = function(pos, dir) {
	var cell = Control.prototype.getCell(pos);
	cell.getElementsByTagName('img')[0].setAttribute('src', 'img/'+Robot.prototype.getGhost(dir));
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
	
	Control.prototype.drawCells(Map.prototype.compareMap(oldMap, oldChars));
	
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
	
	var ptr = Control.prototype.registers.getElementsByTagName('table')[0].children[0].children[1];
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
			pos.x++;
			break;
		case 1:
			pos.y--;
			break;
		case 2:
			pos.x--;
			break;
		case 3:
			pos.y++;
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
