import React from 'react';
import { ArrowRight, BookOpen, Brain, Accessibility } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    logoUrl?: string;
    bountyId: string;
    onBountyClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, logoUrl, bountyId, onBountyClick }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="mb-6 h-16 flex items-center justify-start">
            {logoUrl ? (
                <img src={logoUrl} alt={`${title} Logo`} className="h-full object-contain max-w-[200px]" />
            ) : (
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-uic-blue/10 rounded-lg text-uic-blue">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                </div>
            )}
        </div>

        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
            {description}
        </p>

        <button
            onClick={() => onBountyClick(bountyId)}
            className="w-full py-3 px-6 bg-gray-50 hover:bg-uic-blue hover:text-white text-uic-blue font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center group"
        >
            {title} Bounties
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
    </div>
);

export const Projects: React.FC<{ onScrollToBounties: (projectId: string) => void }> = ({ onScrollToBounties }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-uic-blue mb-4">Supported Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are proud to support open source initiatives that drive innovation in education, AI literacy, and accessibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProjectCard
                        title="1111"
                        description="An open source learning management system designed for the AI generation, fostering personalized and adaptive learning experiences."
                        icon={<BookOpen className="w-8 h-8" />}
                        bountyId="1111"
                        onBountyClick={onScrollToBounties}
                    />

                    <ProjectCard
                        title="AI Leaders"
                        description="An Industry-backed AI Literacy curriculum empowering the next generation of tech leaders with essential AI skills and ethics."
                        icon={<Brain className="w-8 h-8" />}
                        bountyId="ai-leaders"
                        onBountyClick={onScrollToBounties}
                    />

                    <ProjectCard
                        title="Equalify"
                        description="An open source accessibility ecosystem ensuring the web is inclusive for everyone through automated testing and remediation tools."
                        icon={<Accessibility className="w-8 h-8" />}
                        logoUrl="https://equalify.app/wp-content/uploads/2024/04/Equalify-Logo-768x237.png"
                        bountyId="equalify"
                        onBountyClick={onScrollToBounties}
                    />
                </div>
            </div>
        </section>
    );
};
