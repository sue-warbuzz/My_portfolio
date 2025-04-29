'use client'
import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiPrisma,
    SiPython,
    SiDocker,
    SiPostgresql,
    SiGithub,
} from 'react-icons/si';



import { motion } from 'framer-motion';

// Sample data
const timeline = [
    {
        year: '2023-Present',
        title: 'Software Engineer',
        company: 'General Motors',
        description:
            '',
    },
    {
        year: '2022-2023',
        title: 'Full Stack Developer',
        company: 'USDA (UNLV-FIA)',
        description:
            '',
    },
];

export default function AboutPage() {
    return (
        <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
                    About Me
                </h1>

                <p className="text-gray-300 text-lg mb-6">
                    Hey! I&apos;m{' '}
                    <span className="text-cyan-400 font-semibold">Sudipti Sharma</span>, a
                    passionate and curious Engineer with a love for clean
                    and optimal code with keen interest in AI. With a mind wired for AI innovation and a heart that can't resist making things look good, I love blending logic with creativity. When I'm not obsessing over new tech breakthroughs, you’ll find me nerding out by writing blogs about what I learn — because why just hoard knowledge when you can inflict it on others? I genuinely enjoy building things that make life simpler, smarter, and a little more delightful.
                </p>

                <p className="text-gray-400 mb-6">
                    My journey started with tinkering with making 2D games using c++ in school, and has
                    since evolved into building full-fledged web app in Reach and creating solutions for my team at GM using. 
                    <strong className="text-indigo-400">
                        Python, C++, Node, React
                    </strong>{' '}
                    and working with big routes data on Dremio or other platforms. Whether it&apos;s frontend performance or backend logic —
                    I enjoy crafting thoughtful software that solves real problems.
                </p>

                <p className="text-gray-400 mb-6">
                    I’ve worked on personal projects involving GitHub APIs, automated
                    bots, voice-based assistants, and data-driven apps — and I’m always
                    looking to grow through hands-on learning and collaboration.
                </p>

                <h2 className="text-2xl font-semibold text-cyan-300 mt-12 mb-6">
                    📜 My Journey
                </h2>
                <div className="border-l border-gray-600 pl-4 space-y-6">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -left-4 top-2 w-3 h-3 bg-cyan-400 rounded-full" />
                            <p className="text-cyan-400 text-sm">{item.year}</p>
                            <h3 className="text-lg font-semibold">
                                {item.title} @ {item.company}
                            </h3>
                            <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-cyan-300 mt-10 mb-4">
                    ⚒️ Tech Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400">
                    <div className="flex items-center gap-3">
                        <SiReact className="text-cyan-400" /> React
                    </div>
                    <div className="flex items-center gap-3">
                        <SiNextdotjs className="text-white" /> Next.js
                    </div>
                    <div className="flex items-center gap-3">
                        <SiNodedotjs className="text-green-400" /> Node.js
                    </div>
                    <div className="flex items-center gap-3">
                        <SiTypescript className="text-blue-400" /> TypeScript
                    </div>
                    <div className="flex items-center gap-3">
                        <SiTailwindcss className="text-teal-400" /> Tailwind CSS
                    </div>
                    <div className="flex items-center gap-3">
                        <SiMongodb className="text-green-300" /> MongoDB
                    </div>
                    <div className="flex items-center gap-3">
                        <SiPrisma className="text-white" /> Prisma
                    </div>
                    <div className="flex items-center gap-3">
                        <SiPython className="text-yellow-300" /> Python
                    </div>
                    <div className="flex items-center gap-3">
                        <SiDocker className="text-blue-300" /> Docker
                    </div>
                    <div className="flex items-center gap-3">
                        <SiPostgresql className="text-blue-500" /> PostgreSQL
                    </div>
                    <div className="flex items-center gap-3">
                        <SiGithub className="text-white" /> GitHub
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-cyan-300 mt-10 mb-4">
                    🎯 Goals
                </h2>
                <p className="text-gray-400">
                    I’m currently focused on building clean portfolio projects,
                    collaborating with open-source teams, and exploring AI-driven
                    interfaces. Ultimately, I want to work on products that have impact,
                    challenge me technically, and push the boundaries of user experience.
                </p>
            </div>
        </section>
    );
}