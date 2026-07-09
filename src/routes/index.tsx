import { createFileRoute } from "@tanstack/react-router";
import heroCnc from "@/assets/hero-cnc.jpg";
import partBracketAsset from "@/assets/part-bracket.jpg.asset.json";
import partBrassAsset from "@/assets/part-brass.jpg.asset.json";
import workshopMillAsset from "@/assets/workshop-mill.jpg.asset.json";

const partAero = partBracketAsset.url;
const partShaft = partBrassAsset.url;
const partMedical = workshopMillAsset.url;
const workshop = workshopMillAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const capabilities = [
  {
    code: "01",
    title: "Tournage CNC",
    desc: "Pièces cylindriques de Ø 3 à 400 mm. Tolérances jusqu'au centième.",
    specs: "Ø 3–400 mm · ±0,01 mm",
  },
  {
    code: "02",
    title: "Fraisage 3 & 5 axes",
    desc: "Formes complexes, poches, surfaces courbes. Prototypage rapide et séries.",
    specs: "Course 800×500×500 mm",
  },
  {
    code: "03",
    title: "Matières",
    desc: "Aciers, inox, aluminium, titane, laiton, plastiques techniques.",
    specs: "Inox 316L · Ti Gr5 · 7075",
  },
  {
    code: "04",
    title: "Contrôle qualité",
    desc: "Métrologie tridimensionnelle, PV de contrôle, traçabilité matière.",
    specs: "MMT · ISO 9001",
  },
];

const gallery = [
  { img: partAero, ref: "REF-A247", title: "Support aéronautique", material: "Aluminium 7075", tol: "±0,015 mm" },
  { img: partShaft, ref: "REF-S118", title: "Arbre de transmission", material: "Inox 316L", tol: "±0,01 mm" },
  { img: partMedical, ref: "REF-M092", title: "Composant médical", material: "Titane Grade 5", tol: "±0,005 mm" },
];

const sectors = ["Aéronautique", "Médical", "Automobile", "Énergie", "Défense", "Robotique"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-sm bg-primary">
              <div className="size-3 rounded-full border-2 border-primary-foreground" />
            </div>
            <span className="font-display text-sm font-semibold tracking-tight">
              Précision<span className="text-primary">.</span>Métal
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#savoir-faire" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Savoir-faire</a>
            <a href="#realisations" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Réalisations</a>
            <a href="#atelier" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Atelier</a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Devis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="mono-label">Atelier · Depuis 1998</span>
              <span className="h-px w-10 bg-border" />
              <span className="mono-label text-primary">ISO 9001</span>
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              La précision <br />
              qui fait <span className="italic text-primary">tourner</span> <br />
              l'industrie.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Tournage et fraisage CNC de haute précision. Nous façonnons les pièces
              métalliques essentielles à vos machines, prototypes et séries.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Demander un devis
                <span aria-hidden>→</span>
              </a>
              <a
                href="#realisations"
                className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium text-foreground transition-colors hover:border-primary"
              >
                Voir nos réalisations
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="mono-label">Tolérance</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">±5 µm</dd>
              </div>
              <div>
                <dt className="mono-label">Machines</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">12</dd>
              </div>
              <div>
                <dt className="mono-label">Pièces / an</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">240k</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 border border-border" />
            <img
              src={heroCnc}
              alt="Tour à commande numérique usinant une pièce en acier inoxydable"
              width={1080}
              height={1440}
              className="relative aspect-[3/4] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-sm bg-background/90 px-3 py-2 backdrop-blur">
              <div className="mono-label text-primary">EN COURS</div>
              <div className="mt-1 font-mono text-xs">CNC-04 · Inox 316L</div>
            </div>
          </div>
        </div>
      </header>

      {/* Sectors ticker */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-6 py-5">
          <span className="mono-label">Secteurs servis</span>
          {sectors.map((s) => (
            <span key={s} className="font-display text-sm font-medium text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section id="savoir-faire" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="mono-label text-primary">§ 01 — Savoir-faire</span>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-4xl">
                Quatre disciplines. Une seule exigence : la tolérance juste.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              De l'unitaire à la moyenne série, nous adaptons nos moyens à chaque cahier
              des charges.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.code} className="group bg-card p-8 transition-colors hover:bg-secondary">
                <div className="flex items-baseline justify-between">
                  <span className="mono-label text-primary">{c.code}</span>
                  <span className="mono-label">{c.specs}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="mono-label text-primary">§ 02 — Réalisations</span>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Pièces récentes sorties de l'atelier.
              </h2>
            </div>
            <span className="mono-label">Archive 2026</span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {gallery.map((p) => (
              <article key={p.ref} className="group">
                <div className="relative overflow-hidden border border-border bg-graphite">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-sm bg-background/80 px-2 py-1 backdrop-blur">
                    <span className="mono-label text-primary">{p.ref}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between border-b border-border pb-3">
                  <h3 className="font-display text-base font-semibold">{p.title}</h3>
                  <span className="mono-label">{p.tol}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Matière : {p.material}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier */}
      <section id="atelier" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <img
              src={workshop}
              alt="Atelier de tournage-fraisage avec parc de machines CNC"
              width={1600}
              height={900}
              loading="lazy"
              className="aspect-[16/10] w-full border border-border object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="mono-label text-primary">§ 03 — Atelier</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              1 200 m² dédiés à l'usinage de précision.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Notre parc machines réunit tours 2 et 3 axes, centres d'usinage 3 et 5 axes,
              rectifieuses et moyens de contrôle tridimensionnel. Une organisation en flux
              tiré nous permet de tenir des délais courts sans compromis sur la qualité.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Bureau d'études intégré · CAO/FAO",
                "Traçabilité matière et contrôle 100 %",
                "Prototypage sous 5 jours ouvrés",
                "Traitements de surface partenaires",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="mono-label text-primary">§ 04 — Contact</span>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold md:text-5xl">
                Envoyez-nous votre plan. <br />
                <span className="text-muted-foreground">Nous répondons sous 24 h.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                DXF, STEP, IGES ou plan papier — notre bureau d'études étudie chaque
                demande et vous transmet un devis chiffré avec délai.
              </p>
              <a
                href="mailto:devis@precision-metal.fr"
                className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                devis@precision-metal.fr
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="space-y-6 border-l border-border pl-8">
              <div>
                <span className="mono-label">Fondateur</span>
                <p className="mt-2 text-sm">
                  Mohamed Ali Kochbati<br />
                  <span className="text-muted-foreground">20 ans d'expérience</span>
                </p>
              </div>
              <div>
                <span className="mono-label">Atelier</span>
                <p className="mt-2 text-sm">
                  Ariana Borj Touil<br />
                  2032, Tunisie
                </p>
              </div>
              <div>
                <span className="mono-label">Téléphone</span>
                <p className="mt-2 font-mono text-sm">+216 21 619 922</p>
              </div>
              <div>
                <span className="mono-label">Horaires</span>
                <p className="mt-2 text-sm">Lun–Ven · 7 h 30 – 17 h 30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-sm bg-primary">
              <div className="size-2.5 rounded-full border-2 border-primary-foreground" />
            </div>
            <span className="font-display text-sm font-semibold">
              Précision<span className="text-primary">.</span>Métal
            </span>
          </div>
          <span className="mono-label">© 2026 · SIRET 000 000 000 00000</span>
          <div className="flex gap-6">
            <a href="#" className="mono-label transition-colors hover:text-foreground">Mentions</a>
            <a href="#" className="mono-label transition-colors hover:text-foreground">RGPD</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
