var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 1,
    "y": 10,
    "direction": 0,
    "life": 65535,
    "speed": 1,
    "soft": true
  },
  "hint": "マスの色とゴールまでのきょりに、かん係があると思うよ。かべにぶつからないように注意しよう",
  "state": 0,
  "goals": 1,
  "patterns": 4,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-5",
    "previous": "q6-4",
    "next": "q6-6"
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
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ],
    [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ]
  ],
  "hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="write_register" x="10" y="10"><field name="register_name">0</field><value name="register_value"><block type="get_floor_color"></block></value><next><block type="times_loop"><value name="times"><block type="read_register"><field name="register_name">0</field></block></value></block></next></block></xml>',
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
	
	let b1 = 0;
	let b2 = 0;
	switch(parseInt(pattern)) {
		case 0:
			b1 = 1;
			b2 = 1;
			break;
		case 1:
			b1 = 2;
			b2 = 3;
			break;
		case 2:
			b1 = 3;
			b2 = 1;
			break;
		case 3:
			do {
				b1 = Math.floor(Math.random() * 3) + 1;
			} while(Map.prototype.state == b1);
			b2 = Math.floor(Math.random() * 3) + 1;
			break;
	}
	Map.prototype.state = b1;
	
	const row = 9 - b1;
	Map.prototype.map[9][1] = (b1 + 1);
	Map.prototype.map[row][2] = (b2 + 1);
	Map.prototype.map[row - 1][1] = 1;
	
	for (let i = b2 * 2 - 1; i >= 0; i--) {
		Map.prototype.map[row][3 + i] = 0;
	}
	Map.prototype.map[row + 1][3 + (b2 * 2) - 1] = 5;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
