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
  };
}

export default async function SkinPage({ params }: PageProps) {
  const skin = await getSkin((await params).slug);
  if (!skin) notFound();

  const localCommand = `npx @deepseek-ai/dsh plugin --profile web add ./skins/${skin.slug}`;
  const removeCommand = `npx @deepseek-ai/dsh plugin --profile web remove dsh-skin-${skin.slug}`;

  return (
    <main>
      <div className="shell">
        <SiteHeader />

        <article className="skin-page">
          <Link className="back-link" href="/#collection">← All skins</Link>

          <header className="skin-hero">
            <div className="skin-title">
              <p className="eyebrow">DSH SKIN / 001</p>
              <h1>{skin.name}</h1>
              <p>{skin.tagline}</p>
            </div>
            <div className="skin-intro">
              <p>{skin.description}</p>
              <div className="skin-colors" aria-label="Skin colors">
                {skin.colors.map((color) => (
                  <span key={color} style={{ background: color }} title={color} />
                ))}
              </div>
            </div>
          </header>

          <div className="detail-preview">
            <SkinPreview skin={skin} />
          </div>

          <section className="detail-grid">
            <div className="install-panel">
              <p className="eyebrow">INSTALL LOCALLY</p>
              <h2>One command. No source edits.</h2>
              <p>
                Clone the collection, then link this skin into your DSH web profile.
                Restart Harness or refresh the open tab when installation finishes.
              </p>
              <CopyCommand command={localCommand} />
              <p className="command-label">REMOVE</p>
              <CopyCommand command={removeCommand} />
              <a className="button button-dark" href={`${repository}/tree/main/skins/${skin.slug}`}>
                View package on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>

            <dl className="facts-panel">
              <div><dt>Creator</dt><dd><a href={skin.author.url}>{skin.author.name} ↗</a></dd></div>
              <div><dt>Version</dt><dd>{skin.version}</dd></div>
              <div><dt>Status</dt><dd><span className="status-light" /> {skin.status}</dd></div>
              <div><dt>Tested with</dt><dd>{skin.compatibility}</dd></div>
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
