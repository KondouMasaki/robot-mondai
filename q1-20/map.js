var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,0,0,0,0,5,0,1,1,1],
		[1,1,1,0,0,0,0,0,0,1,1,1],
		[1,1,1,5,0,0,0,0,0,1,1,1],
		[1,1,1,0,0,0,0,0,5,1,1,1],
		[1,1,1,5,0,0,0,0,0,1,1,1],
		[1,1,1,0,0,0,0,5,0,1,1,1],
		[1,1,1,0,0,0,0,0,0,1,1,1],
		[1,1,1,0,5,0,0,0,0,1,1,1],
		[1,1,1,0,0,0,0,0,0,1,1,1],
		[1,1,1,0,0,0,5,0,0,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 1,
		"direction": 2,
		"life": 65534,
		"speed": 1,
		"soft": false
	},
	"hint": "時間がたつとかべがふえていくよ。間に合うかな？",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "Q1-20",
		"previous": "q1-19",
		"next": "q1-21"
	},
	"useMapPreProcess": false,
	"preProcessDescriptions": [],
	"robot": {
		"type": 0,
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
	"hintBlocks": '',
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
	let row = -1;
	switch(t) {
		case 1:
			row = 1;
			break;
		case 2:
			row = 10;
			break;
		case 3:
			row = 2;
			break;
		case 4:
			row = 9;
			break;
		case 5:
			row = 3;
			break;
		case 6:
			row = 8;
			break;
		case 7:
			row = 4;
			break;
		case 8:
			row = 7;
			break;
		case 9:
			row = 5;
			break;
		case 10:
			row = 6;
			break;
	}
	if (row > 0) {
		for (let i = 3; i <= 8; i++) {
			Map.prototype.map[row][i] = 1;
		}
	}
};
