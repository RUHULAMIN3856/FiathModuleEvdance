
(function () {
    let canvas = document.getElementById('DrawArc');
    let ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(400, 500);
        ctx.lineTo(600, 300);
        ctx.stroke();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.arcTo(400, 500, 600, 300, 180);
        ctx.stroke();
    })();