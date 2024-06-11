export const projects = [
    {
        id: 1,
        name: "ModernCharm",
        status: "Released",
        about:
            `A fully functional one-stop Gold & Jewelry Retail POS app with client-side print system, 
            in which debts management and mortgage management systems are already packed. 
            It can make jewelry retail sale smart, easy and fast. Why? Because jewelries are sold by according to up-to-date goldprice 
            and sale-staffs have to recalculate the price each time customers ask for certain item's price, but with this app, 
            jewelries prices are already calculated and saved according to thier gold-quality, goldprice, gem-quality and other custom specifications. 
            This app can be used as a PWA supported web app, or mobile version is also available as an optional.
            `,
        showcaseImage: "moderncharm.png",
        link: "https://www.kaungsan.com",
        mainFeatures: [
            "Custom UI",
            "Fully responsive for all screen sizes",
            "PWA supported",
            "Create seperate user accounts with different permissions",
            "Client-side receipt print",
            "Debts and mortgages management system with receipt print",
            "Powerful search filters",
            "Daily, monthly, yearly sale reports and profits calculation",
            "and so on..."
        ],
        teches: [
            "React",
            "ReactNative",
            "Custom Stack Router",
            "Redux",
            "Tailwind",
            "Laravel",
            "ReactPickDate"
        ],
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 9,
        },
    },
    {
        id: 2,
        name: 'iCafe',
        status: 'OnGoing',
        about: `
            A complete restaurant order system and stock management app with realtime data sync between multiple devices by specific store. 
            It also support to connect multiple stores and branches.`,
        showcaseImage: 'icafe.png',
        link: "http://icafe2.izhhz.com",
        mainFeatures: [
            "Realtime data sync between devices", 
            "Will be available as web-based app or mobile app",
            "Fully reponsive design",
            "Dark light mode available",
        ],
        teches: [
            "React",
            "CoreCSS",
            "React MUI",
            "Socket",
            "Laravel"
        ],
        numbersOfScreenshots: {
            desktop: 5,
            mobile: 4,
        },
    },
    {
        id: 3,
        name: "WholeSaleGem",
        status: "OnGoing",
        about:
            `WholeSaleGem is designed to completely solve common problems of Gold & Jewelry WholeSale with ease of use.
            It is a package of including 2 seperated offline apps, office-side app for stock management and client-side POS app for instant sale. 
            They can sync data each other when online is available.`,
        showcaseImage: 'wholesalegem.png',
        link: null,
        mainFeatures: [
            "Custom Blurry UI",
            "Fully responsive for all screen sizes",
            "PWA supported",
            "Available offline and sync data when online",
            "Convert automatically gram and myanmar weight unit",
            "Convert weight by selected gold-quality",
            "and so on..."
        ],
        teches: [
            "ReactNative",
            "Redux",
            "Tailwind",
            "Laravel",
            "MySQL"
        ],
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 3,
        },
    },
    {
        id: 4,
        name: "FlyWords",
        status: "Released",
        about:
            "The real instant Messenger which will let you and your friends connect instantly. No Registration, No Activation required.",
        showcaseImage: 'flywords.png',
        link: "https://flywords-messenger.vercel.app",
        mainFeatures: [
            "Powered by socket.io",
            "Chat instantly without registration",
            "Can view joined users in each channel",
            "Fully reponsive design",
            "Dark light mode available",
            "and so on..."
        ],
        teches: [
            "NextJS", 
            "ContextAPI", 
            "Socket", 
            "Tailwind"
        ],
        numbersOfScreenshots: {
            desktop: 2,
            mobile: 2,
        },
    },
    {
        id: 5,
        name: "NextMove",
        status: "OnGoing",
        about: "A Landing Page for NextMove Technology with animated full screen background.",
        showcaseImage: 'nextmove.png',
        link: "https://thenextmove.net",
        mainFeatures: [
            "Animate on scroll"
        ],
        teches: [
            "NextJS", 
            "VantaJS", 
            "Tailwind"
        ],
        numbersOfScreenshots: {
            desktop: 2,
            mobile: 2,
        },
    },
    {
        id: 6,
        name: "BurmeseFonts",
        status: "Released",
        about:
            "A website to test serveral beautiful burmese fonts styles instantly.",
        showcaseImage: 'burmesefonts.png',
        link: "https://burmesefonts.vercel.app",
        mainFeatures: [
            "Various fonts can be tested live", 
            "Fonts are available as CDN and also available to download",
            "Fully reponsive design",
            "Dark light mode available",
        ],
        teches: [
            "NextJS", 
            "Tailwind",
            "NextAPIRoute", 
            "Tailwind"
        ],
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 3,
        },
    },
    {
        id: 7,
        name: "MortgagePro",
        status: "OnGoing",
        about:
            "This app is born to solve headache of mortgage business such as monthly interest cost calculation, withraw cost calculation, reminder for expired collaterals and many more.",
        showcaseImage: 'mortgagepro.png',
        teches: ["React", "Redux", "Tailwind", "Laravel"],
        link: null,
        mainFeatures: [
            "Interest calculation by interest-rate and duration", 
            "Client-side receipt Print",
            "Interest payment history",
            "Alert for overdue items",
            "Fully reponsive design",
        ],
        teches: [
            "React", 
            "Tailwind",
            "Redux", 
            "Laravel",
            "ReactPickDate"
        ],
        numbersOfScreenshots: {
            desktop: 1,
            mobile: 4,
        },
    },
    {
        id: 8,
        name: "ReactPickDate",
        status: "Released",
        about:
            "A date picker component for React. Will be available as a NPM package soon.",
        showcaseImage: 'reactpickdate.png',
        link: null,
        mainFeatures: [
            "Highlight specific dates",
            "Customizable size",
            "Customizable theme",
            "Adjustable popup position (top, left, ...)",
            "Disable future dates",
            "Disable past dates",
            "Disable dates starting from",
            "Disable dates before",
        ],
        teches: [
            "React", 
            "CoreCss",
        ],
        numbersOfScreenshots: {
            desktop: 1,
            mobile: 0,
        },
    },
    {
        id: 9,
        name: "YoutubeDownloader",
        status: "Released",
        about: "Desktop Youtube downloader app built upon ElectronJS",
        showcaseImage: 'youtubedownloader.png',
        link: null,
        mainFeatures: [
            "Download Youtube videos"
        ],
        teches: ["ytdl", "ElectronJS", "MorphismUI", "CSS"],
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 0,
        },
    },
];
