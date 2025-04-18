export const applications: Project[] = [
    {
        id: 1,
        name: "Modern Charm",
        status: "Released",
        about: `A fully functional one-stop Gold & Jewelry Retail POS app with client-side print system, in which debts management and mortgage management systems are already packed as modular components. It can make jewelry retail sale smart, easy and fast. Why? Because jewelries are sold according to up-to-date goldprice and sale-staffs have to recalculate the price each time customers ask for certain item's price, but with this app, jewelries prices are already calculated and saved according to their gold-quality, goldprice, gem-quality and other custom specifications. This app can be used as a PWA supported web app, or mobile version is also available as an optional.
            `,
        mainFeatures: [
            "Custom UI",
            "Infinite scroll pagination system similar to a mobile app",
            "Fully responsive for all screen sizes",
            "PWA supported",
            "Create separate user accounts with individually scoped permissions (inspired by GitHub's scoped tokens)",
            "Client-side receipt print system",
            "Debts and mortgages management system with receipt print",
            "Powerful and rich search filters",
            "Daily, monthly, yearly sale reports and profits calculation",
            "and so on...",
        ],
        teches: [
            "React",
            "TypeScript",
            "ReactNative",
            "Expo",
            "Redux",
            "React Query",
            "TailwindCss",
            "Laravel",
            "Custom Stack Router",
            "React Bare DatePicker",
        ],
        showcaseImage: "modern-charm.png",
        link: "https://www.kaungsan.com",
        imageSource: "modern-charm",
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 9,
        },
    },
    {
        id: 2,
        name: "iCafe",
        status: "Released",
        about: `
            A complete restaurant order system and stock management app with realtime data sync between multiple devices by specific store. 
            It also support to connect multiple stores and branches.`,
        mainFeatures: [
            "Realtime data sync between devices",
            "Will be available as web-based app or mobile app",
            "Fully reponsive design",
            "Dark light mode available",
        ],
        teches: ["React", "CoreCSS", "Material UI", "Socket", "Laravel"],
        showcaseImage: "icafe.png",
        link: "http://icafe2.izhhz.com",
        imageSource: "i-cafe",
        numbersOfScreenshots: {
            desktop: 5,
            mobile: 4,
        },
    },
    {
        id: 3,
        name: "WholeSaleGem",
        status: "OnGoing",
        about: `WholeSaleGem is designed to completely solve common problems of Gold & Jewelry WholeSale with ease of use.
            It is a package of including 2 seperated offline apps, office-side app for stock management and client-side POS app for instant sale. 
            They can sync data each other when online is available.`,
        mainFeatures: [
            "Custom Blurry UI",
            "Fully responsive for all screen sizes",
            "PWA supported",
            "Available offline and sync data when online",
            "Convert automatically gram and myanmar weight unit",
            "Convert weight by selected gold-quality",
            "and so on...",
        ],
        teches: ["ReactNative", "Redux", "TailwindCss", "Laravel", "MySQL"],
        showcaseImage: "wholesale-gem.png",
        link: null,
        imageSource: "wholesale-gem",
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 3,
        },
    },
    {
        id: 4,
        name: "FlyWords Messenger",
        status: "OnGoing",
        about: "The real instant Messenger which will let you and your friends connect instantly. No Registration, No Activation required.",
        mainFeatures: [
            "Powered by socket.io",
            "Chat instantly without registration",
            "Can view joined users in each channel",
            "Fully reponsive design",
            "Dark light mode available",
            "and so on...",
        ],
        teches: ["NextJS", "ContextAPI", "Socket", "TailwindCss"],
        showcaseImage: "flywords-messenger.png",
        link: "https://flywords-messenger.vercel.app",
        imageSource: "flywords-messenger",
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
        mainFeatures: ["Animate on scroll"],
        teches: ["NextJS", "VantaJS", "TailwindCss"],
        showcaseImage: "nextmove.png",
        link: "https://thenextmove.net",
        imageSource: "next-move",
        numbersOfScreenshots: {
            desktop: 2,
            mobile: 2,
        },
    },
    {
        id: 6,
        name: "BurmeseFonts",
        status: "Released",
        about: "BurmeseFonts is a web application designed to showcase and provide easy access to a collection of beautiful Burmese font styles.",
        mainFeatures: [
            "Various fonts can be tested live",
            "Fonts are available as CDN and also available to download",
            "Reponsive design",
            "PWA Supported",
            "Dark/light switch",
        ],
        teches: ["NextJS", "NextAPI", "TailwindCss"],
        showcaseImage: "burmese-fonts.png",
        link: "https://burmesefonts.vercel.app",
        imageSource: "burmese-fonts",
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 3,
        },
    },
    {
        id: 7,
        name: "MortgagePro",
        status: "OnGoing",
        about: "A specialized module within the Modern Charm ecosystem, born to solve headaches of mortgage business such as monthly interest cost calculation, withdraw cost calculation, reminder for expired collaterals and many more. Can be used as a standalone POS software or integrated within the Modern Charm platform.",
        mainFeatures: [
            "Interest calculation by interest-rate and duration",
            "Client-side receipt Print",
            "Interest payment history",
            "Alert for overdue items",
            "Fully reponsive design",
        ],
        teches: [
            "React",
            "TypeScript",
            "TailwindCss",
            "Redux",
            "React Query",
            "Laravel",
            "React Bare DatePicker",
        ],
        showcaseImage: "mortgage-pro.png",
        link: null,
        imageSource: "mortgage-pro",
        numbersOfScreenshots: {
            desktop: 1,
            mobile: 4,
        },
    },
    {
        id: 8,
        name: "YoutubeDownloader",
        status: "Released",
        about: "Desktop Youtube downloader app built upon ElectronJS and ytdl-core.",
        mainFeatures: ["Download Youtube videos"],
        teches: ["ytdl-core", "ElectronJS", "MorphismUI", "CoreCss"],
        showcaseImage: "youtube-downloader.png",
        link: null,
        imageSource: "youtube-downloader",
        numbersOfScreenshots: {
            desktop: 3,
            mobile: 0,
        },
    },
];

export const packages: Project[] = [
    {
        id: 9,
        name: "React Bare DatePicker",
        status: "Released",
        about: "A fully customizable React date picker designed for flexibility and ease of use. This library gives you complete control and injection over every component while maintaining a simple and intuitive API.",
        mainFeatures: [
            "Component Injection: Replace any part of the UI with your own custom components",
            "Simple API: Straightforward props for injecting custom UI elements without complexity",
            "Custom Triggers: Use any component as your datepicker trigger",
            "Flexible Date Restrictions: Easily disable future dates, past dates, or specific date ranges",
            "Highlighted Dates: Effortlessly highlight important dates in the calendar",
            "Flexible Positioning: Control the popup positioning with options like 'bottom center', 'top left', etc.",
        ],
        teches: ["React", "TypeScript", "PopupJS", "CoreCss"],
        showcaseImage: "react-bare-datepicker.png",
        link: "https://www.npmjs.com/package/react-bare-datepicker",
        imageSource: "react-bare-datepicker",
        numbersOfScreenshots: {
            desktop: 1,
            mobile: 0,
        },
    },
    {
        id: 10,
        name: "React Slide Drawer",
        status: "Released",
        about: "React Slide Drawer is a customizable, responsive and user-friendly drawer component for React, inspired by React Native Navigation. It supports multiple drawer types and smooth animations, making it perfect for implementing side navigation drawers. The front drawer type is especially optimized for mobile use, providing a traditional overlay-style drawer that slides over the content, while other types cater to both mobile and desktop needs.",
        mainFeatures: [
            "front: A traditional drawer that covers the screen with an overlay behind it.",
            "slide: Both the screen and the drawer slide simultaneously to reveal the drawer",
            "back: The drawer is revealed behind the screen",
        ],
        teches: ["React", "TypeScript", "FramerMotion", "CoreCss"],
        showcaseImage: "react-slide-drawer.png",
        link: "https://www.npmjs.com/package/react-slide-drawer",
        imageSource: "react-slide-drawer",
        numbersOfScreenshots: {
            desktop: 1,
            mobile: 0,
        },
    },
];
