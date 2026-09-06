// Fleet X Logistics — premium static GitHub Pages site
const BUSINESS = {
  email: "dispatch@yourcompany.com"
};

// Header
const navShell = document.getElementById("navShell");
window.addEventListener("scroll", () => {
  navShell.classList.toggle("fixed", window.scrollY > 100);
}, { passive: true });

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("emailText").textContent = BUSINESS.email;
document.getElementById("emailLink").href = `mailto:${BUSINESS.email}`;

// Mouse-follow lighting
const glow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", e => {
  if (e.pointerType === "touch") return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
  glow.style.opacity = "1";
}, { passive: true });

// Spotlight on bento cards
document.querySelectorAll(".spotlight-card").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX-r.left}px`);
    card.style.setProperty("--my", `${e.clientY-r.top}px`);
  });
});

// Drag-to-scroll equipment rail
const rail = document.getElementById("equipmentRail");
let isDown = false, startX = 0, startScroll = 0;
rail.addEventListener("pointerdown", e => {
  if (e.pointerType === "mouse") {
    isDown = true; startX = e.clientX; startScroll = rail.scrollLeft;
    rail.classList.add("dragging");
    rail.setPointerCapture(e.pointerId);
  }
});
rail.addEventListener("pointermove", e => {
  if (!isDown) return;
  rail.scrollLeft = startScroll - (e.clientX - startX) * 1.25;
});
["pointerup","pointercancel","pointerleave"].forEach(evt => rail.addEventListener(evt, () => {
  isDown = false; rail.classList.remove("dragging");
}));

// Static-site contact form -> email client
document.getElementById("leadForm").addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Fleet X Dispatch Inquiry — ${d.get("equipment")} — ${d.get("name")}`);
  const body = encodeURIComponent(
`Hello Fleet X Logistics,

I am interested in dispatching services.

Name: ${d.get("name")}
Phone: ${d.get("phone") || "Not provided"}
Email: ${d.get("email")}
Equipment: ${d.get("equipment")}
Preferred lanes: ${d.get("lanes") || "Not provided"}

Message:
${d.get("message") || "No additional message"}

Thank you.`
  );
  window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
});

// Animated network background for hero
const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");
let W=0,H=0,dpr=1,points=[];
function resizeCanvas(){
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = canvas.clientWidth; H = canvas.clientHeight;
  canvas.width = W*dpr; canvas.height = H*dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  const count = Math.max(24, Math.min(54, Math.floor(W/28)));
  points = Array.from({length:count}, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx:(Math.random()-.5)*.12, vy:(Math.random()-.5)*.12,
    r:Math.random()*1.2+.35
  }));
}
function draw(){
  ctx.clearRect(0,0,W,H);
  for(let i=0;i<points.length;i++){
    const p=points[i];
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    for(let j=i+1;j<points.length;j++){
      const q=points[j], dx=p.x-q.x, dy=p.y-q.y, dist=Math.hypot(dx,dy);
      if(dist<150){
        const alpha=(1-dist/150)*.075;
        ctx.strokeStyle=`rgba(70,190,235,${alpha})`;
        ctx.lineWidth=.7;
        ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();
      }
    }
    ctx.fillStyle="rgba(97,220,236,.23)";
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
  }
  requestAnimationFrame(draw);
}
resizeCanvas();draw();
window.addEventListener("resize", resizeCanvas);
