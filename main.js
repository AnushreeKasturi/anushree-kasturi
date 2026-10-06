/* =====================================================================
   CONFIG: every piece of content on the site lives here.
   ===================================================================== */
const CONFIG = {
  first: "Anushree",
  last: "Kasturi",
  roles: ["CS student", "ML builder", "full-stack dev", "hackathon regular", "problem solver"],
  tagline: "CS student building things, breaking things, and learning along the way, across AI/ML, full-stack development and intelligent systems.",
  status: "open to internships · B.Tech CSE @ Amrita '28",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata",
  email: "anushree.kasturi06@gmail.com",
  github: "AnushreeKasturi",          // live contribution graph
  resume: "",                         // add a link to show resume options
  socials: [
    { label: "GitHub",      url: "https://github.com/AnushreeKasturi" },
    { label: "LinkedIn",    url: "https://www.linkedin.com/in/anushree-kasturi/" },
    { label: "LeetCode",    url: "https://leetcode.com/u/AnushreeKasturi/" },
    { label: "HuggingFace", url: "https://huggingface.co/Anushree24" },
    { label: "X / Twitter", url: "https://x.com/Anushree_kastur" },
  ],
  about: [
    "Hi, I'm <b>Anushree</b>, a third-year <b>Computer Science</b> undergrad at <b>Amrita School of Engineering, Bengaluru</b>, building things, breaking things and <em>learning along the way</em>.",
    "I build software across <b>AI/ML</b>, <b>full-stack development</b> and <b>intelligent systems</b>, turning ideas and real-world problems into working applications, from a Bayesian road-risk engine for Bengaluru to an ML-driven network controller.",
    "Outside of shipping projects you'll find me at <b>hackathons</b>, technical quizzes and coding challenges, sharpening both the theory and the practice.",
  ],
  manifesto: "Most of what I know, I learned by *building* it: a risk engine for Bengaluru's roads, a network that reroutes itself, a detector that finds the intruder in a thousand lines of logs. I *break* things to understand them, and keep *learning* along the way.",
  stats: [
    { n: 9.12, suffix: "",   label: "CGPA · B.Tech CSE", decimals: 2 },
    { n: 6,    suffix: "",   label: "projects built" },
    { n: 4,    suffix: "",   label: "live deployments" },
    { n: 5,    suffix: "th", label: "place · Night Shift Startathon '25" },
  ],
  skills: [
    { group: "Languages",        items: ["Python", "Java", "C", "JavaScript", "SQL", "Scala"] },
    { group: "AI / ML",          items: ["scikit-learn", "LangChain", "LangGraph", "LlamaIndex", "Ollama", "vLLM", "Gradio", "Streamlit", "Weights & Biases", "Jupyter"] },
    { group: "Backend & Data",   items: ["Flask", "Node.js", "Express", "Spring Boot", "Apache Kafka", "REST APIs", "SQLite", "MySQL", "Apache Spark"] },
    { group: "Frontend & Tools", items: ["React", "HTML5", "CSS3", "Bootstrap", "Git", "Postman", "Render", "Vercel", "Claude Code", "Cursor", "MCP"] },
  ],
  // art: life | plasma | rain | spiral | wave | bits     size: wide | full
  projects: [
    { title: "Find the Intruder", year: "2026", size: "wide", art: "bits", kind: "Intrusion detection · ALG-CYBER-01",
      desc: "A log-forensics engine that buries attackers in ~1,000 lines of normal traffic, then finds them, correlates their events into one incident and rebuilds the kill chain.",
      details: [
        ["The problem", "Most intrusion detection emits a flood of isolated alerts. This engine scores every source, fuses related events into a single scored incident with a timeline, and reconstructs the attacker's kill chain with log-line evidence, MITRE ATT&CK mapping and recommended response actions."],
        ["What it catches", "Reconnaissance, brute force, credential stuffing, the success-after-failure compromise pivot, impossible travel, privilege escalation, sensitive-file access and data exfiltration."],
        ["How it's built", "A zero-dependency Python package + CLI is the engine; a single-file web console shares the same detection logic and runs the live demo entirely in the browser."],
      ],
      highlights: ["23 tests in CI on Python 3.9 & 3.12", "Zero dependencies, pure stdlib", "Benign decoy never flagged", "3 attack scenarios built in"],
      tags: ["Python", "JavaScript", "GitHub Actions", "MITRE ATT&CK"],
      code: "https://github.com/AnushreeKasturi/algothon", live: "https://anushreekasturi.github.io/algothon/" },
    { title: "PotholeRisk", year: "2026", size: "wide", art: "wave", kind: "Bengaluru dynamic risk engine",
      desc: "A real-time Bayesian road-risk dashboard for Bengaluru that combines live weather, traffic and pothole-density data to estimate driving risk.",
      details: [
        ["The idea", "Potholes get dangerous when conditions change: rain, traffic, visibility. PotholeRisk turns live signals into a continuously updated risk estimate for the city's roads."],
        ["Architecture", "The browser only ever talks to an Express server, which proxies the OpenWeather API with the key injected server-side, so it never reaches the frontend, DevTools or network requests."],
        ["Next up", "Computer-vision pothole detection, accident-probability prediction, route safety scoring and interactive GIS mapping."],
      ],
      highlights: ["Bayesian risk model", "API keys kept server-side", "Deployed on Render"],
      tags: ["Node.js", "Express", "JavaScript", "OpenWeather API"],
      code: "https://github.com/AnushreeKasturi/Potholerisk", live: "https://potholerisk.onrender.com" },
    { title: "AI-SDN Traffic", year: "2026", art: "spiral", kind: "ML-guided adaptive routing",
      desc: "A simulated SDN controller that classifies flows, forecasts congestion and reroutes traffic, benchmarked against static routing.",
      details: [
        ["The problem", "Static routing never reacts to load: if the shortest path congests, every new flow still piles onto it while a slightly longer path sits idle."],
        ["The approach", "A Random Forest classifies traffic (voice / video / web / bulk), a Random Forest regressor forecasts each link's next-interval utilization, and the controller runs Dijkstra with load- and forecast-aware weights before pushing flow rules."],
        ["Results", "On the same 8-switch partial-mesh topology and the same traffic, adaptive routing cut average latency by ~15%, peak link utilization by ~39%, and congested flows from 23 to 0."],
      ],
      highlights: ["~99.7% traffic-classification accuracy", "~15% lower average latency", "~39% lower peak utilization", "23 → 0 congested flows"],
      tags: ["Python", "scikit-learn", "NetworkX", "Mininet"],
      code: "https://github.com/AnushreeKasturi/AI-SDN-Traffic-Management" },
    { title: "Student Performance Predictor", year: "2026", art: "plasma", kind: "Deployed ML web app",
      desc: "Predicts academic scores from attendance, study hours, internals and assignments, with auth, history and analytics.",
      details: [
        ["What it does", "Takes attendance, study hours, internal marks and assignment scores, and predicts a final score with a scikit-learn linear regression model."],
        ["The app around the model", "Signup and login with Werkzeug password hashing, per-user prediction history in SQLite, and Plotly trendline dashboards, deployed end-to-end on Render."],
      ],
      highlights: ["End-to-end: model → app → deploy", "Hashed-password auth", "Interactive Plotly analytics"],
      tags: ["Python", "Flask", "scikit-learn", "SQLite", "Plotly"],
      code: "https://github.com/AnushreeKasturi/student-performance-predictor", live: "https://student-performance-predictor-1mlt.onrender.com" },
    { title: "Heritage Explorer", year: "2026", art: "life", kind: "Virtual museum platform",
      desc: "An interactive virtual museum for five of India's most renowned museums, with galleries, ticket booking and dark mode.",
      details: [
        ["Overview", "Brings India's cultural heritage onto one platform: dedicated pages for CSMVS Mumbai, Victoria Memorial, the Indian Museum, Government Museum Chennai and Salar Jung Museum."],
        ["Built for", "Accessibility and engagement: interactive galleries, a ticket-booking and payment-selection flow, dark mode and fully responsive layouts, with each museum as its own modular page."],
      ],
      highlights: ["5 museums, themed per museum", "Ticket-booking simulation", "Responsive + dark mode"],
      tags: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/AnushreeKasturi/virtual-museum-explorer", live: "https://virtual-museum-explorer.onrender.com" },
    { title: "Startup Survival × News Sentiment", year: "2026", size: "full", art: "rain", kind: "Big-data research · in progress", badge: "in progress",
      desc: "Does public news sentiment about a startup improve survival prediction beyond funding data alone? A 2×2 experiment on Scala, Spark and MLlib.",
      details: [
        ["Research question", "Does incorporating public news sentiment improve a startup survival classifier, compared to structured funding and financial attributes alone? Yes, no and \"it depends\" are all valid outcomes."],
        ["Design", "Logistic regression vs. binary SVM, each trained with financial-only and financial + sentiment features, reporting accuracy, precision, recall, F1 and confusion matrices from actual runs only."],
        ["Stack", "HDFS for storage, Hive for the warehouse, Scala for cleaning, name matching and sentiment scoring, and the Spark RDD API + MLlib for distributed compute and models."],
      ],
      highlights: ["2×2 controlled experiment", "Scala + Spark RDD pipeline", "No fabricated numbers, only results from real runs"],
      tags: ["Scala", "Apache Spark", "Hive", "MLlib", "HDFS"],
      code: "https://github.com/AnushreeKasturi/bda_endsem" },
  ],
  experience: [
    { hash: "a1f9c2e", ref: "HEAD -> now", role: "B.Tech, Computer Science", org: "Amrita School of Engineering, Bengaluru", when: "2024 – 2028 · CGPA 9.12",
      desc: "Third year. Data structures & algorithms, machine learning, computer networks, big-data analytics, and a lot of building on the side." },
    { hash: "7b3e0d4", ref: "", role: "Software Engineering Job Simulation", org: "JPMorgan Chase & Co. · Forage", when: "Jul 2026",
      desc: "Built project setup, Kafka integration, H2 persistence and a REST API controller: a hands-on pass through backend and event-driven design." },
    { hash: "3d72b9f", ref: "", role: "Generative AI in Action", org: "IBM SkillsBuild", when: "Feb 2026",
      desc: "Large language models and retrieval-augmented generation, with a focus on real-world application patterns." },
    { hash: "c90d11a", ref: "tag: 5th-place", role: "The Night Shift Startathon 2025", org: "ACE & AMAL Club, Amrita", when: "Aug 2025",
      desc: "Placed 5th at a university hackathon focused on building innovative technology solutions under time pressure." },
    { hash: "0e4f8b2", ref: "init", role: "High School, Computer Science", org: "The Amaatra Academy", when: "2022 – 2024 · 90.4%",
      desc: "Where the first lines of code were written." },
  ],
  honors: [
    { rank: "5th place", title: "The Night Shift Startathon 2025", org: "ACE & AMAL Club, Amrita Vishwa Vidyapeetham", when: "Aug 2025", type: "hackathon",
      desc: "University hackathon focused on developing innovative technology solutions." },
    { rank: "certificate", title: "Software Engineering Job Simulation", org: "JPMorgan Chase & Co. · Forage", when: "Jul 2026", type: "certification",
      desc: "Kafka integration, H2 persistence and a REST API controller, covering backend and event-driven design." },
    { rank: "certificate", title: "Generative AI in Action", org: "IBM SkillsBuild", when: "Feb 2026", type: "certification",
      desc: "LLMs and retrieval-augmented generation with real-world application patterns." },
    { rank: "certificate", title: "Python", org: "Kaggle", when: "2026", type: "course",
      desc: "Fundamentals through real-world problem-solving exercises. The base layer for everything since." },
    { rank: "9.12 CGPA", title: "B.Tech, Computer Science", org: "Amrita School of Engineering, Bengaluru", when: "2024 – 2028", type: "academics",
      desc: "Consistent academic performance alongside projects, hackathons and competitions." },
  ],
  now: {
    building: { title: "Startup survival × news sentiment", note: "A Scala + Spark pipeline testing whether public sentiment predicts startup survival." },
    learning: ["LLM agents with LangGraph", "Distributed data with Spark & Hive", "Kafka & event-driven backends"],
    next: ["CV-based pothole detection", "Route safety scoring for PotholeRisk"],
    openTo: ["SWE / ML internships", "Hackathon teams", "Open-source collaborations"],
  },
};

/* =====================================================================
   helpers
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(pointer: fine)").matches;
const mouse = { x: -9999, y: -9999 };
addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
const ext = url => url && url !== "#" ? ' target="_blank" rel="noopener"' : "";
const fullName = `${CONFIG.first} ${CONFIG.last}`;
const ACC = "185,223,165", BLUE = "169,164,232";

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

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
function scramble(el, text = el.dataset.text || el.textContent, dur = 900, done) {
  el.dataset.text = text;
  if (REDUCED) { el.textContent = text; done?.(); return; }
  const start = performance.now();
  const step = now => {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = [...text].map((c, i) =>
      c === " " || i / text.length < p ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join("");
    p < 1 ? requestAnimationFrame(step) : done?.();
  };
  requestAnimationFrame(step);
}

let toastT;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2400);
}

/* smooth scroll (Lenis) + anchor handling */
let lenis = null;
if (window.Lenis && !REDUCED) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
  (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })();
}
function scrollToEl(target) {
  if (lenis) return lenis.scrollTo(target, { offset: target === 0 ? 0 : -70, duration: 1.4 });
  if (target === 0) return scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
  $(target)?.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" });
}
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const h = a.getAttribute("href");
  e.preventDefault();
  scrollToEl(h === "#top" || h === "#" ? 0 : h);
});
const lockScroll = on => { if (lenis) on ? lenis.stop() : lenis.start(); document.documentElement.style.overflow = on ? "hidden" : ""; };

/* =====================================================================
   fill content
   ===================================================================== */
document.title = `${fullName} · CS Student · Engineer · Builder`;
$("#first").textContent = CONFIG.first;
$("#last").textContent = CONFIG.last;
$(".hero-name").setAttribute("aria-label", fullName);
$("#status").textContent = CONFIG.status;
$("#tagline").textContent = CONFIG.tagline;
$("#loc").textContent = CONFIG.location;
$("#year").textContent = new Date().getFullYear();
$("#foot-name").textContent = fullName;
$("#email-text").textContent = CONFIG.email;
$("#about-text").innerHTML = CONFIG.about.map(p => `<p>${p}</p>`).join("");

{
  const big = ["AI / ML", "full-stack", "DSA", "builder", "hackathons", "systems"];
  const cls = ["", "o", "s"];
  const row1 = big.map((w, i) => `<span class="${cls[i % 3]}">${esc(w)}</span>`).join("");
  $("#mq1").innerHTML = row1.repeat(4);
  const small = CONFIG.skills.flatMap(g => g.items).slice(0, 18);
  $("#mq2").innerHTML = small.map(w => `<span>${esc(w)}</span><span class="star">✦</span>`).join("").repeat(3);
}

$("#stats").innerHTML = CONFIG.stats.map(s =>
  `<div class="stat frame" data-reveal><span class="n"><span data-count="${s.n}" data-dec="${s.decimals || 0}">0</span><sup>${esc(s.suffix)}</sup></span><span class="l">${esc(s.label)}</span></div>`).join("");

$("#skills").innerHTML = CONFIG.skills.map(g => `
  <div class="skill frame" data-reveal><h4>${esc(g.group)}</h4><ul>${g.items.map((n, i) =>
    `<li style="transition-delay:${i * 40}ms">${esc(n)}</li>`).join("")}</ul></div>`).join("");

$("#projects").innerHTML = CONFIG.projects.map((p, i) => `
  <article class="proj frame${p.size ? " " + p.size : ""}" data-reveal data-label="open" data-i="${i}" tabindex="0" role="button" aria-label="Open ${esc(p.title)}">
    <div class="spot"></div>
    <div class="art"><span class="tagno">${String(i + 1).padStart(2, "0")}</span><span class="yr">${esc(p.year)}</span><pre data-art="${p.art}"></pre></div>
    <div class="body">
      <p class="mono dim" style="font-size:11px">${esc(p.kind)}</p>
      <h3><span>${esc(p.title)}${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}</span><span class="go">↗</span></h3>
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

$("#hz-track").innerHTML = CONFIG.honors.map((h, i) => `
  <div class="honor frame">
    <div><span class="num">${String(i + 1).padStart(2, "0")}</span></div>
    <div>
      <span class="rank">${esc(h.rank)}</span>
      <h4>${esc(h.title)}</h4>
      <p>${esc(h.desc)}</p>
      <div class="meta"><span>${esc(h.org)}</span><span>${esc(h.when)}</span></div>
    </div>
  </div>`).join("");
$("#hz-n").textContent = String(CONFIG.honors.length).padStart(2, "0");

$("#socials").innerHTML = CONFIG.socials.map(s =>
  `<li><a href="${esc(s.url)}"${ext(s.url)}><span>${esc(s.label)}</span><span>↗</span></a></li>`).join("");

{
  const n = CONFIG.now, li = a => `<ul>${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  $("#now").innerHTML = `
    <div class="card frame w2" data-reveal><span class="lbl"><i></i>currently building</span><span class="v">${esc(n.building.title)}</span><span class="s">${esc(n.building.note)}</span></div>
    <div class="card frame" data-reveal><span class="lbl">learning</span>${li(n.learning)}</div>
    <div class="card frame" data-reveal><span class="lbl">next up</span>${li(n.next)}</div>
    <div class="card frame w2" data-reveal><span class="lbl">local time · ${esc(CONFIG.location)}</span><span class="big-clock" id="now-clock">--:--<small>IST</small></span><span class="s" id="now-mood"></span></div>
    <div class="card frame w2" data-reveal><span class="lbl"><i></i>open to</span>${li(n.openTo)}<span class="s">→ <a href="#contact" style="color:var(--acc)">get in touch</a></span></div>`;
}

/* =====================================================================
   cursor, magnetic buttons
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
    const inner = e.target.closest("a,button,input[type=range]");
    const l = !inner && e.target.closest("[data-label]");
    const h = inner || e.target.closest("#shape,.gh-grid i,canvas,.honor,.now .card,.skill li");
    cur.classList.toggle("label", !!l);
    cur.classList.toggle("hover", !l && !!h);
    if (l) label.textContent = l.dataset.label;
  });
  document.documentElement.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });

  $$(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)"; b.style.transform = ""; setTimeout(() => b.style.transition = "", 600); });
  });
}

/* =====================================================================
   scroll-driven: progress, nav, hero parallax, ghost numbers,
   manifesto word reveal, horizontal honors, back-to-top ring
   ===================================================================== */
{
  const nav = $(".nav"), bar = $(".progress"), copy = $("#hero-copy"), art = $("#hero-art");
  const heads = $$(".sec-head[data-n]"), totop = $("#totop"), ring = $("#totop-ring");
  const mf = $("#manifesto"), mfBar = $("#mf-bar"), hz = $("#honors"), track = $("#hz-track"), hzI = $("#hz-i");
  const words = CONFIG.manifesto.split(" ").map(w => {
    const k = /^\*.*\*[.,:]?$/.test(w);
    return `<span${k ? ' class="k"' : ""}>${esc(w.replace(/\*/g, ""))}</span>`;
  });
  $("#mf-text").innerHTML = words.join(" ");
  const wEls = $$("#mf-text span");

  const sizeHz = () => { hz.style.height = `${track.scrollWidth - innerWidth + innerHeight}px`; };
  sizeHz(); addEventListener("resize", sizeHz);

  let lastY = 0, ticking = false;
  const update = () => {
    ticking = false;
    const y = scrollY, H = document.documentElement.scrollHeight - innerHeight, vh = innerHeight;
    const p = H > 0 ? y / H : 0;
    bar.style.transform = `scaleX(${p})`;
    nav.classList.toggle("hide", y > lastY && y > 300);
    lastY = y;
    totop.classList.toggle("show", y > vh);
    ring.style.strokeDashoffset = 125.7 * (1 - p);
    if (!REDUCED) {
      if (y < vh * 1.2) {
        copy.style.transform = `translateY(${y * 0.3}px)`;
        copy.style.opacity = Math.max(0, 1 - y / (vh * 0.75));
        art.style.transform = `translateY(${y * 0.12}px) scale(${1 - y / vh * 0.08})`;
      }
      for (const h of heads) {
        const r = h.getBoundingClientRect();
        if (r.bottom > -200 && r.top < vh + 200) h.style.setProperty("--gy", `${(r.top - vh / 2) * -0.18}px`);
      }
      const mr = mf.getBoundingClientRect(), mp = Math.min(1, Math.max(0, -mr.top / (mr.height - vh)));
      const lit = Math.floor(mp * 1.15 * wEls.length);
      wEls.forEach((w, i) => w.classList.toggle("on", i < lit));
      mfBar.style.transform = `scaleX(${mp})`;
    }
    const hr = hz.getBoundingClientRect(), hp = Math.min(1, Math.max(0, -hr.top / (hr.height - vh)));
    const max = track.scrollWidth - innerWidth;
    track.style.transform = `translateX(${-hp * max}px)`;
    hzI.textContent = String(Math.min(CONFIG.honors.length, 1 + Math.round(hp * (CONFIG.honors.length - 1)))).padStart(2, "0");
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();

  const links = $$(".links a");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(a => spy.observe($(a.hash)));

  const clock = $("#clock"), nowClock = $("#now-clock"), mood = $("#now-mood");
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: CONFIG.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const tick = () => {
    const t = fmt.format(new Date()), h = +t.slice(0, 2);
    clock.textContent = `${t} IST`;
    nowClock.innerHTML = `${t.slice(0, 5)}<small>IST</small>`;
    mood.textContent = h < 6 ? "probably asleep, or debugging something." : h < 12 ? "morning: classes & coffee." : h < 18 ? "deep-work hours." : "shipping side projects.";
  };
  tick(); setInterval(tick, 1000);
}

/* scroll-velocity marquee */
{
  const t1 = $("#mq1"), t2 = $("#mq2");
  let x1 = 0, x2 = 0, v = 0, prev = scrollY, w1 = 0, w2 = 0;
  const measure = () => { w1 = t1.scrollWidth / 4; w2 = t2.scrollWidth / 3; };
  document.fonts.ready.then(measure); addEventListener("resize", measure); measure();
  animate($(".marquee"), 60, () => {
    const d = scrollY - prev; prev = scrollY;
    v += (d - v) * 0.1;
    x1 -= 0.6 + Math.abs(v) * 0.35; x2 += 0.4 + Math.abs(v) * 0.25;
    if (x1 <= -w1) x1 += w1;
    if (x2 >= 0) x2 -= w2;
    const sk = Math.max(-12, Math.min(12, v * 0.4));
    t1.style.transform = `translateX(${x1}px) skewX(${-sk}deg)`;
    t2.style.transform = `translateX(${x2}px)`;
  });
}

/* reveal + counters */
{
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    io.unobserve(el);
    el.classList.add("in");
    setTimeout(() => el.style.transitionDelay = "", 1300);
    el.querySelectorAll("[data-scramble]").forEach(s => scramble(s));
    el.querySelectorAll("[data-count]").forEach(countUp);
  }), { threshold: 0.15 });
  $$("[data-reveal]").forEach((el, i) => {
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

/* =====================================================================
   hero: ASCII field, variable-weight name, 3D shapes
   ===================================================================== */
{
  const cv = $("#field"), ctx = cv.getContext("2d"), hero = $("#hero");
  const CW = 12, CH = 18, RAMP = " .·:-=+*#";
  let cols, rows;
  const size = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
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
      const dx = x - mx, dy = (y - my) * 1.5, near = Math.exp(-(dx * dx + dy * dy) / 90);
      v = (v + 3) / 6 * 0.75 + near * 0.9;
      const i = Math.min(RAMP.length - 1, (v * RAMP.length) | 0);
      if (i < 2) continue;
      ctx.fillStyle = near > 0.25 ? `rgba(${ACC},${0.25 + near * 0.6})` : `rgba(233,236,230,${0.05 + v * 0.12})`;
      ctx.fillText(RAMP[i], x * CW, y * CH);
    }
  });
}

let heroLetters = [];
function splitName() {
  const el = $("#first");
  el.innerHTML = [...CONFIG.first].map(c => `<span>${esc(c)}</span>`).join("");
  heroLetters = [...el.children];
}
// letters thin out near the cursor (Geist is a variable font, 300–700)
animate($("#hero"), 60, () => {
  // read all positions first, then write, so we cause one layout per frame instead of one per letter
  const ks = heroLetters.map(s => { const r = s.getBoundingClientRect(), dx = mouse.x - (r.left + r.width / 2), dy = mouse.y - (r.top + r.height / 2); return Math.exp(-(dx * dx + dy * dy) / 16000); });
  heroLetters.forEach((s, i) => {
    const w = Math.round(600 - 300 * ks[i]);
    if (s._w === w) return;
    s._w = w;
    s.style.setProperty("--w", w);
    s.style.transform = `translateY(${-ks[i] * 6}px)`;
  });
});

{
  const pre = $("#shape"), nameEl = $("#shape-name"), fpsEl = $("#fps"), hudA = $("#hud-a"), hudB = $("#hud-b");
  const W = 76, H = 38, N = 9000, K2 = 6, K1 = 30, CHARS = ".,-~:;=!*#$@";
  const norm = (x, y, z) => { const l = Math.hypot(x, y, z) || 1; return [x / l, y / l, z / l]; };
  const torus = [], sphere = [], cube = [], knot = [];
  for (let i = 0; i < 60; i++) for (let j = 0; j < 150; j++) {
    const t = i / 60 * 2 * Math.PI, p = j / 150 * 2 * Math.PI, ct = Math.cos(t), st = Math.sin(t), cp = Math.cos(p), sp = Math.sin(p), c = 2 + ct;
    torus.push([c * cp, st, -c * sp, ct * cp, st, -ct * sp]);
  }
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i, x = Math.cos(th) * r, z = Math.sin(th) * r;
    sphere.push([x * 2.7, y * 2.7, z * 2.7, x, y, z]);
  }
  for (let f = 0; f < 6; f++) for (let a = 0; a < 30; a++) for (let b = 0; b < 50; b++) {
    const u = (a / 29 - 0.5) * 3.4, v = (b / 49 - 0.5) * 3.4, ax = f >> 1, sg = f & 1 ? 1 : -1;
    const p = [0, 0, 0], n = [0, 0, 0];
    p[ax] = 1.7 * sg; n[ax] = sg; p[(ax + 1) % 3] = u; p[(ax + 2) % 3] = v;
    cube.push([...p, ...n]);
  }
  const P = tt => [Math.sin(tt) + 2 * Math.sin(2 * tt), Math.cos(tt) - 2 * Math.cos(2 * tt), -Math.sin(3 * tt)];
  for (let i = 0; i < 600; i++) for (let j = 0; j < 15; j++) {
    const t = i / 600 * 2 * Math.PI, ph = j / 15 * 2 * Math.PI;
    const c = P(t), d = P(t + 0.001), T = norm(d[0] - c[0], d[1] - c[1], d[2] - c[2]);
    const B = norm(T[1], -T[0], 0); // T × z-axis
    const Nn = [B[1] * T[2] - B[2] * T[1], B[2] * T[0] - B[0] * T[2], B[0] * T[1] - B[1] * T[0]];
    const nx = Math.cos(ph) * Nn[0] + Math.sin(ph) * B[0], ny = Math.cos(ph) * Nn[1] + Math.sin(ph) * B[1], nz = Math.cos(ph) * Nn[2] + Math.sin(ph) * B[2];
    knot.push([c[0] * 0.8 + nx * 0.5, c[1] * 0.8 + ny * 0.5, c[2] * 0.8 + nz * 0.5, nx, ny, nz]);
  }
  const SHAPES = [["torus", torus], ["sphere", sphere], ["trefoil knot", knot], ["cube", cube]];
  const order = Array.from({ length: N }, (_, i) => i).sort(() => Math.random() - 0.5);
  let cur = 0, from = torus, to = torus, mt = 1;
  let A = 0.6, B = 0, vA = 0.022, vB = 0.012, drag = null, moved = 0, frames = 0, fpsT = 0;
  const out = new Array(W * H), zb = new Float32Array(W * H), L = norm(0, 1, -1);

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
      const nx = p[3] + (q[3] - p[3]) * e, ny = p[4] + (q[4] - p[4]) * e, nz = p[5] + (q[5] - p[5]) * e;
      const y1 = y * cA - z * sA, z1 = y * sA + z * cA;
      const X = x * cB - y1 * sB, Y = x * sB + y1 * cB, Z = z1 + K2;
      const ny1 = ny * cA - nz * sA, nz1 = ny * sA + nz * cA;
      const NX = nx * cB - ny1 * sB, NY = nx * sB + ny1 * cB;
      const ooz = 1 / Z, xp = (W / 2 + K1 * 1.9 * ooz * X) | 0, yp = (H / 2 - K1 * ooz * Y) | 0;
      if (xp < 0 || xp >= W || yp < 0 || yp >= H) continue;
      const idx = xp + yp * W;
      if (ooz <= zb[idx]) continue;
      zb[idx] = ooz;
      const lum = (NX * L[0] + NY * L[1] + nz1 * L[2]) / (Math.hypot(NX, NY, nz1) || 1);
      out[idx] = lum > 0 ? CHARS[Math.min(11, 1 + (lum * 11) | 0)] : ".";
    }
    let s = "";
    for (let r = 0; r < H; r++) s += out.slice(r * W, r * W + W).join("") + "\n";
    pre.textContent = s;
    hudA.textContent = (A % 6.283).toFixed(2); hudB.textContent = (B % 6.283).toFixed(2);
    frames++;
    if (t - fpsT > 1) { fpsEl.textContent = frames; frames = 0; fpsT = t; }
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
   ASCII art generators (project cards + overlay)
   ===================================================================== */
function makeArt(C, R) {
  const RAMP = " .:-=+*#%@";
  const pick = v => RAMP[Math.max(0, Math.min(RAMP.length - 1, (v * RAMP.length) | 0))];
  const st = { kind: null };
  const FN = {
    plasma: (x, y, t) => pick((Math.sin(x * .16 + t) + Math.sin(y * .4 + t * 1.3) + Math.sin((x + y) * .1 + t * .7) + Math.sin(Math.hypot(x - C / 2, (y - R / 2) * 2) * .3 - t * 1.6) + 4) / 8),
    spiral: (x, y, t) => { const dx = (x - C / 2) / 2, dy = y - R / 2, a = Math.atan2(dy, dx), d = Math.hypot(dx, dy); return pick((Math.sin(a * 3 + d * .9 - t * 3) + 1) / 2 * Math.max(0, 1 - d / (R * 1.1))); },
    wave: (x, y, t) => { const h = R / 2 + Math.sin(x * .18 + t * 1.6) * R * .22 + Math.sin(x * .07 - t) * R * .15; return y > h ? pick(.35 + (y - h) / R) : Math.abs(y - h) < 1 ? "~" : " "; },
    bits: (x, y, t) => Math.random() < .05 ? "1" : (Math.sin(x * .3 + t * 2) * Math.cos(y * .6 - t) > .3 ? "0" : " "),
  };
  return (kind, t) => {
    if (kind !== st.kind) {
      st.kind = kind;
      if (kind === "life") { st.g = new Uint8Array(C * R).map(() => Math.random() < .3); st.gen = 0; }
      if (kind === "rain") { st.drops = Array.from({ length: C }, () => Math.random() * R * 2 - R); st.grid = Array(C * R).fill(" "); }
    }
    let s = "";
    if (kind === "life") {
      const g = st.g, n = new Uint8Array(C * R);
      let alive = 0;
      for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) {
        let c = 0;
        for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) if (i || j) c += g[(x + i + C) % C + ((y + j + R) % R) * C];
        const v = g[x + y * C] ? (c === 2 || c === 3) : c === 3;
        n[x + y * C] = v; alive += v;
      }
      st.g = n;
      if (++st.gen > 220 || alive < C * R * 0.035) st.kind = null;
      for (let y = 0; y < R; y++) { for (let x = 0; x < C; x++) s += n[x + y * C] ? "█" : "·"; s += "\n"; }
      return s;
    }
    if (kind === "rain") {
      const { drops, grid } = st;
      for (let x = 0; x < C; x++) {
        for (let y = 0; y < R; y++) { const c = grid[x + y * C]; grid[x + y * C] = c === " " || Math.random() < .25 ? " " : c === "1" || c === "0" ? ":" : c === ":" ? "." : " "; }
        drops[x] += 0.5 + (x % 3) * 0.2;
        const y = drops[x] | 0;
        if (y >= 0 && y < R) grid[x + y * C] = Math.random() < .5 ? "1" : "0";
        if (drops[x] > R + Math.random() * 10) drops[x] = -Math.random() * 6;
      }
      for (let y = 0; y < R; y++) s += grid.slice(y * C, y * C + C).join("") + "\n";
      return s;
    }
    const fn = FN[kind] || FN.plasma;
    for (let y = 0; y < R; y++) { for (let x = 0; x < C; x++) s += fn(x, y, t); s += "\n"; }
    return s;
  };
}
$$("[data-art]").forEach(pre => {
  const art = makeArt(52, 13), kind = pre.dataset.art, fps = kind === "life" ? 10 : kind === "rain" ? 16 : 20;
  animate(pre, fps, t => pre.textContent = art(kind, t));
});

/* project cards: spotlight + tilt + open overlay */
$$(".proj").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
    if (FINE && !REDUCED) card.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 5}deg) rotateY(${(x / r.width - 0.5) * 6}deg)`;
  });
  card.addEventListener("pointerleave", () => card.style.transform = "");
  card.addEventListener("click", e => { if (!e.target.closest("a")) openProject(+card.dataset.i); });
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(+card.dataset.i); } });
});

/* =====================================================================
   project overlay
   ===================================================================== */
const ov = $("#ov"), ovPanel = $("#ov-panel"), ovArtEl = $("#ov-art");
let ovIdx = -1, ovKind = "plasma";
{
  const art = makeArt(110, 28);
  animate(ovArtEl, 20, t => ovArtEl.textContent = art(ovKind, t));
}
function fillProject(i) {
  const p = CONFIG.projects[i], n = CONFIG.projects.length;
  ovIdx = i; ovKind = p.art;
  $("#ov-idx").textContent = `${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  $("#ov-meta").textContent = `${p.kind} · ${p.year}`;
  $("#ov-title").textContent = p.title;
  $("#ov-desc").textContent = p.desc;
  $("#ov-details").innerHTML = (p.details || []).map(([h, t]) => `<h5>${esc(h)}</h5><p>${esc(t)}</p>`).join("");
  $("#ov-tags").innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join("");
  $("#ov-hl").innerHTML = (p.highlights || []).map(h => `<li>${esc(h)}</li>`).join("");
  $("#ov-links").innerHTML = (p.live ? `<a class="btn sm primary" href="${esc(p.live)}"${ext(p.live)}>live demo ↗</a>` : "") + (p.code ? `<a class="btn sm" href="${esc(p.code)}"${ext(p.code)}>source ↗</a>` : "");
  ovPanel.scrollTop = 0;
}
const cardClip = i => {
  const r = $(`.proj[data-i="${i}"]`).getBoundingClientRect();
  return `inset(${Math.max(0, r.top)}px ${Math.max(0, innerWidth - r.right)}px ${Math.max(0, innerHeight - r.bottom)}px ${Math.max(0, r.left)}px round 4px)`;
};
function openProject(i) {
  closePalette();
  fillProject(i);
  ov.hidden = false;
  lockScroll(true);
  if (!REDUCED) ovPanel.animate([{ clipPath: cardClip(i) }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: 700, easing: "cubic-bezier(.76,0,.24,1)" });
  requestAnimationFrame(() => ov.classList.add("open"));
  $("#ov-close").focus({ preventScroll: true });
}
function closeProject() {
  if (ov.hidden) return;
  ov.classList.remove("open");
  const done = () => { ov.hidden = true; lockScroll(false); $(`.proj[data-i="${ovIdx}"]`)?.focus({ preventScroll: true }); };
  if (REDUCED) return done();
  ovPanel.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: cardClip(ovIdx) }], { duration: 550, easing: "cubic-bezier(.76,0,.24,1)" }).onfinish = done;
}
const stepProject = d => {
  const n = CONFIG.projects.length;
  ov.classList.remove("open");
  setTimeout(() => { fillProject((ovIdx + d + n) % n); ov.classList.add("open"); }, 200);
};
$("#ov-close").addEventListener("click", closeProject);
$("#ov-prev").addEventListener("click", () => stepProject(-1));
$("#ov-next").addEventListener("click", () => stepProject(1));
addEventListener("keydown", e => {
  if (ov.hidden) return;
  if (e.key === "Escape") closeProject();
  if (e.key === "ArrowRight") stepProject(1);
  if (e.key === "ArrowLeft") stepProject(-1);
});

/* =====================================================================
   lab tabs
   ===================================================================== */
function showTab(name) {
  $$(".lab-tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === name));
  $$(".panel").forEach(p => {
    const on = p.id === "tab-" + name;
    p.classList.toggle("on", on);
    if (on) { p.classList.add("in", "flash"); setTimeout(() => p.classList.remove("flash"), 600); }
  });
  dispatchEvent(new Event("labtab"));
}
$(".lab-tabs").addEventListener("click", e => { const b = e.target.closest("button"); if (b) showTab(b.dataset.tab); });

/* =====================================================================
   lab 01 · neural network trained live in the browser
   ===================================================================== */
const NN = (() => {
  const plot = $("#nn-plot"), pctx = plot.getContext("2d"), netc = $("#nn-net"), nctx = netc.getContext("2d");
  const S = [2, 16, 16, 1], G = 44, RAMP = " ..:-=+*";
  const rnd = s => (Math.random() * 2 - 1) * s;
  const DATA = {
    spiral: () => Array.from({ length: 240 }, (_, i) => { const c = i % 2, r = (i >> 1) / 120 * 0.85 + 0.06, a = r * 3.4 * Math.PI + c * Math.PI; return [r * Math.cos(a) + rnd(.03), r * Math.sin(a) + rnd(.03), c]; }),
    circle: () => Array.from({ length: 240 }, (_, i) => { const c = i % 2, r = c ? Math.random() * 0.38 : 0.6 + Math.random() * 0.32, a = Math.random() * 6.283; return [r * Math.cos(a), r * Math.sin(a), c]; }),
    xor: () => Array.from({ length: 240 }, () => { const x = rnd(.92), y = rnd(.92); return [x + (x > 0 ? .05 : -.05), y + (y > 0 ? .05 : -.05), +(x * y > 0)]; }),
    gauss: () => Array.from({ length: 240 }, (_, i) => { const c = i % 2, m = c ? .4 : -.4; return [m + rnd(.38), m + rnd(.38), c]; }),
  };
  let dataKey = "spiral", data, W, b, mW, vW, mb, vb, step, epoch, hist, running = false, probe = null, lastLoss = 0, lastAcc = 0;

  function init() {
    data = DATA[dataKey]();
    W = []; b = []; mW = []; vW = []; mb = []; vb = [];
    for (let l = 0; l < 3; l++) {
      const ni = S[l], no = S[l + 1], lim = Math.sqrt(6 / (ni + no));
      W.push(Float64Array.from({ length: no * ni }, () => rnd(lim)));
      b.push(new Float64Array(no));
      mW.push(new Float64Array(no * ni)); vW.push(new Float64Array(no * ni));
      mb.push(new Float64Array(no)); vb.push(new Float64Array(no));
    }
    step = 0; epoch = 0; hist = []; lastLoss = 0; lastAcc = 0;
    stats(); draw(0);
  }
  function forward(x) {
    const a = [x];
    for (let l = 0; l < 3; l++) {
      const o = new Float64Array(S[l + 1]), ni = S[l];
      for (let j = 0; j < o.length; j++) {
        let s = b[l][j];
        for (let i = 0; i < ni; i++) s += W[l][j * ni + i] * a[l][i];
        o[j] = l === 2 ? 1 / (1 + Math.exp(-s)) : Math.tanh(s);
      }
      a.push(o);
    }
    return a;
  }
  function trainEpoch() {
    const gW = W.map(w => new Float64Array(w.length)), gb = b.map(x => new Float64Array(x.length));
    let loss = 0, correct = 0;
    for (const [px, py, y] of data) {
      const a = forward([px, py]), out = a[3][0];
      loss -= y * Math.log(out + 1e-9) + (1 - y) * Math.log(1 - out + 1e-9);
      correct += (out > 0.5) === !!y;
      let d = [out - y];                               // dL/dz for sigmoid + BCE
      for (let l = 2; l >= 0; l--) {
        const ni = S[l];
        for (let j = 0; j < d.length; j++) {
          gb[l][j] += d[j];
          for (let i = 0; i < ni; i++) gW[l][j * ni + i] += d[j] * a[l][i];
        }
        if (l) {
          const nd = new Float64Array(ni);
          for (let i = 0; i < ni; i++) {
            let s = 0;
            for (let j = 0; j < d.length; j++) s += W[l][j * ni + i] * d[j];
            nd[i] = s * (1 - a[l][i] * a[l][i]);       // tanh'
          }
          d = nd;
        }
      }
    }
    // Adam
    step++;
    const lr = 0.02, b1 = 0.9, b2 = 0.999, n = data.length, c1 = 1 - b1 ** step, c2 = 1 - b2 ** step;
    const upd = (p, g, m, v) => { for (let k = 0; k < p.length; k++) { const gk = g[k] / n; m[k] = b1 * m[k] + (1 - b1) * gk; v[k] = b2 * v[k] + (1 - b2) * gk * gk; p[k] -= lr * (m[k] / c1) / (Math.sqrt(v[k] / c2) + 1e-8); } };
    for (let l = 0; l < 3; l++) { upd(W[l], gW[l], mW[l], vW[l]); upd(b[l], gb[l], mb[l], vb[l]); }
    epoch++;
    lastLoss = loss / n; lastAcc = correct / n;
  }
  const fit = c => { const r = c.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); if (c.width !== Math.round(r.width * d)) { c.width = r.width * d; c.height = r.height * d; } return [r.width, r.height, d]; };
  function drawPlot() {
    const [w, h, d] = fit(plot), cs = w / G;
    pctx.setTransform(d, 0, 0, d, 0, 0);
    pctx.clearRect(0, 0, w, h);
    pctx.font = `${Math.max(8, cs * 1.1)}px ui-monospace, Menlo, monospace`;
    pctx.textAlign = "center"; pctx.textBaseline = "middle";
    for (let gy = 0; gy < G; gy++) for (let gx = 0; gx < G; gx++) {
      const x = (gx + .5) / G * 2 - 1, y = 1 - (gy + .5) / G * 2, p = forward([x, y])[3][0], c = Math.abs(p - .5) * 2;
      const ch = RAMP[Math.min(RAMP.length - 1, (c * RAMP.length) | 0)];
      if (ch === " ") continue;
      pctx.fillStyle = `rgba(${p > .5 ? ACC : BLUE},${0.12 + c * 0.33})`;
      pctx.fillText(ch, (gx + .5) * cs, (gy + .5) * cs);
    }
    for (const [x, y, c] of data) {
      pctx.beginPath(); pctx.arc((x + 1) / 2 * w, (1 - y) / 2 * h, Math.max(2.5, w / 150), 0, 6.283);
      pctx.fillStyle = c ? `rgb(${ACC})` : `rgb(${BLUE})`; pctx.fill();
      pctx.lineWidth = 1.5; pctx.strokeStyle = "#0a0b0a"; pctx.stroke();
    }
    if (probe) {
      const px = (probe[0] + 1) / 2 * w, py = (1 - probe[1]) / 2 * h;
      pctx.strokeStyle = "rgba(233,236,230,.6)"; pctx.lineWidth = 1;
      pctx.beginPath(); pctx.moveTo(px, 0); pctx.lineTo(px, h); pctx.moveTo(0, py); pctx.lineTo(w, py); pctx.stroke();
    }
  }
  function drawNet(t) {
    const [w, h, d] = fit(netc);
    nctx.setTransform(d, 0, 0, d, 0, 0);
    nctx.clearRect(0, 0, w, h);
    const pt = probe || [Math.cos(t * 0.7) * 0.6, Math.sin(t * 0.9) * 0.6];
    const a = forward(pt);
    const pos = S.map((n, l) => Array.from({ length: n }, (_, i) => [24 + l * (w - 48) / 3, n === 1 ? h / 2 : 14 + i * (h - 28) / (n - 1)]));
    for (let l = 0; l < 3; l++) for (let j = 0; j < S[l + 1]; j++) for (let i = 0; i < S[l]; i++) {
      const wt = W[l][j * S[l] + i], sig = Math.abs(wt * a[l][i]);
      nctx.strokeStyle = `rgba(${wt > 0 ? ACC : BLUE},${Math.min(0.85, 0.04 + sig * 0.35)})`;
      nctx.lineWidth = Math.min(2.5, 0.3 + Math.abs(wt) * 0.5);
      nctx.beginPath(); nctx.moveTo(...pos[l][i]); nctx.lineTo(...pos[l + 1][j]); nctx.stroke();
    }
    pos.forEach((col, l) => col.forEach(([x, y], i) => {
      const v = a[l][i], m = l === 3 ? Math.abs(v - .5) * 2 : Math.min(1, Math.abs(v));
      const pos1 = l === 3 ? v > .5 : v > 0;
      nctx.beginPath(); nctx.arc(x, y, l === 3 ? 9 : 5, 0, 6.283);
      nctx.fillStyle = "#0d0d0d"; nctx.fill();
      nctx.fillStyle = `rgba(${pos1 ? ACC : BLUE},${0.15 + m * 0.85})`; nctx.fill();
      nctx.strokeStyle = "#333"; nctx.lineWidth = 1; nctx.stroke();
    }));
    nctx.fillStyle = "#5c5c5c"; nctx.font = "10px 'Geist Mono', monospace"; nctx.textAlign = "center";
    ["input", "hidden 1", "hidden 2", "output"].forEach((s, l) => nctx.fillText(s, pos[l][0][0], h - 1));
  }
  function stats() {
    $("#nn-ep").textContent = epoch;
    $("#nn-loss").textContent = epoch ? lastLoss.toFixed(3) : "-";
    $("#nn-acc").textContent = epoch ? (lastAcc * 100).toFixed(1) + "%" : "-";
    if (epoch) { hist.push(lastLoss); if (hist.length > 60) hist.shift(); }
    const BL = "▁▂▃▄▅▆▇█", mx = Math.max(...hist, 0.01);
    $("#nn-spark").textContent = "loss " + hist.map(v => BL[Math.min(7, Math.round(v / mx * 7))]).join("");
  }
  let f = 0;
  function draw(t) { drawNet(t); if (f++ % 2 === 0 || !running) drawPlot(); }

  $("#nn-data").innerHTML = Object.keys(DATA).map(k => `<button class="${k === dataKey ? "on" : ""}">${k}</button>`).join("");
  $("#nn-data").addEventListener("click", e => {
    const bt = e.target.closest("button"); if (!bt) return;
    dataKey = bt.textContent;
    $$("#nn-data button").forEach(x => x.classList.toggle("on", x === bt));
    init(); setRun(true);
  });
  const setRun = on => { running = on; $("#nn-run").textContent = on ? "pause ❚❚" : "train ▶"; };
  $("#nn-run").addEventListener("click", () => setRun(!running));
  $("#nn-reset").addEventListener("click", () => { init(); setRun(false); });
  plot.addEventListener("pointermove", e => { const r = plot.getBoundingClientRect(); probe = [(e.clientX - r.left) / r.width * 2 - 1, 1 - (e.clientY - r.top) / r.height * 2]; if (!running) drawPlot(); });
  plot.addEventListener("pointerleave", () => { probe = null; if (!running) drawPlot(); });
  addEventListener("resize", () => draw(0));

  init();
  animate(netc, 60, t => {
    if (running) {
      for (let k = 0; k < 4; k++) trainEpoch();
      stats();
      if (lastAcc >= 0.995 && epoch > 150) { setRun(false); toast(`converged · ${epoch} epochs · ${(lastAcc * 100).toFixed(1)}% accuracy`); }
      if (epoch >= 3000) setRun(false);
    }
    draw(t);
  });
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); if (!REDUCED) setTimeout(() => setRun(true), 500); } }, { threshold: 0.4 }).observe(plot);
  return { train: () => { showTab("nn"); setRun(true); } };
})();

/* =====================================================================
   lab 02 · pathfinding
   ===================================================================== */
const PF = (() => {
  const cv = $("#pf"), ctx = cv.getContext("2d");
  const C = 49, R = 21, S = 3 + 9 * C, E = 45 + 11 * C;
  let walls = new Uint8Array(C * R), visitAt = new Int32Array(C * R).fill(-1), path = [], pathShown = 0, it = null, tick = 0, algo = "A*", running = false, paint = -1;
  const xy = i => [i % C, (i / C) | 0];
  const h = i => { const [x, y] = xy(i), [ex, ey] = xy(E); return Math.abs(x - ex) + Math.abs(y - ey); };
  const nbrs = i => { const [x, y] = xy(i), o = []; if (y > 0) o.push(i - C); if (x < C - 1) o.push(i + 1); if (y < R - 1) o.push(i + C); if (x > 0) o.push(i - 1); return o; };

  function* search(kind) {
    const prev = new Int32Array(C * R).fill(-1), g = new Float64Array(C * R).fill(Infinity), closed = new Uint8Array(C * R);
    const open = [S]; g[S] = 0;
    while (open.length) {
      let k = 0;
      if (kind === "DFS") k = open.length - 1;
      else if (kind !== "BFS") {
        // ponytail: linear scan of the open list; fine for a 1k-cell grid, use a binary heap if the grid grows
        let best = Infinity;
        for (let i = 0; i < open.length; i++) { const f = (kind === "A*" ? g[open[i]] : 0) + h(open[i]); if (f < best) { best = f; k = i; } }
      }
      const u = open.splice(k, 1)[0];
      if (closed[u]) continue;
      closed[u] = 1;
      yield u;
      if (u === E) { const p = []; for (let c = E; c !== -1; c = prev[c]) p.unshift(c); return p; }
      for (const v of nbrs(u)) {
        if (walls[v] || closed[v]) continue;
        if (kind === "DFS") { prev[v] = u; open.push(v); }
        else if (g[u] + 1 < g[v]) { g[v] = g[u] + 1; prev[v] = u; open.push(v); }
      }
    }
    return null;
  }
  const resetRun = () => { visitAt.fill(-1); path = []; pathShown = 0; it = null; tick = 0; running = false; $("#pf-vis").textContent = 0; $("#pf-len").textContent = "-"; $("#pf-run").textContent = "find path ▶"; };
  function run() {
    resetRun(); it = search(algo); running = true;
    $("#pf-run").textContent = "searching…";
  }
  function maze() {
    resetRun();
    walls.fill(1);
    const stack = [1 + C], seen = new Uint8Array(C * R);
    seen[1 + C] = 1; walls[1 + C] = 0;
    while (stack.length) {
      const u = stack[stack.length - 1], [x, y] = xy(u);
      const opts = [[2, 0], [-2, 0], [0, 2], [0, -2]].filter(([dx, dy]) => x + dx > 0 && x + dx < C - 1 && y + dy > 0 && y + dy < R - 1 && !seen[u + dx + dy * C]);
      if (!opts.length) { stack.pop(); continue; }
      const [dx, dy] = opts[(Math.random() * opts.length) | 0], v = u + dx + dy * C;
      walls[u + dx / 2 + (dy / 2) * C] = 0; walls[v] = 0; seen[v] = 1; stack.push(v);
    }
    for (let i = 0; i < 40; i++) { const x = 1 + ((Math.random() * (C - 2)) | 0), y = 1 + ((Math.random() * (R - 2)) | 0); walls[x + y * C] = 0; } // a few loops
    walls[S] = walls[E] = 0;
  }
  function draw() {
    const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2), cs = r.width / C;
    if (cv.width !== Math.round(r.width * d)) { cv.width = r.width * d; cv.height = cs * R * d; cv.style.height = cs * R + "px"; }
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.clearRect(0, 0, r.width, cs * R);
    ctx.font = `${cs * 0.8}px ui-monospace, Menlo, monospace`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const onPath = new Set(path.slice(0, pathShown));
    for (let i = 0; i < C * R; i++) {
      const [x, y] = xy(i), px = x * cs, py = y * cs;
      if (walls[i]) { ctx.fillStyle = "#2e2e2e"; ctx.fillRect(px + .5, py + .5, cs - 1, cs - 1); continue; }
      if (i === S || i === E) {
        ctx.fillStyle = `rgb(${ACC})`; ctx.fillRect(px + .5, py + .5, cs - 1, cs - 1);
        ctx.fillStyle = "#0a0b0a"; ctx.fillText(i === S ? "S" : "E", px + cs / 2, py + cs / 2 + 1); continue;
      }
      if (onPath.has(i)) { ctx.fillStyle = `rgb(${ACC})`; ctx.fillRect(px + cs * .2, py + cs * .2, cs * .6, cs * .6); continue; }
      if (visitAt[i] >= 0) {
        const age = Math.min(1, (tick - visitAt[i]) / 60);
        ctx.fillStyle = `rgba(${age < 1 ? ACC : BLUE},${age < 1 ? 0.55 - age * 0.35 : 0.16})`;
        ctx.fillRect(px + .5, py + .5, cs - 1, cs - 1);
        continue;
      }
      ctx.fillStyle = "#2a2a2a"; ctx.fillText("·", px + cs / 2, py + cs / 2);
    }
  }
  const cellAt = e => { const r = cv.getBoundingClientRect(), cs = r.width / C, x = ((e.clientX - r.left) / cs) | 0, y = ((e.clientY - r.top) / cs) | 0; return x >= 0 && x < C && y >= 0 && y < R ? x + y * C : -1; };
  cv.addEventListener("pointerdown", e => { const c = cellAt(e); if (c < 0 || c === S || c === E) return; if (it || path.length) resetRun(); paint = walls[c] ? 0 : 1; walls[c] = paint; cv.setPointerCapture(e.pointerId); draw(); });
  cv.addEventListener("pointermove", e => { if (paint < 0) return; const c = cellAt(e); if (c >= 0 && c !== S && c !== E) { walls[c] = paint; draw(); } });
  addEventListener("pointerup", () => paint = -1);

  $("#pf-algos").innerHTML = ["A*", "BFS", "DFS", "Greedy"].map(k => `<button class="${k === algo ? "on" : ""}">${k}</button>`).join("");
  $("#pf-algos").addEventListener("click", e => {
    const bt = e.target.closest("button"); if (!bt) return;
    algo = bt.textContent; $("#pf-name").textContent = algo;
    $$("#pf-algos button").forEach(x => x.classList.toggle("on", x === bt));
    run();
  });
  $("#pf-run").addEventListener("click", run);
  $("#pf-clear").addEventListener("click", () => { walls.fill(0); resetRun(); draw(); });
  $("#pf-maze").addEventListener("click", () => { maze(); draw(); run(); });

  maze();
  let visited = 0;
  animate(cv, 60, () => {
    if (running && it) {
      for (let k = 0; k < 4; k++) {
        const r = it.next();
        if (r.done) {
          running = false; it = null;
          if (r.value) { path = r.value; $("#pf-len").textContent = path.length - 1; }
          else { $("#pf-len").textContent = "no path"; $("#pf-run").textContent = "find path ▶"; toast("no path: the walls win this time"); }
          break;
        }
        visitAt[r.value] = tick; visited = visitAt.reduce((s, v) => s + (v >= 0), 0);
      }
      $("#pf-vis").textContent = visited;
    } else if (pathShown < path.length) {
      pathShown += 2;
      if (pathShown >= path.length) $("#pf-run").textContent = "again ↻";
    }
    tick++;
    draw();
  });
  addEventListener("resize", draw);
  addEventListener("labtab", draw);
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); if (!REDUCED) setTimeout(run, 300); } }, { threshold: 0.4 }).observe(cv);
  return { maze: () => { showTab("path"); maze(); draw(); run(); } };
})();

/* =====================================================================
   lab 03 · sorting
   ===================================================================== */
const SORT = (() => {
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
  const shuffle = () => {
    arr = Array.from({ length: N }, (_, i) => Math.round((i + 1) * ROWS * 8 / N));
    for (let i = N - 1; i > 0; i--) sw(arr, i, (Math.random() * (i + 1)) | 0);
    it = null; hl = null; cmp = wr = 0; sweep = -1; playing = false; stats(); draw();
    $("#run").textContent = "run ▶";
  };
  const run = () => {
    if (sweep >= 0) shuffle();
    if (!it) it = ALGOS[algo][1](arr);
    playing = !playing;
    $("#run").textContent = playing ? "pause ❚❚" : "run ▶";
  };
  $("#algos").innerHTML = Object.keys(ALGOS).map(k => `<button class="${k === algo ? "on" : ""}">${k}</button>`).join("");
  $("#algos").addEventListener("click", e => {
    const bt = e.target.closest("button"); if (!bt) return;
    algo = bt.textContent;
    $$("#algos button").forEach(x => x.classList.toggle("on", x === bt));
    shuffle(); run();
  });
  $("#shuffle").addEventListener("click", shuffle);
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
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); if (!REDUCED) setTimeout(run, 400); } }, { threshold: 0.5 }).observe(view);
  return { show: () => showTab("sort") };
})();

/* =====================================================================
   GitHub activity
   ===================================================================== */
(async function github() {
  let days = null, live = false;
  if (CONFIG.github) {
    try {
      const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(CONFIG.github)}?y=last`);
      // external data: keep only well-formed dates and numeric counts before anything touches the DOM
      if (r.ok) { days = (await r.json()).contributions.filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d.date)).map(d => ({ date: d.date, count: Math.max(0, Math.floor(+d.count) || 0) })); live = true; }
    } catch {}
  }
  if (!days?.length) {
    days = [];
    const today = new Date(); today.setHours(12, 0, 0, 0);
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      const wk = d.getDay() === 0 || d.getDay() === 6, crunch = Math.sin(i / 23) > 0.6;
      const count = Math.random() < (wk ? 0.45 : 0.15) ? 0 : Math.round(Math.pow(Math.random(), 1.6) * (crunch ? 16 : 9)) + 1;
      days.push({ date: d.toISOString().slice(0, 10), count });
    }
  }
  // scale levels to this person's own activity (quartiles of non-zero days), like GitHub does
  const nz = days.map(d => d.count).filter(Boolean).sort((a, b) => a - b);
  const q = f => nz[Math.floor(f * (nz.length - 1))] || 1;
  const [q1, q2, q3] = [q(.25), q(.5), q(.75)];
  const level = c => c === 0 ? 0 : c <= q1 ? 1 : c <= q2 ? 2 : c <= q3 ? 3 : 4;
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const pad = parse(days[0].date).getDay(), weeks = Math.ceil((pad + days.length) / 7);
  const grid = $("#gh-grid"), months = $("#gh-months"), gh = $(".gh");
  grid.style.setProperty("--weeks", weeks); months.style.setProperty("--weeks", weeks);
  grid.innerHTML = "<i class='pad'></i>".repeat(pad) + days.map((d, i) =>
    `<i class="l${level(d.count)}" data-i="${i}" style="transition-delay:${(((pad + i) / 7) | 0) * 14}ms"></i>`).join("");

  const MN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let lastCol = -3, mh = "";
  days.forEach((d, i) => {
    const dt = parse(d.date), col = ((pad + i) / 7) | 0;
    if ((dt.getDate() === 1 || i === 0) && col - lastCol >= 3 && col < weeks - 1) { mh += `<span style="grid-column:${col + 1}">${MN[dt.getMonth()]}</span>`; lastCol = col; }
  });
  months.innerHTML = mh;

  const total = days.reduce((s, d) => s + d.count, 0);
  $("#gh-total").textContent = `${total.toLocaleString()} GitHub activities in the last year`;
  let cur = 0, run = 0, longest = 0, bestDay = days[0], active = 0;
  days.forEach(d => { run = d.count ? run + 1 : 0; longest = Math.max(longest, run); active += !!d.count; if (d.count > bestDay.count) bestDay = d; });
  for (let i = days.length - 1; i >= 0 && days[i].count; i--) cur++;
  const fmt = d => parse(d.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  $("#gh-stats").innerHTML = [
    [total.toLocaleString(), "contributions"], [active, "active days"], [longest + "d", "longest streak"], [bestDay.count, `best day · ${fmt(bestDay)}`],
  ].map(([b, l]) => `<div><b>${b}</b>${l}</div>`).join("");
  if (!live) $("#gh-stats").insertAdjacentHTML("afterend", `<p class="mono dim" style="font-size:11px;margin-top:10px">// couldn't reach the contributions API, showing demo data</p>`);

  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { gh.classList.add("in"); o.disconnect(); } }, { threshold: 0.3 }).observe(gh);

  const tip = $("#gh-tip");
  grid.addEventListener("pointerover", e => {
    const c = e.target.closest("i[data-i]"); if (!c) return;
    const d = days[+c.dataset.i];
    tip.textContent = `${d.count === 0 ? "No" : d.count} contribution${d.count === 1 ? "" : "s"} on ${fmt(d)}`;
    const cr = c.getBoundingClientRect(), gr = gh.getBoundingClientRect(), half = tip.offsetWidth / 2;
    tip.style.left = Math.max(half + 8, Math.min(gr.width - half - 8, cr.left - gr.left + cr.width / 2)) + "px";
    tip.style.top = cr.top - gr.top + "px";
    tip.classList.add("show");
  });
  grid.addEventListener("pointerleave", () => tip.classList.remove("show"));
})();

/* =====================================================================
   contact: copy email + terminal
   ===================================================================== */
async function copyEmail() {
  try { await navigator.clipboard.writeText(CONFIG.email); } catch { location.href = `mailto:${CONFIG.email}`; return; }
  const c = $("#copied"); c.classList.add("show"); setTimeout(() => c.classList.remove("show"), 1600);
  toast(`copied ${CONFIG.email}`);
}
$("#email").addEventListener("click", copyEmail);

let openTerm;
{
  const out = $("#term-out"), input = $("#term-in"), term = $("#terminal");
  const hist = []; let hi = 0;
  const print = (html, cls = "") => { const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; };
  const link = (u, t = u) => `<a href="${esc(u)}"${ext(u)}>${esc(t)}</a>`;
  const HELP = {
    help: "list commands", whoami: "who is this?", neofetch: "system info, but make it personal",
    skills: "tech i work with", projects: "things i've built", "open <n>": "open project n in detail",
    experience: "git log of my journey", contact: "how to reach me", socials: "find me online",
    "goto <site>": "open a social link", train: "train the neural net in the lab", maze: "generate & solve a maze",
    matrix: "you know what this does", date: "current date", clear: "clear the screen",
  };
  const CMDS = {
    help: () => Object.entries(HELP).map(([k, v]) => `<span class="acc">${k.padEnd(14)}</span>${v}`).join("\n") + `\n\n<span class="dim">psst, try 'sudo hire-me'</span>`,
    whoami: () => `${esc(fullName)} · ${CONFIG.roles.slice(0, 3).map(esc).join(" · ")}\n${esc(CONFIG.tagline)}`,
    neofetch: () => {
      const logo = ["   ▄▄▄▄▄▄▄   ", "  █ ▄▀▀▀▄ █  ", "  █ █▄▄▄█ █  ", "  █ █   █ █  ", "  █▄▄▄▄▄▄▄█  ", "    a k _    ", "             ", "             "];
      const info = [
        `<span class="acc">guest</span>@<span class="acc">anushree</span>`, "──────────────",
        `<span class="acc">os</span>       B.Tech CSE @ Amrita`, `<span class="acc">focus</span>    AI/ML · full-stack · DSA`,
        `<span class="acc">langs</span>    Python, Java, C, JS, SQL`, `<span class="acc">cgpa</span>     9.12`,
        `<span class="acc">location</span> ${esc(CONFIG.location)}`, `<span class="acc">shell</span>    zsh + curiosity`,
      ];
      return logo.map((l, i) => `<span class="acc">${l}</span>  ${info[i] || ""}`).join("\n");
    },
    skills: () => CONFIG.skills.map(g => `<span class="acc">${esc(g.group)}</span>\n  ${g.items.map(esc).join(", ")}`).join("\n"),
    projects: () => CONFIG.projects.map((p, i) => `<span class="dim">[${i + 1}]</span> <span class="acc">${esc(p.title)}</span>\n    ${esc(p.tags.join(", "))}`).join("\n") + `\n\n<span class="dim">type 'open 1' to see one in detail</span>`,
    open: a => { const i = parseInt(a) - 1; if (!CONFIG.projects[i]) return `<span class="err">usage: open &lt;1-${CONFIG.projects.length}&gt;</span>`; setTimeout(() => openProject(i), 250); return `opening ${esc(CONFIG.projects[i].title)}…`; },
    experience: () => CONFIG.experience.map(x => `<span style="color:#d9c89a">${esc(x.hash)}</span> ${esc(x.role)} @ ${esc(x.org)} <span class="dim">(${esc(x.when)})</span>`).join("\n"),
    contact: () => `email  ${link("mailto:" + CONFIG.email, CONFIG.email)}\nloc    ${esc(CONFIG.location)}`,
    socials: () => CONFIG.socials.map(s => `${esc(s.label.toLowerCase()).padEnd(14)}${link(s.url)}`).join("\n"),
    goto: a => {
      const s = CONFIG.socials.find(s => s.label.toLowerCase().startsWith((a || "").toLowerCase()));
      if (!a || !s) return `<span class="err">usage: goto &lt;${CONFIG.socials.map(s => s.label.split(" ")[0].toLowerCase()).join("|")}&gt;</span>`;
      window.open(s.url, "_blank", "noopener"); return `opening ${esc(s.label)}…`;
    },
    train: () => { NN.train(); setTimeout(() => scrollToEl("#lab"), 200); return "spinning up gradient descent… ↑ scroll up to the lab"; },
    maze: () => { PF.maze(); setTimeout(() => scrollToEl("#lab"), 200); return "carving a maze with a randomized DFS… ↑ check the lab"; },
    matrix: () => { matrix(); return "wake up, neo…"; },
    date: () => new Date().toString(),
    echo: a => esc(a || ""),
    ls: () => Object.keys(CMDS).filter(k => !["ls", "sudo", "clear", "echo"].includes(k)).map(k => k + ".sh").join("  "),
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
    const res = f ? f(rest.join(" ")) : `<span class="err">command not found: ${esc(cmd)}</span>. Type <span class="acc">help</span>`;
    if (res != null) print(res);
  };
  print(`<span class="dim">anushree-os v2.0 (tty1) · last login: ${new Date().toDateString()}</span>\nType <span class="acc">help</span> to get started.`);
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
  openTerm = () => { scrollToEl("#contact"); setTimeout(() => input.focus({ preventScroll: true }), 900); };
}

/* =====================================================================
   command palette (⌘K)
   ===================================================================== */
const pal = $("#pal"), palIn = $("#pal-in"), palList = $("#pal-list");
let palItems = [], palSel = 0;
const PAL = [
  ...["about", "work", "lab", "activity", "contact"].map(s => ({ g: "navigate", l: `Go to ${s}`, h: "#" + s, run: () => scrollToEl("#" + s) })),
  { g: "navigate", l: "Honors & wins", h: "#honors", run: () => scrollToEl("#honors") },
  ...CONFIG.projects.map((p, i) => ({ g: "projects", l: p.title, h: p.tags.slice(0, 3).join(" · "), run: () => openProject(i) })),
  { g: "lab", l: "Train the neural network", h: "ml", run: () => { NN.train(); scrollToEl("#lab"); } },
  { g: "lab", l: "Generate & solve a maze", h: "dsa", run: () => { PF.maze(); scrollToEl("#lab"); } },
  { g: "lab", l: "Sorting visualizer", h: "dsa", run: () => { SORT.show(); scrollToEl("#lab"); } },
  { g: "actions", l: "Copy email address", h: CONFIG.email, run: copyEmail },
  { g: "actions", l: "Open terminal", h: "guest@anushree", run: () => openTerm() },
  { g: "actions", l: "Enter the matrix", h: "easter egg", run: () => matrix() },
  { g: "actions", l: "Back to top", h: "↑", run: () => scrollToEl(0) },
  ...CONFIG.socials.map(s => ({ g: "links", l: s.label, h: s.url.replace(/^https?:\/\/(www\.)?/, ""), run: () => window.open(s.url, "_blank", "noopener") })),
];
const fuzzy = (q, s) => { let i = 0; for (const c of s) if (c === q[i]) i++; return i === q.length; };
function renderPal() {
  const q = palIn.value.toLowerCase().trim();
  palItems = !q ? PAL : PAL.filter(it => `${it.l} ${it.g} ${it.h}`.toLowerCase().includes(q)).concat(PAL.filter(it => !`${it.l} ${it.g} ${it.h}`.toLowerCase().includes(q) && fuzzy(q, it.l.toLowerCase())));
  palSel = Math.min(palSel, Math.max(0, palItems.length - 1));
  let g = "", html = "";
  palItems.forEach((it, i) => {
    if (it.g !== g && !q) { g = it.g; html += `<li class="grp">${esc(g)}</li>`; }
    html += `<li class="it${i === palSel ? " sel" : ""}" data-i="${i}"><span>${esc(it.l)}</span><span class="h">${esc(it.h || "")}</span></li>`;
  });
  palList.innerHTML = html || `<li class="empty">no matches. Try "maze" or "email"</li>`;
  palList.querySelector(".sel")?.scrollIntoView({ block: "nearest" });
}
function openPalette() { if (!ov.hidden) closeProject(); pal.hidden = false; palIn.value = ""; palSel = 0; renderPal(); lockScroll(true); palIn.focus(); }
function closePalette() { if (pal.hidden) return; pal.hidden = true; lockScroll(false); }
const runPal = i => { const it = palItems[i]; if (!it) return; closePalette(); setTimeout(it.run, 50); };
palIn.addEventListener("input", () => { palSel = 0; renderPal(); });
palIn.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); palSel = (palSel + 1) % palItems.length; renderPal(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); palSel = (palSel - 1 + palItems.length) % palItems.length; renderPal(); }
  else if (e.key === "Enter") runPal(palSel);
  else if (e.key === "Escape") closePalette();
});
palList.addEventListener("click", e => { const li = e.target.closest(".it"); if (li) runPal(+li.dataset.i); });
palList.addEventListener("pointermove", e => { const li = e.target.closest(".it"); if (li && +li.dataset.i !== palSel) { palSel = +li.dataset.i; palList.querySelectorAll(".it").forEach(x => x.classList.toggle("sel", x === li)); } });
pal.addEventListener("click", e => { if (e.target === pal) closePalette(); });
$("#open-pal").addEventListener("click", openPalette);
addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); }
  else if (e.key === "/" && pal.hidden && ov.hidden && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openPalette(); }
});

/* =====================================================================
   easter egg: konami code → matrix rain
   ===================================================================== */
function matrix() {
  if (REDUCED) return toast("the matrix respects prefers-reduced-motion");
  const cv = $("#matrix"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const fs = 16, cols = Math.ceil(innerWidth / fs), drops = Array.from({ length: cols }, () => Math.random() * -50);
  const CH = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ01<>/{}[]#$";
  cv.classList.add("on");
  const t0 = performance.now();
  (function f(now) {
    ctx.fillStyle = "rgba(10,11,10,.12)"; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.font = `${fs}px ui-monospace, monospace`;
    drops.forEach((y, i) => {
      ctx.fillStyle = Math.random() < .05 ? "#fff" : `rgb(${ACC})`;
      ctx.fillText(CH[(Math.random() * CH.length) | 0], i * fs, y * fs);
      drops[i] = y * fs > cv.height && Math.random() > .97 ? 0 : y + 1;
    });
    if (now - t0 < 5000) requestAnimationFrame(f);
    else { cv.classList.remove("on"); setTimeout(() => ctx.clearRect(0, 0, cv.width, cv.height), 700); }
  })(t0);
}
{
  const K = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let k = 0;
  addEventListener("keydown", e => {
    if (/INPUT/.test(document.activeElement.tagName)) return;
    k = e.key === K[k] ? k + 1 : e.key === K[0] ? 1 : 0;
    if (k === K.length) { k = 0; matrix(); toast("achievement unlocked · ↑↑↓↓←→←→BA"); }
  });
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
    x.font = "700 100px Geist, sans-serif";
    const fs = 100 * (cols * 0.96) / x.measureText(text).width;
    rows = Math.ceil(fs * 0.6 * 0.82) + 2;
    cv.width = cols; cv.height = rows;
    x.font = `700 ${fs}px Geist, sans-serif`;
    x.textAlign = "center"; x.fillStyle = "#fff";
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

/* =====================================================================
   boot sequence + hero intro (last, so everything above is initialised)
   ===================================================================== */
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
let started = false;
function start() {
  if (started) return;
  started = true;
  scramble($("#first"), CONFIG.first, 1200, splitName);
  typeRoles();
}
(function boot() {
  const el = $("#boot"), log = $("#boot-log");
  let seen = false;
  try { seen = sessionStorage.getItem("booted"); sessionStorage.setItem("booted", 1); } catch {}
  if (REDUCED || seen) { el.remove(); start(); return; }
  document.body.classList.add("booting");
  lenis?.stop();
  const lines = [
    "[<b> OK </b>] mounting /dev/brain",
    "[<b> OK </b>] starting curiosity.service",
    "[<b> OK </b>] loading weights: neural_nets.pt",
    "[<b> OK </b>] linking libdsa.so",
    "[<b> OK </b>] compiling projects: 0 warnings",
    `[<b> .. </b>] booting portfolio :: ${esc(fullName.toLowerCase())}`,
  ];
  let i = 0;
  const done = () => {
    if (!el.isConnected || el.classList.contains("done")) return;
    el.classList.add("done"); document.body.classList.remove("booting"); lenis?.start(); start();
    setTimeout(() => el.remove(), 1000);
  };
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
