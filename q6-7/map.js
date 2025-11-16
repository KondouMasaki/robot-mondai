var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  ],
  "start": {
    "x": 5,
    "y": 7,
    "direction": 0,
    "life": 32,
    "speed": 2,
    "soft": false
  },
  "hint": "はじめのマスの色がゴールのヒントだよ",
  "state": 0,
  "goals": 1,
  "patterns": 3,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-7",
    "previous": "q6-6",
    "next": "q6-8"
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
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 3,-1, 1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
	],
  "hintBlocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"write_register\" x=\"10\" y=\"10\"><field name=\"register_name\">0</field><value name=\"register_value\"><block type=\"get_floor_color\"></block></value><next><block type=\"forward\"><next><block type=\"forward\"><next><block type=\"forward\"></block></next></block></next></block></next></block></xml>",
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
	var x;
	if (pattern != "") {
		x = parseInt(pattern);
	}
	else {
		do {
			x = parseInt(Math.random() * 3);
		} while(Map.prototype.state == x);
	}
	
	switch(x) {
		case 0:
			Map.prototype.map[7][5] = Map.prototype.colorValue.red;
			Map.prototype.map[4][7] = Map.prototype.colorValue.yellow;
			break;
			
		case 1:
			Map.prototype.map[7][5] = Map.prototype.colorValue.white;
			Map.prototype.map[2][5] = Map.prototype.colorValue.yellow;
			break;
			
		case 2:
			Map.prototype.map[7][5] = Map.prototype.colorValue.green;
			Map.prototype.map[4][3] = Map.prototype.colorValue.yellow;
			break;
	}
	Map.prototype.state = x;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
