import { FiTwitter, FiInstagram, FiGithub, FiMail } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export type SocialLink = {
  id: string
  label: string
  href: string
  Icon: IconType
}

export const socialLinks: readonly SocialLink[] = [
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/carlosrsabreu',
    Icon: FiTwitter
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/carlosrsabreu',
    Icon: FiInstagram
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/carlosrsabreu',
    Icon: FiGithub
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:carlosrsabreu@gmail.com',
    Icon: FiMail
  }
]
