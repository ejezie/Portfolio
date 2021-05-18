import React, { useEffect, useRef} from "react";

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
    });

    ctx.fillStyle = "#715df2";
    ctx.font = "50px sans-serif";
    ctx.fillText("HI, I'M EJEZIE", 20, 60);
    // ctx.strokeStyle = "black";
    // ctx.strokeRect(0, 0, 400, 100);
    const textCoordinates = ctx.getImageData(0, 0, 400, 100);
    console.log(textCoordinates.data);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 40 + 5;
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
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particleArray = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128
          ) {
            let positionX = x;
            let positionY = y;
            particleArray.push(new Particle(positionX, positionY));
          }
        }
      }
    };
    init();
    // console.log(particleArray);

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

  return (
    <canvas id="canvas" ref={canvasRef} height="100%" width="100%"></canvas>
  );
}

export default CanvasText;
