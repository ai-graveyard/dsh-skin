import Link from "next/link";

const repository = "https://github.com/ai-graveyard/dsh-skin";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="DSH Skin home">
        <img
          className="wordmark-logo"
          src="/dsh-skin-logo.svg?v=rounded-whale-traced"
          width="269"
          height="40"
          alt=""
          aria-hidden="true"
        />
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/#collection">01 / Skins</Link>
        <a href={`${repository}/blob/main/CONTRIBUTING.md`}>02 / Submit</a>
        <a className="nav-source" href={repository}>
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
