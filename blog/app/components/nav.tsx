import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
}

export function Navbar() {
  return (
    <aside className="ml-[-8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row justify-between px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative pr-4" id="nav">
          <div className="flex items-center space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link key={path} href={path} className="flex align-middle py-1 px-2 m-1 text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-transform duration-200">
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/joshieyu"
              className="flex items-center transition-transform duration-200 dark:text-neutral-200 text-neutral-800 dark:text-neutral-200 hover:scale-105"
            >
              <p className="ml-2 h-7">↗ github</p>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/joshuayuucf/"
              className="flex items-center transition-transform duration-200 dark:text-neutral-200 text-neutral-800 dark:text-neutral-200 hover:scale-105"
            >
              <p className="ml-2 h-7">↗  linkedin</p>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://open.spotify.com/artist/7CJbtHOk8w2eDL5nRiBSyf?si=QOkSykBeR_SBt4eaD2g1zQ"
              className="flex items-center transition-transform duration-200 dark:text-neutral-200 text-neutral-800 dark:text-neutral-200 hover:scale-105"
            >
              <p className="ml-2 h-7">↗  spotify</p>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
