import React, { useEffect, useRef } from "react";

function CanvasText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray = [];

    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      console.log(mouse.x, mouse.y);
    });

    ctx.fillStyle = "#715df2";
    ctx.font = "50px sans-serif";
    ctx.fillText("HI, I'M EJEZIE", 20, 60);
    ctx.strokeStyle = "white";
    ctx.strokeRect(0, 0, 400, 100);
    const data = ctx.getImageData(0, 0, 400, 100);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }
      draw() {
        ctx.fillStyle = "#715df2";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      }
    }
  }, []);

  return <canvas id="canvas" ref={canvasRef}></canvas>;
}

export default CanvasText;
