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
      2,
      0,
      5,
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
      0,
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
      2,
      0,
      3,
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
      0,
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
      2,
      0,
      3,
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
      0,
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
      2,
      0,
      3,
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
      0,
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
      0,
      0,
      3,
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
    "x": 4,
    "y": 10,
    "direction": 1,
    "life": 65534,
    "speed": 2,
    "soft": false
  },
  "hint": "マスの色が赤なら右、青なら左に向くといいよ",
  "state": 0,
  "goals": 1,
  "patterns": 1,
  "blocksLimit": 10,
  "links": {
    "question": "Q5-25",
    "previous": "q5-24",
    "next": "q5-26"
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
  "hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="times_loop" x="10" y="10"><statement name="equals"><block type="forward"><next><block type="forward"><next><block type="floor_color_is"></block></next></block></next></block></statement></block></xml>',
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
	// if pettern is <empty string> selected "どれか"
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
};
