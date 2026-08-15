import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkinPreview } from "@/components/skin-preview";
import { getSkins } from "@/lib/skins";

export default async function Home() {
  const skins = await getSkins();
  const featured = skins[0];

  return (
    <main>
      <div className="shell">
        <SiteHeader />

        <section className="hero">
          <div className="hero-kicker">
            <span className="status-light" /> Community skin archive
          </div>
          <h1>
            Give Harness
            <br />
            <em>a different surface.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Independent visual skins for DeepSeek Harness. Install in minutes,
              remove without a trace.
            </p>
            <a className="button button-dark" href="#collection">
              Explore {String(skins.length).padStart(2, "0")} skin
              {skins.length === 1 ? "" : "s"} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-index" aria-hidden="true">
            01 / {String(Math.max(skins.length, 1)).padStart(2, "0")}
          </div>
        </section>

        {featured ? (
          <section className="collection" id="collection">
            <div className="section-heading">
              <p>THE COLLECTION</p>
              <p>{String(skins.length).padStart(2, "0")} SKIN AVAILABLE</p>
            </div>

            <Link className="featured-card" href={`/skins/${featured.slug}`}>
              <div className="featured-visual">
                <SkinPreview skin={featured} compact />
                <div className="featured-number">01</div>
              </div>
              <div className="featured-info">
                <div>
                  <p className="eyebrow">FEATURED SKIN · V{featured.version}</p>
                  <h2>{featured.name}</h2>
                  <p className="featured-tagline">{featured.tagline}</p>
                </div>
                <div className="featured-meta">
                  <p>{featured.description}</p>
                  <div className="style-list">
                    {featured.style.map((style) => <span key={style}>{style}</span>)}
                  </div>
                </div>
                <div className="card-arrow" aria-hidden="true">↗</div>
              </div>
            </Link>
          </section>
        ) : null}

        <section className="submit-strip">
          <p>MADE SOMETHING GOOD?</p>
          <h2>Put your skin in the archive.</h2>
          <a href="https://github.com/ai-graveyard/dsh-skin/blob/main/CONTRIBUTING.md">
            Submit a skin <span aria-hidden="true">↗</span>
          </a>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
