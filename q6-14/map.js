var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,0,0,0,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 3,
    "y": 10,
    "direction": 1,
    "life": 65535,
    "speed": 1,
    "soft": true
  },
  "hint": "マスの色をおぼえてから前へ進もう、かべにぶつからないように注意しよう",
  "state": 0,
  "goals": 1,
  "patterns": 3,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-14",
    "previous": "q6-13",
    "next": "q6-15"
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
      "floor_color_is": false,
      "robot_direction_is": false,
      "movable_is": false
    },
    "Advanced": {
      "times_loop": false,
      "floor_color_loop": true,
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
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
	],
  "hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="floor_color_loop" x="10" y="10"><value name="color"><block type="read_register"><field name="register_name">0</field></block></value></block></xml>',
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
	
	let c = parseInt(pattern) + 2;
	let x
	do {
		x = Math.floor(Math.random() * 9);
	}while(x == Map.prototype.state);
	
	Map.prototype.state = x;
	for (let i = 0; i < x; i++) {
		Map.prototype.map[9 - i][5] = c;
	}
	Map.prototype.map[10][5] = c;
	Map.prototype.map[9 - x - 1][5] = 1;
	Map.prototype.map[9 - x][6] = 5;
	Map.prototype.map[10][3] = c;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
