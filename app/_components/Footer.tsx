import { socialLinks } from '../_data/social'

const Footer = () => {
  return (
    <footer className="site-footer" data-pagefind-ignore="all">
      {new Date().getFullYear()} © Carlos Silva Abreu
      <div className="site-footer__social">
        {socialLinks.map(({ id, label, href, Icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon aria-hidden />
          </a>
        ))}
        <a href="/rss.xml">RSS</a>
      </div>
    </footer>
  )
}

export { Footer }
