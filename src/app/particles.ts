// @see https://codepen.io/72lions/pen/nzdpWz
export class Particles {
  QUANTITY = 100;
  PARTICLE_SIZE = 10;
  CONTAINER;
  SCREEN_WIDTH;
  SCREEN_HEIGHT;
  CANVAS;
  context;
  particles;
  document;
  window;

  constructor(document: Document) {
    this.document = document;
    // @see https://stackoverflow.com/a/52620181/16711967
    this.window = document.defaultView;
  }

  drawParticles(el: any, container: any): void {
    this.CANVAS = el;
    this.CONTAINER = container;
    if (!!(this.CANVAS && this.CANVAS.getContext)) {
      //CANVAS.style.position = 'absolute';
      this.context = this.CANVAS.getContext('2d');
      this.context.globalCompositeOperation = 'destination-over';
      // @see https://stackoverflow.com/a/51600005
      // @see https://stackoverflow.com/a/43505254/16711967
      this.window.addEventListener('resize', this.windowResizeHandler.bind(this), false);
      this.windowResizeHandler();
      this.createParticles();
      this.loop();
    }
  }

  windowResizeHandler(): void {
    this.SCREEN_WIDTH = this.CONTAINER.offsetWidth;
    this.SCREEN_HEIGHT = this.CONTAINER.offsetHeight;
    this.CANVAS.width = this.SCREEN_WIDTH;
    this.CANVAS.height = this.SCREEN_HEIGHT;
  }

  createParticles(): void {
    this.particles = [];
    const depth = 0;

    for (let i = 0; i < this.QUANTITY; i++) {
      const posX = this.PARTICLE_SIZE / 2 + Math.random() * (this.CONTAINER.offsetWidth - this.PARTICLE_SIZE / 2);
      const posY = this.PARTICLE_SIZE / 2 + Math.random() * (this.CONTAINER.offsetHeight - this.PARTICLE_SIZE / 2);

      const speed = 2;
      const directionX = -speed + Math.random() * speed * 2;
      const directionY = -speed + Math.random() * speed * 2;

      this.particles.push({
        position: { x: posX, y: posY },
        size: this.PARTICLE_SIZE,
        directionX,
        directionY,
        speed,
        targetX: posX,
        targetY: posY,
        depth,
        index: i,
        fillColor: `#${((Math.random() * 0x00eaff + 0xff0000) | 0).toString(16)}`,
      });
    }
  }

  loop(): void {
    const theme = this.document.documentElement.getAttribute('data-bs-theme');
    this.context.fillStyle = theme === 'dark' ? 'rgba(33, 37, 41, 0.2)' : 'rgba(248, 249, 250, 0.2)';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    let z = 0;
    let xdist = 0;
    let ydist = 0;
    let dist = 0;

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      const lp = { x: particle.position.x, y: particle.position.y };

      if (particle.position.x <= particle.size / 2 || particle.position.x >= this.SCREEN_WIDTH - this.PARTICLE_SIZE / 2) {
        particle.directionX *= -1;
      }

      if (particle.position.y <= particle.size / 2 || particle.position.y >= this.SCREEN_HEIGHT - this.PARTICLE_SIZE / 2) {
        particle.directionY *= -1;
      }

      for (let s = 0; s < this.particles.length; s++) {
        const bounceParticle = this.particles[s];
        if (bounceParticle.index !== particle.index) {
          //what are the distances
          z = this.PARTICLE_SIZE;
          xdist = Math.abs(bounceParticle.position.x - particle.position.x);
          ydist = Math.abs(bounceParticle.position.y - particle.position.y);
          dist = Math.sqrt(xdist ** 2 + ydist ** 2);
          if (dist < z) {
            this.randomiseDirection(particle);
            this.randomiseDirection(bounceParticle);
          }
        }
      }

      particle.position.x -= particle.directionX;
      particle.position.y -= particle.directionY;

      this.context.beginPath();
      this.context.fillStyle = particle.fillColor;
      this.context.lineWidth = particle.size;
      this.context.moveTo(lp.x, lp.y);
      this.context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
      this.context.closePath();
      this.context.fill();
    }

    // @see https://stackoverflow.com/a/43505254/16711967
    this.window.requestAnimationFrame(this.loop.bind(this));
  }

  randomiseDirection(particle): void {
    //pick a random deg
    let d = 0;
    while (d === 0 || d === 90 || d === 180 || d === 360) {
      d = Math.floor(Math.random() * 360);
    }

    const r = (d * 180) / Math.PI;
    particle.directionX = Math.sin(r) * particle.speed;
    particle.directionY = Math.cos(r) * particle.speed;
  }
}