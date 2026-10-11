:root {
  --bg: #0f1220;
  --bg-2: #171d31;
  --panel: rgba(20, 25, 42, 0.9);
  --panel-strong: #202a45;
  --line: rgba(255, 255, 255, 0.08);
  --text: #edf2ff;
  --muted: #9ca8c9;
  --gold: #f7d76a;
  --amber: #ffad5d;
  --emerald: #6fe7b7;
  --violet: #a18bff;
  --rose: #ff7fa5;
  --cyan: #70d8ff;
  --shadow: rgba(7, 12, 25, 0.45);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(161, 139, 255, 0.18), transparent 25%),
    radial-gradient(circle at bottom right, rgba(111, 231, 183, 0.15), transparent 20%),
    var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
  padding: 32px 20px;
}

h1, h2, h3 {
  margin: 0;
  font-family: "Cinzel", serif;
}

button, input, select {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--muted);
}

.eyebrow.accent {
  color: var(--gold);
}

h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.layout {
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
  gap: 20px;
}

.panel {
  background: rgba(22, 29, 46, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 18px 40px var(--shadow);
}

.controls {
  padding: 22px;
}

.controls h2 {
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.controls label {
  display: block;
  margin-bottom: 18px;
}

.controls span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.88rem;
}

.controls input,
.controls select {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
}

.controls input:focus,
.controls select:focus {
  outline: 2px solid rgba(112, 216, 255, 0.5);
  border-color: rgba(112, 216, 255, 0.75);
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

button {
  border: 0;
  border-radius: 10px;
  padding: 11px 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s ease, filter 0.18s ease;
}

button:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.primary-btn {
  background: linear-gradient(135deg, var(--gold), var(--amber));
  color: #251d0d;
}

.secondary-btn,
.ghost-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
}

.results {
  padding: 22px;
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}

.summary-header h2 {
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.score-badge {
  min-width: 78px;
  text-align: center;
  padding: 12px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(247, 215, 106, 0.2), rgba(161, 139, 255, 0.24));
  border: 1px solid rgba(247, 215, 106, 0.4);
  color: var(--gold);
  font-family: "Cinzel", serif;
  font-size: 1.2rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 22px;
}

.meta-card {
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--line);
}

.meta-card span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
}

.meta-card strong {
  font-size: 1rem;
}

.star-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.star-card {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.015)),
    rgba(14, 18, 30, 0.92);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 14px 12px;
  position: relative;
  overflow: hidden;
}

.star-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--gold), var(--amber), transparent);
}

.star-topline {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
  font-weight: 700;
}

.star-rarity {
  display: inline-flex;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(247, 215, 106, 0.12);
  color: var(--gold);
}

.star-value {
  color: var(--gold);
  font-size: 0.8rem;
}

.star-name {
  margin-bottom: 8px;
  font-size: 1.3rem;
}

.star-type {
  color: var(--muted);
  margin: 0 0 8px;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
}

.star-bonus {
  margin: 0 0 14px;
  line-height: 1.55;
  color: #ebf1ff;
}

.star-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  color: var(--muted);
}

.star-tag {
  padding: 6px 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
}

.star-power {
  color: var(--emerald);
  font-weight: 700;
}

@media (max-width: 780px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .meta-grid {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .topbar {
    flex-wrap: wrap;
    align-items: flex-start;
  }
}
