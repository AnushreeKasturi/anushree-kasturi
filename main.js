/* =====================================================================
   CONFIG — every piece of content on the site lives here.
   ===================================================================== */
const CONFIG = {
  first: "Anushree",
  last: "Kasturi",
  roles: ["CS student", "ML engineer", "DSA enthusiast", "builder", "problem solver"],
  tagline: "Computer science student building things that think — from neural nets to the algorithms underneath them.",
  status: "currently: lorem ipsum research intern @ dolor labs",
  location: "Lorem City, IN",
  timezone: "Asia/Kolkata",
  email: "hello@lorem-ipsum.dev",
  github: "",               // GitHub username → live contribution graph. Empty = demo data.
  resume: "#",
  socials: [
    { label: "GitHub",   url: "https://github.com/lorem-ipsum" },
    { label: "LinkedIn", url: "https://linkedin.com/in/lorem-ipsum" },
    { label: "LeetCode", url: "https://leetcode.com/lorem-ipsum" },
    { label: "X / Twitter", url: "https://x.com/lorem-ipsum" },
    { label: "Resume",   url: "#" },
  ],
  about: [
    "Hi, I'm <b>Anushree</b> — a <b>computer science</b> undergrad at <b>Lorem Institute of Technology</b> who likes to <em>understand things all the way down</em>.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. I spend most of my time on <b>machine learning</b>, <b>deep learning</b> and <b>data structures & algorithms</b> — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "When I'm not training models, you'll find me ut enim ad minim veniam, quis nostrud exercitation — and probably debugging something at 2am.",
  ],
  stats: [
    { n: 500, suffix: "+", label: "DSA problems solved" },
    { n: 24,  suffix: "",  label: "projects shipped" },
    { n: 9.2, suffix: "",  label: "CGPA / 10", decimals: 1 },
    { n: 6,   suffix: "",  label: "hackathons" },
  ],
  skills: [
    { group: "AI / ML",   items: [["PyTorch", 88], ["scikit-learn", 82], ["Transformers", 72], ["Computer Vision", 68]] },
    { group: "DSA & CS",  items: [["Graphs & DP", 85], ["Trees & Heaps", 88], ["OS / DBMS", 74], ["System Design", 60]] },
    { group: "Languages", items: [["Python", 92], ["C++", 86], ["Java", 70], ["SQL", 76]] },
    { group: "Build",     items: [["React / Next", 72], ["FastAPI", 78], ["Docker", 64], ["Git & Linux", 84]] },
  ],
  // art: life | plasma | rain | spiral | wave | bits
  projects: [
    { title: "Lorem Vision",  year: "2026", wide: true, art: "life",
      desc: "Lorem ipsum dolor sit amet — a real-time object detection pipeline consectetur adipiscing elit, sed do eiusmod tempor.",
      tags: ["PyTorch", "YOLO", "OpenCV"], code: "#", live: "#" },
    { title: "Ipsum GPT", year: "2026", wide: true, art: "plasma",
      desc: "A tiny transformer trained from scratch. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      tags: ["Transformers", "CUDA", "Python"], code: "#", live: "#" },
    { title: "Dolor Graph", year: "2025", art: "spiral",
      desc: "Visual pathfinding & graph algorithm explorer. Duis aute irure dolor in reprehenderit.",
      tags: ["TypeScript", "Algorithms"], code: "#", live: "#" },
    { title: "Sit Amet API", year: "2025", art: "rain",
      desc: "Scalable recommendation service. Excepteur sint occaecat cupidatat non proident.",
      tags: ["FastAPI", "Redis", "Docker"], code: "#" },
    { title: "Consectetur", year: "2024", art: "wave",
      desc: "Time-series forecasting for lorem data. Sunt in culpa qui officia deserunt mollit.",
      tags: ["LSTM", "Pandas"], code: "#", live: "#" },
  ],
  experience: [
    { hash: "a1f9c2e", ref: "HEAD -> now", role: "ML Research Intern", org: "Dolor Labs", when: "May 2026 — present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { hash: "7b3e0d4", ref: "", role: "Software Engineering Intern", org: "Ipsum Corp", when: "Dec 2025 — Feb 2026",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { hash: "c90d11a", ref: "tag: v1.0", role: "Lead, AI/ML Club", org: "Lorem Institute of Technology", when: "2025 — present",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { hash: "0e4f8b2", ref: "init", role: "B.Tech, Computer Science", org: "Lorem Institute of Technology", when: "2023 — 2027",
      desc: "Coursework: data structures, algorithms, machine learning, operating systems, DBMS, computer networks." },
  ],
};

/* =====================================================================
   helpers
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(pointer: fine)").matches;
const mouse = { x: -9999, y: -9999 };
addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
const ext = url => url && url !== "#" ? ' target="_blank" rel="noopener"' : "";

// Run fn(seconds) at ~fps only while el is on screen.
function animate(el, fps, fn) {
  if (REDUCED) { fn(0); return; }
  let vis = false, raf = 0, last = 0;
  const tick = t => {
    raf = 0;
    if (!vis) return;
    if (t - last >= 1000 / fps - 2) { last = t; fn(t / 1000); }
    raf = requestAnimationFrame(tick);
  };
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !raf) raf = requestAnimationFrame(tick); }).observe(el);
}

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";
function scramble(el, text = el.dataset.text || el.textContent, dur = 900) {
  el.dataset.text = text;
  if (REDUCED) { el.textContent = text; return; }
  const start = performance.now();
  const step = now => {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = [...text].map((c, i) =>
      c === " " || i / text.length < p ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join("");
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* =====================================================================
   fill content
   ===================================================================== */
const fullName = `${CONFIG.first} ${CONFIG.last}`;
document.title = `${fullName} — CS Student · Engineer · Builder`;
$("#first").textContent = CONFIG.first;
$("#last").textContent = CONFIG.last;
$("#status").textContent = CONFIG.status;
$("#tagline").textContent = CONFIG.tagline;
$("#loc").textContent = CONFIG.location;
$("#year").textContent = new Date().getFullYear();
$("#foot-name").textContent = fullName;
$("#email-text").textContent = CONFIG.email;
$("#about-text").innerHTML = CONFIG.about.map(p => `<p>${p}</p>`).join("");

const marq = ["machine learning", "deep learning", "data structures", "algorithms", "computer vision", "NLP", "python", "c++", "pytorch", "system design", "open source", "hackathons"];
$("#marquee").innerHTML = [...marq, ...marq].map(w => `<span>${w}</span><span class="star">✦</span>`).join("");

$("#stats").innerHTML = CONFIG.stats.map(s =>
  `<div class="stat frame" data-reveal><span class="n"><span data-count="${s.n}" data-dec="${s.decimals || 0}">0</span><sup>${esc(s.suffix)}</sup></span><span class="l">${esc(s.label)}</span></div>`).join("");

const BAR_W = 22;
$("#skills").innerHTML = CONFIG.skills.map(g => `
  <div class="skill frame" data-reveal><h4>${esc(g.group)}</h4><ul>${g.items.map(([n, v]) =>
    `<li><span>${esc(n)}</span><span class="pct">${v}%</span><span class="bar" data-v="${v}">[${"·".repeat(BAR_W)}]</span></li>`).join("")}</ul></div>`).join("");

$("#projects").innerHTML = CONFIG.projects.map((p, i) => `
  <article class="proj frame${p.wide ? " wide" : ""}" data-reveal data-label="${p.live && p.live !== "#" ? "visit" : "view"}">
    <div class="spot"></div>
    <div class="art"><span class="tagno">${String(i + 1).padStart(2, "0")}</span><span class="yr">${esc(p.year)}</span><pre data-art="${p.art}"></pre></div>
    <div class="body">
      <h3>${esc(p.title)}<span class="go">↗</span></h3>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="plinks">${p.code ? `<a href="${esc(p.code)}"${ext(p.code)}>source</a>` : ""}${p.live ? `<a href="${esc(p.live)}"${ext(p.live)}>live demo</a>` : ""}</div>
    </div>
  </article>`).join("");

$("#gitlog").innerHTML = CONFIG.experience.map(x => `
  <div class="commit" data-reveal>
    <span class="node">*</span>
    <div>
      <span class="hash">commit ${esc(x.hash)}</span>${x.ref ? ` <span class="ref">(${x.ref.startsWith("HEAD") ? `<b>${esc(x.ref)}</b>` : esc(x.ref)})</span>` : ""}
      <h4>${esc(x.role)} <em>@ ${esc(x.org)}</em></h4>
      <span class="when">Date: ${esc(x.when)}</span>
      <p>${esc(x.desc)}</p>
    </div>
  </div>`).join("");

$("#socials").innerHTML = CONFIG.socials.map(s =>
  `<li><a href="${esc(s.url)}"${ext(s.url)} data-hover><span>${esc(s.label)}</span><span>↗</span></a></li>`).join("");

/* =====================================================================
   boot sequence
   ===================================================================== */
let started = false;
(function boot() {
  const el = $("#boot"), log = $("#boot-log");
  let seen = false;
  try { seen = sessionStorage.getItem("booted"); sessionStorage.setItem("booted", 1); } catch {}
  if (REDUCED || seen) { el.remove(); start(); return; }
  document.body.classList.add("booting");
  const lines = [
    "[<b> OK </b>] mounting /dev/brain",
    "[<b> OK </b>] starting caffeine.service",
    "[<b> OK </b>] loading weights: neural_nets.pt (1.2 GB)",
    "[<b> OK </b>] linking libdsa.so",
    "[<b> OK </b>] compiling curiosity — 0 warnings",
    `[<b> .. </b>] booting portfolio :: ${esc(fullName.toLowerCase())}`,
  ];
  let i = 0;
  const done = () => { if (!el.isConnected) return; el.classList.add("done"); document.body.classList.remove("booting"); start(); setTimeout(() => el.remove(), 1000); };
  el.addEventListener("click", done);
  const next = () => {
    if (i < lines.length) { log.innerHTML += lines[i++] + "\n"; setTimeout(next, 120 + Math.random() * 90); return; }
    let p = 0;
    const bar = () => {
      p += 4;
      const n = Math.round(p / 5);
      log.innerHTML = log.innerHTML.replace(/\[[#\s]*\][^\n]*$/, "") + `[${"#".repeat(n)}${" ".repeat(20 - n)}] ${p}%`;
      p < 100 ? setTimeout(bar, 18) : setTimeout(done, 280);
    };
    bar();
  };
  next();
})();

function start() {
  if (started) return;
  started = true;
  scramble($("#first"), CONFIG.first, 1200);
  typeRoles();
}

/* typed roles */
function typeRoles() {
  const el = $("#role");
  if (REDUCED) { el.textContent = CONFIG.roles.join(" | "); return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = CONFIG.roles[r];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let wait = del ? 35 : 75;
    if (!del && c === word.length) { del = true; wait = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % CONFIG.roles.length; wait = 300; }
    setTimeout(tick, wait);
  })();
}

/* =====================================================================
   cursor, magnetic buttons, nav, progress, clock
   ===================================================================== */
if (FINE && !REDUCED) {
  const cur = $(".cursor"), dot = $(".c-dot"), ring = $(".c-ring"), label = $(".c-label");
  let rx = 0, ry = 0;
  (function follow() {
    rx += (mouse.x - rx) * 0.18; ry += (mouse.y - ry) * 0.18;
    dot.style.transform = `translate(${mouse.x}px,${mouse.y}px)`;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(follow);
  })();
  document.addEventListener("pointerover", e => {
    const l = e.target.closest("[data-label]");
    const h = e.target.closest("a,button,[data-hover],#shape,.gh-grid i,input[type=range]");
    cur.classList.toggle("label", !!l);
    cur.classList.toggle("hover", !l && !!h);
    if (l) label.textContent = l.dataset.label;
  });
  document.documentElement.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });

  document.querySelectorAll(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)"; b.style.transform = ""; setTimeout(() => b.style.transition = "", 600); });
  });
}

{
  const nav = $(".nav"), bar = $(".progress");
  let lastY = 0;
  addEventListener("scroll", () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    nav.classList.toggle("hide", y > lastY && y > 300);
    lastY = y;
  }, { passive: true });

  const links = [...document.querySelectorAll(".links a")];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(a => spy.observe($(a.hash)));

  const clock = $("#clock");
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: CONFIG.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const tz = CONFIG.timezone === "Asia/Kolkata" ? "IST" : "";
  setInterval(() => clock.textContent = `${fmt.format(new Date())} ${tz}`, 1000);
}

/* reveal + counters + skill bars */
{
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    io.unobserve(el);
    el.classList.add("in");
    setTimeout(() => el.style.transitionDelay = "", 1300);
    el.querySelectorAll("[data-scramble]").forEach(s => scramble(s));
    el.querySelectorAll("[data-count]").forEach(countUp);
    el.querySelectorAll(".bar").forEach(fillBar);
  }), { threshold: 0.15 });
  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    io.observe(el);
  });
}
function countUp(el) {
  const target = +el.dataset.count, dec = +el.dataset.dec, t0 = performance.now(), D = 1600;
  if (REDUCED) { el.textContent = target.toFixed(dec); return; }
  (function f(now) {
    const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 4);
    el.textContent = (target * e).toFixed(dec);
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
function fillBar(el) {
  const n = Math.round(+el.dataset.v / 100 * BAR_W);
  let k = 0;
  const f = () => {
    el.innerHTML = `[<b>${"█".repeat(k)}</b>${"·".repeat(BAR_W - k)}]`;
    if (k++ < n) setTimeout(f, REDUCED ? 0 : 30);
  };
  f();
}

/* project card spotlight + tilt */
document.querySelectorAll(".proj").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
    if (FINE && !REDUCED) card.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 5}deg) rotateY(${(x / r.width - 0.5) * 6}deg)`;
  });
  card.addEventListener("pointerleave", () => card.style.transform = "");
});

/* =====================================================================
   hero: ASCII field background
   ===================================================================== */
{
  const cv = $("#field"), ctx = cv.getContext("2d"), hero = $("#hero");
  const CW = 12, CH = 18, RAMP = " .·:-=+*#";
  let cols, rows, dpr;
  const size = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr;
    cols = Math.ceil(cv.clientWidth / CW); rows = Math.ceil(cv.clientHeight / CH);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = "11px 'Geist Mono', monospace"; ctx.textBaseline = "top";
  };
  size(); addEventListener("resize", size);
  animate(hero, 30, t => {
    const r = cv.getBoundingClientRect(), mx = (mouse.x - r.left) / CW, my = (mouse.y - r.top) / CH;
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      let v = Math.sin(x * 0.07 + t * 0.6) + Math.sin(y * 0.13 - t * 0.4) + Math.sin((x + y) * 0.045 + t * 0.3);
      const dx = x - mx, dy = (y - my) * 1.5, d2 = dx * dx + dy * dy;
      const near = Math.exp(-d2 / 90);
      v = (v + 3) / 6 * 0.75 + near * 0.9;
      const i = Math.min(RAMP.length - 1, (v * RAMP.length) | 0);
      if (i < 2) continue;
      ctx.fillStyle = near > 0.25 ? `rgba(209,255,74,${0.25 + near * 0.6})` : `rgba(237,237,237,${0.05 + v * 0.12})`;
      ctx.fillText(RAMP[i], x * CW, y * CH);
    }
  });
}

/* =====================================================================
   hero: rotating & morphing ASCII 3D shapes
   ===================================================================== */
{
  const pre = $("#shape"), nameEl = $("#shape-name"), fpsEl = $("#fps");
  const W = 76, H = 38, N = 9000, K2 = 6, K1 = 30, CHARS = ".,-~:;=!*#$@";
  const norm = (x, y, z) => { const l = Math.hypot(x, y, z) || 1; return [x / l, y / l, z / l]; };
  const torus = [], sphere = [], cube = [], knot = [];
  for (let i = 0; i < 60; i++) for (let j = 0; j < 150; j++) {
    const t = i / 60 * 2 * Math.PI, p = j / 150 * 2 * Math.PI, ct = Math.cos(t), st = Math.sin(t), cp = Math.cos(p), sp = Math.sin(p), c = 2 + ct;
    torus.push([c * cp, st, -c * sp, ct * cp, st, -ct * sp]);
  }
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
    const x = Math.cos(th) * r, z = Math.sin(th) * r;
    sphere.push([x * 2.7, y * 2.7, z * 2.7, x, y, z]);
  }
  for (let f = 0; f < 6; f++) for (let a = 0; a < 30; a++) for (let b = 0; b < 50; b++) {
    const u = (a / 29 - 0.5) * 3.4, v = (b / 49 - 0.5) * 3.4, s = 1.7, ax = f >> 1, sg = f & 1 ? 1 : -1;
    const p = [0, 0, 0], n = [0, 0, 0];
    p[ax] = s * sg; n[ax] = sg; p[(ax + 1) % 3] = u; p[(ax + 2) % 3] = v;
    cube.push([...p, ...n]);
  }
  // trefoil-knot tube
  for (let i = 0; i < 600; i++) for (let j = 0; j < 15; j++) {
    const t = i / 600 * 2 * Math.PI, ph = j / 15 * 2 * Math.PI;
    const P = tt => [Math.sin(tt) + 2 * Math.sin(2 * tt), Math.cos(tt) - 2 * Math.cos(2 * tt), -Math.sin(3 * tt)];
    const c = P(t), d = P(t + 0.001), T = norm(d[0] - c[0], d[1] - c[1], d[2] - c[2]);
    const B = norm(T[1], -T[0], 0); // T × z-axis
    const Nn = [B[1] * T[2] - B[2] * T[1], B[2] * T[0] - B[0] * T[2], B[0] * T[1] - B[1] * T[0]];
    const nx = Math.cos(ph) * Nn[0] + Math.sin(ph) * B[0], ny = Math.cos(ph) * Nn[1] + Math.sin(ph) * B[1], nz = Math.cos(ph) * Nn[2] + Math.sin(ph) * B[2];
    const k = 0.8, R = 0.5;
    knot.push([c[0] * k + nx * R, c[1] * k + ny * R, c[2] * k + nz * R, nx, ny, nz]);
  }
  const SHAPES = [["torus", torus], ["sphere", sphere], ["trefoil knot", knot], ["cube", cube]];
  // shuffle once so morphs scatter instead of sweeping
  const order = Array.from({ length: N }, (_, i) => i).sort(() => Math.random() - 0.5);
  let cur = 0, from = torus, to = torus, mt = 1;
  let A = 0.6, B = 0, vA = 0.022, vB = 0.012, drag = null, moved = 0, lastT = 0, frames = 0, fpsT = 0;
  const out = new Array(W * H), zb = new Float32Array(W * H);
  const L = norm(0, 1, -1);

  function frame(t) {
    if (!drag) { vA += (0.022 - vA) * 0.02; vB += (0.012 - vB) * 0.02; }
    A += vA; B += vB;
    if (mt < 1) mt = Math.min(1, mt + 0.022);
    const e = mt < .5 ? 4 * mt * mt * mt : 1 - Math.pow(-2 * mt + 2, 3) / 2;
    const cA = Math.cos(A), sA = Math.sin(A), cB = Math.cos(B), sB = Math.sin(B);
    out.fill(" "); zb.fill(0);
    for (let k = 0; k < N; k++) {
      const p = from[order[k]], q = to[order[k]];
      const x = p[0] + (q[0] - p[0]) * e, y = p[1] + (q[1] - p[1]) * e, z = p[2] + (q[2] - p[2]) * e;
      let nx = p[3] + (q[3] - p[3]) * e, ny = p[4] + (q[4] - p[4]) * e, nz = p[5] + (q[5] - p[5]) * e;
      // rotate X(A) then Z(B)
      const y1 = y * cA - z * sA, z1 = y * sA + z * cA;
      const X = x * cB - y1 * sB, Y = x * sB + y1 * cB, Z = z1 + K2;
      const ny1 = ny * cA - nz * sA, nz1 = ny * sA + nz * cA;
      const NX = nx * cB - ny1 * sB, NY = nx * sB + ny1 * cB;
      const ooz = 1 / Z, xp = (W / 2 + K1 * 1.9 * ooz * X) | 0, yp = (H / 2 - K1 * ooz * Y) | 0;
      if (xp < 0 || xp >= W || yp < 0 || yp >= H) continue;
      const idx = xp + yp * W;
      if (ooz <= zb[idx]) continue;
      zb[idx] = ooz;
      const ln = Math.hypot(NX, NY, nz1) || 1;
      const lum = (NX * L[0] + NY * L[1] + nz1 * L[2]) / ln;
      out[idx] = lum > 0 ? CHARS[Math.min(11, 1 + (lum * 11) | 0)] : ".";
    }
    let s = "";
    for (let r = 0; r < H; r++) s += out.slice(r * W, r * W + W).join("") + "\n";
    pre.textContent = s;
    frames++;
    if (t - fpsT > 1) { fpsEl.textContent = `${frames}fps`; frames = 0; fpsT = t; }
  }
  animate(pre, 60, frame);

  pre.addEventListener("pointerdown", e => { drag = { x: e.clientX, y: e.clientY }; moved = 0; pre.setPointerCapture(e.pointerId); });
  pre.addEventListener("pointermove", e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    moved += Math.abs(dx) + Math.abs(dy);
    vB = dx * 0.004; vA = dy * 0.004;
    drag = { x: e.clientX, y: e.clientY };
  });
  pre.addEventListener("pointerup", () => {
    if (moved < 6) {
      from = to; cur = (cur + 1) % SHAPES.length; to = SHAPES[cur][1]; mt = 0;
      scramble(nameEl, SHAPES[cur][0], 500);
      if (REDUCED) { mt = 1; frame(0); }
    }
    drag = null;
  });
}

/* =====================================================================
   project card ASCII art
   ===================================================================== */
{
  const RAMP = " .:-=+*#%@";
  const pick = v => RAMP[Math.max(0, Math.min(RAMP.length - 1, (v * RAMP.length) | 0))];
  const C = 52, R = 13;
  const ART = {
    plasma: (x, y, t) => pick((Math.sin(x * .16 + t) + Math.sin(y * .4 + t * 1.3) + Math.sin((x + y) * .1 + t * .7) + Math.sin(Math.hypot(x - C / 2, (y - R / 2) * 2) * .3 - t * 1.6) + 4) / 8),
    spiral: (x, y, t) => { const dx = (x - C / 2) / 2, dy = y - R / 2, a = Math.atan2(dy, dx), d = Math.hypot(dx, dy); return pick((Math.sin(a * 3 + d * .9 - t * 3) + 1) / 2 * Math.max(0, 1 - d / 15)); },
    wave: (x, y, t) => { const h = R / 2 + Math.sin(x * .18 + t * 1.6) * 3 + Math.sin(x * .07 - t) * 2; return y > h ? pick(.35 + (y - h) / R) : Math.abs(y - h) < 1 ? "~" : " "; },
    bits: (x, y, t) => Math.random() < .05 ? "1" : (Math.sin(x * .3 + t * 2) * Math.cos(y * .6 - t) > .3 ? "0" : " "),
  };
  document.querySelectorAll("[data-art]").forEach(pre => {
    const kind = pre.dataset.art;
    if (kind === "life") {
      let g = new Uint8Array(C * R), gen = 0;
      const seed = () => { g = g.map(() => Math.random() < .3); gen = 0; };
      seed();
      animate(pre, 10, () => {
        const n = new Uint8Array(C * R);
        let alive = 0;
        for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) {
          let s = 0;
          for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) if (i || j) s += g[(x + i + C) % C + ((y + j + R) % R) * C];
          const v = g[x + y * C] ? (s === 2 || s === 3) : s === 3;
          n[x + y * C] = v; alive += v;
        }
        g = n;
        if (++gen > 220 || alive < 25) seed();
        let s = "";
        for (let y = 0; y < R; y++) { for (let x = 0; x < C; x++) s += g[x + y * C] ? "█" : "·"; s += "\n"; }
        pre.textContent = s;
      });
    } else if (kind === "rain") {
      const drops = Array.from({ length: C }, () => Math.random() * R * 2 - R);
      const grid = Array.from({ length: C * R }, () => " ");
      animate(pre, 16, () => {
        for (let x = 0; x < C; x++) {
          for (let y = 0; y < R; y++) { const c = grid[x + y * C]; grid[x + y * C] = c === " " ? " " : Math.random() < .25 ? " " : c === "1" || c === "0" ? ":" : c === ":" ? "." : " "; }
          drops[x] += 0.5 + (x % 3) * 0.2;
          const y = drops[x] | 0;
          if (y >= 0 && y < R) grid[x + y * C] = Math.random() < .5 ? "1" : "0";
          if (drops[x] > R + Math.random() * 10) drops[x] = -Math.random() * 6;
        }
        let s = "";
        for (let y = 0; y < R; y++) s += grid.slice(y * C, y * C + C).join("") + "\n";
        pre.textContent = s;
      });
    } else {
      const fn = ART[kind] || ART.plasma;
      animate(pre, 20, t => {
        let s = "";
        for (let y = 0; y < R; y++) { for (let x = 0; x < C; x++) s += fn(x, y, t); s += "\n"; }
        pre.textContent = s;
      });
    }
  });
}

/* =====================================================================
   algorithm lab — sorting visualizer
   ===================================================================== */
{
  const view = $("#sortview"), N = 36, ROWS = 12, EIGHTHS = " ▁▂▃▄▅▆▇█";
  const sw = (a, i, j) => { const t = a[i]; a[i] = a[j]; a[j] = t; };
  const ALGOS = {
    "quick sort": ["O(n log n)", function* quick(a, lo = 0, hi = a.length - 1) {
      if (lo >= hi) return;
      let i = lo;
      for (let j = lo; j < hi; j++) { yield ["cmp", j, hi]; if (a[j] < a[hi]) { sw(a, i, j); yield ["swp", i, j]; i++; } }
      sw(a, i, hi); yield ["swp", i, hi];
      yield* quick(a, lo, i - 1); yield* quick(a, i + 1, hi);
    }],
    "merge sort": ["O(n log n)", function* merge(a, lo = 0, hi = a.length - 1) {
      if (lo >= hi) return;
      const m = (lo + hi) >> 1;
      yield* merge(a, lo, m); yield* merge(a, m + 1, hi);
      const Lh = a.slice(lo, m + 1), Rh = a.slice(m + 1, hi + 1);
      let i = 0, j = 0, k = lo;
      while (i < Lh.length || j < Rh.length) {
        if (i < Lh.length && j < Rh.length) yield ["cmp", lo + i, m + 1 + j];
        a[k] = j >= Rh.length || (i < Lh.length && Lh[i] <= Rh[j]) ? Lh[i++] : Rh[j++];
        yield ["swp", k, k]; k++;
      }
    }],
    "heap sort": ["O(n log n)", function* heap(a) {
      const sift = function* (i, n) {
        for (;;) {
          const l = 2 * i + 1, r = l + 1; let m = i;
          if (l < n) { yield ["cmp", l, m]; if (a[l] > a[m]) m = l; }
          if (r < n) { yield ["cmp", r, m]; if (a[r] > a[m]) m = r; }
          if (m === i) return;
          sw(a, i, m); yield ["swp", i, m]; i = m;
        }
      };
      for (let i = (a.length >> 1) - 1; i >= 0; i--) yield* sift(i, a.length);
      for (let e = a.length - 1; e > 0; e--) { sw(a, 0, e); yield ["swp", 0, e]; yield* sift(0, e); }
    }],
    "insertion sort": ["O(n²)", function* (a) {
      for (let i = 1; i < a.length; i++) for (let j = i; j > 0; j--) {
        yield ["cmp", j - 1, j];
        if (a[j - 1] <= a[j]) break;
        sw(a, j - 1, j); yield ["swp", j - 1, j];
      }
    }],
    "bubble sort": ["O(n²)", function* (a) {
      for (let i = 0; i < a.length; i++) for (let j = 0; j < a.length - i - 1; j++) {
        yield ["cmp", j, j + 1];
        if (a[j] > a[j + 1]) { sw(a, j, j + 1); yield ["swp", j, j + 1]; }
      }
    }],
  };
  let algo = "quick sort", arr, it = null, hl = null, cmp = 0, wr = 0, sweep = -1, playing = false;

  const shuffle = () => {
    arr = Array.from({ length: N }, (_, i) => Math.round((i + 1) * ROWS * 8 / N));
    for (let i = N - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; sw(arr, i, j); }
    it = null; hl = null; cmp = wr = 0; sweep = -1; playing = false; stats(); draw();
    $("#run").textContent = "run ▶";
  };
  const stats = () => { $("#s-name").textContent = algo; $("#s-big").textContent = ALGOS[algo][0]; $("#s-cmp").textContent = cmp; $("#s-swp").textContent = wr; };
  const draw = () => {
    let s = "";
    for (let r = ROWS - 1; r >= 0; r--) {
      for (let i = 0; i < N; i++) {
        const f = arr[i] - r * 8, ch = f >= 8 ? "█" : f <= 0 ? " " : EIGHTHS[f];
        const cls = i <= sweep ? "ok" : hl && (i === hl[1] || i === hl[2]) ? (hl[0] === "cmp" ? "cm" : "sw") : "";
        s += (cls ? `<span class="${cls}">${ch}</span>` : ch) + " ";
      }
      s += "\n";
    }
    view.innerHTML = s + `<span class="axis">${"▔".repeat(N * 2)}</span>`;
  };

  $("#algos").innerHTML = Object.keys(ALGOS).map(k => `<button role="tab" data-hover class="${k === algo ? "on" : ""}">${k}</button>`).join("");
  $("#algos").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    algo = b.textContent;
    document.querySelectorAll("#algos button").forEach(x => x.classList.toggle("on", x === b));
    shuffle(); run();
  });
  $("#shuffle").addEventListener("click", shuffle);
  const run = () => {
    if (sweep >= 0) shuffle();
    if (!it) it = ALGOS[algo][1](arr);
    playing = !playing;
    $("#run").textContent = playing ? "pause ❚❚" : "run ▶";
  };
  $("#run").addEventListener("click", run);

  shuffle();
  animate(view, 60, () => {
    if (sweep >= 0 && sweep < N) { sweep++; draw(); if (sweep === N) $("#run").textContent = "again ↻"; return; }
    if (!playing || !it) return;
    const steps = +$("#speed").value;
    for (let k = 0; k < steps; k++) {
      const r = it.next();
      if (r.done) { playing = false; hl = null; sweep = 0; break; }
      hl = r.value; r.value[0] === "cmp" ? cmp++ : wr++;
    }
    stats(); draw();
  });
  // autoplay once when scrolled into view
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); if (!REDUCED) setTimeout(run, 600); } }, { threshold: 0.5 }).observe(view);
}

/* =====================================================================
   GitHub activity
   ===================================================================== */
(async function github() {
  let days = null;
  if (CONFIG.github) {
    try {
      const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(CONFIG.github)}?y=last`);
      if (r.ok) days = (await r.json()).contributions.map(d => ({ date: d.date, count: d.count }));
    } catch {}
  }
  if (!days) {
    // demo data: weekday-heavy, with a few "crunch" weeks
    days = [];
    const today = new Date(); today.setHours(12, 0, 0, 0);
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      const wk = d.getDay() === 0 || d.getDay() === 6, crunch = Math.sin(i / 23) > 0.6;
      const r = Math.random();
      const count = r < (wk ? 0.45 : 0.15) ? 0 : Math.round(Math.pow(Math.random(), 1.6) * (crunch ? 16 : 9)) + 1;
      days.push({ date: d.toISOString().slice(0, 10), count });
    }
  }
  const level = c => c === 0 ? 0 : c <= 2 ? 1 : c <= 5 ? 2 : c <= 9 ? 3 : 4;
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const first = parse(days[0].date), pad = first.getDay();
  const weeks = Math.ceil((pad + days.length) / 7);
  const grid = $("#gh-grid"), months = $("#gh-months"), gh = $(".gh");
  grid.style.setProperty("--weeks", weeks); months.style.setProperty("--weeks", weeks);

  let html = "<i class='pad'></i>".repeat(pad);
  days.forEach((d, i) => {
    const col = ((pad + i) / 7) | 0;
    html += `<i class="l${level(d.count)}" data-i="${i}" style="transition-delay:${col * 14}ms"></i>`;
  });
  grid.innerHTML = html;

  // month labels at the first column that contains the 1st–7th of a month
  const MN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let lastCol = -3, mh = "";
  days.forEach((d, i) => {
    const dt = parse(d.date), col = ((pad + i) / 7) | 0;
    if ((dt.getDate() === 1 || i === 0) && col - lastCol >= 3 && col < weeks - 1) {
      mh += `<span style="grid-column:${col + 1}">${MN[dt.getMonth()]}</span>`; lastCol = col;
    }
  });
  months.innerHTML = mh;

  const total = days.reduce((s, d) => s + d.count, 0);
  $("#gh-total").textContent = `${total.toLocaleString()} GitHub activities in the last year`;
  let best = 0, run = 0, longest = 0, bestDay = days[0];
  days.forEach(d => { run = d.count ? run + 1 : 0; longest = Math.max(longest, run); if (d.count > bestDay.count) bestDay = d; });
  for (let i = days.length - 1; i >= 0 && days[i].count; i--) best++;
  const fmt = d => parse(d.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  $("#gh-stats").innerHTML = [
    [total.toLocaleString(), "contributions"], [longest + "d", "longest streak"], [best + "d", "current streak"], [bestDay.count, `best day · ${fmt(bestDay)}`],
  ].map(([b, l]) => `<div><b>${b}</b>${l}</div>`).join("");
  if (!CONFIG.github) $("#gh-stats").insertAdjacentHTML("afterend", `<p class="mono dim" style="font-size:11px;margin-top:10px">// demo data — set CONFIG.github for live contributions</p>`);

  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { gh.classList.add("in"); o.disconnect(); } }, { threshold: 0.3 }).observe(gh);

  const tip = $("#gh-tip");
  grid.addEventListener("pointerover", e => {
    const c = e.target.closest("i[data-i]"); if (!c) return;
    const d = days[+c.dataset.i];
    tip.textContent = `${d.count === 0 ? "No" : d.count} contribution${d.count === 1 ? "" : "s"} on ${fmt(d)}`;
    const cr = c.getBoundingClientRect(), gr = gh.getBoundingClientRect();
    const half = tip.offsetWidth / 2;
    tip.style.left = Math.max(half + 8, Math.min(gr.width - half - 8, cr.left - gr.left + cr.width / 2)) + "px";
    tip.style.top = cr.top - gr.top + "px";
    tip.classList.add("show");
  });
  grid.addEventListener("pointerleave", () => tip.classList.remove("show"));
})();

/* =====================================================================
   contact: copy email + terminal
   ===================================================================== */
$("#email").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(CONFIG.email); } catch { location.href = `mailto:${CONFIG.email}`; return; }
  const c = $("#copied"); c.classList.add("show"); setTimeout(() => c.classList.remove("show"), 1600);
});

{
  const out = $("#term-out"), input = $("#term-in"), term = $("#terminal");
  const hist = []; let hi = 0;
  const print = (html, cls = "") => { const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; };
  const link = (u, t = u) => `<a href="${esc(u)}"${ext(u)}>${esc(t)}</a>`;
  const HELP = {
    help: "list commands", whoami: "who is this?", neofetch: "system info, but make it personal",
    skills: "tech i work with", projects: "things i've built", experience: "where i've been",
    contact: "how to reach me", socials: "find me online", "open <name>": "open a social link",
    resume: "grab my resume", date: "current date", echo: "say something", clear: "clear the screen",
  };
  const CMDS = {
    help: () => Object.entries(HELP).map(([k, v]) => `<span class="acc">${k.padEnd(14)}</span>${v}`).join("\n") + `\n\n<span class="dim">psst — try 'sudo hire-me'</span>`,
    whoami: () => `${esc(fullName)} — ${CONFIG.roles.slice(0, 3).map(esc).join(" · ")}\n${esc(CONFIG.tagline)}`,
    neofetch: () => {
      const logo = ["   ▄▄▄▄▄▄▄   ", "  █ ▄▀▀▀▄ █  ", "  █ █▄▄▄█ █  ", "  █ █   █ █  ", "  █▄▄▄▄▄▄▄█  ", "    a k _    ", "             "];
      const info = [
        `<span class="acc">guest</span>@<span class="acc">anushree</span>`, "──────────────",
        `<span class="acc">os</span>       CSE undergrad`, `<span class="acc">focus</span>    AI · ML · DSA`,
        `<span class="acc">langs</span>    Python, C++, Java`, `<span class="acc">uptime</span>   ${CONFIG.stats[0].n}+ problems solved`,
        `<span class="acc">shell</span>    zsh + chai`,
      ];
      return logo.map((l, i) => `<span class="acc">${l}</span>  ${info[i] || ""}`).join("\n");
    },
    skills: () => CONFIG.skills.map(g => `<span class="acc">${esc(g.group)}</span>\n  ${g.items.map(i => esc(i[0])).join(", ")}`).join("\n"),
    projects: () => CONFIG.projects.map(p => `<span class="acc">${esc(p.title).padEnd(16)}</span>${esc(p.tags.join(", "))}${p.code ? "  " + link(p.code, "[src]") : ""}`).join("\n"),
    experience: () => CONFIG.experience.map(x => `<span style="color:#e5c07b">${esc(x.hash)}</span> ${esc(x.role)} @ ${esc(x.org)} <span class="dim">(${esc(x.when)})</span>`).join("\n"),
    contact: () => `email  ${link("mailto:" + CONFIG.email, CONFIG.email)}\nloc    ${esc(CONFIG.location)}`,
    socials: () => CONFIG.socials.map(s => `${esc(s.label.toLowerCase()).padEnd(12)}${link(s.url)}`).join("\n"),
    open: a => {
      const s = CONFIG.socials.find(s => s.label.toLowerCase().startsWith((a || "").toLowerCase()));
      if (!a || !s) return `<span class="err">usage: open &lt;${CONFIG.socials.map(s => s.label.split(" ")[0].toLowerCase()).join("|")}&gt;</span>`;
      window.open(s.url, "_blank", "noopener"); return `opening ${esc(s.label)}…`;
    },
    resume: () => { if (CONFIG.resume !== "#") window.open(CONFIG.resume, "_blank", "noopener"); return `resume → ${link(CONFIG.resume, "download")}`; },
    date: () => new Date().toString(),
    echo: a => esc(a || ""),
    ls: () => Object.keys(CMDS).filter(k => !["ls", "sudo", "clear", "coffee"].includes(k)).map(k => k + ".sh").join("  "),
    coffee: () => "   ( (\n    ) )\n  ........\n  |      |]\n  \\      /\n   `----'\n<span class='dim'>(it's chai, actually)</span>",
    sudo: a => {
      if ((a || "").trim() === "hire-me") { setTimeout(() => location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Let's work together")}`, 900); return `<span class="acc">[sudo] permission granted ✓</span>\ndrafting an email to ${esc(CONFIG.email)}…`; }
      return `<span class="err">guest is not in the sudoers file. this incident will be reported.</span>`;
    },
    clear: () => { out.innerHTML = ""; return null; },
  };
  const exec = raw => {
    const line = raw.trim();
    print(`<span class="acc">guest@anushree</span>:<span class="blue">~</span>$ <span class="cmd">${esc(line)}</span>`);
    if (!line) return;
    hist.push(line); hi = hist.length;
    const [cmd, ...rest] = line.split(/\s+/);
    if (cmd === "rm") return print(`<span class="err">nice try 🙂</span>`);
    const f = CMDS[cmd.toLowerCase()];
    const res = f ? f(rest.join(" ")) : `<span class="err">command not found: ${esc(cmd)}</span> — type <span class="acc">help</span>`;
    if (res != null) print(res);
  };
  print(`<span class="dim">anushree-os v1.0 (tty1) — last login: ${new Date().toDateString()}</span>\nType <span class="acc">help</span> to get started.`);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") { exec(input.value); input.value = ""; }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (hi > 0) input.value = hist[--hi]; }
    else if (e.key === "ArrowDown") { e.preventDefault(); hi = Math.min(hist.length, hi + 1); input.value = hist[hi] || ""; }
    else if (e.key === "Tab") {
      e.preventDefault();
      const m = Object.keys(CMDS).filter(k => k.startsWith(input.value));
      if (m.length === 1) input.value = m[0] + " ";
      else if (m.length > 1) print(m.join("  "), "dim");
    }
  });
  term.addEventListener("click", () => { if (!getSelection().toString()) input.focus({ preventScroll: true }); });
  const openTerm = () => { $("#contact").scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" }); setTimeout(() => input.focus({ preventScroll: true }), 700); };
  $("#open-term").addEventListener("click", openTerm);
  addEventListener("keydown", e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openTerm(); } });
}

/* =====================================================================
   footer: name rasterized into ASCII, reacts to cursor
   ===================================================================== */
{
  const pre = $("#ascii-name"), RAMP = " .:-=+*#%@", NOISE = "01<>/{}[]#*";
  let cells = [], cols = 0, rows = 0;
  const build = () => {
    const m = document.createElement("canvas").getContext("2d");
    m.font = `${getComputedStyle(pre).fontSize} ${getComputedStyle(pre).fontFamily}`;
    const cw = m.measureText("M").width;
    cols = Math.max(40, Math.floor(pre.parentElement.clientWidth / cw) - 2);
    const text = CONFIG.first.toUpperCase();
    const cv = document.createElement("canvas"), x = cv.getContext("2d", { willReadFrequently: true });
    let fs = 100;
    x.font = `700 ${fs}px Geist, sans-serif`;
    fs = fs * (cols * 0.96) / x.measureText(text).width;
    rows = Math.ceil(fs * 0.6 * 0.82) + 2;
    cv.width = cols; cv.height = rows;
    x.font = `700 ${fs}px Geist, sans-serif`;
    x.textAlign = "center"; x.textBaseline = "alphabetic"; x.fillStyle = "#fff";
    x.setTransform(1, 0, 0, 0.6, 0, 0); // char cells are ~0.6 as wide as tall
    x.fillText(text, cols / 2, (rows - 1) / 0.6);
    const d = x.getImageData(0, 0, cols, rows).data;
    cells = Array.from({ length: cols * rows }, (_, i) => d[i * 4 + 3] / 255);
  };
  const render = t => {
    const r = pre.getBoundingClientRect(), cw = r.width / cols, ch = r.height / rows;
    const mx = (mouse.x - r.left) / cw, my = (mouse.y - r.top) / ch;
    let s = "";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const a = cells[x + y * cols];
        if (a < 0.1) { s += " "; continue; }
        const dx = x - mx, dy = (y - my) * 1.7;
        if (dx * dx + dy * dy < 60 && Math.random() < 0.7) { s += NOISE[(Math.random() * NOISE.length) | 0]; continue; }
        const w = 0.75 + 0.25 * Math.sin(x * 0.12 - t * 2.2 + y * 0.2);
        s += RAMP[Math.min(RAMP.length - 1, (a * w * RAMP.length) | 0)];
      }
      s += "\n";
    }
    pre.textContent = s;
  };
  document.fonts.ready.then(() => {
    build(); animate(pre, 24, render);
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(build, 200); });
  });
}
