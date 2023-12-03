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
		[1,1,1,1,1,0,1,1,1,1,1,1],
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
	"hint": "赤いマスの先のあたりにゴールがあるよ",
	"state": 0,
	"goals": 1,
	"patterns": 3,
	"blocksLimit": 0,
	"links": {
		"question": "Q3-5",
		"previous": "q3-4",
		"next": "q3-6"
	},
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
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="floor_color_loop" x="10" y="10"><statement name="equals"><block type="forward"></block></statement></block></xml>',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../img/'
}
// end=%%
;

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	if (pattern != "") {
		switch(parseInt(pattern)) {
			case 0:
				var v = 2;
				break;
			case 1:
				var v = 5;
				break;
			case 2:
				var v;
				do {
					v = parseInt(Math.random() * 8);
				}while(v == Map.prototype.state);
				break;
		}
	}
	else {
		var v;
		do {
			v = parseInt(Math.random() * 8);
		}while(v == Map.prototype.state);
	}
	Map.prototype.state = v;
	
	v = v + 2;
	
	for (var i = 10; i >= v; i--) {
		Map.prototype.map[i][5] = 2;
	}
	Map.prototype.map[v - 1][6] = 5;
	Map.prototype.map[v - 2][6] = 1;
	Map.prototype.map[v][6] = 1;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
