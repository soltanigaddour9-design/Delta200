// Illustrations: small animated diagrams built from data.
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function renderViz(v) {
  if (!v) return '';
  const cap = v.cap ? `<div class="viz-cap">${esc(v.cap)}</div>` : '';
  let body = '';
  switch (v.type) {
    case 'flow':
      body = `<div class="flow">${v.steps.map((s, i) => `${i ? `<div class="arr" style="--i:${i}">→</div>` : ''}<div class="node" style="--i:${i}"><b>${esc(s[0])}</b>${s[1] ? `<span>${esc(s[1])}</span>` : ''}</div>`).join('')}</div>`;
      break;
    case 'compare':
      body = `<div class="cmp">${[v.a, v.b].map(c => `<div><h4>${esc(c.t)}</h4><ul>${c.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
      break;
    case 'timeline':
      body = `<div class="tl">${v.items.map((e, i) => `<div class="ev" style="--i:${i}"><span class="y">${esc(e[0])}</span><b>${esc(e[1])}</b><span>${esc(e[2] || '')}</span></div>`).join('')}</div>`;
      break;
    case 'scale':
      body = `<div class="scale"><div class="axis"><span>${esc(v.from)}</span><span>${esc(v.to)}</span></div><div class="track"></div><div class="pins">${v.items.map((p, i) => `<div class="pin" style="left:${p[0]}%;--i:${i}">${esc(p[1])}</div>`).join('')}</div></div>`;
      break;
    case 'layers':
      body = `<div class="layers">${v.items.map((l, i) => `<div style="--i:${i};width:${40 + i * (60 / Math.max(1, v.items.length - 1))}%"><b>${esc(l[0])}</b>${l[1] ? `<span>${esc(l[1])}</span>` : ''}</div>`).join('')}</div>`;
      break;
    case 'quad':
      body = `<div class="quad">${v.items.map((q, i) => `<div style="--i:${i}"><b>${esc(q[0])}</b>${esc(q[1])}</div>`).join('')}</div>${v.axes ? `<div class="quad-axes"><span>${esc(v.axes[0])}</span><span>${esc(v.axes[1])}</span></div>` : ''}`;
      break;
    case 'cycle':
      body = `<div class="cycle">${cycleSVG(v.steps)}</div>`;
      break;
    default: body = '';
  }
  return `<figure class="viz">${cap}${body}</figure>`;
}

function cycleSVG(steps) {
  const n = steps.length, W = 560, H = 380, cx = W / 2, cy = H / 2, rx = 200, ry = 140;
  const pts = steps.map((s, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const arcs = pts.map((p, i) => {
    const q = pts[(i + 1) % n];
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    const k = 0.18; const cxp = mx + (mx - cx) * k, cyp = my + (my - cy) * k;
    return `<path d="M${p[0]},${p[1]} Q${cxp},${cyp} ${q[0]},${q[1]}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 6" opacity=".7"><animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.2s" repeatCount="indefinite"/></path>`;
  }).join('');
  const nodes = pts.map((p, i) => {
    const words = String(steps[i]).split(' '); const lines = []; let cur = '';
    words.forEach(w => { if ((cur + ' ' + w).trim().length > 16) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w; }); if (cur.trim()) lines.push(cur.trim());
    const h = 26 + lines.length * 16;
    return `<g style="animation:pop .6s var(--ease) both;animation-delay:${i * .12}s"><rect x="${p[0] - 70}" y="${p[1] - h / 2}" width="140" height="${h}" rx="14" fill="#11141b" stroke="var(--accent)" stroke-opacity=".6"/>${lines.map((l, j) => `<text x="${p[0]}" y="${p[1] - (lines.length - 1) * 8 + j * 16 + 5}" text-anchor="middle" fill="#fff" font-size="13" font-family="Inter">${esc(l)}</text>`).join('')}<circle cx="${p[0] - 62}" cy="${p[1] - h / 2 + 2}" r="10" fill="var(--accent)"/><text x="${p[0] - 62}" y="${p[1] - h / 2 + 6}" text-anchor="middle" font-size="11" font-weight="800" fill="#0b0d12">${i + 1}</text></g>`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img">${arcs}${nodes}</svg>`;
}
