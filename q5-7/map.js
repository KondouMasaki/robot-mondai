var Map = function() {
};
Map.prototype = {
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,0,1,0,1,0,1,1,1,1],
		[1,1,0,0,0,0,0,0,0,1,1,1],
		[1,1,1,0,1,0,1,0,1,1,1,1],
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
		"life": 65534,
	},
	"hint": "マスの色が3色あるよ。赤なら右、青なら左、緑ならまっすぐだよ。",
	"state": 0,
	"goals": 1,
	"patterns": 3,
	"blocksLimit": 0,
	"links": {
		"question": "Q5-7",
		"previous": "q5-6",
		"next": "q5-8"
	},
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
	// if pettern is <empty string> selected "どれか"
	if (pattern != "") {
		switch(parseInt(pattern)) {
			case 0:
				Map.prototype.state = 1;
				break;
			case 1:
				Map.prototype.state = 5;
				break;
			case 2:
				var v;
				do {
					v = parseInt(Math.random() * 9);
				}while (Map.prototype.state == v);
				Map.prototype.state = v;
				break;
		}
	}
	switch(Map.prototype.state) {
		case 0:
			Map.prototype.map[7][5] = Map.prototype.colorValue.red;
			Map.prototype.map[6][5] = Map.prototype.colorValue.red;
			Map.prototype.map[6][7] = Map.prototype.colorValue.yellow;
			break;
		case 1:
			Map.prototype.map[7][5] = Map.prototype.colorValue.red;
			Map.prototype.map[6][5] = Map.prototype.colorValue.blue;
			Map.prototype.map[4][7] = Map.prototype.colorValue.yellow;
			break;
		case 2:
			Map.prototype.map[7][5] = Map.prototype.colorValue.red;
			Map.prototype.map[6][5] = Map.prototype.colorValue.green;
			Map.prototype.map[5][8] = Map.prototype.colorValue.yellow;
			break;
		case 3:
			Map.prototype.map[7][5] = Map.prototype.colorValue.blue;
			Map.prototype.map[6][5] = Map.prototype.colorValue.red;
			Map.prototype.map[4][3] = Map.prototype.colorValue.yellow;
			break;
		case 4:
			Map.prototype.map[7][5] = Map.prototype.colorValue.blue;
			Map.prototype.map[6][5] = Map.prototype.colorValue.blue;
			Map.prototype.map[6][3] = Map.prototype.colorValue.yellow;
			break;
		case 5:
			Map.prototype.map[7][5] = Map.prototype.colorValue.blue;
			Map.prototype.map[6][5] = Map.prototype.colorValue.green;
			Map.prototype.map[5][2] = Map.prototype.colorValue.yellow;
			break;
		case 6:
			Map.prototype.map[7][5] = Map.prototype.colorValue.green;
			Map.prototype.map[6][5] = Map.prototype.colorValue.red;
			Map.prototype.map[3][6] = Map.prototype.colorValue.yellow;
			break;
		case 7:
			Map.prototype.map[7][5] = Map.prototype.colorValue.green;
			Map.prototype.map[6][5] = Map.prototype.colorValue.blue;
			Map.prototype.map[3][4] = Map.prototype.colorValue.yellow;
			break;
		case 8:
			Map.prototype.map[7][5] = Map.prototype.colorValue.green;
			Map.prototype.map[6][5] = Map.prototype.colorValue.green;
			Map.prototype.map[2][5] = Map.prototype.colorValue.yellow;
			break;
	}
	Map.prototype.state = (Map.prototype.state + 1) % 9;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
};
