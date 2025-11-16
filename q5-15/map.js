var Map = function() {
};
Map.prototype = 
// %%=start
{
  "map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,5,0,0,5,0,0,0,1],
		[1,0,5,0,0,5,0,0,0,5,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,5,0,5,0,0,1],
		[1,0,0,0,5,0,0,0,0,5,0,1],
		[1,0,5,0,0,0,0,0,5,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
  "start": {
    "x": 5,
    "y": 5,
    "direction": 0,
    "life": 65534,
    "speed": 2,
    "soft": false
  },
  "hint": "少ない命令で6つのゴールへ行こう、黄色のマスにある数字がヒントらしいよ",
  "state": 0,
  "goals": 1,
  "patterns": 1,
  "blocksLimit": 8,
  "links": {
    "question": "Q5-15",
    "previous": "q5-14",
    "next": "q5-16"
  },
  "useMapPreProcess": false,
  "preProcessDescriptions": [],
  "robot": {
    "type": 2,
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
      "floor_color_loop": true,
      "movable_loop": false
    },
    "Expert": {
      "write_register": true,
      "read_register": true,
      "get_floor_color": true,
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
		[-1,-1,-1,-1, 5,-1,-1, 6,-1,-1,-1,-1],
		[-1,-1, 2,-1,-1, 1,-1,-1,-1, 2,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
		[-1,-1,-1,-1,-1,-1, 6,-1, 5,-1,-1,-1],
		[-1,-1,-1,-1, 4,-1,-1,-1,-1, 3,-1,-1],
		[-1,-1, 3,-1,-1,-1,-1,-1, 4,-1,-1,-1],
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

/**
 * マップに数字以外の場合を埋め込んだ場合のプリプロセス
 */
Map.prototype.mapPreProcess = function() {
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	// if pettern is <empty string> selected "どれか"
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
	if (Map.prototype.map[pos.y][pos.x] == 5) {
		let yellow = 0;
		for (let i = 1; i < 11; i++) {
			for (let j = 1; j < 11; j++) {
				if (Map.prototype.map[i][j] == 5) {
					yellow++;
				}
			}
		}
		if (yellow > 6) {
			Map.prototype.map[pos.y][pos.x] = 2;
		}
	}
};
