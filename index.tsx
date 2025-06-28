import React from 'react';
import ReactDOM from 'react-dom/client';

// --- DATA --- //
const caseStudiesData = [
    {
        title: "PUMA Flagship Outlet Launch – '#chasethegreatness' Campaign",
        client: "PUMA Bangladesh",
        role: "Strategic and Planning Executive",
        story: "PUMA aimed to make a significant splash in Chattogram, Bangladesh's second-largest city. The challenge was to go beyond a simple store opening. My strategy centered on an innovative, integrated digital and on-ground campaign incorporating AI-driven customer segmentation, viral social media teasers with world-class cricketers, and a grand launch event. We even transformed a car into a life-like PUMA sports shoe for visual impact, focusing on driving both online engagement and offline visitation.",
        results: [
            "Achieved a 150% increase in opening day foot traffic.",
            "Recorded a 35% conversion rate on the campaign microsite.",
            "Drove a 275% increase in social media engagement.",
            "Secured a Gold Award at the Flame Award Asia 2024 for 'Best Innovative Campaign of the Year'."
        ],
        visual: "https://placehold.co/600x400?text=PUMA+Chattogram"
    },
    {
        title: "TESY Bulgaria: Orchestrating a Year of Brand Building & Sales Growth",
        client: "TESY Bulgaria",
        role: "Strategic and Planning Executive",
        story: "The mission was to develop a comprehensive 360-degree marketing strategy for TESY Bulgaria, leveraging their 30-year anniversary. I developed emotionally compelling materials tailored to the Bangladeshi audience, focusing on target audience segmentation. The campaign was strategically phased across Facebook, Instagram, YouTube, and Google, positioning the brand as synonymous with Quality, Reliability, and Innovation.",
        results: [
            "Successfully gained widespread traction and brand acceptance.",
            "Improved internal team efficiency by 25% through new task management apps.",
            "Achieved a 65% client acquisition rate through successful pitches.",
        ],
        visual: "https://placehold.co/600x400?text=TESY+Bulgaria"
    },
    {
        title: "PUMA Flagship Store Launching Campaign (Dhanmondi)",
        client: "PUMA Bangladesh",
        role: "Strategic and Planning Executive",
        story: "Following a successful launch in Banani, the challenge was to create a unique hybrid offline-online experience for PUMA's second flagship store. Our strategy captured the rhythmic energy of Dhanmondi with an interactive 'Fanatic Wall' mural art concept. A QR Code directed users to a mobile-optimized microsite where they could upload a selfie for a discount, amplified by national cricketers and extensive PR coverage.",
        results: [
            "Garnered more than 200,000 footfalls at the event.",
            "Achieved 300,000 social media reach.",
            "Over 10,000 individuals registered for discount coupons.",
            "Won the 'commaward in 2022' for the best outdoor campaign."
        ],
        visual: "https://placehold.co/600x400?text=PUMA+Dhanmondi"
    },
    {
        title: "PUSTI - Happy Time Instant Noodles: Uncovering the Consumer's Heartbeat",
        client: "PUSTI - Happy Time Instant Noodles",
        role: "Market Research & USP Development Lead",
        story: "The challenge was to craft a compelling Unique Selling Proposition (USP) rooted in genuine consumer insights, not just marketing slogans. My approach was rigorously data-driven, conducting extensive primary market research, including a pivotal blind taste test to eliminate brand bias. I meticulously analyzed the data to uncover the fundamental drivers behind consumer purchasing decisions.",
        results: [
            "The developed USP was officially adopted and fully incorporated by the brand.",
            "The project reinforced my belief in data-driven insights as the bedrock of effective business decisions."
        ],
        visual: "https://placehold.co/600x400?text=PUSTI+Noodles"
    }
];

const skillsData = [
    "Brand Strategy", "Digital Media Planning", "Market Research",
    "Competitive Analysis", "Campaign Management", "Social Media Strategy",
    "Content Marketing", "Data Analysis", "Prompt Engineering",
    "Meta Business Suite", "Midjourney", "Microsoft Office",
    "HTML", "CSS", "JavaScript", "Latex"
];


// --- UI COMPONENTS --- //

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);


const HeroSection = () => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                    <img
                        src="https://placehold.co/200x200/e2e8f0/334155?text=Mehedi+Hassan+Ome"
                        alt="Mehedi Hassan Ome"
                        className="h-40 w-40 md:h-52 md:w-52 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">MEHEDI HASSAN OME</h1>
                    <h2 className="mt-2 text-xl md:text-2xl font-semibold text-blue-600">
                        Strategic Planner bridging data-driven insights with creative brand growth.
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-600">
                        With a foundation in Economics, I honed my analytical rigor, which proved invaluable as I transitioned into the dynamic world of advertising. My career has been defined by a passion for understanding market dynamics and translating complex data into compelling brand strategies. My aspiration to pursue an MBA stems from a desire to deepen my strategic leadership capabilities and continue driving impactful solutions at a higher level.
                    </p>
                    <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                        <a
                            href="mailto:ome.mgbs@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                        >
                            <MailIcon />
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                        >
                            <LinkedinIcon />
                            LinkedIn
                        </a>
                         <a
                            href="Mehedi Hassan Ome_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const CaseStudyCard = ({ study }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img className="h-56 w-full object-cover" src={study.visual} alt={study.title} />
        <div className="p-6 md:p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{study.client}</div>
            <h3 className="block mt-1 text-xl leading-tight font-bold text-black">{study.title}</h3>
            <p className="mt-2 text-slate-600"><span className="font-semibold">My Role:</span> {study.role}</p>
            <div className="mt-4">
                <h4 className="font-semibold text-slate-900">The Story:</h4>
                <p className="text-slate-600">{study.story}</p>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-slate-900">The Results:</h4>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
                    {study.results.map((result, index) => <li key={index}>{result}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const CaseStudiesSection = () => (
    <section id="case-studies" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Case Studies: My Journey in Strategic Business Solutions</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                    My approach combines strategic thinking, innovative problem-solving, and a deep understanding of data-driven insights to deliver measurable results. Each project is a story of overcoming challenges and achieving significant impact.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {caseStudiesData.map((study, index) => <CaseStudyCard key={index} study={study} />)}
            </div>
        </div>
    </section>
);

const SkillsAndEducationSection = () => (
    <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Skills & Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Education & Certifications</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <p className="font-bold">Bachelor of Social Science, Economics</p>
                            <p className="text-slate-600">Khulna University, Jun 2019</p>
                        </div>
                         <div className="p-4 bg-white rounded-lg shadow-sm">
                            <p className="font-bold">Systemic Literature Review</p>
                            <p className="text-slate-600">Conducted rigorous academic research, demonstrating strong analytical and synthesis capabilities.</p>
                        </div>
                         <div className="p-4 bg-white rounded-lg shadow-sm">
                            <p className="font-bold">Midjourney Image Generation</p>
                            <p className="text-slate-600">Proficient in leveraging AI for creating stylized visual assets.</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <p className="font-bold">R Programming 101</p>
                            <p className="text-slate-600">Applied statistical programming for data analysis and visualization.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Key Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {skillsData.map(skill => (
                            <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Mehedi Hassan Ome. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
        </div>
    </footer>
);

const App = () => {
    return (
        <main>
            <HeroSection />
            <CaseStudiesSection />
            <SkillsAndEducationSection />
            <Footer />
        </main>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
