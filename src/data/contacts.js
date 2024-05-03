import { v4 as uuid } from 'uuid';

//icons
import GithubIcon from '@public/icons/social-media-icons/GithubIcon';
import LineIcon from '@public/icons/social-media-icons/LineIcon';
import LinkedInIcon from '@public/icons/social-media-icons/LinkedInIcon';
import MessengerIcon from '@public/icons/social-media-icons/MessengerIcon';
import TelegramIcon from '@public/icons/social-media-icons/TelegramIcon';

export const contacts = [
    {
        id: uuid(),
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/lin-htin-nyein-193603171',
        image: '/images/socials/linkedin.png',
        icon: <LinkedInIcon size={14}/>
    },
    {
        id: uuid(),
        name: 'GitHub',
        link: 'https://www.github.com/lynnhtinnyein',
        image: '/images/socials/github.png',
        icon: <GithubIcon size={14}/>
    },
    {
        id: uuid(),
        name: 'Telegram',
        link: 'https://t.me/+959974066464',
        image: '/images/socials/telegram.png',
        icon: <TelegramIcon size={14}/>
    },
    {
        id: uuid(),
        name: 'Messenger',
        link: 'https://www.m.me/lynnhtinnyein',
        image: '/images/socials/messenger.png',
        icon: <MessengerIcon size={14}/>
    },
    {
        id: uuid(),
        name: 'LINE',
        link: 'https://line.me/ti/p/3o4XW0WDvz',
        image: '/images/socials/line.png',
        icon: <LineIcon size={14}/>
    }
]