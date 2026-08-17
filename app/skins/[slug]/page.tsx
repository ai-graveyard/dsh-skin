import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyCommand } from "@/components/copy-command";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkinPreview } from "@/components/skin-preview";
import { getSkin, getSkins } from "@/lib/skins";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const repository = "https://github.com/ai-graveyard/dsh-skin";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getSkins()).map((skin) => ({ slug: skin.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const skin = await getSkin((await params).slug);
  if (!skin) return {};

  return {
    title: skin.name,
    description: skin.description,
    alternates: {
      canonical: `/skins/${skin.slug}`,
    },
    openGraph: {
      title: skin.name,
      description: skin.description,
      url: `/skins/${skin.slug}`,
      type: "website",
    },
  };
}

export default async function SkinPage({ params }: PageProps) {
  const skin = await getSkin((await params).slug);
  if (!skin) notFound();

  const cloneCommand = "git clone --depth 1 https://github.com/ai-graveyard/dsh-skin.git";
  const localCommand = `cd dsh-skin && npx @deepseek-ai/dsh plugin --profile web add ./skins/${skin.slug}`;
  const verifyCommand = "npx @deepseek-ai/dsh --profile web --dump-config";
  const removeCommand = `npx @deepseek-ai/dsh plugin --profile web remove ${skin.packageName}`;
  const statusClass = skin.status === "Available" ? "status-available" : "status-experimental";
  const desktopScreenshots = skin.screenshots?.filter((screenshot) => screenshot.viewport === "desktop") ?? [];
  const mobileScreenshots = skin.screenshots?.filter((screenshot) => screenshot.viewport === "mobile") ?? [];

  return (
    <main>
      <div className="shell">
        <SiteHeader />

        <article className="skin-page">
          <Link className="back-link" href="/#collection">← All skins</Link>

          <header className="skin-hero">
            <div className="skin-title">
              <p className="eyebrow">DSH SKIN / {String(skin.order).padStart(3, "0")}</p>
              <h1>{skin.name}</h1>
              <p>{skin.tagline}</p>
            </div>
            <div className="skin-intro">
              <p>{skin.description}</p>
              <div className="skin-colors" aria-label="Skin colors">
                {skin.colors.map((color) => (
                  <span key={color} style={{ background: color }} title={color} role="img" aria-label={color} />
                ))}
              </div>
            </div>
          </header>

          <div className="detail-preview">
            <SkinPreview skin={skin} />
          </div>

          {skin.screenshots?.length ? (
            <section className="real-ui-proof" aria-labelledby="real-ui-title">
              <div className="real-ui-heading">
                <div>
                  <p className="eyebrow">REAL DSH / VISUAL CHECK</p>
                  <h2 id="real-ui-title">Rendered in Harness.</h2>
                </div>
                <p>
                  Captured from an isolated {skin.compatibility} profile. No API key,
                  model request, or personal conversation data is included.
                </p>
              </div>

              <div className="desktop-shot-grid">
                {desktopScreenshots.map((screenshot) => (
                  <figure className="real-ui-shot" key={screenshot.src}>
                    <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} />
                    <figcaption>{screenshot.label}</figcaption>
                  </figure>
                ))}
              </div>

              {mobileScreenshots.length ? (
                <div className="mobile-proof">
                  <div>
                    <p className="eyebrow">NARROW LAYOUT</p>
                    <h3>Settings stay usable at 390px.</h3>
                    <p>
                      The navigation becomes horizontally scrollable, controls stack into one
                      column, and the dialog keeps its content inside the viewport.
                    </p>
                  </div>
                  {mobileScreenshots.map((screenshot) => (
                    <figure className="real-ui-shot real-ui-shot-mobile" key={screenshot.src}>
                      <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} />
                      <figcaption>{screenshot.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          <section className="detail-grid">
            <div className="install-panel">
              <p className="eyebrow">INSTALL LOCALLY</p>
              <h2>Clone, install, verify.</h2>
              <p>
                The skin is linked into your DSH web profile without editing Harness source.
                Keep the cloned directory in place, use one skin at a time, then restart Harness
                or refresh the open tab.
              </p>
              <p className="command-label">01 / CLONE THE COLLECTION</p>
              <CopyCommand command={cloneCommand} />
              <p className="command-label">02 / INSTALL {skin.name.toUpperCase()}</p>
              <CopyCommand command={localCommand} />
              <p className="command-label">03 / VERIFY REGISTRATION</p>
              <CopyCommand command={verifyCommand} />
              <p className="command-label">REMOVE CLEANLY</p>
              <CopyCommand command={removeCommand} />
              <a className="button button-dark" href={`${repository}/tree/main/skins/${skin.slug}`}>
                View package on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>

            <dl className="facts-panel">
              <div>
                <dt>Creator</dt>
                <dd>{skin.author.url ? <a href={skin.author.url}>{skin.author.name} ↗</a> : skin.author.name}</dd>
              </div>
              <div><dt>Version</dt><dd>{skin.version}</dd></div>
              <div>
                <dt>Status</dt>
                <dd><span className={`status-light ${statusClass}`} /> {skin.status}</dd>
              </div>
              <div><dt>Tested with</dt><dd>{skin.compatibility}</dd></div>
              <div><dt>Verified</dt><dd><time dateTime={skin.verifiedAt}>{skin.verifiedAt}</time></dd></div>
              <div><dt>UI states</dt><dd>{skin.verifiedStates.join(" / ")}</dd></div>
              <div><dt>License</dt><dd>{skin.license}</dd></div>
              <div><dt>Style</dt><dd>{skin.style.join(" / ")}</dd></div>
            </dl>
          </section>
        </article>

        <SiteFooter />
      </div>
    </main>
  );
}
