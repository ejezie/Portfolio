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
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }
      draw() {
        ctx.fillStyle = "#715df2";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 50) {
          this.size = 30;
        } else {
          this.size = 1;
        }
      }
    }

    const init = () => {
      particleArray = [];
      for (let i = 0; i < 500; i++) {
        let x = Math.random() * 500;
        let y = Math.random() * 500;
        particleArray.push(new Particle(x, y));
      }
    };
    init();
    console.log(particleArray);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <canvas id="canvas" ref={canvasRef} height="500px"></canvas>;
}

export default CanvasText;
