var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 10,
		"direction": 0,
		"life": 65534,
		"speed": 2,
		"soft": false
	},
	"hint": "はじめのマスと違う色のマスのそばにゴールがあるよ",
	"state": 0,
	"goals": 1,
	"patterns": 3,
	"blocksLimit": 0,
	"links": {
		"question": "Q7-1",
		"previous": "q6-17",
		"next": "q7-2"
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
			"values_equal_is": false,
			"values_equal_loop": true,
			"infinity_loop": false,
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
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="write_register" x="10" y="10"><field name="register_name">0</field><value name="register_value"><block type="get_floor_color"></block></value><next><block type="floor_color_loop"><statement name="equals"><block type="forward"></block></statement></block></next></block></xml>',
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
	var y, c;
	if (pattern != "") {
		switch(parseInt(pattern)) {
			case 0:
				y = 5;
				c = 0;
				break;
			case 1:
				y = 6;
				c = 2;
				break;
			case 2:
				do {
					y = parseInt(Math.random() * 9);
				} while(Map.prototype.state == y);
				c = parseInt(Math.random() * 3);
				break;
		}
	}
	else {
		do {
			y = parseInt(Math.random() * 9);
		} while(Map.prototype.state == y);
		c = parseInt(Math.random() * 3);
	}
	
	Map.prototype.state = y;
	y++;
	
	Map.prototype.map[y][6] = 5;
	Map.prototype.map[y - 1][6] = 1;
	Map.prototype.map[y + 1][6] = 1;
	
	var t;
	switch(c) {
		case 0:
			t = 2;
			break;
		case 1:
			t = 3;
			break;
		case 2:
			t = 4;
			break;
	}
	for (var i = y + 1; i <= 10; i++) {
		Map.prototype.map[i][5] = t;
	}
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
};
