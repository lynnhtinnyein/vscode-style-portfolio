import ExpressJsIcon from "@public/icons/language-icons/ExpressJsIcon";
import LaravelIcon from "@public/icons/language-icons/LaravelIcon";
import MongoDbIcon from "@public/icons/language-icons/MongoDbIcon";
import MysqlIcon from "@public/icons/language-icons/MySqlIcon";
import NestJsIcon from "@public/icons/language-icons/NestJsIcon";
import NextJsIcon from "@public/icons/language-icons/NextJsIcon";
import NodeJsIcon from "@public/icons/language-icons/NodeJsIcon";
import ReactIcon from "@public/icons/language-icons/ReactIcon";
import SqliteIcon from "@public/icons/language-icons/SqliteIcon";
import SupabaseIcon from "@public/icons/language-icons/SupabaseIcon";
import TypeScriptIcon from "@public/icons/language-icons/TypeScriptIcon";
import VueJsIcon from "@public/icons/language-icons/VueJsIcon";

export const languageAndFrameworks = [
    {
        id: 1,
        name: "React",
        value: "react",
        color: "#61DAFB",
        icon: <ReactIcon color="white" />,
    },
    {
        id: 2,
        name: "NextJS",
        value: "nextjs",
        color: "#000000",
        icon: <NextJsIcon color="white" />,
    },
    {
        id: 3,
        name: "React Native",
        value: "react-native",
        color: "#61DAFB",
        icon: <ReactIcon color="white" />,
    },
    {
        id: 4,
        name: "VueJS",
        value: "vuejs",
        color: "#42B883",
        icon: <VueJsIcon color="white" />
    },
    {
        id: 5,
        name: "Laravel",
        value: "laravel",
        color: "#FF2D20",
        icon: <LaravelIcon color="white" />
    },
    {
        id: 6,
        name: "TypeScript",
        value: "typescript",
        color: "#3178C6",
        icon: <TypeScriptIcon color="white" />
    },
    {
        id: 7,
        name: "NodeJS",
        value: "nodejs",
        color: "#339933",
        icon: <NodeJsIcon color="white" />
    },
    {
        id: 8,
        name: "NestJS",
        value: "nestjs",
        color: "#E0234E",
        icon: <NestJsIcon color="white" />
    },
    {
        id: 9,
        name: "ExpressJS",
        value: "expressjs",
        color: "#000000",
        icon: <ExpressJsIcon size={22} color="white" />
    },
    {
        id: 10,
        name: "MongoDB",
        value: "mongodb",
        color: "#00684A",
        icon: <MongoDbIcon color="white" />
    },
    {
        id: 11,
        name: "Supabase",
        value: "supabase",
        color: "#3ECF8E",
        icon: <SupabaseIcon color="white" size={20} />
    },
    {
        id: 12,
        name: "MySQL",
        value: "mysql",
        color: "#4479A1",
        icon: <MysqlIcon color="white" />
    },
    {
        id: 13,
        name: "SQLite",
        value: "sqlite",
        color: "#0F80CC",
        icon: <SqliteIcon color="white" />
    },
];

export const tools = [
    "Git",
    "Redux",
    "Redux Toolkit",
    "Redux Thunk",
    "TanStack Query",
    "VueX",
    "React Context",
    "Framer Motion",
    "NextAuth",
    "i18next (next-intl)",
    "Laravel Sanctum",
    "WebSockets",
    "React UI Libraries",
    "Reanimated",
    "Ollama",
    "Hugging Face",
    "Prisma",
    "TypeORM"
];

export const expertiseAreas = [
    {
        id: 1,
        title: "Frontend Development",
        skills: [
            "Responsive UI/UX Implementation",
            "Progressive Web Apps (PWAs)",
            "SEO Optimization",
            "State Management (Redux, Zustand, Context API)",
            "WebSockets and Real-time Communication",
            "Internationalization and Localization",
            "Third-party API Integration",
            "Animation and Interactivity",
            "Cross-browser Compatibility",
            "Performance Optimization (Caching, Memorizing, Lazy Loading)"
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            "RESTful API Design",
            "Authentication Systems",
            "Database Architecture",
            "Server-side Rendering",
            "Caching Strategies",
            "Webhooks and Event-driven Architecture",
            "ORM and Query Builders",
            "Data Validation and Sanitization",
            "Microservices",
            "Rate Limiting, Performace and Security Best Practices",
        ],
    },
    {
        id: 3,
        title: "Mobile Development",
        skills: [
            "Cross-platform Compatibility",
            "App Store Deployment",
            "Push Notifications (Firebase, Expo)",
            "Offline Capability",
            "Offline Print System",
            "Background Syncing and Tasks",
            "In-app Purchases and Subscriptions"
        ],
    },
    {
        id: 4,
        title: "DevOps & Tools",
        skills: [
            "Git Version Control",
            "CI/CD with Vercel",
            "Cpanel and Cloud Deployment",
            "Performance Analysis and Monitoring",
            "Database Management and Backup Strategies",
            "Logging and Debugging with Slack",
        ],
    },
    {
        id: 5,
        title: "Software Architecture",
        skills: [
            "MVC Design Pattern",
            "OOP Principles",
            "Component-Based Architecture",
            "Modular Architecture",
            "NextJS Layout-Based Architecture and Different Rendering Techniques"
        ],
    }
];

