var Map = function() {
};
Map.prototype = {
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 1,
		"y": 10,
		"direction": 0,
		"life": 65534,
		"speed": 2
	},
	"hint": "色のついたマスから、右、左のじゅんで曲がるといいらしいよ。何マス進むかは考えてみよう。",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "Q4-4",
		"previous": "q4-3",
		"next": "q5-1"
	},
	"robot": {
		"type": 3,
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
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="write_register" x="10" y="10"><field name="register_name">0</field><value name="register_value"><block type="get_floor_color"></block></value><next><block type="times_loop"><value name="times"><block type="read_register"><field name="register_name">0</field></block></value></block></next></block></xml>',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../img/'
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function() {
	var f = parseInt(Math.random() * 3) + 1;
	switch(f) {
		case 1:
			Map.prototype.map[10][1] = Map.prototype.colorValue.red;
			break;
			
		case 2:
			Map.prototype.map[10][1] = Map.prototype.colorValue.blue;
			break;
			
		case 3:
			Map.prototype.map[10][1] = Map.prototype.colorValue.green;
			break;
	}
	var y = 10 - f;
	
	f = parseInt(Math.random() * 3) + 1;
	switch(f) {
		case 1:
			Map.prototype.map[y][1] = Map.prototype.colorValue.red;
			break;
			
		case 2:
			Map.prototype.map[y][1] = Map.prototype.colorValue.blue;
			break;
			
		case 3:
			Map.prototype.map[y][1] = Map.prototype.colorValue.green;
			break;
	}
	
	var x = 1 + f;
	
	f = parseInt(Math.random() * 3) + 1;
	switch(f) {
		case 1:
			Map.prototype.map[y][x] = Map.prototype.colorValue.red;
			break;
			
		case 2:
			Map.prototype.map[y][x] = Map.prototype.colorValue.blue;
			break;
			
		case 3:
			Map.prototype.map[y][x] = Map.prototype.colorValue.green;
			break;
	}
	
	Map.prototype.map[y - f][x] = Map.prototype.colorValue.yellow;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
