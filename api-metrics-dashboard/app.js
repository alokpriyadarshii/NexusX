const teal = "#4ba6a5";
const rose = "#cf9b99";
const gray = "#8d9497";

const icons = {
  apps: '<svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/></svg>',
  traffic: '<svg viewBox="0 0 24 24"><path d="M6 20V10h3v10zM11 20V4h3v16zM16 20v-7h3v7z"/></svg>',
  errors: '<svg viewBox="0 0 24 24"><path d="M12 3l2 4 4-1-1 4 4 2-4 2 1 4-4-1-2 4-2-4-4 1 1-4-4-2 4-2-1-4 4 1z"/></svg>',
  performance: '<svg viewBox="0 0 24 24"><path d="M13 2L6 13h5l-1 9 8-13h-5z"/></svg>',
  consumers: '<svg viewBox="0 0 24 24"><path d="M12 5a5 5 0 0 0-5 5v2H5l3 4v3h8v-3l3-4h-2v-2a5 5 0 0 0-5-5zM8 13h8"/></svg>',
  requestLogs: '<svg viewBox="0 0 24 24"><path d="M5 6h9v4H5zM5 14h14v4H5zM17 6h2v4h-2z"/></svg>',
  resources: '<svg viewBox="0 0 24 24"><path d="M8 3h8v3h3v5h-3v2h3v5h-3v3H8v-3H5v-5h3v-2H5V6h3z"/></svg>',
  uptime: '<svg viewBox="0 0 24 24"><path d="M4 12l4-5 4 10 4-7 4 2-4 7-4-2-4 3z"/></svg>',
  alerts: '<svg viewBox="0 0 24 24"><path d="M12 21a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zM5 17h14l-2-3v-4a5 5 0 1 0-10 0v4z"/></svg>',
  list: '<svg viewBox="0 0 24 24"><path d="M9 6h12M9 12h12M9 18h12M4 6h1M4 12h1M4 18h1"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M12 21a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zM5 17h14l-2-3v-4a5 5 0 1 0-10 0v4z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/></svg>',
  filter: '<svg viewBox="0 0 24 24"><path d="M4 5h16l-6 7v5l-4 2v-7z"/></svg>',
  export: '<svg viewBox="0 0 24 24"><path d="M14 3h5v5M13 10l6-6M5 7v14h14v-8"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v6h-6"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M5 19V5M5 19h14M8 16v-4M12 16V8M16 16v-7"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 12h2M18 12h2M12 4v2M12 18v2"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
};

const sections = [
  {
    title: "API metrics",
    icon: icons.traffic,
    items: [
      { id: "overview", label: "Overview" },
      { id: "traffic", label: "Traffic" },
      { id: "errors", label: "Errors" },
      { id: "performance", label: "Performance" },
      { id: "consumers", label: "Consumers" },
      { id: "endpoints", label: "Endpoints" },
      { id: "resources", label: "CPU & memory" }
    ]
  },
  {
    title: "API logs & traces",
    icon: icons.list,
    items: [
      { id: "requestLogs", label: "Request logs" },
      { id: "applicationLogs", label: "Application logs" },
      { id: "traces", label: "Traces" }
    ]
  },
  {
    title: "API monitoring",
    icon: icons.bell,
    items: [
      { id: "uptime", label: "Uptime" },
      { id: "alerts", label: "Alerts" }
    ]
  }
];

const innerItems = [
  { id: "overview", label: "Apps", icon: icons.apps },
  { id: "traffic", label: "Traffic", icon: icons.traffic },
  { id: "errors", label: "Errors", icon: icons.errors },
  { id: "performance", label: "Performance", icon: icons.performance },
  { id: "consumers", label: "Consumers", icon: icons.consumers },
  { id: "requestLogs", label: "Request logs", icon: icons.requestLogs },
  { id: "resources", label: "Resources", icon: icons.resources },
  { id: "uptime", label: "Uptime", icon: icons.uptime },
  { id: "alerts", label: "Alerts", icon: icons.alerts }
];

const apps = [
  {
    name: "Boundless Bookstore API",
    envs: ["prod", "staging", "qa", "dev"],
    requests: 12010,
    errorRate: 6.4,
    apdex: 0.893,
    consumers: 27,
    instances: 1
  },
  {
    name: "ChatterBox Chronicles Blog API",
    envs: ["prod", "preprod", "dev"],
    requests: 7257,
    errorRate: 3.5,
    apdex: 0.848,
    consumers: 18,
    instances: 1
  }
];

const endpoints = [
  { method: "GET", path: "/v1/books", requests: 3819, errors: 6.5, transfer: "360.2 MB", apdex: 0.858, slow: "1,083 / 3,815", p50: "170 ms", p75: "210 ms", p95: "270 ms" },
  { method: "GET", path: "/v1/books/{book_id}", requests: 2986, errors: 6.8, transfer: "13.8 MB", apdex: 0.944, slow: "326 / 2,986", p50: "130 ms", p75: "170 ms", p95: "230 ms" },
  { method: "GET", path: "/v1/orders", requests: 1612, errors: 0.0, transfer: "81.4 MB", apdex: 0.853, slow: "469 / 1,608", p50: "170 ms", p75: "210 ms", p95: "270 ms" },
  { method: "GET", path: "/v1/orders/{order_id}", requests: 1451, errors: 5.9, transfer: "4.2 MB", apdex: 0.948, slow: "147 / 1,452", p50: "130 ms", p75: "170 ms", p95: "230 ms" },
  { method: "GET", path: "/v1/orders/{order_id}/books", requests: 1258, errors: 7.9, transfer: "11.6 MB", apdex: 0.849, slow: "377 / 1,258", p50: "180 ms", p75: "210 ms", p95: "280 ms" },
  { method: "POST", path: "/v1/orders", requests: 687, errors: 15.3, transfer: "8.2 MB", apdex: 0.904, slow: "131 / 691", p50: "160 ms", p75: "190 ms", p95: "240 ms" },
  { method: "PUT", path: "/v1/books/{book_id}", requests: 53, errors: 17.0, transfer: "168.8 KB", apdex: 0.901, slow: "1 / 53", p50: "120 ms", p75: "150 ms", p95: "200 ms" },
  { method: "GET", path: "/v1/books/{book_id}/orders", requests: 47, errors: 14.9, transfer: "1.2 MB", apdex: 0.872, slow: "12 / 47", p50: "160 ms", p75: "210 ms", p95: "240 ms" },
  { method: "POST", path: "/v1/books", requests: 36, errors: 13.9, transfer: "222.4 KB", apdex: 0.944, slow: "4 / 36", p50: "120 ms", p75: "180 ms", p95: "230 ms" },
  { method: "DELETE", path: "/v1/orders/{order_id}", requests: 61, errors: 8.4, transfer: "98.1 KB", apdex: 0.929, slow: "5 / 61", p50: "100 ms", p75: "140 ms", p95: "240 ms" }
];

const errors = [
  { status: 422, text: "Unprocessable Content", method: "GET", path: "/v1/books", occurrences: 238, consumers: 18 },
  { status: 404, text: "Not Found", method: "GET", path: "/v1/books/{book_id}", occurrences: 200, consumers: 19 },
  { status: 404, text: "Not Found", method: "GET", path: "/v1/orders/{order_id}/books", occurrences: 100, consumers: 14 },
  { status: 404, text: "Not Found", method: "GET", path: "/v1/orders/{order_id}", occurrences: 85, consumers: 17 },
  { status: 422, text: "Unprocessable Content", method: "POST", path: "/v1/orders", occurrences: 53, consumers: 13 },
  { status: 400, text: "Bad Request", method: "POST", path: "/v1/orders", occurrences: 52, consumers: 12 },
  { status: 500, text: "Internal Server Error", method: "GET", path: "/v1/books", occurrences: 25, consumers: 6 },
  { status: 404, text: "Not Found", method: "GET", path: "/v1/books/{book_id}/orders", occurrences: 7, consumers: 2 },
  { status: 422, text: "Unprocessable Content", method: "PUT", path: "/v1/books/{book_id}", occurrences: 5, consumers: 3 }
];

const consumers = [
  ["Alok Priyadarshi", "External / alokpriyadarshi618@gmail.com", 24735, 12.2, "< 1 minute ago"],
  ["Aarav Sharma", "External / aarav.sharma@example.in", 20009, 0.0, "6 days ago"],
  ["Ishita Verma", "External / ishita.verma@example.in", 18747, 10.8, "< 1 minute ago"],
  ["Rohan Mehta", "External / rohan.mehta@example.in", 16805, 0.1, "< 1 minute ago"],
  ["Neha Iyer", "External / neha.iyer@example.in", 15283, 2.1, "9 days ago"],
  ["Karan Malhotra", "External / karan.malhotra@example.in", 10841, 0.8, "< 1 minute ago"],
  ["Ananya Rao", "Partner / ananya.rao@example.in", 10397, 8.7, "4 days ago"],
  ["Vikram Nair", "Partner / vikram.nair@example.in", 9951, 1.7, "2 hours ago"]
];

const requestLogs = [
  { time: "22:51:04", status: 200, method: "GET", request: "/api/v1/books/61721", env: "prod", consumer: "Alok Priyadarshi", down: "7.4 KB", up: "", duration: "135 ms" },
  { time: "22:51:00", status: 200, method: "GET", request: "/api/v1/books/28299", env: "prod", consumer: "Aarav Sharma", down: "5.2 KB", up: "", duration: "227 ms" },
  { time: "22:50:59", status: 200, method: "GET", request: "/api/v1/orders/47712/books?order=asc&sort_by=price", env: "prod", consumer: "Ishita Verma", down: "", up: "", duration: "307 ms" },
  { time: "22:50:55", status: 201, method: "POST", request: "/api/v1/orders", env: "prod", consumer: "Rohan Mehta", down: "18.7 KB", up: "3.9 KB", duration: "245 ms", logs: 1 },
  { time: "22:50:54", status: 200, method: "GET", request: "/api/v1/orders/85575", env: "prod", consumer: "Neha Iyer", down: "", up: "", duration: "220 ms" },
  { time: "22:50:53", status: 200, method: "GET", request: "/api/v1/books?category=Technology&page=1&price_max=50&price_min=20", env: "prod", consumer: "Karan Malhotra", down: "148.7 KB", up: "", duration: "203 ms" },
  { time: "22:50:53", status: 200, method: "GET", request: "/api/v1/books", env: "prod", consumer: "Ananya Rao", down: "112.3 KB", up: "", duration: "162 ms" },
  { time: "22:50:47", status: 200, method: "GET", request: "/api/v1/orders?order=desc", env: "prod", consumer: "Vikram Nair", down: "9.2 KB", up: "", duration: "68 ms" },
  { time: "22:50:47", status: 200, method: "GET", request: "/api/v1/books", env: "prod", consumer: "Aarav Sharma", down: "113.9 KB", up: "", duration: "214 ms" },
  { time: "22:50:46", status: 201, method: "POST", request: "/api/v1/orders", env: "prod", consumer: "Ishita Verma", down: "7.9 KB", up: "3.3 KB", duration: "199 ms", logs: 1 },
  { time: "22:50:45", status: 422, method: "GET", request: "/api/v1/books?in_stock=true&page=1&category=Technology&price_min=20", env: "prod", consumer: "Rohan Mehta", down: "", up: "", duration: "115 ms" }
];

const alerts = [
  { title: "High error rate", state: "Triggered", trigger: "Error rate > 5%", period: "15 minutes", check: "Every 5 minutes", group: "External", value: "8.63 %", last: "2 mins ago" },
  { title: "Slow checkout endpoint", state: "Healthy", trigger: "p95 > 350 ms", period: "10 minutes", check: "Every 5 minutes", group: "All consumers", value: "244 ms", last: "12 mins ago" },
  { title: "Missing heartbeats from staging", state: "Muted", trigger: "Heartbeat missing", period: "3 minutes", check: "Every minute", group: "staging", value: "Resolved", last: "1 hour ago" }
];

const totals = {
  requests: endpoints.reduce((sum, endpoint) => sum + endpoint.requests, 0),
  errors: errors.reduce((sum, error) => sum + error.occurrences, 0),
  clientErrors: errors.filter((error) => error.status < 500).reduce((sum, error) => sum + error.occurrences, 0),
  serverErrors: errors.filter((error) => error.status >= 500).reduce((sum, error) => sum + error.occurrences, 0),
  transferMB: endpoints.reduce((sum, endpoint) => sum + transferToMB(endpoint.transfer), 0),
  get errorRate() {
    return (this.errors / this.requests) * 100;
  },
  get rpm() {
    return this.requests / (24 * 60);
  }
};

const state = {
  view: "uptime",
  period: "24 hours",
  env: "All envs",
  query: "",
  groupConsumers: false,
  overlayTraffic: false,
  expandedEnvs: false,
  modalTab: "Details",
  currentModalData: null
};

const initialView = new URLSearchParams(window.location.search).get("view");
const validViews = new Set([
  ...innerItems.map((item) => item.id),
  ...sections.flatMap((group) => group.items.map((item) => item.id))
]);
if (validViews.has(initialView)) {
  state.view = initialView;
}

const copy = {
  overview: ["API metrics", "The overview brings every monitored API into one compact operational surface so teams can spot traffic, error rate, performance, and consumer changes without opening separate dashboards."],
  traffic: ["", "The Traffic dashboard provides insights into the overall traffic to your API as well as usage of each API endpoint."],
  errors: ["", "The Errors dashboard provides an overview of the error responses returned by your API."],
  performance: ["", "NexusX measures the time it takes your route handler functions to respond to API requests and makes slow endpoints easy to compare."],
  consumers: ["", "Consumers show who is using each API, how request volume changes over time, and which clients need attention."],
  endpoints: ["Requests", "The endpoint details are presented in a tabbed interface with focused request, error, latency, and data-transfer views."],
  resources: ["", "CPU and memory charts help correlate service resources with API traffic so capacity issues are visible before they become incidents."],
  requestLogs: ["", "The request logs show a chronological list of all requests made to your API and allow you to inspect request and response details."],
  applicationLogs: ["", "Application logs are emitted by your application during request handling and displayed in the request details in the request logs."],
  traces: ["", "Traces show where time is being spent. Whether it is a slow database query, an external API call, or custom operation, traces reveal bottlenecks."],
  uptime: ["", "NexusX automatically checks whether your applications are running and sending heartbeats every minute."],
  alerts: ["Create alerts", "Alerts notify you when important API metrics cross a configured threshold, removing the need to manually check dashboards."]
};

function init() {
  renderOuterNav();
  renderInnerNav();
  render();
  bindGlobalEvents();
}

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    const actionEl = event.target.closest("[data-action]");
    if (actionEl) {
      handleAction(actionEl.dataset.action, actionEl);
    }
    if (event.target.closest("[data-close-modal]")) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function renderOuterNav() {
  const nav = document.getElementById("outerNav");
  nav.innerHTML = sections.map((group, index) => `
    <section>
      ${index > 0 ? `<div class="doc-group-title"><span class="group-icon">${group.icon}</span><span>${group.title}</span></div>` : ""}
      ${group.items.map((item) => `<button class="doc-link" type="button" data-action="nav" data-view="${item.id}">${item.label}</button>`).join("")}
    </section>
  `).join("");
}

function renderInnerNav() {
  const nav = document.getElementById("innerNav");
  nav.innerHTML = innerItems.map((item) => `
    <button class="app-nav-button" type="button" data-action="nav" data-view="${item.id}">
      <span class="mini-icon">${item.icon}</span>
      <span>${item.label}</span>
    </button>
  `).join("");
}

function render() {
  updateActiveNav();
  renderCopy();
  renderCrumbs();
  renderToolbar();
  const view = document.getElementById("view");
  const map = {
    overview: renderOverview,
    traffic: renderTraffic,
    errors: renderErrors,
    performance: renderPerformance,
    consumers: renderConsumers,
    endpoints: renderEndpoints,
    resources: renderResources,
    requestLogs: renderRequestLogs,
    applicationLogs: renderApplicationLogs,
    traces: renderTraces,
    uptime: renderUptime,
    alerts: renderAlerts
  };
  view.innerHTML = map[state.view]();
  drawCharts();
}

function updateActiveNav() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function renderCopy() {
  const [heading, body] = copy[state.view] || copy.overview;
  document.getElementById("introCopy").innerHTML = heading ? `<h1>${heading}</h1>` : "";
  document.getElementById("detailCopy").innerHTML = body ? `<p>${body}</p>` : "";
}

function titleFor(id) {
  return sections.flatMap((group) => group.items).find((item) => item.id === id)?.label || "Overview";
}

function renderCrumbs() {
  const title = state.view === "overview" ? "Apps" : titleFor(state.view);
  const showApi = !["overview", "uptime", "alerts"].includes(state.view);
  document.getElementById("crumbs").innerHTML = `
    <span>${title}</span>
    ${showApi ? `<span class="crumb-sep">></span><span class="crumb-app">Boundless Bookstore API</span>` : ""}
    <span class="badge">Demo</span>
  `;
}

function renderToolbar() {
  const common = `
    <button class="select-button" type="button" data-action="period">${icons.clock}<span>${state.period}</span><span>v</span></button>
    ${!["overview", "uptime"].includes(state.view) ? `<button class="select-button" type="button" data-action="env">${icons.layers}<span>${state.env}</span><span>v</span></button>` : ""}
  `;
  let specific = "";
  if (state.view === "overview") {
    specific = `<button class="icon-button" type="button" data-action="refresh" aria-label="Refresh">${icons.refresh}</button><button class="primary-button" type="button" data-action="create-app">${icons.plus}<span>Create app</span></button>`;
  } else if (["traffic", "errors", "requestLogs"].includes(state.view)) {
    specific = `<button class="tool-button" type="button" data-action="filter">${icons.filter}<span>Filter</span></button><button class="tool-button" type="button" data-action="export">${icons.export}<span>Export</span></button><button class="icon-button teal" type="button" data-action="refresh" aria-label="Refresh">${icons.refresh}</button>`;
  } else if (state.view === "consumers") {
    specific = `<button class="tool-button" type="button" data-action="toggle-groups">${icons.eye}<span>${state.groupConsumers ? "Hide groups" : "Show groups"}</span></button><button class="icon-button teal" type="button" data-action="refresh" aria-label="Refresh">${icons.refresh}</button>`;
  } else if (state.view === "resources") {
    specific = `<button class="tool-button" type="button" data-action="overlay-traffic">${icons.eye}<span>${state.overlayTraffic ? "Hide traffic" : "Overlay traffic"}</span></button><button class="icon-button teal" type="button" data-action="refresh" aria-label="Refresh">${icons.refresh}</button>`;
  } else if (state.view === "alerts") {
    specific = `<button class="primary-button" type="button" data-action="create-alert">${icons.plus}<span>Create alert</span></button>`;
  } else {
    specific = `<button class="icon-button teal" type="button" data-action="refresh" aria-label="Refresh">${icons.refresh}</button>`;
  }
  document.getElementById("toolbar").innerHTML = common + specific;
}

function handleAction(action, el) {
  if (action === "nav") {
    state.view = el.dataset.view;
    state.query = "";
    render();
    return;
  }
  if (action === "period") {
    const values = ["24 hours", "7 days", "30 days"];
    state.period = values[(values.indexOf(state.period) + 1) % values.length];
    showNotice(`Period changed to ${state.period}`);
    render();
    return;
  }
  if (action === "env") {
    const values = ["All envs", "prod", "staging", "qa", "dev"];
    state.env = values[(values.indexOf(state.env) + 1) % values.length];
    showNotice(`Environment filter changed to ${state.env}`);
    render();
    return;
  }
  if (action === "refresh") {
    showNotice(`Refreshed ${titleFor(state.view).toLowerCase()} at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`);
    drawCharts(true);
    return;
  }
  if (action === "filter") return openFilterModal();
  if (action === "export") return exportCurrentView();
  if (action === "create-app") return openCreateAppModal();
  if (action === "edit-app") return openEditAppModal(el.dataset.app || "Boundless Bookstore API");
  if (action === "show-request-logs") {
    state.view = "requestLogs";
    render();
    showNotice("Showing request logs for selected API");
    return;
  }
  if (action === "open-endpoint") return openEndpointModal(endpoints[Number(el.dataset.index)] || endpoints[0]);
  if (action === "open-request") return openRequestModal(requestLogs[Number(el.dataset.index)] || requestLogs[0], el.dataset.tab);
  if (action === "open-alert") return openAlertModal(alerts[Number(el.dataset.index)] || alerts[0]);
  if (action === "toggle-groups") {
    state.groupConsumers = !state.groupConsumers;
    showNotice(state.groupConsumers ? "Consumer groups are visible" : "Consumer groups are hidden");
    render();
    return;
  }
  if (action === "overlay-traffic") {
    state.overlayTraffic = !state.overlayTraffic;
    showNotice(state.overlayTraffic ? "Traffic overlay enabled" : "Traffic overlay hidden");
    render();
    return;
  }
  if (action === "configure-health") return openHealthModal();
  if (action === "show-envs") {
    state.expandedEnvs = !state.expandedEnvs;
    render();
    showNotice(state.expandedEnvs ? "Showing all environments" : "Showing production summary");
    return;
  }
  if (action === "create-alert") return openAlertBuilder();
  if (action === "mute-alert") {
    showNotice("Alert muted for 2 hours");
    closeModal();
    return;
  }
  if (action === "edit-alert") return openAlertBuilder(state.currentModalData?.alert || alerts[0]);
  if (action === "modal-tab") {
    state.modalTab = el.dataset.tab;
    rerenderCurrentModal();
    return;
  }
  if (["whats-new", "contact", "settings", "profile"].includes(action)) return openUtilityModal(action);
  if (action === "more") return openMoreModal(el.dataset.label || "Selected item");
}

function showNotice(message) {
  const notice = document.getElementById("notice");
  notice.innerHTML = `<div class="notice-message">${escapeHtml(message)}</div>`;
  notice.classList.add("show");
  window.clearTimeout(showNotice.timer);
  showNotice.timer = window.setTimeout(() => notice.classList.remove("show"), 2200);
}

function renderOverview() {
  return `<div class="cards-list">${apps.map((app, index) => renderAppCard(app, index)).join("")}<div class="empty-watermark">|||</div></div>`;
}

function renderAppCard(app, index) {
  return `
    <article class="app-card">
      <div class="app-card-head">
        <div class="app-card-title">
          <span>${app.name}</span>
          <span class="crumb-sep">></span>
          <span class="chips"><span class="chip teal">All envs</span>${app.envs.map((env) => `<span class="chip">${env}</span>`).join("")}</span>
        </div>
        <div class="health-line"><span>${app.instances} instance</span><span>No active alerts</span></div>
      </div>
      <div class="metric-grid">
        ${metricTile("Requests", app.requests.toLocaleString(), "teal", 20 + index)}
        ${metricTile("Error rate", `${app.errorRate} %`, "rose", 40 + index)}
        ${metricTile("Apdex score", app.apdex.toFixed(3), "teal", 60 + index)}
        ${metricTile("Consumers", String(app.consumers), "gray", 80 + index)}
      </div>
      <div class="card-actions">
        <button class="text-button" type="button" data-action="show-request-logs">${icons.export}<span>Show request logs</span></button>
        <button class="text-button" type="button" data-action="edit-app" data-app="${escapeAttr(app.name)}">${icons.export}<span>Edit app</span></button>
        <button class="text-button" type="button" data-action="more" data-label="${escapeAttr(app.name)}"><span>More</span></button>
      </div>
    </article>
  `;
}

function metricTile(label, value, color, seed) {
  return `
    <div class="metric-tile">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value}</div>
      <svg class="spark" data-spark="${color}" data-seed="${seed}" viewBox="0 0 220 62" preserveAspectRatio="none"></svg>
    </div>
  `;
}

function renderTraffic() {
  return `
    ${renderRequestsChart("Number of requests")}
    ${renderEndpointTable("traffic")}
  `;
}

function renderErrors() {
  return `
    ${renderErrorsChart()}
    <article class="table-card">
      ${searchBox("Search errors")}
      <table class="data-table">
        <thead><tr><th style="width:34px"></th><th>Response status</th><th>Endpoint</th><th>Occurrences</th><th>Consumers</th><th style="width:38px"></th></tr></thead>
        <tbody>${errors.map((err, index) => `
          <tr>
            <td><button class="row-button" type="button" data-action="open-endpoint" data-index="${index}">></button></td>
            <td><span class="status s${err.status}">${err.status}</span> ${err.text}</td>
            <td>${method(err.method)} ${formatPath(err.path)}</td>
            <td class="bar-cell" style="--pct:${Math.min(90, err.occurrences / 2.5)}%">${err.occurrences}</td>
            <td>${err.consumers}</td>
            <td><button class="ellipsis-button" type="button" data-action="more" data-label="${err.status} ${err.path}">...</button></td>
          </tr>
        `).join("")}</tbody>
      </table>
    </article>
  `;
}

function renderPerformance() {
  return `
    <article class="chart-card">
      <div class="split-charts">
        <div class="split-chart">
          <div class="split-chart-head"><span>Apdex score</span><button class="ellipsis-button" type="button" data-action="more" data-label="Apdex chart">...</button></div>
          <div class="big-value">0.893 <span class="badge">healthy</span></div>
          <div class="chart-body"><svg class="chart-svg" data-line-chart="apdex" viewBox="0 0 520 180" preserveAspectRatio="none"></svg></div>
        </div>
        <div class="split-chart">
          <div class="split-chart-head"><span>Response time (p95)</span><button class="ellipsis-button" type="button" data-action="more" data-label="Response time chart">...</button></div>
          <div class="big-value">260 ms</div>
          <div class="chart-body"><svg class="chart-svg" data-area-stack="latency" viewBox="0 0 520 180" preserveAspectRatio="none"></svg></div>
        </div>
      </div>
    </article>
    ${renderEndpointTable("performance")}
  `;
}

function renderConsumers() {
  return `
    <article class="chart-card">
      <div class="summary-grid two">
        <div class="summary-item"><div class="metric-label">Total consumers</div><div class="metric-value">${apps[0].consumers}</div></div>
        <div class="summary-item"><div class="metric-label">New consumers</div><div class="metric-value">${consumers.length}</div></div>
      </div>
      <div class="chart-title">Number of unique consumers</div>
      <div class="chart-body"><svg class="chart-svg" data-bar-chart="consumers" viewBox="0 0 900 190" preserveAspectRatio="none"></svg></div>
    </article>
    <article class="table-card">
      ${searchBox("Search consumers")}
      <table class="data-table">
        <thead><tr><th>Consumer name</th><th>Request graph</th><th>Requests</th><th>Error rate</th><th>Last request</th><th style="width:38px"></th></tr></thead>
        <tbody>${consumers.map((row, index) => `
          <tr>
            <td><strong>${row[0]}</strong>${state.groupConsumers ? `<div class="muted">${row[1]}</div>` : ""}</td>
            <td><svg class="mini-chart" data-mini="${index}" viewBox="0 0 250 34" preserveAspectRatio="none"></svg></td>
            <td class="bar-cell" style="--pct:${Math.min(92, row[2] / 280)}%">${row[2].toLocaleString()}</td>
            <td>${row[3]} %</td>
            <td>${row[4]}</td>
            <td><button class="ellipsis-button" type="button" data-action="more" data-label="${row[0]}">...</button></td>
          </tr>
        `).join("")}</tbody>
      </table>
    </article>
  `;
}

function renderEndpoints() {
  return `
    ${renderRequestsChart("Endpoint request volume")}
    ${renderEndpointTable("traffic")}
  `;
}

function renderResources() {
  return `
    <div class="resource-stack">
      ${resourceChart("CPU utilization", "Current: 50% avg / 50% max", "cpu")}
      ${resourceChart("Memory usage", "Current: 473 MB avg / 473 MB max", "memory")}
      <div class="empty-watermark">|||</div>
    </div>
  `;
}

function resourceChart(title, meta, type) {
  return `
    <article class="resource-card">
      <div class="resource-title"><span>${title}</span><span class="resource-meta">${meta}</span></div>
      <span class="chip" style="margin-top:12px">prod</span>
      <div class="chart-body"><svg class="chart-svg" data-resource="${type}" viewBox="0 0 900 180" preserveAspectRatio="none"></svg></div>
    </article>
  `;
}

function renderRequestLogs() {
  return `
    <article class="table-card">
      <div class="log-chart"><svg class="chart-svg" data-log-bars viewBox="0 0 900 70" preserveAspectRatio="none"></svg></div>
      <table class="data-table">
        <thead><tr><th style="width:100px">Time</th><th style="width:90px">Status</th><th>Request</th><th style="width:38px"></th></tr></thead>
        <tbody>${requestLogs.map((log, index) => `
          <tr>
            <td>${log.time}<div class="muted">Today</div></td>
            <td><span class="status s${log.status}">${log.status}</span></td>
            <td>
              <button class="text-button" type="button" data-action="open-request" data-index="${index}" data-tab="Details">${method(log.method)} <strong>${escapeHtml(log.request)}</strong></button>
              <div class="log-meta"><span>${log.env}</span><span>${log.consumer}</span>${log.down ? `<span>${log.down}</span>` : ""}${log.up ? `<span>${log.up}</span>` : ""}<span>${log.duration}</span>${log.logs ? `<span class="danger-text">${log.logs}</span>` : ""}</div>
            </td>
            <td><button class="ellipsis-button" type="button" data-action="open-request" data-index="${index}" data-tab="${log.logs ? "Logs" : "Trace"}">...</button></td>
          </tr>
        `).join("")}</tbody>
      </table>
    </article>
  `;
}

function renderApplicationLogs() {
  const log = requestLogs.find((item) => item.logs) || requestLogs[3];
  return `
    <article class="table-card">
      ${searchBox("Search application logs")}
      <table class="data-table">
        <thead><tr><th style="width:150px">Time</th><th>Logger</th><th>Message</th><th style="width:120px">Request</th></tr></thead>
        <tbody>
          ${["Validating order payload and address details", "Verifying stock levels for 2 order items", "Low stock for book ID 102", "Calculated order totals including taxes and discounts", "Order created successfully and queued for fulfilment"].map((msg, index) => `
            <tr>
              <td>22:28:41.${145 + index * 18}</td>
              <td>boundless.${index === 1 || index === 2 ? "inventory" : "orders"}</td>
              <td>${index === 2 ? `<span class="danger-text">${msg}</span>` : msg}</td>
              <td><button class="text-button" type="button" data-action="open-request" data-index="3" data-tab="Logs">${log.status} ${log.method}</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </article>
  `;
}

function renderTraces() {
  return `
    <article class="table-card">
      ${searchBox("Search traces")}
      <table class="data-table">
        <thead><tr><th>Request</th><th>Root span</th><th>Database</th><th>Total</th><th style="width:38px"></th></tr></thead>
        <tbody>${requestLogs.slice(0, 8).map((log, index) => `
          <tr>
            <td>${method(log.method)} ${escapeHtml(log.request)}</td>
            <td>list_books</td>
            <td class="bar-cell" style="--pct:${30 + index * 6}%">${80 + index * 13} ms</td>
            <td>${log.duration}</td>
            <td><button class="ellipsis-button" type="button" data-action="open-request" data-index="${index}" data-tab="Trace">...</button></td>
          </tr>
        `).join("")}</tbody>
      </table>
    </article>
  `;
}

function renderUptime() {
  return `
    <div class="cards-list">
      ${apps.map((app, index) => `
        <article class="uptime-card">
          <div class="uptime-card-head">
            <div class="uptime-card-title">${app.name}</div>
            <div class="health-line"><span>100% healthy</span><span>100% uptime</span></div>
          </div>
          <div style="padding:10px 14px 0"><span class="chip">prod</span>${state.expandedEnvs ? `<span class="chip">staging</span><span class="chip">dev</span>` : ""}</div>
          <div class="heartbeat-row">${Array.from({ length: 96 }, (_, i) => `<span class="beat ${index === 1 && i > 56 && i < 60 ? "warn" : ""}"></span>`).join("")}</div>
          <div class="card-actions">
            <button class="text-button" type="button" data-action="configure-health">${icons.gear}<span>Configure health checks</span></button>
            <button class="text-button" type="button" data-action="show-envs">${icons.eye}<span>${state.expandedEnvs ? "Hide environments" : "Show all environments"}</span></button>
          </div>
        </article>
      `).join("")}
      <div class="empty-watermark">|||</div>
    </div>
  `;
}

function renderAlerts() {
  return `
    <div class="cards-list">
      ${alerts.map((alert, index) => `
        <article class="alert-card">
          <div class="alert-card-head">
            <div>
              <strong>${alert.title}</strong>
              <span class="status ${alert.state === "Triggered" ? "s422" : "s200"}">${alert.state}</span>
            </div>
            <button class="text-button" type="button" data-action="open-alert" data-index="${index}">Open details</button>
          </div>
          <div class="modal-summary three" style="padding:12px">
            <div class="summary-box"><span>Trigger</span><strong>${alert.trigger}</strong></div>
            <div class="summary-box"><span>Last checked</span><strong>${alert.last}</strong></div>
            <div class="summary-box"><span>Value</span><strong>${alert.value}</strong></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderRequestsChart(title) {
  return `
    <article class="chart-card">
      <div class="summary-grid">
        <div class="summary-item"><div class="metric-label">Total requests</div><div class="metric-value">${totals.requests.toLocaleString()}</div></div>
        <div class="summary-item"><div class="metric-label">Requests per minute</div><div class="metric-value">${totals.rpm.toFixed(2)}</div></div>
        <div class="summary-item"><div class="metric-label">Error rate</div><div class="metric-value">${totals.errorRate.toFixed(1)} %</div></div>
        <div class="summary-item"><div class="metric-label">Data transferred</div><div class="metric-value">${totals.transferMB.toFixed(1)} MB</div></div>
      </div>
      <div class="chart-title">${title}</div>
      <div class="chart-body"><svg class="chart-svg" data-bar-chart="requests" viewBox="0 0 900 190" preserveAspectRatio="none"></svg></div>
    </article>
  `;
}

function renderErrorsChart() {
  return `
    <article class="chart-card">
      <div class="summary-grid">
        <div class="summary-item"><div class="metric-label">Total errors</div><div class="metric-value">${totals.errors}</div></div>
        <div class="summary-item"><div class="metric-label">Client errors</div><div class="metric-value">${totals.clientErrors}</div></div>
        <div class="summary-item"><div class="metric-label">Server errors</div><div class="metric-value">${totals.serverErrors}</div></div>
        <div class="summary-item"><div class="metric-label">Error rate</div><div class="metric-value">${totals.errorRate.toFixed(1)} %</div></div>
      </div>
      <div class="chart-title">Number of client and server errors</div>
      <div class="chart-body"><svg class="chart-svg" data-bar-chart="errors" viewBox="0 0 900 190" preserveAspectRatio="none"></svg></div>
    </article>
  `;
}

function renderEndpointTable(mode) {
  const headings = mode === "performance"
    ? `<th>Endpoint</th><th>Apdex score</th><th>Slow requests</th><th>p50</th><th>p75</th><th>p95</th><th style="width:38px"></th>`
    : `<th>Endpoint</th><th>Requests</th><th>Error rate</th><th>Data transferred</th><th style="width:38px"></th>`;
  return `
    <article class="table-card">
      ${searchBox("Search endpoints")}
      <table class="data-table">
        <thead><tr><th style="width:34px"></th>${headings}</tr></thead>
        <tbody>${endpoints.map((ep, index) => `
          <tr>
            <td><button class="row-button" type="button" data-action="open-endpoint" data-index="${index}">></button></td>
            <td>${method(ep.method)} ${formatPath(ep.path)}</td>
            ${mode === "performance"
              ? `<td class="bar-cell" style="--pct:${ep.apdex * 90}%">${ep.apdex}</td><td>${ep.slow}</td><td>${ep.p50}</td><td>${ep.p75}</td><td>${ep.p95}</td>`
              : `<td class="bar-cell" style="--pct:${Math.min(92, ep.requests / 43)}%">${ep.requests.toLocaleString()}</td><td>${ep.errors.toFixed(1)} % ${ep.errors > 6 ? `<span class="danger-text">!</span>` : ""}</td><td>${ep.transfer}</td>`}
            <td><button class="ellipsis-button" type="button" data-action="more" data-label="${ep.path}">...</button></td>
          </tr>
        `).join("")}</tbody>
      </table>
    </article>
  `;
}

function searchBox(placeholder) {
  return `<div class="search-row">${icons.search}<input type="search" placeholder="${placeholder}" aria-label="${placeholder}"></div>`;
}

function method(value) {
  return `<span class="method ${value.toLowerCase()}">${value}</span>`;
}

function formatPath(path) {
  return escapeHtml(path).replace(/\{([^}]+)\}/g, '<span class="path-param">{$1}</span>');
}

function transferToMB(value) {
  const [, amount, unit] = value.match(/^([\d.]+)\s+(KB|MB)$/) || [];
  if (!amount) return 0;
  return unit === "KB" ? Number(amount) / 1024 : Number(amount);
}

function drawCharts() {
  document.querySelectorAll("[data-spark]").forEach((svg) => drawSpark(svg, svg.dataset.spark, Number(svg.dataset.seed)));
  document.querySelectorAll("[data-bar-chart]").forEach((svg) => drawBarChart(svg, svg.dataset.barChart));
  document.querySelectorAll("[data-mini]").forEach((svg) => drawSpark(svg, "teal", Number(svg.dataset.mini) + 100, true));
  document.querySelectorAll("[data-line-chart]").forEach((svg) => drawLineChart(svg, svg.dataset.lineChart));
  document.querySelectorAll("[data-area-stack]").forEach((svg) => drawStack(svg));
  document.querySelectorAll("[data-resource]").forEach((svg) => drawResource(svg, svg.dataset.resource));
  document.querySelectorAll("[data-log-bars]").forEach((svg) => drawLogBars(svg));
}

function series(seed, count, min = 10, max = 90) {
  let x = seed * 9301 + 49297;
  const out = [];
  for (let i = 0; i < count; i += 1) {
    x = (x * 233280 + 12345) % 2147483647;
    const wave = Math.sin((i + seed) / 3) * 0.22 + Math.cos((i + seed) / 5) * 0.18;
    const random = (x / 2147483647) * 0.32;
    out.push(min + (max - min) * Math.max(0, Math.min(1, 0.46 + wave + random)));
  }
  return out;
}

function drawSpark(svg, color = "teal", seed = 1, mini = false) {
  const values = series(seed, mini ? 28 : 24, 14, 56);
  const w = mini ? 250 : 220;
  const h = mini ? 34 : 62;
  const pts = values.map((v, i) => [i * (w / (values.length - 1)), h - v]);
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  svg.innerHTML = `<polygon class="spark-area ${color}-fill" points="${area}"></polygon><polyline class="spark-line ${color}-line" points="${line}"></polyline>`;
}

function drawBarChart(svg, type) {
  const values = type === "requests"
    ? [960, 720, 560, 620, 490, 530, 380, 340, 380, 310, 340, 315, 250, 285, 330, 340, 365, 470, 690, 640, 590, 605, 640, 680, 790]
    : type === "consumers"
      ? [25, 21, 25, 25, 24, 26, 29, 24, 25, 25, 26, 25, 25, 27, 23, 24, 24, 26, 28, 26, 28, 28, 24, 26, 28, 26, 28, 26, 25, 22, 27]
      : [48, 41, 32, 46, 37, 42, 23, 21, 14, 24, 21, 14, 12, 19, 31, 13, 28, 27, 37, 37, 45, 40, 40, 54, 52];
  const w = 900;
  const h = 180;
  const max = Math.max(...values) * 1.12;
  const gap = 8;
  const bw = (w - gap * (values.length - 1)) / values.length;
  const bars = values.map((v, i) => {
    const bh = (v / max) * (h - 20);
    const x = i * (bw + gap);
    const y = h - bh;
    const err = type === "requests" ? `<rect x="${x}" y="${y - 5}" width="${bw}" height="5" fill="${rose}" opacity="0.72" rx="2"></rect>` : "";
    const color = type === "errors" ? rose : type === "consumers" ? gray : teal;
    const overlay = type === "consumers" ? `<rect x="${x}" y="${h - Math.max(4, bh * 0.12)}" width="${bw}" height="${Math.max(4, bh * 0.12)}" fill="${teal}" opacity="0.85" rx="2"></rect>` : "";
    return `${err}<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="${color}" opacity="0.96" rx="2"></rect>${overlay}`;
  }).join("");
  svg.innerHTML = gridLines(w, h, 5) + bars + axisLabels(values.length, w, h, type);
}

function drawLineChart(svg) {
  const values = series(9, 24, 30, 70);
  const w = 520;
  const h = 180;
  const pts = values.map((v, i) => [i * (w / (values.length - 1)), h - v * 2.1]);
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  svg.innerHTML = gridLines(w, h, 4) + `<rect x="0" y="0" width="${w}" height="${h * 0.38}" fill="${teal}" opacity="0.16"></rect><rect x="0" y="${h * 0.62}" width="${w}" height="${h * 0.38}" fill="${rose}" opacity="0.14"></rect><polyline class="chart-line teal-line" points="${line}"></polyline>`;
}

function drawStack(svg) {
  const w = 520;
  const h = 180;
  const base = series(16, 24, 45, 80);
  const areas = [0.95, 0.74, 0.55].map((scale, layer) => {
    const pts = base.map((v, i) => [i * (w / (base.length - 1)), h - v * scale * 1.9]);
    const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    return `<polygon points="0,${h} ${line} ${w},${h}" fill="${teal}" opacity="${0.16 + layer * 0.16}"></polygon>`;
  }).join("");
  svg.innerHTML = gridLines(w, h, 4) + areas + `<line x1="0" y1="${h - 92}" x2="${w}" y2="${h - 92}" stroke="${rose}" stroke-dasharray="4 5"></line><text x="8" y="${h - 96}" fill="${rose}" font-size="11">Threshold</text>`;
}

function drawResource(svg, type) {
  const values = series(type === "cpu" ? 28 : 38, 150, type === "cpu" ? 22 : 34, type === "cpu" ? 62 : 72);
  const w = 900;
  const h = 180;
  const pts = values.map((v, i) => [i * (w / (values.length - 1)), h - v * 2.1]);
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const traffic = state.overlayTraffic ? `<polygon points="0,${h} ${series(88, 150, 20, 65).map((v, i) => `${(i * (w / 149)).toFixed(1)},${(h - v * 1.5).toFixed(1)}`).join(" ")} ${w},${h}" fill="${rose}" opacity="0.12"></polygon>` : "";
  svg.innerHTML = gridLines(w, h, 6) + traffic + `<polygon class="chart-area teal-fill" points="0,${h} ${line} ${w},${h}"></polygon><polyline class="chart-line teal-line" points="${line}"></polyline>`;
}

function drawLogBars(svg) {
  const values = series(57, 72, 10, 60);
  const w = 900;
  const h = 70;
  const bw = w / values.length - 3;
  svg.innerHTML = values.map((v, i) => `<rect x="${i * (bw + 3)}" y="${h - v}" width="${bw}" height="${v}" fill="#dfe3e6" opacity="0.72" rx="2"></rect>`).join("");
}

function gridLines(w, h, count) {
  return Array.from({ length: count }, (_, i) => {
    const y = (h / (count - 1)) * i;
    return `<line x1="0" x2="${w}" y1="${y}" y2="${y}" stroke="#eef0f1" stroke-width="1"></line>`;
  }).join("");
}

function axisLabels(count, w, h, type) {
  const labels = type === "consumers"
    ? ["8 Nov", "10 Nov", "12 Nov", "14 Nov", "16 Nov", "18 Nov", "20 Nov", "22 Nov", "24 Nov", "26 Nov", "28 Nov", "30 Nov", "2 Dec", "4 Dec", "6 Dec", "8 Dec"]
    : ["22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return labels.map((label, i) => `<text x="${(i / (labels.length - 1)) * w}" y="${h + 10}" fill="#b7bdc1" font-size="10" text-anchor="middle">${label}</text>`).join("");
}

function openEndpointModal(endpoint) {
  state.currentModalData = { type: "endpoint", endpoint };
  state.modalTab = "Requests";
  renderEndpointModal(endpoint);
}

function renderEndpointModal(endpoint) {
  const tabs = ["Info", "Requests", "Errors", "Response times", "Data transferred"];
  openModal(`
    <div class="modal-header">
      <div class="modal-kicker">Endpoint details > Boundless Bookstore API</div>
      <h2 class="modal-title" id="modalTitle">${method(endpoint.method)} ${formatPath(endpoint.path)}</h2>
    </div>
    ${tabsMarkup(tabs)}
    <div class="modal-body">
      ${state.modalTab === "Info" ? endpointInfo(endpoint) : ""}
      ${state.modalTab === "Requests" ? endpointRequests(endpoint) : ""}
      ${state.modalTab === "Errors" ? endpointErrors(endpoint) : ""}
      ${state.modalTab === "Response times" ? endpointLatency(endpoint) : ""}
      ${state.modalTab === "Data transferred" ? endpointTransfer(endpoint) : ""}
    </div>
  `, "large");
}

function endpointInfo(endpoint) {
  return `<div class="modal-summary three"><div class="summary-box"><span>Method</span><strong>${endpoint.method}</strong></div><div class="summary-box"><span>Route</span><strong>${escapeHtml(endpoint.path)}</strong></div><div class="summary-box"><span>Environment</span><strong>prod</strong></div></div>`;
}

function endpointRequests(endpoint) {
  return `
    <span class="subtle-tag">Period = ${state.period}</span>
    <div class="modal-section-title">Summary</div>
    <div class="modal-summary">
      <div class="summary-box"><span>Total requests</span><strong># ${endpoint.requests.toLocaleString()}</strong></div>
      <div class="summary-box"><span>Requests per minute</span><strong>0.48</strong></div>
      <div class="summary-box"><span>Successful requests</span><strong>${Math.round(endpoint.requests * (1 - endpoint.errors / 100)).toLocaleString()}</strong></div>
      <div class="summary-box"><span>Client errors</span><strong>${Math.round(endpoint.requests * endpoint.errors / 100)}</strong></div>
      <div class="summary-box"><span>Server errors</span><strong>${endpoint.errors > 10 ? 3 : 0}</strong></div>
    </div>
    <div class="modal-section-title">Requests over time</div>
    <div class="chart-body tall"><svg class="chart-svg" data-bar-chart="requests" viewBox="0 0 900 190" preserveAspectRatio="none"></svg></div>
    <div class="modal-section-title">Requests per consumer</div>
    ${consumerBars()}
  `;
}

function endpointErrors(endpoint) {
  return `<div class="modal-section-title">Recent errors for ${formatPath(endpoint.path)}</div>${tableSmall(errors.slice(0, 5).map((e) => [e.status, e.text, e.occurrences, e.consumers]))}`;
}

function endpointLatency(endpoint) {
  return `<div class="modal-summary three"><div class="summary-box"><span>p50</span><strong>${endpoint.p50}</strong></div><div class="summary-box"><span>p75</span><strong>${endpoint.p75}</strong></div><div class="summary-box"><span>p95</span><strong>${endpoint.p95}</strong></div></div><div class="chart-body tall"><svg class="chart-svg" data-area-stack="latency" viewBox="0 0 520 180" preserveAspectRatio="none"></svg></div>`;
}

function endpointTransfer(endpoint) {
  return `<div class="modal-summary three"><div class="summary-box"><span>Total data</span><strong>${endpoint.transfer}</strong></div><div class="summary-box"><span>Avg response</span><strong>42 KB</strong></div><div class="summary-box"><span>Largest response</span><strong>812 KB</strong></div></div>${consumerBars()}`;
}

function consumerBars() {
  return `<div class="horizontal-bars">${consumers.slice(0, 5).map((c, index) => `<div class="hbar-row"><span>${c[0]}</span><div class="hbar-track"><div class="hbar-fill" style="width:${68 - index * 8}%"></div></div><span>${68 - index * 8}</span></div>`).join("")}</div>`;
}

function openRequestModal(log, tab) {
  state.currentModalData = { type: "request", log };
  state.modalTab = tab || "Details";
  renderRequestModal(log);
}

function renderRequestModal(log) {
  const tabs = log.logs ? ["Details", "Headers", "Request body", "Logs", "Trace", "Related"] : ["Details", "Headers", "Response body", "Trace", "Related"];
  openModal(`
    <div class="modal-header">
      <div class="modal-kicker">Request details > Boundless Bookstore API > ${log.env}</div>
      <h2 class="modal-title" id="modalTitle"><span class="status s${log.status}">${log.status}</span> ${method(log.method)} ${escapeHtml(log.request)}</h2>
    </div>
    ${tabsMarkup(tabs)}
    <div class="modal-body">${requestTabContent(log)}</div>
  `, "large");
}

function requestTabContent(log) {
  if (state.modalTab === "Logs") {
    return `<span class="subtle-tag">31 January 2026 at 22:28:41 GMT+10</span> <span class="subtle-tag">Trace ID = 891238accdd2d7aa0f71b0e3029eb275</span><div class="modal-section-title">Captured application logs</div>${tableSmall([
      ["22:28:41.145", "boundless.orders", "Validating order payload and address details"],
      ["22:28:41.163", "boundless.inventory", "Verifying stock levels for 2 order items"],
      ["22:28:41.181", "boundless.inventory", "Low stock for book ID 102"],
      ["22:28:41.199", "boundless.orders", "Calculated order totals including taxes and discounts"],
      ["22:28:41.217", "boundless.orders", "Order created successfully and queued for fulfilment"]
    ])}`;
  }
  if (state.modalTab === "Trace") {
    return `<span class="subtle-tag">31 January 2026 at 22:29:32 GMT+10</span> <span class="subtle-tag">Trace ID = 2a7c4b251851fb0a54c86defb39da9a7</span><div class="trace-panel"><div class="trace-lane"><span class="span light" style="left:5%;width:10%">GET 30 ms</span><span class="span" style="left:22%;width:50%">SELECT 151 ms</span></div><div class="trace-lane"><span class="span" style="left:2%;width:94%">list_books 296 ms</span></div></div><div class="modal-section-title">Span attributes</div><table class="attribute-table"><tr><td>db.name</td><td>bookstore</td></tr><tr><td>db.statement</td><td>SELECT * FROM books WHERE category = $1 AND price >= $2 AND price <= $3 LIMIT $4 OFFSET $5</td></tr><tr><td>db.system</td><td>postgresql</td></tr><tr><td>server.address</td><td>postgres.internal</td></tr></table>`;
  }
  if (state.modalTab === "Headers") return tableSmall([["content-type", "application/json"], ["x-request-id", "req_9mx23"], ["authorization", "Bearer ****"]]);
  if (state.modalTab === "Request body" || state.modalTab === "Response body") return `<pre class="trace-panel">${escapeHtml(JSON.stringify({ book_id: 102, quantity: 2, priority: "standard" }, null, 2))}</pre>`;
  if (state.modalTab === "Related") return `<div class="modal-section-title">Related signals</div>${tableSmall([["Consumer", log.consumer], ["Endpoint", log.request], ["Environment", log.env], ["Duration", log.duration]])}`;
  return `<div class="modal-summary three"><div class="summary-box"><span>Status</span><strong>${log.status}</strong></div><div class="summary-box"><span>Duration</span><strong>${log.duration}</strong></div><div class="summary-box"><span>Consumer</span><strong>${log.consumer}</strong></div></div>${tableSmall([["Method", log.method], ["Request", log.request], ["Environment", log.env], ["Downloaded", log.down || "0 KB"], ["Uploaded", log.up || "0 KB"]])}`;
}

function openAlertModal(alert) {
  state.currentModalData = { type: "alert", alert };
  state.modalTab = "Details";
  renderAlertModal(alert);
}

function renderAlertModal(alert) {
  openModal(`
    <div class="modal-header">
      <div class="modal-kicker">Alert details > Boundless Bookstore API > prod</div>
      <h2 class="modal-title" id="modalTitle">${alert.title} <span class="status s422">${alert.state}</span></h2>
    </div>
    ${tabsMarkup(["Details", "History"])}
    <div class="modal-body">
      <div class="chips"><span class="subtle-tag">Trigger = ${alert.trigger}</span><span class="subtle-tag">Period = ${alert.period}</span><span class="subtle-tag">Check = ${alert.check}</span><span class="subtle-tag">Consumer group = ${alert.group}</span></div>
      <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:10px"><button class="text-button" type="button" data-action="mute-alert">Mute</button><button class="text-button" type="button" data-action="edit-alert">Edit</button></div>
      ${state.modalTab === "History" ? tableSmall([["22:50", "Triggered", "8.63 %"], ["22:45", "Triggered", "7.92 %"], ["22:40", "Healthy", "3.20 %"]]) : `
        <div class="modal-section-title">Description</div>
        <div class="summary-box"><span>The error rate for requests from external consumers has been higher than 5% over the last hour.</span></div>
        <div class="modal-section-title">Summary</div>
        <div class="modal-summary three"><div class="summary-box"><span>Last triggered</span><strong>${alert.last}</strong></div><div class="summary-box"><span>Last checked</span><strong>${alert.last}</strong></div><div class="summary-box"><span>Value at last check</span><strong>${alert.value}</strong></div></div>
        <div class="modal-section-title">Timeline</div><div class="chart-body tall"><svg class="chart-svg" data-line-chart="alert" viewBox="0 0 520 180" preserveAspectRatio="none"></svg></div>
        <div class="modal-section-title">Most recent errors</div>${tableSmall(errors.slice(0, 4).map((e) => [e.status, e.method, e.path, e.occurrences]))}
      `}
    </div>
  `, "large");
}

function openFilterModal() {
  openModal(`
    <div class="modal-header"><h2 class="modal-title" id="modalTitle">Filter ${titleFor(state.view)}</h2></div>
    <div class="modal-body form-grid">
      <div class="field"><label>Status</label><select><option>All status codes</option><option>Only errors</option><option>2xx successful</option></select></div>
      <div class="field"><label>Endpoint</label><input value="/api/v1/books"></div>
      <div class="field"><label>Consumer group</label><select><option>All consumers</option><option>External</option><option>Partner</option></select></div>
    </div>
    <div class="modal-actions"><button class="ghost-button" data-close-modal>Cancel</button><button class="primary-button" data-close-modal data-action="refresh">Apply filters</button></div>
  `, "small");
}

function openCreateAppModal() {
  openModal(`
    <div class="modal-header"><h2 class="modal-title" id="modalTitle">Create app</h2></div>
    <div class="modal-body form-grid">
      <div class="field"><label>App name</label><input value="Inventory Sync API"></div>
      <div class="field"><label>Framework</label><select><option>NexusX</option><option>FastAPI</option><option>Django REST Framework</option></select></div>
      <div class="field"><label>Environment</label><select><option>prod</option><option>staging</option><option>dev</option></select></div>
    </div>
    <div class="modal-actions"><button class="ghost-button" data-close-modal>Cancel</button><button class="primary-button" data-close-modal data-action="refresh">Create app</button></div>
  `, "small");
}

function openEditAppModal(name) {
  openModal(`
    <div class="modal-header"><h2 class="modal-title" id="modalTitle">Edit app</h2></div>
    <div class="modal-body form-grid">
      <div class="field"><label>Display name</label><input value="${escapeAttr(name)}"></div>
      <div class="field"><label>Alert recipient</label><input value="alokpriyadarshi618@gmail.com"></div>
      <div class="field"><label>Notes</label><textarea>Primary bookstore API monitored through Flask middleware.</textarea></div>
    </div>
    <div class="modal-actions"><button class="ghost-button" data-close-modal>Cancel</button><button class="primary-button" data-close-modal data-action="refresh">Save changes</button></div>
  `, "small");
}

function openHealthModal() {
  openModal(`
    <div class="modal-header"><h2 class="modal-title" id="modalTitle">Configure health checks</h2></div>
    <div class="modal-body form-grid">
      <div class="field"><label>Heartbeat interval</label><select><option>Every minute</option><option>Every 5 minutes</option></select></div>
      <div class="field"><label>Missing heartbeat threshold</label><select><option>3 minutes</option><option>5 minutes</option><option>10 minutes</option></select></div>
      <div class="field"><label>Alert channel</label><input value="#api-monitoring"></div>
    </div>
    <div class="modal-actions"><button class="ghost-button" data-close-modal>Cancel</button><button class="primary-button" data-close-modal data-action="refresh">Save health check</button></div>
  `, "small");
}

function openAlertBuilder(alert = null) {
  openModal(`
    <div class="modal-header"><h2 class="modal-title" id="modalTitle">${alert ? "Edit alert" : "Create alert"}</h2></div>
    <div class="modal-body form-grid">
      <div class="field"><label>Name</label><input value="${escapeAttr(alert?.title || "High p95 latency")}"></div>
      <div class="field"><label>Metric</label><select><option>Error rate</option><option>p95 latency</option><option>Heartbeat</option></select></div>
      <div class="field"><label>Threshold</label><input value="${alert?.trigger || "p95 > 350 ms"}"></div>
      <div class="field"><label>Notify</label><input value="alokpriyadarshi618@gmail.com"></div>
    </div>
    <div class="modal-actions"><button class="ghost-button" data-close-modal>Cancel</button><button class="primary-button" data-close-modal data-action="refresh">Save alert</button></div>
  `, "small");
}

function openUtilityModal(action) {
  const content = {
    "whats-new": ["What's new", "Request trace annotations, alert muting, and CSV exports are available in this demo workspace."],
    contact: ["Get in touch", "Send API monitoring questions to alokpriyadarshi618@gmail.com."],
    settings: ["Settings", "Default app: Boundless Bookstore API. Default environment: prod. Default period: 24 hours."],
    profile: ["Profile", "Alok Priyadarshi, alokpriyadarshi618. Role: API platform owner."]
  }[action];
  openModal(`<div class="modal-header"><h2 class="modal-title" id="modalTitle">${content[0]}</h2></div><div class="modal-body"><p>${content[1]}</p></div>`, "small");
}

function openMoreModal(label) {
  openModal(`<div class="modal-header"><h2 class="modal-title" id="modalTitle">${escapeHtml(label)}</h2></div><div class="modal-body"><button class="text-button" type="button" data-action="show-request-logs">${icons.requestLogs}<span>Open request logs</span></button><br><br><button class="text-button" type="button" data-action="create-alert">${icons.alerts}<span>Create alert from this item</span></button></div>`, "small");
}

function tabsMarkup(tabs) {
  if (!tabs.includes(state.modalTab)) state.modalTab = tabs[0];
  return `<div class="modal-tabs">${tabs.map((tab) => `<button class="tab-button ${state.modalTab === tab ? "active" : ""}" type="button" data-action="modal-tab" data-tab="${tab}">${tab}</button>`).join("")}</div>`;
}

function rerenderCurrentModal() {
  if (!state.currentModalData) return;
  if (state.currentModalData.type === "endpoint") renderEndpointModal(state.currentModalData.endpoint);
  if (state.currentModalData.type === "request") renderRequestModal(state.currentModalData.log);
  if (state.currentModalData.type === "alert") renderAlertModal(state.currentModalData.alert);
}

function openModal(html, size = "") {
  const layer = document.getElementById("modalLayer");
  const modal = layer.querySelector(".modal");
  modal.className = `modal ${size}`;
  document.getElementById("modalContent").innerHTML = html;
  layer.classList.add("open");
  layer.setAttribute("aria-hidden", "false");
  drawCharts();
}

function closeModal() {
  const layer = document.getElementById("modalLayer");
  layer.classList.remove("open");
  layer.setAttribute("aria-hidden", "true");
}

function tableSmall(rows) {
  return `<table class="data-table"><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${typeof cell === "number" ? cell : escapeHtml(String(cell))}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function exportCurrentView() {
  const rows = state.view === "errors" ? errors.map((e) => `${e.status},${e.method},${e.path},${e.occurrences}`).join("\n")
    : state.view === "requestLogs" ? requestLogs.map((r) => `${r.time},${r.status},${r.method},${r.request},${r.duration}`).join("\n")
      : endpoints.map((e) => `${e.method},${e.path},${e.requests},${e.errors}`).join("\n");
  openModal(`
    <div class="modal-header"><h2 class="modal-title" id="modalTitle">Export ${titleFor(state.view)} CSV</h2></div>
    <div class="modal-body">
      <pre class="trace-panel">${escapeHtml(rows)}</pre>
    </div>
    <div class="modal-actions"><button class="primary-button" data-close-modal>Done</button></div>
  `, "small");
  showNotice(`Exported ${titleFor(state.view).toLowerCase()} CSV`);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

init();
