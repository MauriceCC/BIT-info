// ---------- Menú móvil ----------
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// ---------- Propuestas ----------
const list = document.getElementById("proposals");

function renderProposals(filter = "all") {
  const items = PROPOSALS.filter((p) => filter === "all" || p.pillar === filter);
  list.innerHTML = "";
  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = `proposal proposal--${p.pillar.toLowerCase()}`;

    const badge = document.createElement("span");
    badge.className = "proposal__pillar mono";
    badge.textContent = `${p.pillar} · ${PILLAR_NAMES[p.pillar]}`;

    const h = document.createElement("h3");
    h.textContent = p.title;

    const d = document.createElement("p");
    d.textContent = p.desc;

    card.append(badge, h, d);

    if (p.portal) {
      const m = document.createElement("p");
      m.className = "proposal__portal mono";
      m.textContent = "▸ En el Portal del CE";
      card.append(m);
    }
    list.append(card);
  });
}

// Contador total y por pilar
document.getElementById("proposal-count").textContent = PROPOSALS.length;
document.querySelectorAll(".filter").forEach((btn) => {
  const f = btn.dataset.filter;
  const n = f === "all" ? PROPOSALS.length : PROPOSALS.filter((p) => p.pillar === f).length;
  const c = document.createElement("span");
  c.className = "filter__count";
  c.textContent = n;
  btn.append(" ", c);
});

// Módulos del Portal del CE
const modules = document.getElementById("portal-modules");
PROPOSALS.filter((p) => p.portal && p.title !== "Portal del Centro de Estudiantes").forEach((p) => {
  const li = document.createElement("li");
  li.className = `chip chip--${p.pillar.toLowerCase()}`;
  li.textContent = p.title;
  modules.append(li);
});

document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderProposals(btn.dataset.filter);
  })
);
renderProposals();

// ---------- Cuenta regresiva (hora de Perú, UTC-5) ----------
const ELECTION_START = new Date("2026-11-27T08:00:00-05:00");
const ELECTION_END = new Date("2026-11-27T14:00:00-05:00");
const cd = document.getElementById("countdown");
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const now = new Date();
  if (now >= ELECTION_END) {
    cd.innerHTML = '<p class="countdown__label mono">La jornada electoral ha concluido. ¡Gracias por participar!</p>';
    return;
  }
  if (now >= ELECTION_START) {
    cd.innerHTML = '<p class="countdown__label mono">🗳️ ¡La votación está abierta hasta las 14:00! Lleva tu carné y DNI.</p>';
    return;
  }
  let diff = Math.floor((ELECTION_START - now) / 1000);
  const d = Math.floor(diff / 86400); diff %= 86400;
  const h = Math.floor(diff / 3600); diff %= 3600;
  const m = Math.floor(diff / 60);
  const s = diff % 60;
  document.getElementById("cd-d").textContent = pad(d);
  document.getElementById("cd-h").textContent = pad(h);
  document.getElementById("cd-m").textContent = pad(m);
  document.getElementById("cd-s").textContent = pad(s);
  setTimeout(tick, 1000);
}
tick();

// ---------- Cronograma: resaltar etapa actual ----------
(function markTimeline() {
  const today = new Date();
  const ymd = (s) => new Date(s + "T00:00:00-05:00");
  document.querySelectorAll("#timeline li").forEach((li) => {
    const start = ymd(li.dataset.date);
    const end = ymd(li.dataset.end || li.dataset.date);
    end.setDate(end.getDate() + 1);
    if (today >= end) li.classList.add("is-done");
    else if (today >= start) li.classList.add("is-now");
  });
})();

// ---------- Fondo de bits del hero ----------
(function bits() {
  const el = document.querySelector(".hero__bits");
  if (!el) return;
  let s = "";
  for (let i = 0; i < 1400; i++) s += Math.random() > 0.5 ? "1" : "0";
  el.textContent = s;
})();

// ---------- Aparición al hacer scroll ----------
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
  { threshold: 0.12 }
);
document.querySelectorAll(".section__head, .pillar, .candidate, .commitments li, .steps li, .timeline li").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
