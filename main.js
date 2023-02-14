
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const wCanvas = 600;
const wSquare = 60;
let moves = 0;

let squareArr = [];

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


let isPerson1 = "true";

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
  /*  console.log((x - 12), (y + 15));
	console.log(Math.abs(Math.round((x - 32) / 60) * 60));
	console.log(Math.abs(Math.round((y + 30) / 60) * 60 - 60)); */
	let mark;
	if(isPerson1 == "true") {
       mark = "X";
	   ctx.fillStyle = "#ff0000";
	} else {
	   mark = "O"
	   ctx.fillStyle = "#0000ff";
	}
    function checkOccupied() {
		if(squareArr.length !== 0) {
			for(let i = 0; i < squareArr.length; i++) {
				if((Math.abs(Math.round((x - 32) / 60) * 60) + 16) == getXPos(i, squareArr) && (Math.abs(Math.round((y - 32) / 60) * 60) + 47) == getYPos(i, squareArr)) {
					console.log(false);
					return false;
				}
			}
			console.log("true");
			return true;
		} else {
			console.log("truenoLength");
			return true;
		}
	} console.log((Math.abs(Math.round((x - 32) / 60) * 60) + 16))
	console.log((Math.abs(Math.round((y - 32) / 60) * 60) + 47))
        if(checkOccupied()) {
		    ctx.font= `40px Arial`;
	     	ctx.fillText(mark, (Math.abs(Math.round((x - 32) / 60) * 60) + 16), Math.abs(Math.round((y + 30) / 60) * 60 - 60) + 47);
		    squareArr.push(`${(Math.abs(Math.round((x - 32) / 60) * 60) + 16)} ${Math.abs(Math.round((y + 30) / 60) * 60 - 60) + 47} ${mark}`);
			localStorage.setItem("board", squareArr);
		    if(isPerson1 == "false") {
				isPerson1 = "true";
				localStorage.setItem("isPerson1", "true");
			} else {
					isPerson1 = "false";
					localStorage.setItem("isPerson1", "false");
				}
			}
		}
)

function getXPos(i, arr) {
	let data = arr[i];
	const space = data.split(" ");
	return parseInt(space[0]);
};

function getYPos(i, arr) {
	let data = arr[i];
	const space = data.split(" ");
	return parseInt(space[1]);
};

function getMark(i, arr) {
    let data = arr[i];
	const space = data.split(" ");
	return (space[2]);
}

function restoreBoard() {
    const restoreArr = (localStorage.getItem("board").split(','));
	if (localStorage.getItem("isPerson1") !== null) {
		isPerson1 = localStorage.getItem("isPerson1");
		}
	localStorage.clear();
	localStorage.setItem("isPerson1", isPerson1);
	for (let i = 0; i < restoreArr.length; i++) {
    let restoreX = getXPos(i, restoreArr);
	let restoreY = getYPos(i, restoreArr);
	let restoreMark = getMark(i, restoreArr);
	if(restoreMark == "X") {
		ctx.fillStyle = "#ff0000";
	} else {
		ctx.fillStyle = "#0000ff";
	}

    ctx.font= `40px Arial`;
	ctx.fillText(restoreMark, (Math.abs(Math.round((restoreX - 32) / 60) * 60) + 16), Math.abs(Math.round((restoreY + 30) / 60) * 60 - 60) + 47);
    squareArr.push(`${(Math.abs(Math.round((restoreX - 32) / 60) * 60) + 16)} ${Math.abs(Math.round((restoreY + 30) / 60) * 60 - 60) + 47} ${restoreMark}`);	localStorage.setItem("board", squareArr);

	}
}
restoreBoard();

function resetBoard() {
	if (confirm("This will reset the board then reloads your page. Are you sure about that?")) {
		localStorage.clear();
		location.reload();
		};
};