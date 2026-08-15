import Link from "next/link";

const repository = "https://github.com/ai-graveyard/dsh-skin";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="DSH Skin home">
        <span className="wordmark-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>DSH SKIN</span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/#collection">Skins</Link>
        <a href={`${repository}/blob/main/CONTRIBUTING.md`}>Submit</a>
        <a className="nav-source" href={repository}>
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
