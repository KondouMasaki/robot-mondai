var Map = function() {
};
Map.prototype = {
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 10,
		"direction": 0,
		"life": 65534,
	},
	"hint": "ゴールは、マスの色が白ではなくて、右か左にかべがあるところだよ",
	"state": 0,
	"goals": 1,
	"patterns": 3,
	"blocksLimit": 0,
	"links": {
		"question": "Q3-15",
		"previous": "q3-14",
		"next": "q4-1"
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
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="floor_color_is" x="10" y="10"><value name="color"><block type="math_number"><field name="NUM">0</field></block></value><statement name="equals"><block type="forward"></block></statement><statement name="not_equals"><block type="movable_is"><value name="direction"><block type="math_number"><field name="NUM">1</field></block></value><statement name="equals"><block type="movable_is"><value name="direction"><block type="math_number"><field name="NUM">3</field></block></value></block></statement></block></statement></block></xml>',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../img/'
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	// if pettern is <empty string> selected "どれか"
	var x, y, z;
	if (pattern != "") {
		switch(parseInt(pattern)) {
			case 0:
				y = 4;
				x = 0;
				z = 0;
				break;
			case 1:
				y = 5;
				x = 1;
				z = 1;
				break;
			case 2:
				do {
					y = parseInt(Math.random() * 9);
				} while(y == Map.prototype.state);
				x = parseInt(Math.random() * 2);
				z = parseInt(Math.random() * 32);
				break;
		}
	}
	else {
		do {
			y = parseInt(Math.random() * 9);
		} while(y == Map.prototype.state);
		x = parseInt(Math.random() * 2);
		z = parseInt(Math.random() * 32);
	}
	
	Map.prototype.state = y;
	y++;
	
	switch(x) {
		case 0:
			Map.prototype.map[y][4] = 1;
			Map.prototype.map[y][6] = 5;
			Map.prototype.map[y][5] = parseInt(Math.random() * 3) + 2;
			break;
			
		case 1:
			Map.prototype.map[y][6] = 1;
			Map.prototype.map[y][4] = 5;
			Map.prototype.map[y][5] = parseInt(Math.random() * 3) + 2;
			break;
	}
	
	for (var i = y + 1; i <= 9; i++) {
		switch(z % 4) {
			case 0:
				break;
			case 1:
				Map.prototype.map[i][4] = 1;
				break;
			case 2:
				Map.prototype.map[i][6] = 1;
				break;
			case 3:
				Map.prototype.map[i][5] = parseInt(Math.random() * 3) + 2;
				break;
		}
		z = (z + 13) % 32;
	}
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
};
