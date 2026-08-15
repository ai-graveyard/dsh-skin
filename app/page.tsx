import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkinPreview } from "@/components/skin-preview";
import { getSkins } from "@/lib/skins";

export default async function Home() {
  const skins = await getSkins();
  const featured = skins[0];
  const skinCount = String(skins.length).padStart(2, "0");

  return (
    <main>
      <div className="shell">
        <SiteHeader />

        <section className="home-hero">
          <div className="section-rail">
            <span>01</span>
            <p>Community skin archive</p>
            <p>DSH / WEB INTERFACE</p>
          </div>

          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <p className="eyebrow">Independent surfaces for DeepSeek Harness</p>
              <h1>
                Change the surface.
                <span>Keep the machine.</span>
              </h1>
            </div>

            <div className="home-hero-meta">
              <p className="home-hero-lede">
                A small, open archive of visual skins for the Harness Web UI.
                Install locally. Remove cleanly. Keep the underlying tool intact.
              </p>
              <dl className="hero-specs">
                <div><dt>CATALOGUE</dt><dd>{skinCount}</dd></div>
                <div><dt>FORMAT</dt><dd>CSS / PLUGIN</dd></div>
                <div><dt>TELEMETRY</dt><dd>NONE</dd></div>
              </dl>
              <a className="button button-dark" href="#collection">
                View collection <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        {featured ? (
          <section className="collection" id="collection">
            <div className="section-rail">
              <span>02</span>
              <p>Collection</p>
              <p>{skinCount} SKIN{skins.length === 1 ? "" : "S"} AVAILABLE</p>
            </div>

            <Link className="featured-card" href={`/skins/${featured.slug}`}>
              <div className="featured-visual">
                <SkinPreview skin={featured} compact />
              </div>
              <div className="featured-info">
                <div>
                  <p className="eyebrow">NO. 001 / V{featured.version}</p>
                  <h2>{featured.name}</h2>
                </div>
                <div className="featured-description">
                  <p>{featured.description}</p>
                </div>
                <dl className="featured-specs">
                  <div><dt>STATUS</dt><dd>{featured.status}</dd></div>
                  <div><dt>STYLE</dt><dd>{featured.style.join(" / ")}</dd></div>
                </dl>
                <div className="card-action">Open record <span aria-hidden="true">↗</span></div>
              </div>
            </Link>
          </section>
        ) : null}

        <section className="submit-strip">
          <p>03 / SUBMISSIONS</p>
          <h2>Made something useful?</h2>
          <a href="https://github.com/ai-graveyard/dsh-skin/blob/main/CONTRIBUTING.md">
            Add it to the archive <span aria-hidden="true">↗</span>
          </a>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
