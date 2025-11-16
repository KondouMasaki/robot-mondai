var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,0,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 5,
    "y": 7,
    "direction": 0,
    "life": 65534,
    "speed": 2,
    "soft": true
  },
  "hint": "4, 5, 6 のマスで、1 と 2 のマスの色じゃないところがゴールだよ。かべにぶつからないように注意しよう",
  "state": 0,
  "goals": 1,
  "patterns": 3,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-17",
    "previous": "q6-16",
    "next": "q7-1"
  },
  "useMapPreProcess": false,
  "preProcessDescriptions": [],
  "robot": {
    "type": 3,
    "Basic": {
      "forward": true,
      "turn_right": true,
      "turn_left": true,
      "nop": true
    },
    "Standard": {
      "floor_color_is": true,
      "robot_direction_is": false,
      "movable_is": false
    },
    "Advanced": {
      "times_loop": true,
      "floor_color_loop": false,
      "movable_loop": false
    },
    "Expert": {
      "write_register": true,
      "read_register": true,
      "get_floor_color": true,
      "get_direction": false
    },
    "Enhanced": {
      "values_equal_is": true,
      "values_equal_loop": true,
      "infinity_loop": true,
      "is_movable_to": true
    },
    "Superior": {
      "add_register": true,
      "sub_register": true,
      "add_register_index": true,
      "sub_register_index": true,
      "set_register_index": true,
      "get_register_index": true
    },
    "Replete": {
      "read_cell_value": true,
      "read_cell_value_index": true,
      "write_cell_value": true,
      "values_compare": true,
      "expression_if": true,
      "expression_loop": true
    },
    "Master": {}
  },
  "chars": [
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 4,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 5,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 6,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 2,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
	],
  "hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="floor_color_is" x="10" y="10"><value name="color"><block type="read_register"><field name="register_name">0</field></block></value><statement name="equals"><block type="forward"></block></statement><statement name="not_equals"><block type="floor_color_is"><value name="color"><block type="read_register"><field name="register_name">1</field></block></value><statement name="equals"><block type="forward"></block></statement></block></statement></block></xml>',
  "map2": [],
  "chars2": [],
  "pmaps": [],	// [ <map>, ... ]
  "pcords": [],	// [ { "y": num, "x": num, "v": str }, ... ]
  "image_file_dir": "../img/"
}// end=%%
;

/**
 * マップに数字以外の場合を埋め込んだ場合のプリプロセス
 */
Map.prototype.mapPreProcess = function() {
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	if (pattern == "") {
		pattern = 0;
	}
	
	let a, b;
	let other;
	switch(parseInt(pattern)) {
		case 0:
			a = 2;
			b = 3;
			other = 4;
			break;
		case 1:
			a = 2;
			b = 4;
			other = 3;
			break;
		case 2:
			a = 3;
			b = 4;
			other = 2;
			break;
	}
	if (Math.floor(Math.random() * 2) == 0) {
		const t = a;
		a = b;
		b = t;
	}
	Map.prototype.map[6][5] = a;
	Map.prototype.map[7][5] = b;
	
	let ptn;
	switch(Math.floor(Math.random() * 3)) {
		case 0:
			ptn = [a, b, other];
			Map.prototype.map[4][6] = 5;
			break;
		case 1:
			ptn = [a, other, b];
			Map.prototype.map[3][6] = 5;
			break;
		case 2:
			ptn = [other, a, b];
			Map.prototype.map[2][6] = 5;
			break;
	}
	Map.prototype.map[4][5] = ptn[2];
	Map.prototype.map[3][5] = ptn[1];
	Map.prototype.map[2][5] = ptn[0];
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
