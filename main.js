
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const wCanvas = 600;
const wSquare = 60;

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

canvas.addEventListener("click", function(e){
	const x = e.x;
	const y = e.y;

	ctx.font= `40px Arial`;

	if(isPerson1){
		ctx.fillText("o", x, y);
	}else{
		ctx.fillText("x", x, y);
	}

	isPerson1 = !isPerson1;
})