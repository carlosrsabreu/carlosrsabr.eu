import { FiTwitter, FiInstagram, FiGithub, FiMail } from 'react-icons/fi'

const socialMedia = [
  {
    id: 'twitter',
    url: 'https://twitter.com/carlosrsabreu',
    Icon: <FiTwitter />
  },
  {
    id: 'instagram',
    url: 'https://instagram.com/carlosrsabreu',
    Icon: <FiInstagram />
  },
  { id: 'github', url: 'https://github.com/carlosrsabreu', Icon: <FiGithub /> },
  { id: 'email', url: 'mailto:carlosrsabreu@gmail.com', Icon: <FiMail /> }
]

const Footer = () => {
  return (
    <div
      className="x:mt-32 x:flex x:justify-between"
      data-pagefind-ignore="all"
    >
      {new Date().getFullYear()} © Carlos Silva Abreu
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '14px'
        }}
      >
        {socialMedia.map(({ id, url, Icon }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignContent: 'center' }}
          >
            {Icon}
          </a>
        ))}
        <a href="/rss.xml">RSS</a>
      </div>
    </div>
  )
}

export { Footer }
