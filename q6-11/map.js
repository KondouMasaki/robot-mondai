var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,0,1,3,1,2,1,0,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,1,1],
		[1,1,0,1,1,0,1,1,0,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 5,
    "y": 7,
    "direction": 0,
    "life": 65535,
    "speed": 1,
    "soft": false
  },
  "hint": "はじめの向きの数字が、ゴールのヒントだよ。とちゅうでマスの色も調べよう",
  "state": 0,
  "goals": 1,
  "patterns": 4,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-11",
    "previous": "q6-10",
    "next": "q6-12"
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
      "get_floor_color": false,
      "get_direction": true
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
		[-1,-1,-1,-1,-1,-1,-1, 1,-1,-1,-1,-1],
		[-1,-1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1, 1,-1,-1,-1],
		[-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 3,-1, 1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
	],
  "hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="write_register" x="10" y="10"><field name="register_name">0</field><value name="register_value"><block type="get_direction"></block></value></block><block type="floor_color_is" x="50" y="110"><statement name="equals"><block type="turn_right"></block></statement><statement name="not_equals"><block type="turn_left"></block></statement></block></xml>',
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
	
	let d;
	let c;
	switch(parseInt(pattern)) {
		case 0:
			d = 1;
			c = 2;
			break;
		case 1:
			d = 1;
			c = 3
			break;
		case 2:
			d = 0;
			c = 2;
			break;
		case 3:
			do {
				c = Math.floor(Math.random() * 2) + 2;
			} while(Map.prototype.state == c);
			d = Math.floor(Math.random() * 3);
			if (d > 1) {
				d++;
			}
			break;
	}
	Robot.prototype.direction = d;
	Map.prototype.state = c;
	Map.prototype.map[4][5] = c;
	switch(c) {
		case 2:
			switch(d) {
				case 0:
					Map.prototype.map[4][9] = 5;
					break;
				case 1:
					Map.prototype.map[5][8] = 5;
					break;
				case 3:
					Map.prototype.map[3][8] = 5;
					break;
			}
			break;
		case 3:
			switch(d) {
				case 0:
					Map.prototype.map[4][1] = 5;
					break;
				case 1:
					Map.prototype.map[3][2] = 5;
					break;
				case 3:
					Map.prototype.map[5][2] = 5;
					break;
			}
			break;
	}
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
