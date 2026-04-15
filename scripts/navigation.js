const COURSE_PAGES = [
  { key: "index", file: "index.html", title: "Capa" },
  { key: "sumario", file: "sumario.html", title: "Sumário" },
  { key: "introducao", file: "introducao.html", title: "Introdução" },
  { key: "modulo1", file: "modulo1.html", title: "Módulo 1" },
  { key: "modulo2", file: "modulo2.html", title: "Módulo 2" },
  { key: "modulo3", file: "modulo3.html", title: "Módulo 3" },
  { key: "modulo4", file: "modulo4.html", title: "Módulo 4" },
  { key: "modulo5", file: "modulo5.html", title: "Módulo 5" },
  { key: "modulo6", file: "modulo6.html", title: "Módulo 6" },
  { key: "modulo7", file: "modulo7.html", title: "Módulo 7" },
  { key: "modulo8", file: "modulo8.html", title: "Módulo 8" },
  { key: "exercicios", file: "exercicios.html", title: "Exercícios" },
  { key: "exercicios-avancados", file: "exercicios-avancados.html", title: "Exercícios Avançados" },
  { key: "checklist", file: "checklist.html", title: "Checklist" },
  { key: "conclusao", file: "conclusao.html", title: "Conclusão" },
  { key: "apendices", file: "apendices.html", title: "Apêndices" }
];

const FALLBACK_COMPONENTS = {
  header: `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div class="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="index.html" class="inline-flex items-center gap-3">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-soft">IA</span>
          <span class="hidden sm:block text-sm font-semibold text-slate-900">IA Aplicada à Administração</span>
        </a>
        <div class="flex items-center gap-2 sm:gap-3">
          <a href="sumario.html" class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Sumário</a>
          <a data-role="prev-btn" href="#" class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Anterior</a>
          <a data-role="next-btn" href="#" class="inline-flex items-center rounded-xl bg-primary px-3 py-2 text-sm font-medium text-white">Próximo</a>
          <button type="button" data-role="read-mode-toggle" class="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 lg:inline-flex" aria-pressed="false" aria-label="Ativar modo leitura">
            <span data-role="read-mode-label">Modo leitura</span>
          </button>
          <button type="button" data-role="mobile-menu-btn" class="inline-flex items-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 lg:hidden" aria-label="Abrir menu">☰</button>
        </div>
      </div>
    </header>
    <div class="fixed inset-x-0 top-[72px] z-40 h-1 bg-slate-200/80"><div data-role="reading-progress-bar" class="h-full w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-150"></div></div>
  `,
  sidebar: `
    <aside class="sticky top-28 hidden lg:block">
      <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Navegação</p>
        <nav class="mt-4 space-y-1">
          <a data-nav-key="index" href="index.html" class="sidebar-link">Capa</a>
          <a data-nav-key="sumario" href="sumario.html" class="sidebar-link">Sumário</a>
          <a data-nav-key="introducao" href="introducao.html" class="sidebar-link">Introdução</a>
          <a data-nav-key="modulo1" href="modulo1.html" class="sidebar-link">Módulo 1</a>
          <a data-nav-key="modulo2" href="modulo2.html" class="sidebar-link">Módulo 2</a>
          <a data-nav-key="modulo3" href="modulo3.html" class="sidebar-link">Módulo 3</a>
          <a data-nav-key="modulo4" href="modulo4.html" class="sidebar-link">Módulo 4</a>
          <a data-nav-key="modulo5" href="modulo5.html" class="sidebar-link">Módulo 5</a>
          <a data-nav-key="modulo6" href="modulo6.html" class="sidebar-link">Módulo 6</a>
          <a data-nav-key="modulo7" href="modulo7.html" class="sidebar-link">Módulo 7</a>
          <a data-nav-key="modulo8" href="modulo8.html" class="sidebar-link">Módulo 8</a>
          <a data-nav-key="exercicios" href="exercicios.html" class="sidebar-link">Exercícios</a>
          <a data-nav-key="exercicios-avancados" href="exercicios-avancados.html" class="sidebar-link">Exercícios Avançados</a>
          <a data-nav-key="checklist" href="checklist.html" class="sidebar-link">Checklist</a>
          <a data-nav-key="conclusao" href="conclusao.html" class="sidebar-link">Conclusão</a>
          <a data-nav-key="apendices" href="apendices.html" class="sidebar-link">Apêndices</a>
        </nav>
      </div>
    </aside>
    <div data-role="mobile-backdrop" class="fixed inset-0 z-50 hidden bg-slate-900/45 lg:hidden"></div>
    <aside data-role="mobile-sidebar" class="fixed right-0 top-0 z-[60] h-full w-80 max-w-[90vw] translate-x-full border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 lg:hidden">
      <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4">
        <h2 class="text-sm font-semibold text-slate-900">Menu</h2>
        <button type="button" data-role="mobile-close-btn" class="rounded-lg border border-slate-200 p-2 text-slate-700" aria-label="Fechar menu">✕</button>
      </div>
      <nav class="space-y-1 overflow-y-auto p-4">
        <a data-nav-key="index" href="index.html" class="sidebar-link">Capa</a>
        <a data-nav-key="sumario" href="sumario.html" class="sidebar-link">Sumário</a>
        <a data-nav-key="introducao" href="introducao.html" class="sidebar-link">Introdução</a>
        <a data-nav-key="modulo1" href="modulo1.html" class="sidebar-link">Módulo 1</a>
        <a data-nav-key="modulo2" href="modulo2.html" class="sidebar-link">Módulo 2</a>
        <a data-nav-key="modulo3" href="modulo3.html" class="sidebar-link">Módulo 3</a>
        <a data-nav-key="modulo4" href="modulo4.html" class="sidebar-link">Módulo 4</a>
        <a data-nav-key="modulo5" href="modulo5.html" class="sidebar-link">Módulo 5</a>
        <a data-nav-key="modulo6" href="modulo6.html" class="sidebar-link">Módulo 6</a>
        <a data-nav-key="modulo7" href="modulo7.html" class="sidebar-link">Módulo 7</a>
        <a data-nav-key="modulo8" href="modulo8.html" class="sidebar-link">Módulo 8</a>
        <a data-nav-key="exercicios" href="exercicios.html" class="sidebar-link">Exercícios</a>
        <a data-nav-key="exercicios-avancados" href="exercicios-avancados.html" class="sidebar-link">Exercícios Avançados</a>
        <a data-nav-key="checklist" href="checklist.html" class="sidebar-link">Checklist</a>
        <a data-nav-key="conclusao" href="conclusao.html" class="sidebar-link">Conclusão</a>
        <a data-nav-key="apendices" href="apendices.html" class="sidebar-link">Apêndices</a>
      </nav>
    </aside>
  `,
  footer: `
    <footer class="border-t border-slate-200/80 bg-white/90">
      <div class="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p class="text-sm font-medium text-slate-700">Apostila Profissional: IA Aplicada à Administração</p>
          <p class="text-xs text-slate-500"><span data-role="page-number"></span> • © 2026 Todos os direitos reservados.</p>
        </div>
        <div class="flex flex-wrap items-center gap-2 text-sm">
          <a href="sumario.html" class="rounded-lg border border-slate-200 px-3 py-2 text-slate-600">Sumário</a>
          <a data-role="prev-btn-footer" href="#" class="rounded-lg border border-slate-200 px-3 py-2 text-slate-600">Anterior</a>
          <a data-role="next-btn-footer" href="#" class="rounded-lg bg-primary px-3 py-2 font-medium text-white">Próximo</a>
        </div>
      </div>
    </footer>
  `
};

const VISITED_KEY = "ebook-ia-admin-visited";
const READ_MODE_KEY = "ebook-ia-admin-read-mode";

function resolveCurrentKey() {
  const bodyKey = document.body?.dataset?.page;
  if (bodyKey) {
    return bodyKey;
  }
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const match = COURSE_PAGES.find((page) => page.file === fileName);
  return match ? match.key : "index";
}

const currentKey = resolveCurrentKey();

function getPageIndex(key) {
  return COURSE_PAGES.findIndex((page) => page.key === key);
}

async function injectComponent(slotSelector, filePath, fallbackMarkup) {
  const slot = document.querySelector(slotSelector);
  if (!slot) {
    return;
  }

  try {
    const response = await fetch(filePath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Falha ao carregar componente");
    }
    slot.innerHTML = await response.text();
  } catch (error) {
    slot.innerHTML = fallbackMarkup;
    console.warn(`Componente ${filePath} carregado em fallback.`, error);
  }
}

function markActiveNavigation() {
  document.querySelectorAll("[data-nav-key]").forEach((link) => {
    const active = link.getAttribute("data-nav-key") === currentKey;
    link.setAttribute("data-active", active ? "true" : "false");
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setLinkState(element, page) {
  if (!element) {
    return;
  }

  if (!page) {
    element.setAttribute("href", "#");
    element.setAttribute("aria-disabled", "true");
    element.classList.add("pointer-events-none", "opacity-45");
    return;
  }

  element.setAttribute("href", page.file);
  element.classList.remove("pointer-events-none", "opacity-45");
  element.setAttribute("aria-label", `Ir para ${page.title}`);
}

function wirePrevNextButtons() {
  const currentIndex = getPageIndex(currentKey);
  const prevPage = currentIndex > 0 ? COURSE_PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < COURSE_PAGES.length - 1 ? COURSE_PAGES[currentIndex + 1] : null;

  setLinkState(document.querySelector("[data-role='prev-btn']"), prevPage);
  setLinkState(document.querySelector("[data-role='next-btn']"), nextPage);
  setLinkState(document.querySelector("[data-role='prev-btn-footer']"), prevPage);
  setLinkState(document.querySelector("[data-role='next-btn-footer']"), nextPage);

  document.querySelectorAll("[data-role='page-number']").forEach((el) => {
    el.textContent = `Página ${currentIndex + 1} de ${COURSE_PAGES.length}`;
  });
}

function updateReadingProgress() {
  const progressBar = document.querySelector("[data-role='reading-progress-bar']");
  if (!progressBar) {
    return;
  }

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height <= 0 ? 0 : Math.min((scrollTop / height) * 100, 100);
  progressBar.style.width = `${progress}%`;
}

function getStoredReadMode() {
  try {
    return localStorage.getItem(READ_MODE_KEY) === "on";
  } catch (error) {
    return false;
  }
}

function setStoredReadMode(enabled) {
  try {
    localStorage.setItem(READ_MODE_KEY, enabled ? "on" : "off");
  } catch (error) {
    // Ignore storage errors and keep runtime mode only.
  }
}

function applyReadMode(enabled) {
  document.body.classList.toggle("focus-reading", enabled);

  document.querySelectorAll("[data-role='read-mode-toggle']").forEach((button) => {
    button.setAttribute("aria-pressed", enabled ? "true" : "false");
    button.setAttribute("aria-label", enabled ? "Desativar modo leitura" : "Ativar modo leitura");
  });

  document.querySelectorAll("[data-role='read-mode-label']").forEach((label) => {
    label.textContent = enabled ? "Leitura ativa" : "Modo leitura";
  });
}

function wireReadModeToggle() {
  const toggles = document.querySelectorAll("[data-role='read-mode-toggle']");
  if (!toggles.length) {
    return;
  }

  let enabled = getStoredReadMode();
  applyReadMode(enabled);

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      enabled = !enabled;
      applyReadMode(enabled);
      setStoredReadMode(enabled);
    });
  });
}

function getContinuePage(visited) {
  const modulePages = COURSE_PAGES.filter((page) => page.key !== "index" && page.key !== "sumario");
  const nextPending = modulePages.find((page) => !visited.has(page.key));
  if (nextPending) {
    return nextPending;
  }

  const visitedPages = COURSE_PAGES.filter((page) => visited.has(page.key));
  return visitedPages[visitedPages.length - 1] || COURSE_PAGES[1];
}

function getVisitedPages() {
  try {
    const parsed = JSON.parse(localStorage.getItem(VISITED_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    return new Set();
  }
}

function saveVisitedPages(setObject) {
  localStorage.setItem(VISITED_KEY, JSON.stringify(Array.from(setObject)));
}

function markVisitedAndUpdateSummary() {
  const visited = getVisitedPages();
  visited.add(currentKey);
  saveVisitedPages(visited);

  const completed = COURSE_PAGES.filter((page) => visited.has(page.key)).length;
  const percent = Math.round((completed / COURSE_PAGES.length) * 100);

  const fill = document.querySelector("[data-role='course-progress-fill']");
  const text = document.querySelector("[data-role='course-progress-text']");

  if (fill) {
    fill.style.width = `${percent}%`;
  }
  if (text) {
    text.textContent = `${completed} de ${COURSE_PAGES.length} páginas concluídas (${percent}%)`;
  }

  const continuePage = getContinuePage(visited);
  const continueLink = document.querySelector("[data-role='continue-link']");
  const continueLabel = document.querySelector("[data-role='continue-label']");
  const dashboardProgress = document.querySelector("[data-role='dashboard-progress-text']");
  const dashboardFill = document.querySelector("[data-role='dashboard-progress-fill']");

  if (continueLink && continuePage) {
    continueLink.setAttribute("href", continuePage.file);
    continueLink.textContent = `Continuar em ${continuePage.title}`;
  }

  if (continueLabel && continuePage) {
    continueLabel.textContent = `Próxima recomendação: ${continuePage.title}`;
  }

  if (dashboardProgress) {
    dashboardProgress.textContent = `${completed} de ${COURSE_PAGES.length} páginas já concluídas`;
  }

  if (dashboardFill) {
    dashboardFill.style.width = `${percent}%`;
  }

  document.querySelectorAll("[data-progress-key]").forEach((item) => {
    const key = item.getAttribute("data-progress-key");
    const isDone = visited.has(key);
    item.setAttribute("data-complete", isDone ? "true" : "false");

    const marker = item.querySelector("[data-role='progress-marker']");
    if (marker) {
      marker.textContent = isDone ? "Concluído" : "Pendente";
      marker.className = isDone
        ? "rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
        : "rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500";
    }
  });
}

function wireMobileMenu() {
  const openButton = document.querySelector("[data-role='mobile-menu-btn']");
  const closeButton = document.querySelector("[data-role='mobile-close-btn']");
  const sidebar = document.querySelector("[data-role='mobile-sidebar']");
  const backdrop = document.querySelector("[data-role='mobile-backdrop']");

  if (!openButton || !sidebar || !backdrop) {
    return;
  }

  const openMenu = () => {
    sidebar.classList.remove("translate-x-full");
    backdrop.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    sidebar.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  openButton.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  document.querySelectorAll("[data-role='mobile-nav'] a, [data-nav-key]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.focus();
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

function wireCopyPromptButtons() {
  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.getAttribute("data-copy-target");
      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      const originalText = button.textContent;
      try {
        await copyToClipboard(target.textContent.trim());
        button.textContent = "Copiado";
        button.classList.add("bg-green-600", "text-white");
      } catch (error) {
        button.textContent = "Falha ao copiar";
      }

      window.setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("bg-green-600", "text-white");
      }, 1600);
    });
  });
}

function slugifyText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 64);
}

function ensureUniqueHeadingId(heading, usedIds, fallbackPrefix = "secao") {
  if (heading.id) {
    usedIds.add(heading.id);
    return heading.id;
  }

  const base = slugifyText(heading.textContent || "") || fallbackPrefix;
  let candidate = base;
  let index = 2;

  while (usedIds.has(candidate)) {
    candidate = `${base}-${index}`;
    index += 1;
  }

  heading.id = candidate;
  usedIds.add(candidate);
  return candidate;
}

function buildInPageOutline() {
  const main = document.querySelector("#main-content");
  if (!main || main.querySelector("[data-role='page-outline']")) {
    return;
  }

  const headings = Array.from(main.querySelectorAll("h2")).filter((heading) => {
    const text = (heading.textContent || "").trim();
    return text.length > 0 && !heading.closest("[data-role='page-outline']");
  });

  if (headings.length < 3) {
    return;
  }

  const usedIds = new Set(Array.from(main.querySelectorAll("[id]")).map((el) => el.id));
  const linksMarkup = headings.slice(0, 16).map((heading) => {
    const id = ensureUniqueHeadingId(heading, usedIds, "topico");
    const title = (heading.textContent || "").trim();
    return `<a href="#${id}" class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-primary/40 hover:text-primary" data-role="outline-link">${title}</a>`;
  }).join("");

  const outline = document.createElement("section");
  outline.dataset.role = "page-outline";
  outline.className = "surface-card p-5 sm:p-6 print-break-avoid";
  outline.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h2 class="text-xl font-semibold">Indice da pagina</h2>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Navegacao rapida</span>
    </div>
    <div class="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">${linksMarkup}</div>
  `;

  const firstBlock = main.firstElementChild;
  if (firstBlock && firstBlock.nextSibling) {
    main.insertBefore(outline, firstBlock.nextSibling);
  } else {
    main.prepend(outline);
  }

  outline.querySelectorAll("[data-role='outline-link']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    });
  });
}

function wireExpandableHeavySections() {
  const sections = Array.from(document.querySelectorAll("section[data-content-expansion], section[data-exercise-expansion]"));
  sections.forEach((section, sectionIndex) => {
    if (section.dataset.expandReady === "true") {
      return;
    }

    const heading = section.querySelector(":scope > h2");
    if (!heading) {
      return;
    }

    const intro = heading.nextElementSibling?.tagName === "P" ? heading.nextElementSibling : null;
    const contentNodes = Array.from(section.children).filter((child) => child !== heading && child !== intro);
    if (contentNodes.length < 2) {
      return;
    }

    const collapsible = document.createElement("div");
    collapsible.dataset.role = "expandable-content";
    collapsible.className = "mt-4 space-y-4";

    contentNodes.forEach((node) => {
      collapsible.appendChild(node);
    });

    if (intro) {
      intro.insertAdjacentElement("afterend", collapsible);
    } else {
      heading.insertAdjacentElement("afterend", collapsible);
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "mt-4 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary";
    button.dataset.role = "expand-toggle";
    button.setAttribute("aria-expanded", "true");
    const sectionNumber = sectionIndex + 1;
    button.textContent = `Recolher bloco extenso ${sectionNumber}`;

    const anchor = intro || heading;
    anchor.insertAdjacentElement("afterend", button);
    button.insertAdjacentElement("afterend", collapsible);

    button.addEventListener("click", () => {
      const collapsed = collapsible.classList.toggle("hidden");
      button.setAttribute("aria-expanded", collapsed ? "false" : "true");
      button.textContent = collapsed
        ? `Expandir bloco extenso ${sectionNumber}`
        : `Recolher bloco extenso ${sectionNumber}`;
    });

    section.dataset.expandReady = "true";
  });
}

function wireDidacticCallouts() {
  const normalize = (value) => value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  document.querySelectorAll(".didactic-card").forEach((card) => {
    const tag = card.querySelector(".tag");
    if (!tag) {
      return;
    }

    const raw = normalize(tag.textContent || "");
    card.classList.add("callout");
    card.classList.remove("callout--resumo", "callout--exemplo", "callout--prompt", "callout--atencao");

    if (raw.includes("resumo")) {
      card.classList.add("callout--resumo");
      return;
    }

    if (raw.includes("exemplo")) {
      card.classList.add("callout--exemplo");
      return;
    }

    if (raw.includes("prompt")) {
      card.classList.add("callout--prompt");
      return;
    }

    if (raw.includes("atencao") || raw.includes("atenção")) {
      card.classList.add("callout--atencao");
      return;
    }

    card.classList.add("callout--resumo");
  });
}

function wireVisualReliefSections() {
  const skipPages = new Set(["index", "sumario"]);
  if (skipPages.has(currentKey)) {
    return;
  }

  const main = document.querySelector("#main-content");
  if (!main || main.querySelector("[data-role='visual-relief']")) {
    return;
  }

  const sections = Array.from(main.querySelectorAll(":scope > section"));
  if (sections.length < 4) {
    return;
  }

  const visualMap = {
    introducao: { src: "assets/images/intro-concepts.svg", alt: "Visão ilustrada de conceitos introdutórios de IA" },
    modulo1: { src: "assets/images/fundamentals-map.svg", alt: "Mapa visual de fundamentos de IA" },
    modulo2: { src: "assets/images/admin-flow.svg", alt: "Fluxo administrativo assistido por IA" },
    modulo3: { src: "assets/images/areas-matrix.svg", alt: "Matriz de aplicação por área de negócio" },
    modulo4: { src: "assets/images/tools-stack.svg", alt: "Stack visual de ferramentas de IA" },
    modulo5: { src: "assets/images/ethics-map.svg", alt: "Mapa de ética e governança em IA" },
    modulo6: { src: "assets/images/case-metrics.svg", alt: "Painel visual de métricas de casos" },
    modulo7: { src: "assets/images/research-framework.svg", alt: "Framework visual de pesquisa aplicada" },
    modulo8: { src: "assets/images/enterprise-ai-architecture.svg", alt: "Arquitetura corporativa de IA" },
    exercicios: { src: "assets/images/exercises-roadmap.svg", alt: "Roteiro visual de exercícios" },
    "exercicios-avancados": { src: "assets/images/advanced-assessment.svg", alt: "Mapa de avaliação avançada" },
    checklist: { src: "assets/images/checklist-implementation-cycle.svg", alt: "Ciclo de implementação com checklist" },
    conclusao: { src: "assets/images/conclusion-strategy-compass.svg", alt: "Bússola estratégica de conclusão" },
    apendices: { src: "assets/images/maturity-model.svg", alt: "Modelo visual de maturidade em IA" }
  };

  const visual = visualMap[currentKey] || { src: "assets/images/overview.svg", alt: "Visão geral visual do conteúdo" };

  const relief = document.createElement("section");
  relief.dataset.role = "visual-relief";
  relief.className = "surface-card visual-relief p-5 sm:p-6 print-break-avoid";
  relief.innerHTML = `
    <div class="visual-relief__grid">
      <figure class="visual-relief__figure">
        <img src="${visual.src}" alt="${visual.alt}" loading="lazy" />
      </figure>
      <div class="visual-relief__content">
        <p class="kicker">Leitura visual rápida</p>
        <h3>Resumo gráfico para aliviar blocos textuais</h3>
        <div class="visual-relief__chips">
          <span>Contexto em 30s</span>
          <span>Pontos de decisão</span>
          <span>Aplicação imediata</span>
        </div>
      </div>
    </div>
  `;

  const anchorIndex = Math.min(2, sections.length - 1);
  const anchor = sections[anchorIndex];
  if (anchor) {
    anchor.insertAdjacentElement("afterend", relief);
  } else {
    main.appendChild(relief);
  }
}

function buildExecutiveReport(main, pageKey) {
  const pageMeta = COURSE_PAGES.find((page) => page.key === pageKey);
  const pageTitle = pageMeta?.title || "Módulo";
  const heading = (main.querySelector("h1")?.textContent || pageTitle).trim();

  const primaryParagraph = Array.from(main.querySelectorAll("p"))
    .map((item) => (item.textContent || "").trim())
    .find((text) => text.length > 90)
    || "Consolidar fundamentos com aplicação imediata, mantendo rigor de governança e medição de resultados.";

  const topTopics = Array.from(main.querySelectorAll("h2"))
    .map((item) => (item.textContent || "").trim())
    .filter((text) => text.length > 3)
    .slice(0, 4);

  const actionItems = Array.from(main.querySelectorAll("li"))
    .map((item) => (item.textContent || "").trim())
    .filter((text) => text.length > 18)
    .slice(0, 3);

  const kpiMap = {
    modulo1: "KPI sugerido: tempo médio para mapear um caso de uso com hipótese de ganho documentada.",
    modulo2: "KPI sugerido: redução do tempo de triagem/recrutamento e aumento da assertividade no perfil.",
    modulo3: "KPI sugerido: ganho de conversão por segmento e redução de churn em campanhas assistidas por IA.",
    modulo4: "KPI sugerido: horas administrativas economizadas por automações implementadas.",
    modulo5: "KPI sugerido: percentual de fluxos com checklist de compliance e revisão humana ativa.",
    modulo6: "KPI sugerido: ROI do piloto e tempo até evidência de valor operacional.",
    modulo7: "KPI sugerido: qualidade da defesa analítica (banca) e consistência metodológica do dossiê.",
    modulo8: "KPI sugerido: taxa de adoção da arquitetura e estabilidade dos processos escalados."
  };

  const riskMap = {
    modulo1: "Risco principal: avançar sem problema de negócio bem definido.",
    modulo2: "Risco principal: viés em decisões de RH por dados históricos sem curadoria.",
    modulo3: "Risco principal: superautomação sem contexto de marca e cliente.",
    modulo4: "Risco principal: stack fragmentada e sem critérios de integração.",
    modulo5: "Risco principal: não conformidade regulatória e baixa rastreabilidade.",
    modulo6: "Risco principal: piloto sem baseline e sem métrica de comparação.",
    modulo7: "Risco principal: sofisticação analítica sem aplicabilidade executiva.",
    modulo8: "Risco principal: escalar arquitetura sem governança operacional madura."
  };

  const mitigationMap = {
    modulo1: "Mitigação: formalizar hipótese, baseline e critério de sucesso antes de implementar.",
    modulo2: "Mitigação: incluir revisão humana e auditoria periódica de critérios de seleção.",
    modulo3: "Mitigação: testar em ciclos curtos com métricas de qualidade e validação de narrativa.",
    modulo4: "Mitigação: padronizar catálogo de ferramentas e matriz de decisão por cenário.",
    modulo5: "Mitigação: aplicar política de dados, papéis de aprovação e trilha de auditoria.",
    modulo6: "Mitigação: instituir baseline, experimento controlado e checkpoint quinzenal.",
    modulo7: "Mitigação: conectar achados técnicos com decisão de investimento e risco.",
    modulo8: "Mitigação: escalar por ondas com observabilidade, fallback e comitê de governança."
  };

  const date = new Date().toLocaleDateString("pt-BR");
  const objective = primaryParagraph;
  const topicsText = topTopics.length
    ? topTopics.map((topic) => `- ${topic}`).join("\n")
    : "- Consolidar fundamentos e aplicar no contexto administrativo.";
  const actionsText = actionItems.length
    ? actionItems.map((item) => `- ${item}`).join("\n")
    : "- Definir um piloto de alto impacto com meta clara para 30 dias.";

  return [
    `RELATORIO EXECUTIVO | ${pageTitle}`,
    `Data: ${date}`,
    `Tema: ${heading}`,
    "",
    "1) Objetivo executivo",
    objective,
    "",
    "2) Topicos-chave para comite",
    topicsText,
    "",
    "3) O que aplicar amanha",
    actionsText,
    "",
    "4) Medicao de valor",
    kpiMap[pageKey] || "KPI sugerido: ganho de produtividade, qualidade e previsibilidade operacional.",
    "",
    "5) Risco e mitigacao",
    riskMap[pageKey] || "Risco principal: baixa aderencia operacional na fase inicial.",
    mitigationMap[pageKey] || "Mitigação: governança leve, metas quinzenais e revisão humana contínua.",
    "",
    "6) Proximo passo recomendado",
    "Executar um piloto em processo prioritario e reportar resultado em ciclo de 2 semanas."
  ].join("\n");
}

function wireExecutiveReportGenerator() {
  if (!/^modulo[1-8]$/.test(currentKey)) {
    return;
  }

  const main = document.querySelector("#main-content");
  if (!main || main.querySelector("[data-role='executive-report-tool']")) {
    return;
  }

  const reportCard = document.createElement("section");
  reportCard.dataset.role = "executive-report-tool";
  reportCard.className = "surface-card executive-report p-5 sm:p-6 print-break-avoid";
  reportCard.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-semibold">Relatório executivo do módulo</h2>
        <p class="mt-1 text-sm text-slate-600">Gere um resumo pronto para reunião de diretoria com foco em decisão e execução.</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button type="button" data-role="exec-generate" class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/40 hover:text-primary">Gerar resumo executivo</button>
        <button type="button" data-role="exec-copy" class="rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:border-amber-400 hover:bg-amber-100" disabled>Copiar resumo</button>
      </div>
    </div>
    <pre class="mt-4 hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800" data-role="exec-output"></pre>
  `;

  const firstBlock = main.firstElementChild;
  if (firstBlock && firstBlock.nextSibling) {
    main.insertBefore(reportCard, firstBlock.nextSibling);
  } else {
    main.prepend(reportCard);
  }

  const generateBtn = reportCard.querySelector("[data-role='exec-generate']");
  const copyBtn = reportCard.querySelector("[data-role='exec-copy']");
  const output = reportCard.querySelector("[data-role='exec-output']");

  generateBtn?.addEventListener("click", () => {
    const report = buildExecutiveReport(main, currentKey);
    output.textContent = report;
    output.classList.remove("hidden");
    copyBtn.disabled = false;
    generateBtn.textContent = "Resumo atualizado";
  });

  copyBtn?.addEventListener("click", async () => {
    if (!output.textContent.trim()) {
      return;
    }

    const original = copyBtn.textContent;
    try {
      await copyToClipboard(output.textContent.trim());
      copyBtn.textContent = "Copiado";
      copyBtn.classList.add("bg-green-600", "text-white", "border-green-700");
    } catch (error) {
      copyBtn.textContent = "Falha ao copiar";
    }

    window.setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("bg-green-600", "text-white", "border-green-700");
    }, 1400);
  });
}

function extractAnswerKeyMap(text) {
  const map = new Map();
  const regex = /(\d+)\s*-\s*([ABCD])/g;
  let match = regex.exec(text);
  while (match) {
    map.set(Number(match[1]), match[2]);
    match = regex.exec(text);
  }
  return map;
}

function wireInteractiveExerciseFeedback() {
  const pageKey = document.body?.dataset?.page || "";
  if (!(pageKey === "exercicios" || pageKey === "exercicios-avancados")) {
    return;
  }

  const main = document.querySelector("#main-content");
  if (!main || main.querySelector("[data-role='interactive-study-mode']")) {
    return;
  }

  const answerKey = extractAnswerKeyMap(main.innerText || "");
  if (!answerKey.size) {
    return;
  }

  const modeCard = document.createElement("section");
  modeCard.dataset.role = "interactive-study-mode";
  modeCard.className = "surface-card p-5 sm:p-6 print-break-avoid";
  modeCard.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-semibold">Modo interativo de resolucao</h2>
        <p class="mt-1 text-sm text-slate-600">Clique em A, B, C ou D em cada questao objetiva para receber feedback imediato.</p>
      </div>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600" data-role="interactive-score">0 respondidas</span>
    </div>
  `;

  const firstBlock = main.firstElementChild;
  if (firstBlock && firstBlock.nextSibling) {
    main.insertBefore(modeCard, firstBlock.nextSibling);
  } else {
    main.prepend(modeCard);
  }

  const scoreTag = modeCard.querySelector("[data-role='interactive-score']");
  const responses = new Map();

  const updateScore = () => {
    const answered = responses.size;
    const correct = Array.from(responses.values()).filter((value) => value === true).length;
    scoreTag.textContent = `${answered} respondidas | ${correct} corretas`;
  };

  const objectiveArticles = Array.from(main.querySelectorAll("article.surface-card")).filter((article) => {
    const questionTitle = article.querySelector("p.text-sm.font-semibold");
    if (!questionTitle) {
      return false;
    }
    return /^\d+\./.test((questionTitle.textContent || "").trim());
  });

  objectiveArticles.forEach((article) => {
    if (article.dataset.feedbackReady === "true") {
      return;
    }

    const title = article.querySelector("p.text-sm.font-semibold");
    const numberMatch = (title?.textContent || "").trim().match(/^(\d+)\./);
    if (!numberMatch) {
      return;
    }

    const questionNumber = Number(numberMatch[1]);
    const correctAnswer = answerKey.get(questionNumber);
    if (!correctAnswer) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3";
    controls.innerHTML = `
      <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Resposta rapida</p>
      <div class="mt-2 flex flex-wrap gap-2" data-role="choice-buttons"></div>
      <p class="mt-2 text-sm text-slate-600" data-role="choice-feedback">Selecione uma alternativa para verificar.</p>
    `;

    const buttonRow = controls.querySelector("[data-role='choice-buttons']");
    const feedback = controls.querySelector("[data-role='choice-feedback']");
    const buttons = ["A", "B", "C", "D"].map((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition hover:border-primary/50 hover:text-primary";
      button.textContent = option;

      button.addEventListener("click", () => {
        buttons.forEach((item) => {
          item.className = "rounded-lg border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition hover:border-primary/50 hover:text-primary";
        });

        const isCorrect = option === correctAnswer;
        responses.set(questionNumber, isCorrect);
        updateScore();

        if (isCorrect) {
          button.className = "rounded-lg border border-green-700 bg-green-700 px-3 py-1 text-sm font-semibold text-white";
          feedback.textContent = "Correto. Boa resposta.";
          feedback.className = "mt-2 text-sm font-semibold text-green-700";
        } else {
          button.className = "rounded-lg border border-red-600 bg-red-600 px-3 py-1 text-sm font-semibold text-white";
          const correctBtn = buttons.find((item) => item.textContent === correctAnswer);
          if (correctBtn) {
            correctBtn.className = "rounded-lg border border-green-700 bg-green-700 px-3 py-1 text-sm font-semibold text-white";
          }
          feedback.textContent = `Incorreto. Resposta correta: ${correctAnswer}.`;
          feedback.className = "mt-2 text-sm font-semibold text-red-700";
        }
      });

      buttonRow.appendChild(button);
      return button;
    });

    const insertionTarget = Array.from(article.querySelectorAll("p")).find((paragraph, index) => {
      return index > 0 && /A\)/.test(paragraph.textContent || "");
    }) || article.lastElementChild;

    insertionTarget?.insertAdjacentElement("afterend", controls);
    article.dataset.feedbackReady = "true";
  });
}

async function initLayout() {
  await Promise.all([
    injectComponent("#header-slot", "components/header.html", FALLBACK_COMPONENTS.header),
    injectComponent("#sidebar-slot", "components/sidebar.html", FALLBACK_COMPONENTS.sidebar),
    injectComponent("#footer-slot", "components/footer.html", FALLBACK_COMPONENTS.footer)
  ]);

  markActiveNavigation();
  wirePrevNextButtons();
  wireMobileMenu();
  wireReadModeToggle();
  updateReadingProgress();
  markVisitedAndUpdateSummary();
  wireCopyPromptButtons();
  wireVisualReliefSections();
  buildInPageOutline();
  wireExecutiveReportGenerator();
  wireExpandableHeavySections();
  wireDidacticCallouts();
  wireInteractiveExerciseFeedback();

  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
}

document.addEventListener("DOMContentLoaded", initLayout);
