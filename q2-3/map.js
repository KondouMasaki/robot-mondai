var Map = function() {
};
Map.prototype = {
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,0,1,1,1,1,1,0,1,1,1],
		[1,1,0,1,1,1,1,1,0,1,1,1],
		[1,1,0,0,0,0,0,0,0,1,1,1],
		[1,1,0,1,1,0,1,1,0,1,1,1],
		[1,1,0,1,1,0,1,1,0,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 7,
		"direction": 0,
		"life": 64,
	},
	"hint": "マスの色とゴールにかん係はあるのかな？",
	"state": 0,
	"goals": 1,
	"patterns": 4,
	"links": {
		"question": "Q2-3",
		"previous": "q2-2",
		"next": "q2-4"
	},
	"robot": {
		"type": 1,
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
	"map2": [],
	"chars2": []
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	if (pattern != "") {
		Map.prototype.state = parseInt(pattern);
	}
	switch(Map.prototype.state) {
		case 0:
			Map.prototype.map[4][5] = 2;
			Map.prototype.map[4][8] = 2;
			Map.prototype.map[6][8] = 5;
			break;
		case 1:
			Map.prototype.map[4][5] = 2;
			Map.prototype.map[4][8] = 3;
			Map.prototype.map[2][8] = 5;
			break;
		case 2:
			Map.prototype.map[4][5] = 3;
			Map.prototype.map[4][2] = 3;
			Map.prototype.map[6][2] = 5;
			break;
		case 3:
			Map.prototype.map[4][5] = 3;
			Map.prototype.map[4][2] = 2;
			Map.prototype.map[2][2] = 5;
			break;
	}
	Map.prototype.state = (Map.prototype.state + 1) % 4;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
