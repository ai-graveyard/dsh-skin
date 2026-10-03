import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkinPreview } from "@/components/skin-preview";
import { getSkins } from "@/lib/skins";
import { contributingUrl } from "@/lib/site";

export default async function Home() {
  const skins = await getSkins();
  const featured = skins.find((skin) => skin.featured) ?? skins[0];
  const indexSkins = skins.filter((skin) => skin.slug !== featured?.slug);
  const skinCount = String(skins.length).padStart(2, "0");

  return (
    <main>
      <div className="shell">
        <SiteHeader />

        <section className="home-hero">
          <div className="section-rail">
            <span>01</span>
            <p>DSH Skin / Official collection</p>
            <p>DSH / DESKTOP CLIENT</p>
          </div>

          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <p className="eyebrow">Ten classic designs for the Harness desktop client</p>
              <h1>
                Change the surface.
                <span>Keep the machine.</span>
              </h1>
            </div>

            <div className="home-hero-meta">
              <p className="home-hero-lede">
                Ten carefully crafted desktop skins, recommended by DSH Skin.
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
              <p>{skinCount} SKIN{skins.length === 1 ? "" : "S"} / DESKTOP QA</p>
            </div>

            <Link className="featured-card" href={`/skins/${featured.slug}`} aria-label={`View ${featured.name} skin`}>
              <div className="featured-visual">
                <SkinPreview skin={featured} compact />
              </div>
              <div className="featured-info">
                <div>
                  <p className="eyebrow">OFFICIAL / NO. {String(featured.order).padStart(3, "0")} / V{featured.version}</p>
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

            {indexSkins.length > 0 ? (
              <div className="collection-index" aria-label="More skins">
                <div className="collection-index-heading">
                  <p className="eyebrow">FULL INDEX</p>
                  <p>{String(indexSkins.length).padStart(2, "0")} MORE RECORD{indexSkins.length === 1 ? "" : "S"}</p>
                </div>
                <div className="skin-index-grid">
                  {indexSkins.map((skin) => (
                    <Link className="skin-index-card" href={`/skins/${skin.slug}`} key={skin.slug} aria-label={`View ${skin.name} skin`}>
                      <div className="skin-index-visual">
                        <SkinPreview skin={skin} compact />
                      </div>
                      <div className="skin-index-copy">
                        <div>
                          <p className="eyebrow">OFFICIAL / NO. {String(skin.order).padStart(3, "0")} / V{skin.version}</p>
                          <h3>{skin.name}</h3>
                        </div>
                        <p>{skin.tagline}</p>
                        <span aria-hidden="true">↗</span>
                      </div>
                    </Link>
                  ))}
                  <a
                    className="skin-index-card skin-index-placeholder"
                    href={contributingUrl}
                  >
                    <span className="slot-number">{String(skins.length + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="eyebrow">COMMUNITY RECORD</p>
                      <h3>Open slot.</h3>
                      <p>Build a useful surface and add it to the archive.</p>
                    </div>
                    <span className="slot-action">Submission guide ↗</span>
                  </a>
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        <section className="submit-strip">
          <p>03 / SUBMISSIONS</p>
          <h2>Made something useful?</h2>
          <a href={contributingUrl}>
            Add it to the archive <span aria-hidden="true">↗</span>
          </a>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
