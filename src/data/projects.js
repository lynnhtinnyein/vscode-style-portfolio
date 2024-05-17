import { v4 as uuid } from 'uuid';

const projects = [
    {
        id: uuid(),
        name: 'ModernCharm',
        status: 'Released',
        short_desc: 'A fully functional Gold & Jewelry Retail POS app, in which debts and mortgage management system are already packed. It makes jewelry retail sale smart and easy.',
        showcase_img: 'moderncharm.png',
        screenshots: [],
    },
    {
        id: uuid(),
        name: 'WholeSaleGem',
        status: 'OnGoing',
        short_desc: 'A powerful Gold & jewelry POS app designed to completely solve common problems of Gold & Jewelry WholeSale.',
        showcase_img: 'wholesalegem.png',
        screenshots: [],
    },
    {
        id: uuid(),
        name: 'FlyWords',
        status: 'Released',
        short_desc: 'The NoFuss Messenger which will let you and your friends connect instantly. No Registration, No Activation required.',
        showcase_img: 'flywords.png',
        screenshots: [],
        
    },
    {
        id: uuid(),
        name: 'NextMove',
        status: 'Released',
        short_desc: 'A Landing Page for NextMove Technology.',
        showcase_img: 'nextmove.png',
        screenshots: [],
    },
    {
        id: uuid(),
        name: 'BurmeseFonts',
        status: 'Released',
        short_desc: 'A website to test serveral beautiful burmese fonts styles live.',
        showcase_img: 'burmesefonts.png',
        screenshots: [],
    },
    // {
    //     id: uuid(),
    //     name: 'iCafe',
    //     status: 'OnGoing',
    //     short_desc: 'A complete restaurant order system and stock management app with realtime data sync which also support to connect multiple stores and branches.',
    //     showcase_img: 'icafe.png',
    //     screenshots: [],
        
    // },
    {
        id: uuid(),
        name: 'MortgagePro',
        status: 'OnGoing',
        short_desc: 'This app is born to solve headache of mortgage business such as monthly interest cost calculation, withraw cost calculation, reminder for expired collaterals and many more.',
        showcase_img: 'mortgagepro.png',
        screenshots: [],
    },
    {
        id: uuid(),
        name: 'ReactPickDate',
        status: 'Released',
        short_desc: 'A date picker component for React. Available as a NPM package.',
        showcase_img: 'datepicker.png',
        screenshots: [],
    },
];

export default projects;