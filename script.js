document.addEventListener("DOMContentLoaded", init, false);
//stage elements
var grid_size = 25;
var tile_count = 25;
var allow_move = true;
var mousex;
var mousey;
var round = 1;
var board = {
	t1: { state: "blank" },
	t2: { state: "blank" },
	t3: { state: "blank" },
	m1: { state: "blank" },
	m2: { state: "blank" },
	m3: { state: "blank" },
	b1: { state: "blank" },
	b2: { state: "blank" },
	b3: { state: "blank" }
};
var allow_game = true;
function init() {
	canvas = document.getElementById("canvas");
	//canvas.addEventListener("mousemove", setMousePosition, false);
	context_to_canvas = canvas.getContext("2d");
	canvas.addEventListener("mousedown", togglewhenonmousdown, false);
	setInterval(game, 1000 / 60);
}

//when mouse clicked
function togglewhenonmousdown(event) {
	if (event.x != undefined && event.y != undefined) {
		mousex = event.x;
		mousey = event.y;
	} else {
		// Firefox method to get the position
		mousex = Number(event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
		mousey = Number(event.clientY + document.body.scrollTop + document.documentElement.scrollTop);
	}

	if (allow_game) {
		console.log(mousex, mousey);
		//sector 1
		if (mousex < 208 && mousey < 208) {
			console.log("sector 1");
			//document.getElementById('current_sector').innerHTML = 'sector 1';
			if (board.t1.state == "blank") {
				if (round % 2 == 0) {
					board.t1.state = "c";
				} else {
					board.t1.state = "x";
				}
				console.log(round);
				round++;
			}
		} else if (mousex < 416 && mousey < 208) {
			console.log("sector 2");
			if (board.t2.state == "blank") {
				if (round % 2 == 0) {
					board.t2.state = "c";
				} else {
					board.t2.state = "x";
				}
				console.log(round);
				round++;
			}
			//document.getElementById('current_sector').innerHTML = 'sector 2';
		} else if (mousex < 624 && mousey < 208) {
			//last of rirst row
			console.log("sector 3");
			if (board.t3.state == "blank") {
				if (round % 2 == 0) {
					board.t3.state = "c";
				} else {
					board.t3.state = "x";
				}
				console.log(round);
				round++;
			}
			//document.getElementById('current_sector').innerHTML = 'sector 3';
		} else if (mousex < 208 && mousey < 416) {
			//first of middle row
			console.log("sector 4");
			if (board.m1.state == "blank") {
				if (round % 2 == 0) {
					board.m1.state = "c";
				} else {
					board.m1.state = "x";
				}
				console.log(round);
				round++;
			}
			//document.getElementById('current_sector').innerHTML = 'sector 4';
		} else if (mousex < 416 && mousey < 416) {
			//middle
			console.log("sector 5");
			if (board.m2.state == "blank") {
				if (round % 2 == 0) {
					board.m2.state = "c";
				} else {
					board.m2.state = "x";
				}
				console.log(round);
				round++;
			}

			//document.getElementById('current_sector').innerHTML = 'sector 5';
		} else if (mousex < 624 && mousey < 416) {
			console.log("sector 6");
			//document.getElementById('current_sector').innerHTML = 'sector 6';
			if (board.m3.state == "blank") {
				if (round % 2 == 0) {
					board.m3.state = "c";
				} else {
					board.m3.state = "x";
				}
				console.log(round);
				round++;
			}
		} else if (mousex < 208 && mousey < 624) {
			//first of last row
			console.log("sector 7");
			if (board.b1.state == "blank") {
				if (round % 2 == 0) {
					board.b1.state = "c";
				} else {
					board.b1.state = "x";
				}
				console.log(round);
				round++;
			}
			//document.getElementById('current_sector').innerHTML = 'sector 7';
		} else if (mousex < 416 && mousey < 624) {
			console.log("sector 8");
			if (board.b2.state == "blank") {
				if (round % 2 == 0) {
					board.b2.state = "c";
				} else {
					board.b2.state = "x";
				}
				console.log(round);
				round++;
			}
			//document.getElementById('current_sector').innerHTML = 'sector 8';
		} else if (mousex < 624 && mousey < 624) {
			//last of last row
			console.log("sector 9");
			if (board.b3.state == "blank") {
				//removes overide
				if (round % 2 == 0) {
					board.b3.state = "c"; //adds player
				} else {
					board.b3.state = "x";
				}
				console.log(round);
				round++;
			}

			//document.getElementById('current_sector').innerHTML = 'sector 9';
		}

		//document.getElementById("coordinates").innerHTML = "placed at: " + player.x + ", " + player.y
	}
}

function game() {
	//blitting onto screen

	context_to_canvas.fillStyle = "black";
	context_to_canvas.fillRect(0, 0, canvas.width, canvas.height);

	draw_lines();

	if (board.t1.state == "x") {
		draw_a_x(22, 22);
	} else if (board.t1.state == "c") {
		draw_a_c(100, 100);
	}

	if (board.t2.state == "x") {
		draw_a_x(230, 22);
	} else if (board.t2.state == "c") {
		draw_a_c(308, 100);
	}

	if (board.t3.state == "x") {
		draw_a_x(438, 22);
	} else if (board.t3.state == "c") {
		draw_a_c(516, 100);
	}

	if (board.m1.state == "x") {
		draw_a_x(22, 230);
	} else if (board.m1.state == "c") {
		draw_a_c(100, 308);
	}

	if (board.m2.state == "x") {
		draw_a_x(230, 230);
		//console.log("here")
	} else if (board.m2.state == "c") {
		draw_a_c(308, 308);
	}

	if (board.m3.state == "x") {
		draw_a_x(438, 230);
	} else if (board.m3.state == "c") {
		draw_a_c(516, 308);
	}

	if (board.b1.state == "x") {
		draw_a_x(22, 438);
	} else if (board.b1.state == "c") {
		draw_a_c(100, 516);
	}
	if (board.b2.state == "x") {
		draw_a_x(230, 438);
	} else if (board.b2.state == "c") {
		draw_a_c(308, 516);
	}
	if (board.b3.state == "x") {
		draw_a_x(438, 438);
	} else if (board.b3.state == "c") {
		draw_a_c(516, 516);
	}

	check(board);
	/*
  //bliiting player
  context_to_canvas.fillStyle = "lime";
  context_to_canvas.fillRect(player.x,player.y,player.w,player.h);
  */
	//appears like below and to the right bc coordinates arw used in top left as reference
}

function draw_lines() {
	//making sector dividers
	context_to_canvas.beginPath();
	context_to_canvas.moveTo(0, 208);
	context_to_canvas.lineTo(624, 208);
	context_to_canvas.strokeStyle = "white";
	context_to_canvas.stroke();

	context_to_canvas.beginPath();
	context_to_canvas.moveTo(0, 416);
	context_to_canvas.lineTo(624, 416);
	context_to_canvas.strokeStyle = "white";
	context_to_canvas.stroke();

	context_to_canvas.beginPath();
	context_to_canvas.moveTo(208, 0);
	context_to_canvas.lineTo(208, 624);
	context_to_canvas.strokeStyle = "white";
	context_to_canvas.stroke();

	context_to_canvas.beginPath();
	context_to_canvas.moveTo(416, 0);
	context_to_canvas.lineTo(416, 624);
	context_to_canvas.strokeStyle = "white";
	context_to_canvas.stroke();
}

function draw_a_x(x, y) {
	context_to_canvas.beginPath();
	context_to_canvas.moveTo(x, y);
	context_to_canvas.lineTo(x + 150, y + 150);
	context_to_canvas.strokeStyle = "#FF6D53  ";
	context_to_canvas.stroke();

	context_to_canvas.beginPath();
	context_to_canvas.moveTo(x, y + 150);
	context_to_canvas.lineTo(x + 150, y);
	context_to_canvas.strokeStyle = "#FF6D53  ";
	context_to_canvas.stroke();
}

function draw_a_c(x, y) {
	//console.log("here")
	context_to_canvas.beginPath();
	context_to_canvas.arc(x, y, 75, 0, 360);
	context_to_canvas.strokeStyle = "#ffff00";
	context_to_canvas.stroke();
}

function check(current) {
	if (current.t1.state == "x" && current.t2.state == "x" && current.t3.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(0, 104);
		context_to_canvas.lineTo(614, 104);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
	} else if (current.t1.state == "c" && current.t2.state == "c" && current.t3.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(0, 104);
		context_to_canvas.lineTo(614, 104);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
	}

	if (current.m1.state == "x" && current.m2.state == "x" && current.m3.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(0, 312);
		context_to_canvas.lineTo(614, 312);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
	} else if (current.m1.state == "c" && current.m2.state == "c" && current.m3.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(0, 312);
		context_to_canvas.lineTo(614, 312);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
		//cross out
	}

	if (current.b1.state == "x" && current.b2.state == "x" && current.b3.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(0, 520);
		context_to_canvas.lineTo(614, 520);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
		//anothef corss out
	} else if (current.b1.state == "c" && current.b2.state == "c" && current.b3.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(0, 520);
		context_to_canvas.lineTo(614, 520);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
	}

	if (current.t1.state == "x" && current.m1.state == "x" && current.b1.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(104, 0);
		context_to_canvas.lineTo(104, 624);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
		//third cross out
	} else if (current.t1.state == "c" && current.m1.state == "c" && current.b1.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(104, 0);
		context_to_canvas.lineTo(104, 624);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
	}
	if (current.t2.state == "x" && current.m2.state == "x" && current.b2.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(312, 0);
		context_to_canvas.lineTo(312, 624);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
	} else if (current.t2.state == "c" && current.m2.state == "c" && current.b2.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(312, 0);
		context_to_canvas.lineTo(312, 624);
		context_to_canvas.strokeStyle = "#ffff00";
		game_over();
		context_to_canvas.stroke();
	}
	if (current.t3.state == "x" && current.m3.state == "x" && current.b3.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(520, 0);
		context_to_canvas.lineTo(520, 624);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
	} else if (current.t3.state == "c" && current.m3.state == "c" && current.b3.state == "c") {
		//console.log('c win');

		context_to_canvas.beginPath();
		context_to_canvas.moveTo(520, 0);
		context_to_canvas.lineTo(520, 624);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
	}
	if (current.t1.state == "x" && current.m2.state == "x" && current.b3.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(60, 100);
		context_to_canvas.lineTo(465, 524);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
	} else if (current.t1.state == "c" && current.m2.state == "c" && current.b3.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(60, 100);
		context_to_canvas.lineTo(465, 524);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
	}
	if (current.t3.state == "x" && current.m2.state == "x" && current.b1.state == "x") {
		//console.log('x win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(79, 524);
		context_to_canvas.lineTo(564, 100);
		context_to_canvas.strokeStyle = "#FF6D53";
		context_to_canvas.stroke();
		game_over();
	} else if (current.t3.state == "c" && current.m2.state == "c" && current.b1.state == "c") {
		//console.log('c win');
		context_to_canvas.beginPath();
		context_to_canvas.moveTo(79, 524);
		context_to_canvas.lineTo(564, 100);
		context_to_canvas.strokeStyle = "#ffff00";
		context_to_canvas.stroke();
		game_over();
	}
}

function game_over() {
	allow_game = false;
}
function restart() {
	allow_game = true;
	board = {
		t1: { state: "blank" },
		t2: { state: "blank" },
		t3: { state: "blank" },
		m1: { state: "blank" },
		m2: { state: "blank" },
		m3: { state: "blank" },
		b1: { state: "blank" },
		b2: { state: "blank" },
		b3: { state: "blank" }
	};
}
