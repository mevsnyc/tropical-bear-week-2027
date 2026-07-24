/* ===========================================================
   Lauderdale Tropical Bear Week 2027 — Campaign board
   Poster + social-ad directions on a design canvas
   =========================================================== */

function Lockup({ variant = "outline coral", size = 64, meta = false, style = {} }) {
  return (
    <div className={"lockup " + variant} style={{ fontSize: size, ...style }}>
      <span className="lk-lauderdale">Lauderdale</span>
      <span className="lk-tropical">Tropical</span>
      <span className="lk-bearweek">Bear Week</span>
      {meta && <span className="lk-meta">The Official Bear Week of South Florida</span>}
    </div>
  );
}

function Cap({ title, sub, light }) {
  return (
    <div className="p-cap" style={light ? { color: "#fff" } : {}}>
      {title}<b>{sub}</b>
    </div>
  );
}

/* ---- Direction 1: photo hero, color block on top ---- */
function PosterPhotoHero({ accent = "", photo = "", capTitle, capSub, lockVariant }) {
  const blockColor = accent === "gold" ? "var(--gold)" : accent === "coral" ? "var(--coral)" : "var(--teal)";
  return (
    <div className="pstr">
      <div className="art">
        <div className="dots p-pad" style={{ background: blockColor, color: "rgba(255,255,255,.45)", flex: "0 0 56%", position: "relative" }}>
          <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
            <Lockup variant={lockVariant || "outline"} size={50} meta />
          </div>
          <div style={{ position: "absolute", left: "7%", bottom: "8%", color: "#fff" }}>
            <div className="p-meta" style={{ fontSize: 13, opacity: .95 }}>March 23 – 28, 2027</div>
          </div>
        </div>
        <div className={"p-photo " + photo} style={{ flex: 1 }}>
          <Cap title={capTitle} sub={capSub} />
        </div>
      </div>
    </div>
  );
}

/* ---- Direction 2: liquid blob pattern, centered lockup ---- */
function PosterPattern({ blob = "", scriptColor = "coral" }) {
  return (
    <div className="pstr">
      <div className={"art blobs " + blob} style={{ justifyContent: "flex-end", alignItems: "flex-start" }}>
        <div className="p-pad" style={{ width: "100%" }}>
          <Lockup variant={"outline " + scriptColor} size={52} meta />
          <div className="p-meta" style={{ color: "#fff", fontSize: 12, marginTop: 14 }}>March 23 – 28, 2027</div>
        </div>
      </div>
    </div>
  );
}

/* ---- Direction 3: banana-leaf full photo ---- */
function PosterLeaf() {
  return (
    <div className="pstr">
      <div className="art p-photo green" style={{ justifyContent: "flex-end" }}>
        <Cap title="BANANA LEAF" sub="dense tropical foliage · dark" light />
        <div className="p-pad" style={{ position: "relative", zIndex: 4, width: "100%" }}>
          <Lockup variant="outline" size={52} meta />
          <div className="p-meta" style={{ color: "#fff", fontSize: 12, marginTop: 14 }}>March 23 – 28, 2027</div>
        </div>
      </div>
    </div>
  );
}

/* ---- Direction 4: deco arch window ---- */
function PosterArch({ bg = "var(--gold)", photo = "", capTitle, capSub, frame = "#fff", script = "gold" }) {
  return (
    <div className="pstr">
      <div className="art p-pad" style={{ background: bg, position: "relative" }}>
        <div className="arch-win" style={{ color: frame }}>
          <div className={"p-photo " + photo} style={{ position: "absolute", inset: 0 }}>
            <Cap title={capTitle} sub={capSub} />
          </div>
        </div>
        <div style={{ position: "absolute", top: "13%", left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 6 }}>
          <Lockup variant={"outline " + script} size={46} />
        </div>
        <div className="p-meta" style={{ position: "absolute", bottom: "6%", left: 0, right: 0, textAlign: "center", color: frame, fontSize: 11, zIndex: 6 }}>The Official Bear Week of South Florida</div>
      </div>
    </div>
  );
}

/* ---- Direction 5: duotone full-bleed, rotated script ---- */
function PosterDuo({ photo = "", duo = "coral", capTitle, capSub, script = "" }) {
  return (
    <div className="pstr">
      <div className={"art p-photo " + photo}>
        <div className={"duo " + duo}></div>
        <Cap title={capTitle} sub={capSub} light />
        <div className="p-overlay">
          <Lockup variant={"outline " + script} size={66} />
        </div>
      </div>
    </div>
  );
}

/* ---- Social square (1:1) ---- */
function SocialBlocks() {
  return (
    <div className="pstr">
      <div className="art blobs" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div className="p-pad">
          <Lockup variant="outline coral" size={50} meta style={{ textAlign: "center" }} />
          <div style={{ display: "inline-block", marginTop: 22, background: "var(--ink)", color: "var(--cream-2)", padding: "11px 22px", fontFamily: "var(--sans)", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", fontSize: 12 }}>Passes on sale now</div>
        </div>
      </div>
    </div>
  );
}
function SocialPhoto() {
  return (
    <div className="pstr">
      <div className="art p-photo green">
        <div className="duo teal" style={{ opacity: .55 }}></div>
        <Cap title="GROUP" sub="5+ bears · nightlife" light />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: "10%", display: "flex", justifyContent: "center", zIndex: 5 }}>
          <Lockup variant="outline" size={48} />
        </div>
      </div>
    </div>
  );
}
function SocialGold() {
  return (
    <div className="pstr">
      <div className="art blobs gold" style={{ alignItems: "flex-start", justifyContent: "flex-end" }}>
        <div className="p-pad">
          <Lockup variant="outline gold" size={48} />
          <div className="p-meta" style={{ color: "var(--ink)", fontSize: 12, marginTop: 12 }}>March 23 – 28 · Fort Lauderdale</div>
        </div>
      </div>
    </div>
  );
}

const PW = 528, PH = 704, SQ = 600;

function Board() {
  return (
    <DesignCanvas>
      <DCSection id="posters" title="Campaign Poster — Directions" subtitle="2027 rebrand · the same key piece explored five ways">
        <DCArtboard id="p1" label="01 · Photo Hero (Teal)" width={PW} height={PH}>
          <PosterPhotoHero accent="" photo="" capTitle="SINGLE BEAR" capSub="poolside · swim brief" lockVariant="outline" />
        </DCArtboard>
        <DCArtboard id="p2" label="02 · Photo Hero (Gold)" width={PW} height={PH}>
          <PosterPhotoHero accent="gold" photo="coral" capTitle="COUPLE" capSub="in the surf · laughing" lockVariant="outline" />
        </DCArtboard>
        <DCArtboard id="p3" label="03 · Liquid Pattern" width={PW} height={PH}>
          <PosterPattern blob="" scriptColor="pink" />
        </DCArtboard>
        <DCArtboard id="p4" label="04 · Banana Leaf" width={PW} height={PH}>
          <PosterLeaf />
        </DCArtboard>
        <DCArtboard id="p5" label="05 · Deco Arch" width={PW} height={PH}>
          <PosterArch bg="var(--gold)" photo="gold" capTitle="SOLO" capSub="beach · mid-50s" frame="#fff" script="" />
        </DCArtboard>
        <DCArtboard id="p6" label="06 · Duotone Overlay" width={PW} height={PH}>
          <PosterDuo photo="coral" duo="coral" capTitle="COUPLE" capSub="candid · close" script="" />
        </DCArtboard>
      </DCSection>

      <DCSection id="social" title="Social Ads (1:1)" subtitle="Instagram / paid square cuts">
        <DCArtboard id="s1" label="Pattern + CTA" width={SQ} height={SQ}>
          <SocialBlocks />
        </DCArtboard>
        <DCArtboard id="s2" label="Nightlife photo" width={SQ} height={SQ}>
          <SocialPhoto />
        </DCArtboard>
        <DCArtboard id="s3" label="Gold pattern" width={SQ} height={SQ}>
          <SocialGold />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Board />);
