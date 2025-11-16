var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,0,1,1],
		[1,1,0,1,1,1,1,1,1,0,1,1],
		[1,1,0,0,0,0,0,0,1,0,1,1],
		[1,1,0,1,1,1,0,1,1,0,1,1],
		[1,1,0,1,1,5,0,1,1,0,1,1],
		[1,1,0,1,1,1,1,1,1,0,1,1],
		[1,0,0,0,0,0,0,0,0,0,1,1],
		[1,1,1,1,1,1,1,1,1,0,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 1,
		"y": 1,
		"direction": 1,
		"life": 65534,
		"speed": 2,
		"soft": false
	},
	"hint": "右に進めるときは、右に進むといいよ",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 6,
	"links": {
		"question": "Q7-8",
		"previous": "q7-7",
		"next": "q7-9"
	},
	"useMapPreProcess": false,
	"preProcessDescriptions": [],
	"robot": {
		"type": 4,
		"Basic": {
			"forward": true,
			"turn_right": true,
			"turn_left": true,
			"nop": true
		},
		"Standard": {
			"floor_color_is": true,
			"robot_direction_is": true,
			"movable_is": true
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
			"get_direction": true
		},
		"Enhanced": {
			"values_equal_is": false,
			"values_equal_loop": false,
			"infinity_loop": true,
			"is_movable_to": false
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
		"Master": {
		}
	},
	"chars": [
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
	],
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="movable_is" x="10" y="10"><value name="direction"><block type="math_number"><field name="NUM">1</field></block></value><statement name="equals"><block type="turn_right"><next><block type="forward"></block></next></block></statement></block></xml>',
	"map2": [],
	"chars2": [],
	"pmaps": [],	// [ <map>, ... ]
	"pcords": [],	// [ { "y": num, "x": num, "v": str }, ... ]
	
	"image_file_dir": '../img/'
}
// end=%%
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
