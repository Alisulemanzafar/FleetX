// ===== EDIT THESE DETAILS BEFORE PUBLISHING =====
const BUSINESS = {
  email: "dispatch@yourcompany.com",
  company: "Fleet X Logistics"
};
// ================================================

const header = document.querySelector(".site-header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("siteNav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const emailCard = document.getElementById("emailCard");
const emailText = document.getElementById("emailText");
emailCard.href = `mailto:${BUSINESS.email}`;
emailText.textContent = BUSINESS.email;

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const subject = encodeURIComponent(`Dispatch Inquiry - ${data.get("name")} - ${data.get("equipment")}`);
  const body = encodeURIComponent(
`Hello ${BUSINESS.company},

I am interested in dispatching services.

Name: ${data.get("name")}
Phone: ${data.get("phone") || "Not provided"}
Email: ${data.get("email")}
Equipment: ${data.get("equipment")}
Preferred Lanes: ${data.get("lanes") || "Not provided"}

Message:
${data.get("message") || "No additional message"}

Thank you.`
  );

  window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
});

// Gentle tilt/highlight effect on service cards for desktop.
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("pointermove", e => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.backgroundImage =
      `radial-gradient(circle at ${x}% ${y}%, rgba(42,137,255,.12), transparent 36%), linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.015))`;
  });
  card.addEventListener("pointerleave", () => card.style.backgroundImage = "");
});
