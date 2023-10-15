var Map = function() {
};
Map.prototype = {
	"map": [
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 5, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
	],
	"start": {
		"x": 5,
		"y": 7,
		"direction": 0,
		"life": 65534,
		"speed": 1
	},
	"hint": "Enjoy BlocklyRbt Visal Flow !! ブロックリーロボット問題 ビジュアルフローを楽しんでね!!",
	"state": 0,
	"goals": 1,
	"patterns": 3,
	"blocksLimit": 0,
	"links": {
		"question": "Q0-0",
		"previous": "",
		"next": ""
	},
	"robot": {
		"type": 6,
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
			"times_loop": true,
			"floor_color_loop": true,
			"movable_loop": true
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
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="forward" x="-150" y="-30"><next><block type="turn_right"><next><block type="nop"><next><block type="turn_left"></block></next></block></next></block></next></block></xml>',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../img/'
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	// if pettern is <empty string> selected "どれか"
	var p = parseInt(pattern);
	switch(p) {
		case 0:
		case 1:
		case 2:
			Map.prototype.map[0][0] = p + 2;
			break;
			
		default:
			break;
	}
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
};
