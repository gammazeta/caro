
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const wCanvas = 600;
const wSquare = 60;

let
a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
d1, d2, d3, d4, d5, d6, d7, d8, d9, d10,
e1, e2, e3, e4, e5, e6, e7, e8, e9, e10,
f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
h1, h2, h3, h4, h5, h6, h7, h8, h9, h10,
i1, i2, i3, i4, i5, i6, i7, i8, i9, i10,
j1, j2, j3, j4, j5, j6, j7, j8, j9, j10;

function init(){
	canvas.width = wCanvas;
	canvas.height = wCanvas;


	for(let i = 1; i < 10; i++){
		ctx.moveTo(0, i*wSquare);
		ctx.lineTo(wCanvas, i*wSquare);
		ctx.stroke();

		ctx.moveTo(i*wSquare, 0);
		ctx.lineTo(i*wSquare, wCanvas);
		ctx.stroke();
	}
}
init();


let isPerson1 = true;

/* canvas.addEventListener("click", function(e){
	const x = e.x;
	const y = e.y;
	console.log(e.x);
	console.log(e.y);

	ctx.font= `40px Arial`;

	if(isPerson1){
		ctx.fillText("o", x, y);
	}else{
		ctx.fillText("x", x, y);
	} 

	isPerson1 = !isPerson1;
}); */



canvas.addEventListener('mousedown', function (e) {
    // Get the target
    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let mark;
    if(isPerson1) {
		mark = 'O';
		console.log((x - 12), ", ", (y + 15));
	} else {
		mark = 'X';
		console.log((x - 12), ", ", (y + 15));
		};
	if ((x - 12) < 46 ) {
		if ((y + 15) < 73 && !a1) {
			draw(mark, "a1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !a2) {
			draw(mark, "a2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !a3) {
			draw(mark, "a3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !a4) {
			draw(mark, "a4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !a5) {
			draw(mark, "a5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !a6) {
			draw(mark, "a6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !a7) {
			draw(mark, "a7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !a8) {
			draw(mark, "a8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !a9) {
			draw(mark, "a9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !a10) {
			draw(mark, "a10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 46 && (x - 12) < 106) {
		if ((y + 15) < 73 && !b1) {
			draw(mark, "b1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !b2) {
			draw(mark, "b2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !b3) {
			draw(mark, "b3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !b4) {
			draw(mark, "b4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !b5) {
			draw(mark, "b5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !b6) {
			draw(mark, "b6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !b7) {
			draw(mark, "b7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !b8) {
			draw(mark, "b8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !b9) {
			draw(mark, "b9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !b10) {
			draw(mark, "b10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 106 && (x - 12) < 166) {
		if ((y + 15) < 73 && !c1) {
			draw(mark, "c1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !c2) {
			draw(mark, "c2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !c3) {
			draw(mark, "c3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !c4) {
			draw(mark, "c4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !c5) {
			draw(mark, "c5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !c6) {
			draw(mark, "c6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !c7) {
			draw(mark, "c7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !c8) {
			draw(mark, "c8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !c9) {
			draw(mark, "c9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !c10) {
			draw(mark, "c10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 166 && (x - 12) < 226) {
		if ((y + 15) < 73 && !d1) {
			draw(mark, "d1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !d2) {
			draw(mark, "d2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !d3) {
			draw(mark, "d3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !d4) {
			draw(mark, "d4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !d5) {
			draw(mark, "d5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !d6) {
			draw(mark, "d6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !d7) {
			draw(mark, "d7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !d8) {
			draw(mark, "d8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !d9) {
			draw(mark, "d9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !d10) {
			draw(mark, "d10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 226 && (x - 12) < 286) {
		if ((y + 15) < 73 && !e1) {
			draw(mark, "e1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !e2) {
			draw(mark, "e2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !e3) {
			draw(mark, "e3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !e4) {
			draw(mark, "e4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !e5) {
			draw(mark, "e5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !e6) {
			draw(mark, "e6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !e7) {
			draw(mark, "e7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !e8) {
			draw(mark, "e8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !e9) {
			draw(mark, "e9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !e10) {
			draw(mark, "e10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 286 && (x - 12) < 346) {
		if ((y + 15) < 73 && !f1) {
			draw(mark, "f1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !f2) {
			draw(mark, "f2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !f3) {
			draw(mark, "f3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !f4) {
			draw(mark, "f4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !f5) {
			draw(mark, "f5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !f6) {
			draw(mark, "f6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !f7) {
			draw(mark, "f7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !f8) {
			draw(mark, "f8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !f9) {
			draw(mark, "f9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !f10) {
			draw(mark, "f10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 346 && (x - 12) < 406) {
		if ((y + 15) < 73 && !g1) {
			draw(mark, "g1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !g2) {
			draw(mark, "g2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !g3) {
			draw(mark, "g3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !g4) {
			draw(mark, "g4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !g5) {
			draw(mark, "g5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !g6) {
			draw(mark, "g6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !g7) {
			draw(mark, "g7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !g8) {
			draw(mark, "g8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !g9) {
			draw(mark, "g9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !g10) {
			draw(mark, "g10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 406 && (x - 12) < 466) {
		if ((y + 15) < 73 && !h1) {
			draw(mark, "h1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !h2) {
			draw(mark, "h2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !h3) {
			draw(mark, "h3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !h4) {
			draw(mark, "h4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !h5) {
			draw(mark, "h5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !h6) {
			draw(mark, "h6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !h7) {
			draw(mark, "h7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !h8) {
			draw(mark, "h8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !h9) {
			draw(mark, "h9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !h10) {
			draw(mark, "h10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 466 && (x - 12) < 526) {
		if ((y + 15) < 73 && !i1) {
			draw(mark, "i1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !i2) {
			draw(mark, "i2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !i3) {
			draw(mark, "i3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !i4) {
			draw(mark, "i4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !i5) {
			draw(mark, "i5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !i6) {
			draw(mark, "i6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !i7) {
			draw(mark, "i7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !i8) {
			draw(mark, "i8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !i9) {
			draw(mark, "i9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !i10) {
			draw(mark, "i10");
			isPerson1 = !isPerson1;
		}
	} else if ((x - 12) > 526 && (x - 12) < 586) {
		if ((y + 15) < 73 && !j1) {
			draw(mark, "j1");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 73 && (y + 15) < 133 && !j2) {
			draw(mark, "j2");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 133 && (y + 15) < 193 && !j3) {
			draw(mark, "j3");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 193 && (y + 15) < 253 && !j4) {
			draw(mark, "j4");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 253 && (y + 15) < 313 && !j5) {
			draw(mark, "j5");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 313 && (y + 15) < 373 && !j6) {
			draw(mark, "j6");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 373 && (y + 15) < 433 && !j7) {
			draw(mark, "j7");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 433 && (y + 15) < 493 && !j8) {
			draw(mark, "j8");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 493 && (y + 15) < 553 && !j9) {
			draw(mark, "j9");
			isPerson1 = !isPerson1;
		} else if ((y + 15) > 553 && (y + 15) < 613 && !j10) {
			draw(mark, "j10");
			isPerson1 = !isPerson1;
		}
	}
	});

function draw(value, squarePosition) {
	ctx.font= `40px Arial`;
	switch(squarePosition) {
		case "a1":
			ctx.fillText(value, 16, 47);
			a1 = value;
			localStorage.setItem("a1", value)
			break;
		case "a2":
			ctx.fillText(value, 16, 107);
			a2 = value;
			localStorage.setItem("a2", value)
			break;
		case "a3":
			ctx.fillText(value, 16, 167);
			a3 = value;
			localStorage.setItem("a3", value)
			break;
		case "a4":
			ctx.fillText(value, 16, 227);
			a4 = value;
			localStorage.setItem("a4", value)
			break;
		case "a5":
			ctx.fillText(value, 16, 287);
			a5 = value;
			localStorage.setItem("a5", value)
			break;
	    case "a6":
			ctx.fillText(value, 16, 347);
			a6 = value;
			localStorage.setItem("a6", value)
			break;
		case "a7":
			ctx.fillText(value, 16, 407);
			a7 = value;
			localStorage.setItem("a7", value)
			break;
		case "a8":
			ctx.fillText(value, 16, 467);
			a8 = value;
			localStorage.setItem("a8", value)
			break;
		case "a9":
			ctx.fillText(value, 16, 527);
			a9 = value;
			localStorage.setItem("a9", value)
			break;
		case "a10":
			ctx.fillText(value, 16, 587);
			a10 = value;
			localStorage.setItem("a10", value)
			break;
		case "b1":
			ctx.fillText(value, 76, 47);
			b1 = value;
			localStorage.setItem("b1", value)
			break;
	    case "b2":
			ctx.fillText(value, 76, 107);
			b2 = value;
			localStorage.setItem("b2", value)
			break;
		case "b3":
			ctx.fillText(value, 76, 167);
			b3 = value;
			localStorage.setItem("b3", value)
			break;
		case "b4":
			ctx.fillText(value, 76, 227);
			b4 = value;
			localStorage.setItem("b4", value)
			break;
		case "b5":
			ctx.fillText(value, 76, 287);
			b5 = value;
			localStorage.setItem("b5", value)
			break;
		case "b6":
			ctx.fillText(value, 76, 347);
			b6 = value;
			localStorage.setItem("b6", value)
			break;
		case "b7":
			ctx.fillText(value, 76, 407);
			b7 = value;
			localStorage.setItem("b7", value)
			break;
	    case "b8":
			ctx.fillText(value, 76, 467);
			b8 = value;
			localStorage.setItem("b8", value)
			break;
		case "b9":
			ctx.fillText(value, 76, 527);
			b9 = value;
			localStorage.setItem("b9", value)
			break;
		case "b10":
			ctx.fillText(value, 76, 587);
			b10 = value;
			localStorage.setItem("b10", value)
			break;
		case "c1":
			ctx.fillText(value, 136, 47);
			c1 = value;
			localStorage.setItem("c1", value)
			break;
		case "c2":
			ctx.fillText(value, 136, 107);
			c2 = value;
			localStorage.setItem("c2", value)
			break;
		case "c3":
			ctx.fillText(value, 136, 167);
			c3 = value;
			localStorage.setItem("c3", value)
			break;
	    case "c4":
			ctx.fillText(value, 136, 227);
			c4 = value;
			localStorage.setItem("c4", value)
			break;
		case "c5":
			ctx.fillText(value, 136, 287);
			c5 = value;
			localStorage.setItem("c5", value)
			break;
		case "c6":
			ctx.fillText(value, 136, 347);
			c6 = value;
			localStorage.setItem("c6", value)
			break;
		case "c7":
			ctx.fillText(value, 136, 407);
			c7 = value;
			localStorage.setItem("c7", value)
			break;
	    case "c8":
			ctx.fillText(value, 136, 467);
			c8 = value;
			localStorage.setItem("c8", value)
			break;
		case "c9":
			ctx.fillText(value, 136, 527);
			c9 = value;
			localStorage.setItem("c9", value)
			break;
		case "c10":
			ctx.fillText(value, 136, 587);
			c10 = value;
			localStorage.setItem("c10", value)
			break;
		case "d1":
			ctx.fillText(value, 196, 47);
			d1 = value;
			localStorage.setItem("d1", value)
			break;
		case "d2":
			ctx.fillText(value, 196, 107);
			d2 = value;
			localStorage.setItem("d2", value)
			break;
		case "d3":
			ctx.fillText(value, 196, 167);
			d3 = value;
			localStorage.setItem("d3", value)
			break;
	    case "d4":
			ctx.fillText(value, 196, 227);
			d4 = value;
			localStorage.setItem("d4", value)
			break;
		case "d5":
			ctx.fillText(value, 196, 287);
			d5 = value;
			localStorage.setItem("d5", value)
			break;
		case "d6":
			ctx.fillText(value, 196, 347);
			d6 = value;
			localStorage.setItem("d6", value)
			break;
		case "d7":
			ctx.fillText(value, 196, 407);
			d7 = value;
			localStorage.setItem("d7", value)
			break;
	    case "d8":
			ctx.fillText(value, 196, 467);
			d8 = value;
			localStorage.setItem("d8", value)
			break;
		case "d9":
			ctx.fillText(value, 196, 527);
			d9 = value;
			localStorage.setItem("d9", value)
			break;
		case "d10":
			ctx.fillText(value, 196, 587);
			d10 = value;
			localStorage.setItem("d10", value)
			break;
	    case "e1":
			ctx.fillText(value, 256, 47);
			e1 = value;
			localStorage.setItem("e1", value)
			break;
		case "e2":
			ctx.fillText(value, 256, 107);
			e2 = value;
			localStorage.setItem("e2", value)
			break;
		case "e3":
			ctx.fillText(value, 256, 167);
			e3 = value;
			localStorage.setItem("e3", value)
			break;
	    case "e4":
			ctx.fillText(value, 256, 227);
			e4 = value;
			localStorage.setItem("e4", value)
			break;
		case "e5":
			ctx.fillText(value, 256, 287);
			e5 = value;
			localStorage.setItem("e5", value)
			break;
		case "e6":
			ctx.fillText(value, 256, 347);
			e6 = value;
			localStorage.setItem("e6", value)
			break;
		case "e7":
			ctx.fillText(value, 256, 407);
			e7 = value;
			localStorage.setItem("e7", value)
			break;
	    case "e8":
			ctx.fillText(value, 256, 467);
			e8 = value;
			localStorage.setItem("e8", value)
			break;
		case "e9":
			ctx.fillText(value, 256, 527);
			e9 = value;
			localStorage.setItem("e9", value)
			break;
		case "e10":
			ctx.fillText(value, 256, 587);
			e10 = value;
			localStorage.setItem("e10", value)
			break;
		case "f1":
			ctx.fillText(value, 316, 47);
			f1 = value;
			localStorage.setItem("f1", value)
			break;
		case "f2":
			ctx.fillText(value, 316, 107);
			f2 = value;
			localStorage.setItem("f2", value)
			break;
		case "f3":
			ctx.fillText(value, 316, 167);
			f3 = value;
			localStorage.setItem("f3", value)
			break;
	    case "f4":
			ctx.fillText(value, 316, 227);
			f4 = value;
			localStorage.setItem("f4", value)
			break;
		case "f5":
			ctx.fillText(value, 316, 287);
			f5 = value;
			localStorage.setItem("f5", value)
			break;
		case "f6":
			ctx.fillText(value, 316, 347);
			f6 = value;
			localStorage.setItem("f6", value)
			break;
		case "f7":
			ctx.fillText(value, 316, 407);
			f7 = value;
			localStorage.setItem("f7", value)
			break;
	    case "f8":
			ctx.fillText(value, 316, 467);
			f8 = value;
			localStorage.setItem("f8", value)
			break;
		case "f9":
			ctx.fillText(value, 316, 527);
			f9 = value;
			localStorage.setItem("f9", value)
			break;
		case "f10":
			ctx.fillText(value, 316, 587);
			f10 = value;
			localStorage.setItem("f10", value)
			break;
		case "g1":
			ctx.fillText(value, 376, 47);
			g1 = value;
			localStorage.setItem("g1", value)
			break;
		case "g2":
			ctx.fillText(value, 376, 107);
			g2 = value;
			localStorage.setItem("g2", value)
			break;
		case "g3":
			ctx.fillText(value, 376, 167);
			g3 = value;
			localStorage.setItem("g3", value)
			break;
	    case "g4":
			ctx.fillText(value, 376, 227);
			g4 = value;
			localStorage.setItem("g4", value)
			break;
		case "g5":
			ctx.fillText(value, 376, 287);
			g5 = value;
			localStorage.setItem("g5", value)
			break;
		case "g6":
			ctx.fillText(value, 376, 347);
			g6 = value;
			localStorage.setItem("g6", value)
			break;
		case "g7":
			ctx.fillText(value, 376, 407);
			g7 = value;
			localStorage.setItem("g7", value)
			break;
	    case "g8":
			ctx.fillText(value, 376, 467);
			g8 = value;
			localStorage.setItem("g8", value)
			break;
		case "g9":
			ctx.fillText(value, 376, 527);
			g9 = value;
			localStorage.setItem("g9", value)
			break;
		case "g10":
			ctx.fillText(value, 376, 587);
			g10 = value;
			localStorage.setItem("g10", value)
			break;
		case "h1":
			ctx.fillText(value, 436, 47);
			h1 = value;
			localStorage.setItem("h1", value)
			break;
		case "h2":
			ctx.fillText(value, 436, 107);
			h2 = value;
			localStorage.setItem("h2", value)
			break;
		case "h3":
			ctx.fillText(value, 436, 167);
			h3 = value;
			localStorage.setItem("h3", value)
			break;
	    case "h4":
			ctx.fillText(value, 436, 227);
			h4 = value;
			localStorage.setItem("h4", value)
			break;
		case "h5":
			ctx.fillText(value, 436, 287);
			h5 = value;
			localStorage.setItem("h5", value)
			break;
		case "h6":
			ctx.fillText(value, 436, 347);
			h6 = value;
			localStorage.setItem("h6", value)
			break;
		case "h7":
			ctx.fillText(value, 436, 407);
			h7 = value;
			localStorage.setItem("h7", value)
			break;
	    case "h8":
			ctx.fillText(value, 436, 467);
			h8 = value;
			localStorage.setItem("h8", value)
			break;
		case "h9":
			ctx.fillText(value, 436, 527);
			h9 = value;
			localStorage.setItem("h9", value)
			break;
		case "h10":
			ctx.fillText(value, 436, 587);
			h10 = value;
			localStorage.setItem("h10", value)
			break;
		case "i1":
			ctx.fillText(value, 496, 47);
			i1 = value;
			localStorage.setItem("i1", value)
			break;
		case "i2":
			ctx.fillText(value, 496, 107);
			i2 = value;
			localStorage.setItem("i2", value)
			break;
		case "i3":
			ctx.fillText(value, 496, 167);
			i3 = value;
			localStorage.setItem("i3", value)
			break;
	    case "i4":
			ctx.fillText(value, 496, 227);
			i4 = value;
			localStorage.setItem("i4", value)
			break;
		case "i5":
			ctx.fillText(value, 496, 287);
			i5 = value;
			localStorage.setItem("i5", value)
			break;
		case "i6":
			ctx.fillText(value, 496, 347);
			i6 = value;
			localStorage.setItem("i6", value)
			break;
		case "i7":
			ctx.fillText(value, 496, 407);
			i7 = value;
			localStorage.setItem("i7", value)
			break;
	    case "i8":
			ctx.fillText(value, 496, 467);
			i8 = value;
			localStorage.setItem("i8", value)
			break;
		case "i9":
			ctx.fillText(value, 496, 527);
			i9 = value;
			localStorage.setItem("i9", value)
			break;
		case "i10":
			ctx.fillText(value, 496, 587);
			i10 = value;
			localStorage.setItem("i10", value)
			break;
		case "j1":
			ctx.fillText(value, 556, 47);
			j1 = value;
			localStorage.setItem("j1", value)
			break;
		case "j2":
			ctx.fillText(value, 556, 107);
			j2 = value;
			localStorage.setItem("j2", value)
			break;
		case "j3":
			ctx.fillText(value, 556, 167);
			j3 = value;
			localStorage.setItem("j3", value)
			break;
	    case "j4":
			ctx.fillText(value, 556, 227);
			j4 = value;
			localStorage.setItem("j4", value)
			break;
		case "j5":
			ctx.fillText(value, 556, 287);
			j5 = value;
			localStorage.setItem("j5", value)
			break;
		case "j6":
			ctx.fillText(value, 556, 347);
			j6 = value;
			localStorage.setItem("j6", value)
			break;
		case "j7":
			ctx.fillText(value, 556, 407);
			j7 = value;
			localStorage.setItem("j7", value)
			break;
	    case "j8":
			ctx.fillText(value, 556, 467);
			j8 = value;
			localStorage.setItem("j8", value)
			break;
		case "j9":
			ctx.fillText(value, 556, 527);
			j9 = value;
			localStorage.setItem("j9", value)
			break;
		case "j10":
			ctx.fillText(value, 556, 587);
			j10 = value;
			localStorage.setItem("j10", value)
			break;
	}
}

function restoreBoard() {
	let saved;
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`a${i}`);
		if (saved !== null) {
           draw(saved, `a${i}`);
		}
	} 
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`b${i}`);
		if (saved !== null) {
		   draw(saved, `b${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`c${i}`);
		if (saved !== null) {
		   draw(saved, `c${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`d${i}`);
		if (saved !== null) {
		   draw(saved, `d${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`e${i}`);
		if (saved !== null) {
		   draw(saved, `e${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`f${i}`);
		if (saved !== null) {
		   draw(saved, `f${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`g${i}`);
		if (saved !== null) {
		   draw(saved, `g${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`h${i}`);
		if (saved !== null) {
		   draw(saved, `h${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`i${i}`);
		if (saved !== null) {
		   draw(saved, `i${i}`);
		}
	}
	for(let i = 0; i < 11; i++) {
		saved = localStorage.getItem(`j${i}`);
		if (saved !== null) {
		   draw(saved, `j${i}`);
		}
	}
}

function resetBoard() {
	if (confirm("This will reset the board then reloads your page. Are you sure about that?")) {
	localStorage.clear();
	location.reload();
	}
};

restoreBoard();
	