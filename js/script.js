/* ═══════════════════════════════════════════════════════
   Pizzeria Piemonte — Cardápio Virtual
   Vanilla JS — sem dependências externas
═══════════════════════════════════════════════════════ */

const WA_NUMBER = "5511986193275";

/* ─── DADOS ─────────────────────────────────────────────── */
const SALGADAS = [
  { name:"Abobrinha",           desc:"Mussarela, abobrinha e parmesão",                                         grande:"R$52,00", broto:"R$39,00" },
  { name:"Alcachofra",          desc:"Mussarela, alcachofra e bacon",                                            grande:"R$59,00", broto:"R$44,00" },
  { name:"Aliche",              desc:"Aliche e parmesão",                                                        grande:"R$54,00", broto:"R$38,00" },
  { name:"Alho",                desc:"Mussarela e alho frito",                                                   grande:"R$54,00", broto:"R$36,00" },
  { name:"Americana",           desc:"Presunto, ovos, catupiry e bacon",                                         grande:"R$59,00", broto:"R$37,00" },
  { name:"Atum",                desc:"Atum sólido e cebola",                                                     grande:"R$58,00", broto:"R$37,00" },
  { name:"Bacon",               desc:"Mussarela e bacon fatiado",                                                grande:"R$54,00", broto:"R$36,00" },
  { name:"Baiana",              desc:"Calabresa moída, cebola, ovos e pimenta calabresa",                       grande:"R$53,00", broto:"R$34,00" },
  { name:"Bauru",               desc:"Presunto, tomate e mussarela",                                             grande:"R$54,00", broto:"R$34,00" },
  { name:"Berinjela",           desc:"Mussarela, berinjela, tomate e parmesão",                                  grande:"R$55,00", broto:"R$34,00" },
  { name:"Brócolis",            desc:"Mussarela, brócolis, bacon e alho frito",                                  grande:"R$56,00", broto:"R$36,00" },
  { name:"Caipira",             desc:"Frango, milho e catupiry",                                                 grande:"R$56,00", broto:"R$39,00" },
  { name:"Calabresa",           desc:"Calabresa fatiada e cebola",                                               grande:"R$49,00", broto:"R$34,00" },
  { name:"Calábria",            desc:"Calabresa moída, ovos, pimentão, mussarela e pimenta calabresa",          grande:"R$57,00", broto:"R$39,00" },
  { name:"Camarão",             desc:"Camarão, tomate e mussarela",                                              grande:"R$75,00", broto:"R$54,00" },
  { name:"Carijó",              desc:"Frango, catupiry, milho e bacon",                                          grande:"R$61,00", broto:"R$40,00" },
  { name:"Casal 20",            desc:"Mussarela coberta com mussarela",                                          grande:"R$53,00", broto:"R$37,00" },
  { name:"Carne Seca",          desc:"Carne seca, tomate, cebola e mussarela",                                   grande:"R$65,00", broto:"R$44,00" },
  { name:"Catubresa",           desc:"Calabresa fatiada e catupiry",                                             grande:"R$55,00", broto:"R$41,00" },
  { name:"Costela",             desc:"Costela, mussarela, cebola roxa, catupiry e alho frito",                  grande:"R$65,00", broto:"R$43,00" },
  { name:"Cremosa",             desc:"Peito de peru fatiado, catupiry e mussarela",                              grande:"R$61,00", broto:"R$44,00" },
  { name:"Crocante",            desc:"Frango, catupiry e batata palha",                                          grande:"R$55,00", broto:"R$42,00" },
  { name:"Do Pizzaiolo",        desc:"Calabresa moída, palmito, bacon, milho, tomate e mussarela",              grande:"R$53,00", broto:"R$36,00" },
  { name:"Dois Queijos",        desc:"Catupiry e mussarela",                                                     grande:"R$54,00", broto:"R$36,00" },
  { name:"Escarola",            desc:"Escarola, mussarela, bacon e alho frito",                                  grande:"R$56,00", broto:"R$38,00" },
  { name:"Francesa",            desc:"Presunto, ovos, catupiry e mussarela",                                     grande:"R$56,00", broto:"R$41,00" },
  { name:"Frango c/ Catupiry",  desc:"Frango com catupiry",                                                      grande:"R$53,00", broto:"R$38,00" },
  { name:"Gratinada",           desc:"Catupiry, provolone e parmesão",                                           grande:"R$55,00", broto:"R$39,00" },
  { name:"Grega",               desc:"Palmito, presunto, milho, tomate e mussarela",                             grande:"R$56,00", broto:"R$41,00" },
  { name:"Lombo",               desc:"Lombo, cebola e catupiry",                                                 grande:"R$56,00", broto:"R$42,00" },
  { name:"Marguerita",          desc:"Mussarela, tomate e manjericão",                                           grande:"R$56,00", broto:"R$41,00" },
  { name:"Mil Graus",           desc:"Calabresa fatiada, catupiry e mussarela",                                  grande:"R$59,00", broto:"R$42,00" },
  { name:"Milho",               desc:"Mussarela e milho verde",                                                  grande:"R$53,00", broto:"R$39,00" },
  { name:"Mussarela",           desc:"Molho e mussarela",                                                        grande:"R$49,00", broto:"R$36,00" },
  { name:"Mussarela c/ Tomate", desc:"Mussarela com tomate fatiado",                                             grande:"R$55,00", broto:"R$39,00" },
  { name:"Napolitana",          desc:"Mussarela, tomate e parmesão",                                             grande:"R$56,00", broto:"R$39,00" },
  { name:"Palmito",             desc:"Palmito fatiado e mussarela",                                              grande:"R$55,00", broto:"R$39,00" },
  { name:"Parma",               desc:"Mussarela, tomate e presunto parma",                                       grande:"R$72,00", broto:"R$44,00" },
  { name:"Pepperoni",           desc:"Pepperoni fatiado, cebola e mussarela",                                    grande:"R$61,00", broto:"R$41,00" },
  { name:"Peruana",             desc:"Atum sólido, cebola e mussarela",                                          grande:"R$63,00", broto:"R$44,00" },
  { name:"Portuguesa",          desc:"Presunto, ovos, cebola e mussarela",                                       grande:"R$55,00", broto:"R$39,00" },
  { name:"Quatro Queijos",      desc:"Catupiry, mussarela, provolone e parmesão",                                grande:"R$58,00", broto:"R$42,00" },
  { name:"Romanesca",           desc:"Presunto, bacon, champignon e catupiry",                                   grande:"R$61,00", broto:"R$42,00" },
  { name:"Siciliana",           desc:"Mussarela, champignon e bacon",                                            grande:"R$56,00", broto:"R$39,00" },
  { name:"Torinese",            desc:"Lombo, tomate, catupiry, champignon, mussarela e alho frito",             grande:"R$61,00", broto:"R$44,00" },
  { name:"Três Queijos",        desc:"Mussarela, catupiry e provolone",                                          grande:"R$54,00", broto:"R$42,00" },
  { name:"Vegetariana",         desc:"Brócolis, tomate, palmito, escarola e milho",                              grande:"R$61,00", broto:"R$44,00" },
];

const DOCES = [
  { name:"Banana",          desc:"Banana com chocolate",       grande:"R$61,00", broto:"R$41,00" },
  { name:"Brigadeiro",      desc:"Chocolate e granulado",      grande:"R$58,00", broto:"R$38,00" },
  { name:"Chocolate",       desc:"Chocolate ao leite",         grande:"R$56,00", broto:"R$41,00" },
  { name:"Dois Amores",     desc:"Chocolate branco e preto",   grande:"R$58,00", broto:"R$41,00" },
  { name:"M&M's",           desc:"Chocolate e m&m's",          grande:"R$65,00", broto:"R$44,00" },
  { name:"Morango",         desc:"Chocolate e morango",        grande:"R$63,00", broto:"R$42,00" },
  { name:"Prestígio",       desc:"Chocolate e coco ralado",    grande:"R$56,00", broto:"R$38,00" },
  { name:"Romeu e Julieta", desc:"Goiabada e catupiry",        grande:"R$56,00", broto:"R$38,00" },
];

const BORDAS_TRAD = [
  { name:"Mussarela", price:"R$12,00" },
  { name:"2 Queijos",  price:"R$15,00" },
  { name:"Cheddar",    price:"R$8,00"  },
  { name:"Catupiry",   price:"R$8,00"  },
  { name:"Chocolate",  price:"R$12,00" },
];

const BORDAS_VULCAO = [
  { name:"2 Queijos", price:"R$18,00" },
  { name:"Cheddar",   price:"R$18,00" },
  { name:"Catupiry",  price:"R$18,00" },
  { name:"Chocolate", price:"R$18,00" },
];

const SABORES1 = [
  "Abobrinha","Alho","Atum","Bacon","Bauru","Palmito","Portuguesa",
  "Romanesca","Siciliana","Três Queijos","Americana","Calábria","Peruana",
  "Brócolis","Cremosa","Berinjela","Caipira","Catubresa","Calabresa",
  "Toscana","Frango c/ Catupiry","Mussarela","Francesa","Escarola",
  "Do Pizzaiolo","Pepperoni","Carijó","Quatro Queijos","Marguerita",
  "Lombo","Milho","Napolitana","Gratinada","Grega","Dois Queijos",
  "Baiana","Alcachofra","Aliche","Vegetariana","Crocante","Mil Graus",
];

const SABORES2 = ["Camarão","Carne Seca","Costela","Torinese","Parma","M&M's","Morango"];

const BEBIDAS = [
  { name:"Coca-Cola", price:"R$18,00" },
  { name:"Antártica", price:"R$16,00" },
  { name:"Fanta",     price:"R$16,00" },
  { name:"Dolly",     price:"R$12,00" },
];

/* ─── CARRINHO ──────────────────────────────────────────── */
let cart = []; // [{ id, name, size, price, priceNum, qty }]

function parsePrice(p) {
  return parseFloat(p.replace("R$","").replace(",",".").trim());
}

function formatPrice(n) {
  return "R$" + n.toFixed(2).replace(".",",");
}

function addToCart(name, size, price) {
  const id = name + "__" + size;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, size, price, priceNum: parsePrice(price), qty: 1 });
  }
  updateCartUI();
  updateCartFab();
}

function incrementCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) { item.qty++; updateCartUI(); updateCartFab(); }
}

function decrementCart(id) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (item.qty <= 1) {
    cart = cart.filter(i => i.id !== id);
  } else {
    item.qty--;
  }
  updateCartUI();
  updateCartFab();
}

function clearCart() {
  cart = [];
  updateCartUI();
  updateCartFab();
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.priceNum * i.qty, 0);
}

function cartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function buildWaMessage() {
  let msg = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
  cart.forEach(i => {
    const sz = i.size ? ` (${i.size})` : "";
    msg += `🍕 ${i.name}${sz}`;
    if (i.qty > 1) msg += ` x${i.qty}`;
    msg += ` — ${i.price}\n`;
  });
  msg += `\n*Total: ${formatPrice(cartTotal())}*\n\nAguardo confirmação! 😊`;
  return msg;
}

/* ─── ATUALIZAR UI DO CARRINHO ──────────────────────────── */
function updateCartFab() {
  const fab = document.getElementById("cart-fab");
  const lblEl = document.getElementById("cart-fab-label");
  const totEl = document.getElementById("cart-fab-total");
  const count = cartCount();
  if (count === 0) {
    fab.classList.add("hidden");
  } else {
    fab.classList.remove("hidden");
    lblEl.textContent = count + (count === 1 ? " item" : " itens");
    totEl.textContent = formatPrice(cartTotal());
  }
}

function updateCartUI() {
  const itemsEl   = document.getElementById("cart-items");
  const footerEl  = document.getElementById("cart-footer");
  const emptyEl   = document.getElementById("cart-empty");
  const countEl   = document.getElementById("cart-count");
  const totalEl   = document.getElementById("cart-total");
  const clearBtn  = document.getElementById("btn-clear");
  const waBtn     = document.getElementById("btn-wa");
  const count     = cartCount();

  countEl.textContent = count + (count === 1 ? " item" : " itens");

  if (cart.length === 0) {
    footerEl.classList.add("hidden");
    clearBtn.classList.add("hidden");
    itemsEl.innerHTML = "";
    itemsEl.appendChild(emptyEl);
    emptyEl.classList.remove("hidden");
    return;
  }

  emptyEl.classList.add("hidden");
  footerEl.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
  totalEl.textContent = formatPrice(cartTotal());
  waBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaMessage())}`;

  itemsEl.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.dataset.id = item.id;
    const sizeHtml = item.size ? `<div class="cart-item-size">${item.size}</div>` : "";
    div.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${esc(item.name)}</div>
        ${sizeHtml}
        <div class="cart-item-price">${esc(item.price)}</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn minus" onclick="decrementCart('${esc(item.id)}')">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn plus" onclick="incrementCart('${esc(item.id)}')">+</button>
      </div>`;
    itemsEl.appendChild(div);
  });
}

function esc(str) {
  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/"/g,"&quot;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;");
}

/* ─── ABRIR / FECHAR CARRINHO ───────────────────────────── */
function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-backdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  updateCartUI();
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-backdrop").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ─── RENDER CARDS ──────────────────────────────────────── */
function pizzaCardHTML(pizza, idx) {
  const gId = `g_${idx}`;
  const bId = `b_${idx}`;
  return `
  <div class="pizza-card fade-in" style="animation-delay:${idx * 30}ms">
    <div class="pizza-name">${esc(pizza.name)}</div>
    <div class="pizza-desc">${esc(pizza.desc)}</div>
    <div class="price-row">
      <button class="price-btn" id="${gId}"
        onclick="handlePizzaAdd('${esc(pizza.name)}','Grande','${pizza.grande}','${gId}','added-g')">
        <span class="price-label">Grande</span>
        <span class="price-value">${pizza.grande}</span>
        <span class="price-action">+ Adicionar</span>
      </button>
      <button class="price-btn" id="${bId}"
        onclick="handlePizzaAdd('${esc(pizza.name)}','Broto','${pizza.broto}','${bId}','added-b')">
        <span class="price-label">Broto</span>
        <span class="price-value broto">${pizza.broto}</span>
        <span class="price-action">+ Adicionar</span>
      </button>
    </div>
  </div>`;
}

function handlePizzaAdd(name, size, price, btnId, cls) {
  addToCart(name, size, price);
  const btn = document.getElementById(btnId);
  if (!btn) return;
  const actionEl = btn.querySelector(".price-action");
  btn.classList.add(cls);
  if (actionEl) actionEl.textContent = "✓ Adicionado";
  setTimeout(() => {
    btn.classList.remove(cls);
    if (actionEl) actionEl.textContent = "+ Adicionar";
  }, 1200);
}

function bebidaCardHTML(bebida, idx) {
  const btnId = `beb_${idx}`;
  return `
  <div class="bebida-card fade-in" style="animation-delay:${idx * 40}ms">
    <div class="bebida-name">${esc(bebida.name)}</div>
    <div class="bebida-price">${bebida.price}</div>
    <button class="btn-add-bebida" id="${btnId}"
      onclick="handleBebidaAdd('${esc(bebida.name)}','${bebida.price}','${btnId}')">
      + Adicionar
    </button>
  </div>`;
}

function handleBebidaAdd(name, price, btnId) {
  addToCart(name, "", price);
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.textContent = "✓ Adicionado";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = "+ Adicionar";
    btn.classList.remove("added");
  }, 1200);
}

/* ─── TABS ──────────────────────────────────────────────── */
let activeTab = "salgadas";
let searchVal = "";

function setTab(tabId) {
  activeTab = tabId;
  searchVal = "";
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  renderContent();
}

function renderContent() {
  const el = document.getElementById("tab-content");
  switch (activeTab) {
    case "salgadas": el.innerHTML = renderSalgadas(); break;
    case "doces":    el.innerHTML = renderDoces();    break;
    case "trem":     el.innerHTML = renderTrem();     break;
    case "bebidas":  el.innerHTML = renderBebidas();  break;
  }
  attachSearch();
}

function renderPizzaGrid(list) {
  if (list.length === 0) return `<div class="no-results">Nenhum sabor encontrado.</div>`;
  return `<div class="pizza-grid">${list.map((p,i) => pizzaCardHTML(p,i)).join("")}</div>`;
}

function renderSalgadas() {
  const filtered = SALGADAS.filter(p =>
    p.name.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal)
  );
  return `
    <div class="search-wrap">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input type="search" class="search-input" id="search-input"
        placeholder="Buscar sabor..." value="${esc(searchVal)}"
        oninput="onSearch(this.value)" />
    </div>
    <p class="note">Todas acompanham: molho de tomate, orégano e azeitonas · Massa média</p>
    ${renderPizzaGrid(filtered)}`;
}

function renderDoces() {
  const filtered = DOCES.filter(p =>
    p.name.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal)
  );
  return `
    <div class="search-wrap">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input type="search" class="search-input" id="search-input"
        placeholder="Buscar sabor..." value="${esc(searchVal)}"
        oninput="onSearch(this.value)" />
    </div>
    ${renderPizzaGrid(filtered)}
    <div class="divider" style="margin:2rem 0"></div>
    <div class="bordas-grid">
      <div>
        <div class="borda-title">Borda Tradicional</div>
        ${BORDAS_TRAD.map(b => `
          <div class="borda-item">
            <span>${esc(b.name)}</span>
            <span>${b.price}</span>
          </div>`).join("")}
      </div>
      <div>
        <div class="borda-title">Borda Vulcão</div>
        ${BORDAS_VULCAO.map(b => `
          <div class="borda-item">
            <span>${esc(b.name)}</span>
            <span>${b.price}</span>
          </div>`).join("")}
      </div>
    </div>`;
}

function renderTrem() {
  const s1 = SABORES1.map(s => `<li>${esc(s)}</li>`).join("");
  const s2 = SABORES2.map(s => `<li>${esc(s)}</li>`).join("");
  return `
    <div style="text-align:center;margin-bottom:1rem">
      <div class="trem-badge">
        <span>🚂</span>
        <span>70cm de PIZZA!</span>
      </div>
      <p style="font-size:.82rem;color:var(--muted)">Escolha de 2 até 4 sabores</p>
      <p style="font-size:.72rem;color:var(--muted3);margin-top:.25rem">
        O valor final prevalecerá pelo sabor escolhido · Não aceitamos pagamentos em cédulas
      </p>
    </div>
    <div class="trem-grid">
      <div class="trem-card">
        <div class="trem-card-title">Sabores 1</div>
        <div class="trem-card-sub">Escolha de 2 até 4 sabores</div>
        <div class="trem-prices">
          <div class="trem-price-box">
            <div class="label">No PIX</div>
            <div class="val">R$130,00</div>
          </div>
          <div class="trem-price-box">
            <div class="label">Cartão</div>
            <div class="val cartao">R$150,00</div>
            <div class="hint">débito ou crédito</div>
          </div>
        </div>
        <ul class="sabores-list">${s1}</ul>
      </div>
      <div class="trem-card">
        <div class="trem-card-title">Sabores 2</div>
        <div class="trem-card-sub">Escolha de 2 até 4 sabores</div>
        <div class="trem-prices">
          <div class="trem-price-box">
            <div class="label">No PIX</div>
            <div class="val">R$150,00</div>
          </div>
          <div class="trem-price-box">
            <div class="label">Cartão</div>
            <div class="val cartao">R$170,00</div>
            <div class="hint">débito ou crédito</div>
          </div>
        </div>
        <ul class="sabores-list">${s2}</ul>
      </div>
    </div>
    <div class="trem-notice">
      <strong>Atenção:</strong> O valor final prevalecerá pelo sabor escolhido.
      Não aceitamos pagamentos em cédulas!
    </div>`;
}

function renderBebidas() {
  return `<div class="pizza-grid">${BEBIDAS.map((b,i) => bebidaCardHTML(b,i)).join("")}</div>`;
}

/* ─── BUSCA ─────────────────────────────────────────────── */
function onSearch(val) {
  searchVal = val.toLowerCase();
  renderContent();
  const inp = document.getElementById("search-input");
  if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
}

function attachSearch() {
  const inp = document.getElementById("search-input");
  if (inp) inp.addEventListener("input", () => onSearch(inp.value));
}

/* ─── INICIALIZAÇÃO ─────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  });
  renderContent();
  updateCartFab();
});
