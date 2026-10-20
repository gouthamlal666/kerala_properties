/* =========================================================
   Kerala Properties — Directory inner page
   Runs after script.js and reuses its helpers and data:
   $, $$, img, showToast, captchaOk, captchaReset, ICONS,
   DISTRICTS, BUILDERS, BUILDER_COLORS, PREMIUM_ADS, VILLA_PHOTOS, APARTMENTS.
   ========================================================= */

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const withHttp = url => (/^https?:\/\//i.test(url) ? url : `https://${url}`);
const DIR_DISTRICTS = [...DISTRICTS].sort((a, b) => a.localeCompare(b));
const fillSelect = (sel, items) => sel.insertAdjacentHTML('beforeend', items.map(v => `<option value="${esc(v)}">${esc(v)}</option>`).join(''));

/* ---------------- Directory data (replace with backend data) ---------------- */
// Categories for search, browsing and the free listing form.
// Placeholder list — replace with the final category list.
const DIR_CATEGORIES = ['Real Estate', 'Contractors', 'Builders & Developers', 'Architects', 'Interior Designers', 'Building Materials'];

const PHOTO_POOL = [...APARTMENTS.map(a => a.img), ...VILLA_PHOTOS];
const photosFor = i => [0, 1, 2, 3].map(k => PHOTO_POOL[(i * 4 + k) % PHOTO_POOL.length]);

const DIRECTORY = [
  {
    name: 'BAVASONS HOMES', short: 'BH', color: '#149fd8',
    address: ['Room No. 125, Elite Building', 'Mannath Lane, Thrissur'],
    district: 'Thrissur',
    phone: '+91 97810 32115',
    email: 'info@bavasons.com',
    website: 'www.bavsons.com',
    categories: ['Real Estate', 'Contractors'],
    gallery: ['1545324418-cc1a3fa10c00', '1460317442991-0ec209397118', '1515263487990-61b07816b324', '1493809842364-78817add7ffb']
  },
  // Featured builders from the homepage — contact details to be added
  ...BUILDERS.map((b, i) => ({
    name: b.name, short: b.short, color: BUILDER_COLORS[i % BUILDER_COLORS.length],
    district: b.district,
    categories: /propert|estate|homes/i.test(b.name) ? ['Builders & Developers', 'Real Estate'] : ['Builders & Developers'],
    gallery: photosFor(i + 1)
  }))
].map(c => ({ ...c, id: slug(c.name) }));

const DIR_ICONS = {
  building: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6M9 10h.01M15 10h.01"/></svg>',
  pin: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  map: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m9 4-6 3v13l6-3 6 3 6-3V4l-6 3-6-3Z"/><path d="M9 4v13M15 7v13"/></svg>',
  phone: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  mail: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  globe: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  tag: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  share: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  link: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  edit: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  check: '<svg fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"/></svg>'
};
const CATEGORY_ICONS = {
  'Real Estate': '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-5h4v5"/></svg>',
  'Contractors': '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M2 18h20M4 18v-3a8 8 0 0 1 16 0v3"/><path d="M12 7V4M9 7.5 8 5M15 7.5 16 5"/></svg>',
  'Builders & Developers': '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 21h18M6 21V8l6-4 6 4v13"/><path d="M10 12h4M10 16h4"/></svg>',
  'Architects': '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="m12 3 8 18H4z"/><path d="M8.5 13h7"/></svg>',
  'Interior Designers': '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 11h18v5H3zM5 16v3M19 16v3"/></svg>',
  'Building Materials': '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 7h8v5H3zM13 7h8v5h-8zM8 12h8v5H8z"/></svg>'
};

/* ---------------- State ---------------- */
const state = { q: '', district: '', category: '', letter: '', selectedId: '' };

const baseMatches = () => DIRECTORY.filter(c =>
  (!state.q || c.name.toLowerCase().includes(state.q)) &&
  (!state.district || c.district === state.district) &&
  (!state.category || c.categories.includes(state.category)));
const results = () => baseMatches()
  .filter(c => !state.letter || c.name.toUpperCase().startsWith(state.letter))
  .sort((a, b) => a.name.localeCompare(b.name));

/* ---------------- Gallery: 4 photos with small gaps ---------------- */
function renderGallery(company) {
  $('#dirGallery').innerHTML = company.gallery.map((id, i) => `
    <figure class="dir-shot" style="--i:${i}">
      <img src="${img(id, 900)}" alt="${esc(company.name)} — photo ${i + 1}" loading="${i < 2 ? 'eager' : 'lazy'}" />
      <button class="fav-btn" aria-label="Save photo">${ICONS.heart}</button>
    </figure>`).join('');
}

/* ---------------- Company profile ---------------- */
function renderProfile(c) {
  const box = $('#dirResults');
  if (!c) {
    box.innerHTML = `
      <div class="dir-empty">
        <span class="dir-empty-icon">${DIR_ICONS.building}</span>
        <h3 class="font-display text-xl">No companies found</h3>
        <p class="mt-1 text-mist-500">Try another district or category — or add your company free using the form.</p>
        <a href="#listingForm" class="dir-btn dir-btn--primary mt-4">${DIR_ICONS.edit}Add your company</a>
      </div>`;
    return;
  }
  const tel = c.phone ? c.phone.replace(/\s/g, '') : '';
  const pageUrl = `${location.origin}${location.pathname}?company=${c.id}`;
  const fullAddress = c.address ? `${c.address.join(', ')}, ${c.district}, Kerala` : '';
  const rows = [
    [DIR_ICONS.building, 'Company Name', esc(c.name)],
    c.address && [DIR_ICONS.pin, 'Address', c.address.map(esc).join('<br/>')],
    [DIR_ICONS.map, 'District', esc(c.district)],
    c.phone && [DIR_ICONS.phone, 'Phone', `<a href="tel:${tel}">${esc(c.phone)}</a>`],
    c.email && [DIR_ICONS.mail, 'Email', `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`],
    c.website && [DIR_ICONS.globe, 'Website', `<a href="${esc(withHttp(c.website))}" target="_blank" rel="noopener">${esc(c.website)}</a>`]
  ].filter(Boolean);
  const hasContact = c.phone || c.email || c.website;

  box.innerHTML = `
    <article class="dir-profile">
      <header class="dir-profile-head">
        <span class="dir-logo" style="background:${c.color}">${esc(c.short)}</span>
        <div class="min-w-0 flex-1">
          <p class="dir-kicker">Company</p>
          <h2 class="font-display text-2xl md:text-[1.7rem] leading-tight">${esc(c.name)}</h2>
          <p class="text-sm text-mist-500 mt-1">${esc(c.district)} District</p>
        </div>
        <div class="dir-share">
          <a class="dir-icon-btn" href="https://wa.me/?text=${encodeURIComponent(`${c.name} — Kerala Properties Directory ${pageUrl}`)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp" title="Share on WhatsApp">${DIR_ICONS.share}</a>
          <button class="dir-icon-btn" type="button" data-copy="${esc(pageUrl)}" aria-label="Copy link" title="Copy link">${DIR_ICONS.link}</button>
        </div>
      </header>
      <dl class="dir-rows">
        ${rows.map(([ic, label, val]) => `<div class="dir-row"><dt>${ic}${label}</dt><dd>${val}</dd></div>`).join('')}
        <div class="dir-row dir-row--tags"><dt>${DIR_ICONS.tag}Category</dt><dd>${c.categories.map(t => `<button type="button" class="dir-tag" data-cat="${esc(t)}">${esc(t)}</button>`).join('')}</dd></div>
      </dl>
      ${hasContact ? `
      <div class="dir-actions">
        ${c.phone ? `<a href="tel:${tel}" class="dir-btn dir-btn--primary">${DIR_ICONS.phone}Call Now</a>` : ''}
        ${c.email ? `<a href="mailto:${esc(c.email)}" class="dir-btn">${DIR_ICONS.mail}Send Email</a>` : ''}
        ${c.website ? `<a href="${esc(withHttp(c.website))}" target="_blank" rel="noopener" class="dir-btn">${DIR_ICONS.globe}Visit Website</a>` : ''}
      </div>` : `
      <div class="dir-claim">
        <span>${DIR_ICONS.edit}</span>
        <p><strong>Is this your company?</strong> Contact details haven't been added yet — add them free using the listing form.</p>
        <a href="#listingForm" class="dir-btn">Update details</a>
      </div>`}
      ${fullAddress ? `
      <div class="dir-map">
        <iframe title="Map — ${esc(c.name)}" src="https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a class="dir-map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}" target="_blank" rel="noopener">${DIR_ICONS.pin}Open in Google Maps</a>
      </div>` : ''}
    </article>`;
}

/* ---------------- Company list + A–Z ---------------- */
function renderList(list) {
  const label = state.district ? `in ${state.district}` : 'across Kerala';
  $('#dirListTitle').textContent = `Companies ${label}`;
  $('#dirCount').textContent = `${list.length} ${list.length === 1 ? 'company' : 'companies'}`;
  $('#dirList').innerHTML = list.length ? list.map((c, i) => `
    <a href="?company=${c.id}" class="dir-card${c.id === state.selectedId ? ' is-current' : ''}" data-id="${c.id}" style="--i:${i}">
      <span class="dir-card-logo" style="background:${c.color}">${esc(c.short)}</span>
      <span class="min-w-0">
        <span class="block font-display text-[1.02rem] leading-snug">${esc(c.name)}</span>
        <span class="block text-xs text-mist-500 mt-1">${esc(c.district)} · ${esc(c.categories[0])}</span>
      </span>
      <span class="dir-card-go" aria-hidden="true">→</span>
    </a>`).join('')
    : `<p class="dir-none">No companies match these filters.</p>`;

  // A–Z: letters with no matches are disabled
  const have = new Set(baseMatches().map(c => c.name[0].toUpperCase()));
  $('#dirAZ').innerHTML = `<button type="button" data-letter="" class="${state.letter ? '' : 'is-on'}">All</button>` +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(L =>
      `<button type="button" data-letter="${L}" class="${state.letter === L ? 'is-on' : ''}" ${have.has(L) ? '' : 'disabled'}>${L}</button>`).join('');
}

/* ---------------- Browse by district / category ---------------- */
function renderBrowse() {
  $('#dirDistricts').innerHTML = DIR_DISTRICTS.map(d => {
    const n = DIRECTORY.filter(c => c.district === d).length;
    return `<button type="button" class="dir-chip${state.district === d ? ' is-on' : ''}" data-district="${esc(d)}">
      <span>${esc(d)}</span><b>${n}</b></button>`;
  }).join('');
  $('#dirCats').innerHTML = DIR_CATEGORIES.map(cat => {
    const n = DIRECTORY.filter(c => c.categories.includes(cat)).length;
    return `<button type="button" class="dir-cat${state.category === cat ? ' is-on' : ''}" data-cat="${esc(cat)}">
      <span class="dir-cat-icon">${CATEGORY_ICONS[cat] || DIR_ICONS.tag}</span>
      <span class="font-semibold">${esc(cat)}</span>
      <span class="text-xs text-mist-500">${n} ${n === 1 ? 'company' : 'companies'}</span>
    </button>`;
  }).join('');
}

/* ---------------- Render everything from state ---------------- */
function render({ keepSelected = true } = {}) {
  const list = results();
  if (!keepSelected || !list.some(c => c.id === state.selectedId)) state.selectedId = list[0] ? list[0].id : '';
  const current = DIRECTORY.find(c => c.id === state.selectedId);

  $('#dirDistrictTitle').textContent = state.district ? `${state.district} District` : 'All Districts';
  $('#dirCrumbDistrict').textContent = state.district || 'Kerala';
  renderProfile(current);
  if (current) renderGallery(current);
  renderList(list);
  renderBrowse();

  // keep the search form in sync with the state
  const f = $('#dirSearch');
  f.company.value = state.q; f.district.value = state.district; f.category.value = state.category;
  return list;
}

function selectCompany(id, scroll = true) {
  state.selectedId = id;
  render();
  history.replaceState(null, '', `?company=${id}`);
  if (scroll) $('#dirGallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setFilter(patch, toast = true) {
  Object.assign(state, { letter: '' }, patch);
  const list = render({ keepSelected: false });
  if (toast) showToast(list.length ? `${list.length} ${list.length === 1 ? 'company' : 'companies'} found` : 'No companies match your search');
  $('#dirResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------------- Wire up ---------------- */
function initDirectory() {
  const form = $('#dirSearch');
  fillSelect(form.district, DIR_DISTRICTS);
  fillSelect(form.category, DIR_CATEGORIES);

  form.addEventListener('submit', e => {
    e.preventDefault();
    setFilter({ q: form.company.value.trim().toLowerCase(), district: form.district.value, category: form.category.value });
  });

  $('#dirAZ').addEventListener('click', e => {
    const b = e.target.closest('button[data-letter]');
    if (!b || b.disabled) return;
    state.letter = b.dataset.letter;
    render({ keepSelected: false });
  });

  document.addEventListener('click', e => {
    const card = e.target.closest('.dir-card');
    if (card) { e.preventDefault(); selectCompany(card.dataset.id); return; }
    // browsing by district or category starts a fresh search for just that choice
    const chip = e.target.closest('[data-district]');
    if (chip) { setFilter({ q: '', category: '', district: chip.dataset.district === state.district ? '' : chip.dataset.district }); return; }
    const cat = e.target.closest('[data-cat]');
    if (cat) { setFilter({ q: '', district: '', category: cat.dataset.cat === state.category ? '' : cat.dataset.cat }); return; }
    const copy = e.target.closest('[data-copy]');
    if (copy) {
      const done = () => showToast('Link copied');
      (navigator.clipboard ? navigator.clipboard.writeText(copy.dataset.copy) : Promise.reject()).then(done, () => {
        const t = document.createElement('textarea'); t.value = copy.dataset.copy; document.body.append(t); t.select();
        try { document.execCommand('copy'); done(); } catch { showToast('Copy failed'); } t.remove();
      });
    }
  });

  $('#dirClear').addEventListener('click', () => setFilter({ q: '', district: '', category: '' }, false));

  // start: ?company=… or ?district=…, otherwise Thrissur (as in the reference)
  const params = new URLSearchParams(location.search);
  const fromCompany = DIRECTORY.find(c => c.id === params.get('company'));
  const fromDistrict = params.get('district');
  state.district = fromCompany ? fromCompany.district : (DISTRICTS.includes(fromDistrict) ? fromDistrict : 'Thrissur');
  state.selectedId = fromCompany ? fromCompany.id : '';
  render();
}

/* ---------------- Free listing form ---------------- */
function initListingForm() {
  const form = $('#listingForm');
  fillSelect(form.district, DIR_DISTRICTS);
  $('#listingCats').innerHTML = DIR_CATEGORIES.map((c, i) => `
    <label class="dir-check">
      <input type="checkbox" name="category" value="${esc(c)}" id="cat${i}" />
      <span class="dir-check-box" aria-hidden="true"></span>
      <span>${esc(c)}</span>
    </label>`).join('');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements;
    const website = f.website.value.trim();
    const cats = $$('input[name="category"]:checked', form);
    const checks = [
      [f.company, f.company.value.trim().length > 1],
      [f.address, f.address.value.trim().length > 4],
      [f.district, !!f.district.value],
      [f.phone, f.phone.value.replace(/\D/g, '').length >= 7],
      [f.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())],
      [f.website, !website || /^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(website)]
    ];
    checks.forEach(([el, ok]) => el.classList.toggle('is-invalid', !ok));
    $('#listingCats').classList.toggle('is-invalid', !cats.length);
    const bad = checks.find(([, ok]) => !ok);
    if (bad) { bad[0].focus(); showToast('Please fill in all the required fields correctly'); return; }
    if (!cats.length) { showToast('Please choose at least one category'); return; }
    if (!captchaOk(form)) { showToast('Please confirm the reCAPTCHA'); return; }

    // TODO: send to backend, e.g. fetch('/listing', { method: 'POST', body: new FormData(form) })
    form.reset();
    captchaReset(form);
    showToast('Thank you! Your free listing has been submitted for review.');
  });
  form.addEventListener('input', e => {
    e.target.classList.remove('is-invalid');
    if (e.target.name === 'category') $('#listingCats').classList.remove('is-invalid');
  });
}

/* ---------------- Sidebar ads (300 × 250) ---------------- */
function renderSideAds() {
  $('#dirAds').innerHTML = PREMIUM_ADS.slice(0, 2).map((id, i) => `
    <a href="index.html#advertise" class="ad-box ad-premium" aria-label="Premium property advertisement ${i + 1}">
      <img src="${img(id, 700)}" alt="Premium property advertisement ${i + 1}" loading="lazy" />
    </a>`).join('');
}

/* ---------------- Boot (fires from script.js before animations start) ---------------- */
document.addEventListener('kp:page-ready', e => {
  if (e.detail.page !== 'directory') return;
  initDirectory();
  initListingForm();
  renderSideAds();
});
