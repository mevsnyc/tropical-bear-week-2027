/* Tweaks wiring — density, copy tone, tropical accent */
const TBW_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "cozy",
  "tone": "playful",
  "accent": "#ef8273"
}/*EDITMODE-END*/;

const TBW_COPY = {
  "hero-sub": {
    playful: "Six days of sun, surf and so much fur. The biggest, beefiest tropical takeover on the South Florida coast — reborn for 2027.",
    classic: "Six days on the South Florida coast. Sun, surf, and the warmest gathering in the bear world — reimagined for 2027.",
    bold:    "SIX DAYS. ALL FUR. THE BIGGEST TROPICAL BEAR TAKEOVER ON THE COAST — BACK BIGGER FOR 2027."
  },
  "cta-primary": { playful: "Grab Your Passes", classic: "Reserve Your Pass", bold: "GET IN — GET PASSES" },
  "about-tag": {
    playful: "South Florida's original bear gathering, rebuilt from the sand up for 2027 with a fresh Miami deco soul.",
    classic: "South Florida's original bear gathering, thoughtfully reimagined for 2027 with a Miami deco spirit.",
    bold:    "THE ORIGINAL SOUTH FLORIDA BEAR GATHERING. REBUILT FROM THE SAND UP FOR 2027."
  },
  "about-body": {
    playful: "Every March, thousands of bears, cubs, otters and admirers wash into Fort Lauderdale for a week of pool parties, beach days, boat cruises and late-night dancefloors. It's loud, it's hairy, it's gloriously tropical — and it's the warmest welcome in the bear world. 2027 turns the whole thing up: more venues, more parties, more sun.",
    classic: "Each March, thousands of bears, cubs, otters and admirers arrive in Fort Lauderdale for a week of pool parties, beach days, sunset cruises and late-night dancefloors. Warm, welcoming and unmistakably tropical — it remains the friendliest week in the bear calendar. For 2027 we've expanded every part of it: more venues, more events, more sun.",
    bold:    "EVERY MARCH, THOUSANDS OF BEARS DESCEND ON FORT LAUDERDALE. POOL PARTIES. BEACH DAYS. CRUISES. DANCEFLOORS. THE WARMEST WELCOME IN THE BEAR WORLD — AND FOR 2027, IT'S BIGGER THAN EVER."
  },
  "events-tag": {
    playful: "The tentative day-by-day lineup for 2027 — six days, six vibes, always at The Grand or The Eagle.",
    classic: "The tentative day-by-day programme for 2027 — six days at The Grand and The Eagle.",
    bold:    "SIX DAYS. SIX VIBES. THE TENTATIVE 2027 LINEUP — ALWAYS AT THE GRAND OR THE EAGLE."
  },
  "bears-tag": {
    playful: "Big guys, beards, bellies and best friends. This is who shows up — and who you'll be missing if you don't.",
    classic: "Big men, full beards, good company. This is the crowd you'll find waiting on the sand.",
    bold:    "BIG GUYS. BEARDS. BELLIES. BEST FRIENDS. THIS IS WHO SHOWS UP."
  },
  "posters-tag": {
    playful: "A whole new poster & social set for the rebrand. Three of the drops below — the full collection lives on the campaign board.",
    classic: "An entirely new poster and social suite for the rebrand. A few selections below; the full set lives on the campaign board.",
    bold:    "A WHOLE NEW POSTER & SOCIAL SET. THREE DROPS BELOW — FULL COLLECTION ON THE BOARD."
  },
  "tickets-tag": {
    playful: "One wristband, all week, every party. Early-bear pricing won't last — and neither will the rooms.",
    classic: "One wristband for the entire week and every event. Early pricing and host rooms are limited.",
    bold:    "ONE BAND. ALL WEEK. EVERY PARTY. EARLY PRICING WON'T LAST — NEITHER WILL THE ROOMS."
  }
};

function TBWApp() {
  const [t, setTweak] = useTweaks(TBW_TWEAK_DEFAULTS);

  React.useEffect(() => { document.body.dataset.density = t.density; }, [t.density]);
  React.useEffect(() => { document.documentElement.style.setProperty('--coral', t.accent); }, [t.accent]);
  React.useEffect(() => {
    Object.keys(TBW_COPY).forEach((id) => {
      const el = document.getElementById(id);
      if (el && TBW_COPY[id][t.tone]) el.textContent = TBW_COPY[id][t.tone];
    });
  }, [t.tone]);

  return (
    <React.Fragment>
      <span aria-hidden="true" style={{ display: 'none' }} data-tweaks-ready=""></span>
      <TweaksPanel title="Tweaks">
      <TweakSection label="Layout" />
      <TweakRadio label="Density" value={t.density}
        options={['compact', 'cozy', 'spacious']}
        onChange={(v) => setTweak('density', v)} />
      <TweakSection label="Copy" />
      <TweakRadio label="Tone" value={t.tone}
        options={['playful', 'classic', 'bold']}
        onChange={(v) => setTweak('tone', v)} />
      <TweakSection label="Brand" />
      <TweakColor label="Tropical accent" value={t.accent}
        options={['#ef8273', '#f4b6bf', '#e6a23c', '#19b1a6']}
        onChange={(v) => setTweak('accent', v)} />
    </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-host')).render(<TBWApp />);
