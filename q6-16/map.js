var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,0,1,1,1,0,1,1,1,1],
		[1,1,1,0,0,0,0,0,1,1,1,1],
		[1,1,1,0,1,0,1,0,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,1,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 4,
    "y": 6,
    "direction": 1,
    "life": 65534,
    "speed": 2,
    "soft": false
  },
  "hint": "マスの色がヒントだから、ちゃんとおぼえておこう",
  "state": 0,
  "goals": 1,
  "patterns": 3,
  "blocksLimit": 0,
  "links": {
    "question": "Q6-16",
    "previous": "q6-15",
    "next": "q6-17"
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
		[-1,-1,-1, 2,-1, 1,-1, 2,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1, 1,-1, 2,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
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
	
	let left;
	let right;
	let g;
	switch(parseInt(pattern)) {
		case 0:
			left = 3;
			right = 2;
			g = 0;
			break;
		case 1:
			left = 2;
			right = 4;
			g = 2;
			break;
		case 2:
			do {
				left = Math.floor(Math.random() * 3) + 2;
			} while(Map.prototype.state == left);
			right = Math.floor(Math.random() * 3) + 2;
			g = Math.floor(Math.random() * 4);
			break;
	}
	Map.prototype.state = left;
	Map.prototype.map[6][4] = left;
	Map.prototype.map[7][4] = left;
	Map.prototype.map[6][6] = right;
	Map.prototype.map[7][6] = right;
	
	switch(g) {
		case 0:
			Map.prototype.map[2][5] = right;
			Map.prototype.map[2][7] = left;
			Map.prototype.map[1][7] = 5;
			break;
		case 1:
			Map.prototype.map[2][5] = right;
			Map.prototype.map[2][7] = right;
			Map.prototype.map[3][7] = 5;
			break;
		case 2:
			Map.prototype.map[2][5] = left;
			Map.prototype.map[2][3] = right;
			Map.prototype.map[1][3] = 5;
			break;
		case 3:
			Map.prototype.map[2][5] = left;
			Map.prototype.map[2][3] = left;
			Map.prototype.map[3][3] = 5;
			break;
	}
	
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
