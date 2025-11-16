var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,1,1,2,1,3,1,4,0,1,1],
		[1,4,0,0,0,0,0,0,0,1,1,1],
		[1,1,0,1,0,1,0,1,0,1,1,1],
		[1,3,0,0,0,0,0,0,0,1,1,1],
		[1,1,0,1,0,1,0,1,0,1,1,1],
		[1,2,0,0,0,0,0,0,0,1,1,1],
		[1,1,0,1,0,1,0,1,0,1,1,1],
		[1,1,0,0,0,0,0,0,0,1,1,1],
		[1,0,0,1,1,1,1,1,1,1,1,1],
		[1,0,0,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 2,
    "y": 10,
    "direction": 0,
    "life": 65535,
    "speed": 1,
    "soft": false
  },
  "hint": "マスの色がゴールのヒントだよ",
  "state": 0,
  "goals": 1,
  "patterns": 4,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-13",
    "previous": "q6-12",
    "next": "q6-14"
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
		[-1, 1,-1,-1,-1,-1,-1,-1,-1, 2,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1, 2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
	],
  "hintBlocks": '',
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
	
	let x;
	let y;
	const p = parseInt(pattern)
	switch(p) {
		case 0:
			x = 0;
			y = 0;
			break;
		case 1:
			x = 1;
			y = 2;
			break;
		case 2:
			x = 0;
			y = 1;
			break;
		case 3:
			do {
				x = Math.floor(Math.random() * 3);
			} while(x == Map.prototype.state);
			y = Math.floor(Math.random() * 3);
			break;
	}
	Map.prototype.state = x;
	Map.prototype.map[9][2] = x + 2;
	Map.prototype.map[10][2] = y + 2;
	Map.prototype.map[6 - (y * 2)][4 + (x * 2)] = 5;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
