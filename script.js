/* =========================================================
   Kerala Properties — homepage interactions
   ========================================================= */

const img = (id, w = 900, extra = '') =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop${extra}`;

/* ---------------- Settings ---------------- */
const WHATSAPP_NUMBER = '910000000000';   // country code + number, no "+" or spaces
const POPUP_INTERVAL = 30000;             // popup ad every 30 seconds

/* ---------------- Search form data ---------------- */
const DISTRICTS = [
  'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam',
  'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
];

// Corporations & municipalities per district. Panchayats (941) are typed in —
// load them from the backend when it is ready.
const LOCATIONS = {
  Alappuzha:          { Corporation: [], Municipality: ['Alappuzha', 'Chengannur', 'Cherthala', 'Haripad', 'Kayamkulam', 'Mavelikkara'] },
  Ernakulam:          { Corporation: ['Kochi'], Municipality: ['Aluva', 'Angamaly', 'Eloor', 'Kalamassery', 'Koothattukulam', 'Kothamangalam', 'Maradu', 'Muvattupuzha', 'North Paravur', 'Perumbavoor', 'Piravom', 'Thrikkakara', 'Thripunithura'] },
  Idukki:             { Corporation: [], Municipality: ['Kattappana', 'Thodupuzha'] },
  Kannur:             { Corporation: ['Kannur'], Municipality: ['Anthoor', 'Iritty', 'Kuthuparamba', 'Mattannur', 'Panoor', 'Payyanur', 'Sreekandapuram', 'Taliparamba', 'Thalassery'] },
  Kasaragod:          { Corporation: [], Municipality: ['Kanhangad', 'Kasaragod', 'Nileshwaram'] },
  Kollam:             { Corporation: ['Kollam'], Municipality: ['Karunagappally', 'Kottarakkara', 'Paravur', 'Punalur'] },
  Kottayam:           { Corporation: [], Municipality: ['Changanassery', 'Erattupetta', 'Ettumanoor', 'Kottayam', 'Pala', 'Vaikom'] },
  Kozhikode:          { Corporation: ['Kozhikode'], Municipality: ['Feroke', 'Koduvally', 'Koyilandy', 'Mukkam', 'Payyoli', 'Ramanattukara', 'Vatakara'] },
  Malappuram:         { Corporation: [], Municipality: ['Kondotty', 'Kottakkal', 'Malappuram', 'Manjeri', 'Nilambur', 'Parappanangadi', 'Perinthalmanna', 'Ponnani', 'Tanur', 'Tirur', 'Tirurangadi', 'Valanchery'] },
  Palakkad:           { Corporation: [], Municipality: ['Cherpulassery', 'Chittur-Thathamangalam', 'Mannarkkad', 'Ottapalam', 'Palakkad', 'Pattambi', 'Shoranur'] },
  Pathanamthitta:     { Corporation: [], Municipality: ['Adoor', 'Pandalam', 'Pathanamthitta', 'Thiruvalla'] },
  Thiruvananthapuram: { Corporation: ['Thiruvananthapuram'], Municipality: ['Attingal', 'Nedumangad', 'Neyyattinkara', 'Varkala'] },
  Thrissur:           { Corporation: ['Thrissur'], Municipality: ['Chalakudy', 'Chavakkad', 'Guruvayur', 'Irinjalakuda', 'Kodungallur', 'Kunnamkulam', 'Wadakkanchery'] },
  Wayanad:            { Corporation: [], Municipality: ['Kalpetta', 'Mananthavady', 'Sulthan Bathery'] }
};

const PROPERTY_TYPE_OPTIONS = [
  'Apartments', 'Bar', 'Building Floor', 'Café', 'Commercial Building', 'Commercial Land', 'Commercial Properties',
  'Estate and Plantation', 'Farm House', 'Farm Land', 'Flat', 'Godown / Warehouse', 'House', 'House Plot',
  'Industrial / Manufacturing', 'Office Space', 'PG / Hostel', 'Residential Land', 'Resort', 'School / College',
  'Shop / Showroom', 'Store', 'Villa'
];

/* ---------------- Content (same as the live site) ----------------
   Photos are Unsplash placeholders — swap the ids/urls for real photos. */

// Top ad strip — 6 static ads, height 120
const TOP_ADS = [
  { name: 'Logistics', img: '1586528116311-ad8dd3c8310d' },
  { name: 'Freight', img: '1494412574643-ff11b0a5c1c3' },
  { name: 'Shipping', img: '1578575437130-527eed3abbec' },
  { name: 'Cold Chain', img: '1553413077-190dd305871c' },
  { name: 'Express', img: '1474302770737-173ee21bab63' },
  { name: 'Aviation', img: '1436491865332-7a61a109cc05' }
];

// Premium properties — 300w × 250H slots; they repeat to fill the column
const PREMIUM_ADS = ['1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c', '1580587771525-78b9dba3b914', '1512917774080-9991f1c4c750', '1600566753190-17f0baa2a6c3', '1605276374104-dee2a0ed3cd6'];

// Popup ads — 800 × 450
const POPUP_ADS = [
  { img: '1613490493576-7fde63acd811', href: '#villas', cta: 'Explore Villas' },
  { img: '1600596542815-ffad4c1539a9', href: '#properties', cta: 'View Properties' },
  { img: '1545324418-cc1a3fa10c00', href: '#apartments', cta: 'View Apartments' }
];

// News cards (3 headlines × 3 rows)
const NEWS_HEADS = [
  { title: 'Airbus A350F freighter successfully performs its maiden flight', img: '1436491865332-7a61a109cc05' },
  { title: 'Cold Chain Technologies launches reusable dry ice shipper', img: '1586528116311-ad8dd3c8310d' },
  { title: 'Adhoc.Express integrates cargo notes and booking technology', img: '1460925895917-afdab827c52f' }
];
const NEWS_ALT_IMGS = ['1474302770737-173ee21bab63', '1553413077-190dd305871c', '1551288049-bebda4e38f71'];
const NEWS_CAPTION = 'Shares in the logistics group fell 10.7% on Monday after the company announced a major acquisition deal, with analysts watching the integration closely.';

// Sponsored content — auto-advancing slider
const SPONSORED = [
  { title: 'Premium Article One', text: 'Sponsored content from our partners – cold chain, logistics and more.', img: '1553413077-190dd305871c' },
  { title: 'Premium Article Two', text: 'Insights on modern construction materials and technology.', img: '1503387762-592deb58ef4e' },
  { title: 'Premium Article Three', text: 'Smart homes and sustainable living in Kerala.', img: '1558002038-1055907df827' },
  { title: 'Premium Article Four', text: 'Investing in land and property – what buyers should know.', img: '1560518883-ce09059eeffa' }
];

// Properties — first 9 listings (no pagination on the homepage)
const PROPERTY_PHOTOS = {
  'House for Sale': ['1600585154340-be6161a56a0c', '1564013799919-ab600027ffc6', '1570129477492-45c003edd2be'],
  'Land for Sale': ['1500382017468-9049fed747ef', '1470071459604-3b5ec3a7fe05', '1593693397690-362cb9666fc2'],
  'Farmhouse for Sale': ['1500076656116-558758c991c1', '1518780664697-55e3ad937233', '1510798831971-661eb04b3739']
};
const PROPERTY_TYPES = ['House for Sale', 'Land for Sale', 'Farmhouse for Sale'];
const PROPERTY_PLACES = ['Angamaly, Ernakulam', 'Aluva, Ernakulam', 'Kakkanad, Kochi', 'Thrissur', 'Palakkad', 'Pathanamthitta', 'Munnar, Idukki', 'Kozhikode', 'Kannur'];
const PROPERTIES = Array.from({ length: 9 }, (_, i) => {
  const type = PROPERTY_TYPES[i % 3];
  return {
    type,
    loc: PROPERTY_PLACES[i],
    price: i % 4 === 0 ? 'On Request' : `₹ ${20 + i * 3} Lakhs`,
    area: `${(4 + (i * 1.25) % 10).toFixed(2)} Cents`,
    img: PROPERTY_PHOTOS[type][Math.floor(i / 3)]
  };
});

// Surplus & used materials / household items
const SURPLUS = [
  { name: 'Refrigerator', district: 'Ernakulam', img: '1571175443880-49e1d25b2bc5' },
  { name: 'Steel Doors', district: 'Thrissur', img: '1449844908441-8829872d2607' },
  { name: 'Reading Table', district: 'Ernakulam', img: '1518455027359-f3f8164ba6bd' },
  { name: 'Washing Machine', district: 'Thrissur', img: '1626806787461-102c1bfaaea1' },
  { name: 'LED TV', district: 'Kozhikode', img: '1593359677879-a4bb92f829d1' },
  { name: 'Sofa Set', district: 'Kollam', img: '1555041469-a586c61ea9bc' },
  { name: 'Wooden Setti', district: 'Kottayam', img: '1586023492125-27b2c045efd7' },
  { name: 'Building Bricks', district: 'Palakkad', img: '1504307651254-35680f356dfd' },
  { name: 'Office Chairs', district: 'Ernakulam', img: '1580480055273-228ff5388ef8' },
  { name: 'Air Conditioner', district: 'Kannur', img: '1502672260266-1c1ef2d93688' }
];

// Featured apartments
const APARTMENTS = [
  { name: 'City Homes', loc: 'Kaloor, Kochi', img: '1545324418-cc1a3fa10c00' },
  { name: 'Konark Block', loc: 'Laloor, Thrissur', img: '1460317442991-0ec209397118' },
  { name: 'Eden Woods', loc: 'Kotta Maidan, Palakkad', img: '1515263487990-61b07816b324' },
  { name: 'Alukkas Tower', loc: 'Bheema Palli, Thiruvananthapuram', img: '1493809842364-78817add7ffb' },
  { name: 'Creek Rocks', loc: 'Munnar, Idukki', img: '1574362848149-11496d93a7c7' },
  { name: 'Kalyan Towers', loc: 'Pala, Kottayam', img: '1567496898669-ee935f5f647a' },
  { name: 'Sinar Tower', loc: 'Kotaykkal, Kozhikode', img: '1486406146926-c627a92ad1ab' }
];

// Featured villas
const VILLA_PLACES = [['Kakkanad', 'Kochi'], ['Pudhukkad', 'Thrissur'], ['Adoor', 'Pathanamthitta'], ['Aluva', 'Ernakulam'], ['Arikkode', 'Malappuram']];
const VILLA_PHOTOS = ['1613490493576-7fde63acd811', '1605276374104-dee2a0ed3cd6', '1600596542815-ffad4c1539a9', '1580587771525-78b9dba3b914', '1512917774080-9991f1c4c750', '1600047509807-ba8f99d2cdde', '1600210492486-724fe5c67fb0', '1523217582562-09d0def993a6', '1570129477492-45c003edd2be', '1564013799919-ab600027ffc6'];
const VILLAS = [...VILLA_PLACES, ...VILLA_PLACES.slice().reverse()].map(([place, district], i) => ({
  name: `${place} ${i % 2 ? 'Villa' : 'Heights'}`,
  loc: `${place}, ${district}`,
  img: VILLA_PHOTOS[i]
}));

// Featured builders — 200 × 100 logo, company name, district
const BUILDERS = [
  { name: 'Edakom Builders Pvt Ltd', short: 'E', district: 'Ernakulam' },
  { name: 'K2 Builders', short: 'K2', district: 'Kozhikode' },
  { name: 'Rafa Builders', short: 'R', district: 'Thrissur' },
  { name: 'Hayath Properties', short: 'H', district: 'Malappuram' },
  { name: 'Mosons Estate', short: 'M', district: 'Ernakulam' },
  { name: 'Alliance Homes', short: 'A', district: 'Ernakulam' },
  { name: 'Ghazal Builders', short: 'G', district: 'Kannur' },
  { name: 'Plama Developers Ltd.', short: 'P', district: 'Palakkad' },
  { name: 'WinTouch Builders Pvt Ltd', short: 'W', district: 'Thrissur' },
  { name: 'Squarefeet Promoters', short: 'S', district: 'Kollam' },
  { name: 'Malabar Builders India Ltd.', short: 'MB', district: 'Kozhikode' },
  { name: 'Sreerosh Properties Pvt Ltd', short: 'SR', district: 'Kottayam' }
];
const BUILDER_COLORS = ['#fb7e03', '#149fd8', '#0d1720', '#7d8081'];

/* ---------------- Helpers ---------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ICONS = {
  pin: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  area: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  tag: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  heart: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>'
};

const imgTag = (id, alt, cls = '', w = 900) =>
  `<img src="${img(id, w)}" alt="${alt}" class="${cls}" loading="lazy" />`;

const showToast = (msg) => {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('is-visible'), 3000);
};

const fillSelect = (sel, items, keepFirst = true) => {
  const first = keepFirst ? sel.options[0].outerHTML : '';
  sel.innerHTML = first + items.map(v => `<option value="${v}">${v}</option>`).join('');
};

/* ---------------- Renderers ---------------- */
function renderTopAds() {
  $('#topAds').innerHTML = TOP_ADS.map(ad => `
    <a href="#advertise" class="ad-box ad-strip">
      ${imgTag(ad.img, '', '', 500)}
      <span class="ad-body"><span class="font-display text-xl">${ad.name} Ad</span></span>
    </a>`).join('');
}

const premiumAd = n => `
  <a href="#advertise" class="ad-box ad-premium" style="--i:${(n - 1) % 6}">
    ${imgTag(PREMIUM_ADS[(n - 1) % PREMIUM_ADS.length], '', '', 700)}
    <span class="ad-tag">Advertisement</span>
    <span class="ad-body ad-body--bottom">
      <span class="font-display text-[1.65rem] leading-none">Premium Ad ${n}</span>
    </span>
    <span class="ad-cta">Advertise here →</span>
  </a>`;

// Premium ads continue down to the bottom of the properties section
function fillPremiumAds() {
  const list = $('#premAds');
  const wide = window.matchMedia('(min-width: 1024px)').matches;
  let count = 6;
  if (wide) {
    const content = $('#mainSplit').firstElementChild.getBoundingClientRect().height;
    const head = $('.premium-aside .sec-head').getBoundingClientRect().height + 24;
    const slot = 250 + 12;
    count = Math.max(6, Math.floor((content - head + 12) / slot));
  }
  if (list.children.length === count) return;
  list.innerHTML = Array.from({ length: count }, (_, i) => premiumAd(i + 1)).join('');
}

function renderNews() {
  let html = '';
  for (let r = 0; r < 3; r++) {
    NEWS_HEADS.forEach((n, c) => {
      const photo = r === 1 ? NEWS_ALT_IMGS[c] : n.img;
      html += `
      <article class="news-card group">
        <a href="#">
          <h3 class="font-display text-[1.3rem] leading-snug group-hover:text-saffron transition-colors">${n.title}</h3>
          <div class="img-frame mt-3 aspect-[16/10]">${imgTag(photo, '', '', 600)}</div>
          <p class="mt-3 text-sm text-mist-600 leading-relaxed">${NEWS_CAPTION}</p>
        </a>
      </article>`;
    });
  }
  $('#newsGrid').innerHTML = html;
}

// Sponsored content: fading slider that advances on its own (no click needed)
function initSponsored() {
  const slider = $('#sponsSlider');
  const dots = $('#sponsDots');
  slider.innerHTML = SPONSORED.map((s, i) => `
    <a href="#" class="spons-slide${i ? '' : ' is-on'}" aria-hidden="${i ? 'true' : 'false'}">
      ${imgTag(s.img, s.title, 'absolute inset-0 w-full h-full object-cover', 1400)}
      <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"></div>
      <span class="absolute top-0 left-0 badge bg-white text-ink">CN Premium Articles</span>
      <div class="absolute bottom-0 p-6 md:p-9 text-white max-w-2xl">
        <h4 class="font-display text-3xl md:text-[2.6rem] leading-tight">${s.title}</h4>
        <p class="mt-2 text-white/80 md:text-lg">${s.text}</p>
      </div>
    </a>`).join('');
  dots.innerHTML = SPONSORED.map((_, i) => `<button class="spons-dot${i ? '' : ' is-on'}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join('');

  let cur = 0, timer;
  const go = n => {
    const slides = $$('.spons-slide', slider), ds = $$('.spons-dot', dots);
    slides[cur].classList.remove('is-on'); slides[cur].setAttribute('aria-hidden', 'true'); ds[cur].classList.remove('is-on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('is-on'); slides[cur].setAttribute('aria-hidden', 'false'); ds[cur].classList.add('is-on');
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 4500); };
  $$('[data-spons]').forEach(b => b.addEventListener('click', () => { go(cur + Number(b.dataset.spons)); auto(); }));
  dots.addEventListener('click', e => { const b = e.target.closest('.spons-dot'); if (b) { go(Number(b.dataset.i)); auto(); } });
  auto();
}

function renderProperties() {
  const badge = { 'House for Sale': 'bg-saffron text-white', 'Land for Sale': 'bg-lagoon text-white', 'Farmhouse for Sale': 'bg-ink text-white' };
  $('#propertyGrid').innerHTML = PROPERTIES.map((p, i) => `
    <article class="prop-card" style="--i:${i}">
      <div class="prop-media">
        ${imgTag(p.img, `${p.type} in ${p.loc}`)}
        <span class="absolute top-0 left-0 badge ${badge[p.type]}">For Sale</span>
        <button class="fav-btn absolute top-0 right-0" aria-label="Save property">${ICONS.heart}</button>
      </div>
      <div class="p-5">
        <h3 class="font-display text-[1.45rem]">${p.type}</h3>
        <dl class="mt-3 grid gap-2.5 text-sm">
          <div class="prop-row"><dt>${ICONS.pin}Location</dt><dd>${p.loc}</dd></div>
          <div class="prop-row"><dt>${ICONS.tag}Price</dt><dd class="text-saffron-600">${p.price}</dd></div>
          <div class="prop-row"><dt>${ICONS.area}Covered Area</dt><dd>${p.area}</dd></div>
        </dl>
        <a href="#" class="mt-5 flex items-center justify-center gap-2 h-11 border border-ink/15 font-semibold text-sm hover:bg-ink hover:text-white hover:border-ink transition">View More <span aria-hidden="true">→</span></a>
      </div>
    </article>`).join('');
}

function renderMaterials(district = '') {
  const list = SURPLUS.filter(m => !district || m.district === district);
  $('#materialGrid').innerHTML = list.length ? list.map((m, i) => `
    <a href="#" class="mat-card group" style="--i:${i}">
      <div class="img-frame aspect-square">${imgTag(m.img, m.name, '', 500)}</div>
      <div class="p-4">
        <h3 class="font-semibold">${m.name}</h3>
        <p class="mt-1 text-xs text-white/55 leading-relaxed">Good condition, available for quick sale.</p>
        <p class="mt-3 text-[11px] uppercase tracking-[0.14em] text-lagoon flex items-center gap-1.5"><span class="w-3.5 h-3.5">${ICONS.pin}</span>${m.district}</p>
      </div>
    </a>`).join('')
    : `<p class="col-span-full text-center text-white/50 py-10">No items in this district yet.</p>`;
}

// Featured apartments / villas — continuous auto-scroll; hover pauses,
// zooms the photo and reveals an orange "View More" button
function renderMarquee(trackId, items, kind, dark) {
  const card = (x, i, clone) => `
    <article class="mq-card"${clone ? ' aria-hidden="true"' : ''}>
      <div class="mq-media">
        <img src="${img(x.img, 600)}" alt="${clone ? '' : x.name}" />
        <button class="fav-btn" aria-label="Save" ${clone ? 'tabindex="-1"' : ''}>${ICONS.heart}</button>
        <a href="detail.html?type=${kind}&id=${i + 1}" class="mq-btn" ${clone ? 'tabindex="-1"' : ''}>View More →</a>
      </div>
      <h3 class="mt-4 font-display text-[1.45rem] leading-snug">${x.name}</h3>
      <p class="mt-0.5 text-sm ${dark ? 'text-white/55' : 'text-mist-500'}">${x.loc}</p>
    </article>`;
  const track = document.getElementById(trackId);
  // two copies so the loop is seamless
  track.innerHTML = items.map((x, i) => card(x, i, false)).join('') + items.map((x, i) => card(x, i, true)).join('');
  track.style.setProperty('--marquee-dur', `${items.length * 6}s`);
}

function renderBuilders(district = '') {
  const list = BUILDERS.filter(b => !district || b.district === district);
  $('#builderEmpty').classList.toggle('hidden', list.length > 0);
  $('#builderGrid').innerHTML = list.map((b, i) => {
    const color = BUILDER_COLORS[BUILDERS.indexOf(b) % BUILDER_COLORS.length];
    const word = b.name.replace(/\s+(Pvt\.?\s*Ltd\.?|Ltd\.?|India Ltd\.?)$/i, '');
    return `
    <a href="#" class="builder-card" style="--i:${i}">
      <span class="builder-logo">
        <span class="mark" style="background:${color}">${b.short}</span>
        <span class="word">${word}</span>
      </span>
      <h3 class="mt-3 font-semibold text-sm leading-snug">${b.name}</h3>
      <p class="text-xs text-mist-500 mt-1">${b.district}</p>
    </a>`;
  }).join('');
}

/* ---------------- Search form ---------------- */
function initSearch() {
  const district = $('#sfDistrict');
  const locType = $('#sfLocType');
  const location = $('#sfLocation');
  const panchayat = $('#sfPanchayat');

  fillSelect(district, DISTRICTS);
  fillSelect($('#sfType'), PROPERTY_TYPE_OPTIONS);

  const updateLocations = () => {
    const d = district.value, t = locType.value;
    const isPanchayat = t === 'Panchayat';
    location.classList.toggle('hidden', isPanchayat);
    panchayat.classList.toggle('hidden', !isPanchayat);
    if (isPanchayat) return;

    let items = [];
    if (d && t) items = LOCATIONS[d][t];
    else if (d) items = [...LOCATIONS[d].Corporation, ...LOCATIONS[d].Municipality];
    location.innerHTML = `<option value="">${!d ? '- Select district first -' : items.length ? '- Select -' : `No ${t.toLowerCase()} in ${d}`}</option>` +
      items.map(v => `<option value="${v}">${v}</option>`).join('');
  };
  district.addEventListener('change', updateLocations);
  locType.addEventListener('change', updateLocations);
  updateLocations();

  $('#searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const where = (locType.value === 'Panchayat' ? panchayat.value.trim() : location.value) || f.district.value || 'all districts';
    const what = f.type.value || 'properties';
    showToast(`Searching ${what.toLowerCase()} for ${f.status.value.toLowerCase()} in ${where}…`);
  });
}

/* ---------------- Header, drawer, misc ---------------- */
function initHeader() {
  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#todayDate').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('#year').textContent = new Date().getFullYear();
}

function initDrawer() {
  const drawer = $('#drawer');
  const btn = $('#menuBtn');
  const toggle = open => {
    drawer.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => toggle(true));
  $('#closeMenu').addEventListener('click', () => toggle(false));
  $('#drawerOverlay').addEventListener('click', () => toggle(false));
  $$('#drawerPanel a').forEach(a => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', e => e.key === 'Escape' && toggle(false));
}

function initFilters() {
  fillSelect($('#materialDistrict'), DISTRICTS);
  fillSelect($('#builderDistrict'), DISTRICTS);
  $('#materialDistrict').addEventListener('change', e => renderMaterials(e.target.value));
  $('#builderDistrict').addEventListener('change', e => renderBuilders(e.target.value));
}

function initFavourites() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.fav-btn');
    if (!btn) return;
    e.preventDefault();
    const on = btn.classList.toggle('is-fav');
    showToast(on ? 'Saved to your shortlist' : 'Removed from shortlist');
  });
}

/* ---------------- Quick contact (footer) ---------------- */
function initContactForm() {
  const form = $('#contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements;
    const checks = [
      [f.name, f.name.value.trim().length > 1],
      [f.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())],
      [f.phone, f.phone.value.replace(/\D/g, '').length >= 7],
      [f.message, f.message.value.trim().length > 2]
    ];
    checks.forEach(([el, ok]) => el.classList.toggle('is-invalid', !ok));
    const bad = checks.find(([, ok]) => !ok);
    if (bad) { bad[0].focus(); showToast('Please fill in all the fields correctly'); return; }

    if (window.grecaptcha && typeof grecaptcha.getResponse === 'function' && !grecaptcha.getResponse()) {
      showToast('Please confirm the reCAPTCHA');
      return;
    }
    // TODO: send to backend (e.g. fetch('/contact', { method: 'POST', body: new FormData(form) }))
    form.reset();
    if (window.grecaptcha && grecaptcha.reset) grecaptcha.reset();
    showToast("Thank you! We'll get back to you soon.");
  });
  form.addEventListener('input', e => e.target.classList.remove('is-invalid'));
}

/* ---------------- WhatsApp chat ---------------- */
function initWhatsApp() {
  const widget = $('#waWidget');
  const toggleBtn = $('#waToggle');
  const panel = $('#waPanel');
  const input = $('#waInput');
  const setOpen = open => {
    widget.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', open);
    panel.setAttribute('aria-hidden', !open);
    if (open) {
      $('#waTime').textContent = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      setTimeout(() => input.focus(), 250);
    }
  };
  toggleBtn.addEventListener('click', () => setOpen(!widget.classList.contains('is-open')));
  $('#waClose').addEventListener('click', () => setOpen(false));
  $('#waForm').addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim() || 'Hello Kerala Properties, I have an enquiry.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    input.value = '';
  });
}

/* ---------------- Popup ad: 800 × 450, every 30 s ---------------- */
function initPopup() {
  const popup = $('#promoPopup');
  const image = $('#popupImg');
  const link = $('#popupLink');
  const btn = $('#popupBtn');
  let idx = 0, timer, lastFocus;

  const isBusy = () =>
    document.hidden ||
    $('#drawer').classList.contains('is-open') ||
    $('#waWidget').classList.contains('is-open') ||
    (document.activeElement && /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName));

  const schedule = (ms = POPUP_INTERVAL) => { clearTimeout(timer); timer = setTimeout(open, ms); };

  function open() {
    if (isBusy()) { schedule(5000); return; }   // don't interrupt — try again shortly
    const ad = POPUP_ADS[idx++ % POPUP_ADS.length];
    image.src = img(ad.img, 800, '&h=450');
    link.href = ad.href;
    btn.href = ad.href;
    btn.firstChild.textContent = `${ad.cta || 'View Details'} `;
    lastFocus = document.activeElement;
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    btn.focus({ preventScroll: true });
  }
  function close() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    schedule();                                 // next popup 30 s after closing
  }

  $$('[data-popup-close]', popup).forEach(el => el.addEventListener('click', close));
  // the ad image and both buttons close the popup and follow their link
  $$('#popupLink, .popup-btn', popup).forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && popup.classList.contains('is-open')) close(); });
  // preload the first popup image
  new Image().src = img(POPUP_ADS[0].img, 800, '&h=450');
  schedule();
}

/* ---------------- Scroll animations ---------------- */
function splitWords(el) {
  const nodes = [...el.childNodes];
  let w = 0;
  const wrap = node => {
    const outer = document.createElement('span');
    const inner = document.createElement('span');
    outer.className = 'w';
    inner.style.setProperty('--w', w++);
    inner.append(node);
    outer.append(inner);
    return outer;
  };
  el.textContent = '';
  nodes.forEach(n => {
    if (n.nodeType === Node.TEXT_NODE) {
      n.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        el.append(/^\s+$/.test(part) ? ' ' : wrap(document.createTextNode(part)));
      });
    } else if (n.nodeName === 'BR') {
      el.append(n);
    } else {
      el.append(wrap(n));
    }
  });
}

let pendingReveals = new Set();
function revealInView() {
  if (!pendingReveals.size) return;
  const line = window.innerHeight * 0.9;
  pendingReveals.forEach(el => {
    if (el.getBoundingClientRect().top < line) { el.classList.add('is-in'); pendingReveals.delete(el); }
  });
}

function initReveal() {
  $$('.split-words').forEach(splitWords);
  $$('[data-stagger]').forEach(group =>
    [...group.children].forEach((child, i) => {
      if (!child.style.getPropertyValue('--i')) child.style.setProperty('--i', i);
    }));

  pendingReveals = new Set($$('.reveal, [data-anim], [data-stagger], .split-words'));
  if (!('IntersectionObserver' in window)) { revealInView(); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); pendingReveals.delete(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
  pendingReveals.forEach(el => io.observe(el));
}

function initScrollEngine() {
  const header = $('#siteHeader');
  const mobileHeader = $('#mobileHeader');
  const brand = $('.brandrow');
  const toTop = $('#toTop');
  const parallax = $$('[data-parallax]');
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    header.classList.toggle('is-scrolled', y > brand.offsetTop + brand.offsetHeight - 2);
    mobileHeader.classList.toggle('is-scrolled', y > 40);
    toTop.classList.toggle('is-visible', y > 700);
    revealInView();
    if (reducedMotion) return;
    parallax.forEach(el => {
      const box = (el.parentElement || el).getBoundingClientRect();
      if (box.bottom < -200 || box.top > vh + 200) return;
      const offset = (box.top + box.height / 2 - vh / 2) * -Number(el.dataset.parallax);
      el.style.setProperty('--py', `${offset.toFixed(1)}px`);
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}


// Highlight the nav link for the section currently on screen (both navs)
function initScrollSpy() {
  const links = $$('[data-spy]');
  const ids = [...new Set(links.map(a => a.dataset.spy))];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  const setActive = id => {
    links.forEach(a => a.classList.toggle('is-active', a.dataset.spy === id));
    // keep the active pill visible in the swipeable mobile row
    const m = $(`.mnav-link[data-spy="${id}"]`);
    if (m && window.matchMedia('(max-width: 1023px)').matches) {
      const row = m.parentElement;
      row.scrollTo({ left: m.offsetLeft - 16, behavior: 'smooth' });
    }
  };
  let current = '';
  const io = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length && visible[0].target.id !== current) { current = visible[0].target.id; setActive(current); }
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(sec => io.observe(sec));
}

function initImageFallback() {
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && !e.target.dataset.failed) {
      e.target.dataset.failed = '1';
      e.target.classList.add('img-fallback');
      e.target.removeAttribute('src');
    }
  }, true);
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  initImageFallback();
  renderTopAds();
  initSearch();
  renderNews();
  initSponsored();
  renderProperties();
  renderMaterials();
  renderMarquee('aptTrack', APARTMENTS, 'apartment', true);
  renderMarquee('villaTrack', VILLAS, 'villa', false);
  renderBuilders();
  initFilters();
  initHeader();
  initDrawer();
  initFavourites();
  initContactForm();
  initWhatsApp();
  initPopup();
  initReveal();
  initScrollEngine();
  initScrollSpy();

  // Premium ads fill the column once the layout (fonts/images) settles
  fillPremiumAds();
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(fillPremiumAds, 200); });
  window.addEventListener('load', fillPremiumAds);
  document.fonts && document.fonts.ready.then(fillPremiumAds);
});
