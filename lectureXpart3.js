let particles = [];

// myslím, že tohle můžu použít pro svoje Flowing Lines
function createParticle(x, y) {
  const v = 0.2 * Math.random;
  const a = Math.PI + Math.random() * Math.PI;
  const maxLife = 200 + Mathfloor(Math.random() * 100);
  return { x: x, y: y, velocity: v, angle: a, maxLife: maxLife };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle, y);
  noStroke();
  fill(255, 255, 255);
  ellipse(0, 0, 6);
  pop();
}

function updateParticle(particle) {
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
  particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;

  //tady řeším Max life (pro Flowing Lines)
  if (particle.life > particle.maxLife) {
    const particleIndex = particles.indexOf(particle);
    particles.splice(particleIndex, 1);
  }
}

for (let i = 0; i < 100; i++) {
  const particle = createParticle();
  particle.push(particle);
}

// function draw() {
//   for (let particle of particles) {
//     drawParticle(particle);
//     updateParticle(particle);
//   }
// }

if (mouseIsPressed) {
  for (let i = 0; i < 5; i++) {
    let particle = createParticle(mouseX, mouseY);
    particle.push(particle);
  }
}
