// src/pages/testProduct.tsx
import React from 'react';
import ProductTemplate from '../components/ProductTemplate';

const ScaraSeries: React.FC = () => {
    // NEW: Organized applications by industry
    const applicationsByIndustry = {
        industrial: [
            { id: "welding", name: "Welding", icon: " /icons/welding.png" },
            { id: "painting", name: "Painting", icon: "/icons/painting.png" },
            { id: "material-handling", name: "Material Handling", icon: "/icons/material-handling.png" },
            { id: "assembly", name: "Assembly", icon: "/icons/assembly.png" },
            { id: "packaging", name: "Packaging", icon: "/icons/packaging.png" }
        ],
        medical: [
            { id: "surgical", name: "Surgical", icon: "/icons/surgical.png" },
            { id: "rehabilitation", name: "Rehabilitation", icon: "/icons/rehabilitation.png" },
            { id: "pharmacy", name: "Pharmacy Automation", icon: "/icons/pharmacy-automation.png" },
            { id: "telepresence", name: "Swapping", icon: "/icons/swapping.png" },
            { id: "disinfection", name: "Disinfection", icon: "/icons/disinfection.png" }
        ],
        defense: [
            { id: "bomb-disposal", name: "Bomb Disposal", icon: "/icons/bomb-disposal.png" },
            { id: "reconnaissance", name: "Reconnaissance", icon: "/icons/reconnaissance.png" },
            { id: "ugv", name: "Military System", icon: "/icons/military-system.png" },
            { id: "combat-drone", name: "Checkpoints", icon: "/icons/checkpoint.png" }
        ]
    };

    // Add advantages data
    const advantages = [
        {
            id: "tried-tested",
            title: "Tried. Tested. Trusted.",
            description: "The Scara-series has been deployed in hundreds of applications, helping customers inject automation into their processes with proven reliability."
        },
        {
            id: "costomer needs",
            title: "Designed specific for your needs",
            description: "The Scara-series includes self-calibration, omni-mount capabilities and field replaceable joints to maximize operating time and minimize downtime."
        },
        {
            id: "flexibility",
            title: "Unparalleled Flexibility",
            description: "The Scara-series comes in a variety of payloads and reaches boasting some of the smallest footprints in the industry for efficient operating envelopes."
        },
        {
            id: "easy-integration",
            title: "Easy Integration",
            description: "Seamless integration into tight workspaces and easy redeployment across multiple tasks with our intuitive programming interface."
        }
    ];

    // Add case studies data
    const caseStudies = [
        {
            id: "manufacturing-co",
            company: "Advanced Manufacturing Co",
            description: "Advanced Manufacturing Co increased their production efficiency by 40% using Scara-series robots for automated assembly and quality inspection processes.",
            image: "/assembly.png",
            videoLink: "/videos/manufacturing-case"
        },
        {
            id: "tech-startup",
            company: "TechStart Robotics",
            description: "TechStart Robotics leveraged Scara-series for their automated testing facility, reducing testing time by 60% while improving accuracy.",
            image: "/industrial.png",
            videoLink: "/videos/techstart-case"
        },
        {
            id: "medical-devices",
            company: "MediTech Solutions",
            description: "MediTech Solutions implemented Scara-series robots for precision medical device assembly, achieving 99.9% quality standards.",
            image: "/medtech.png",
            videoLink: "/videos/meditech-case"
        }
    ];


    return (
        <ProductTemplate
            seriesTitle="Scara-series"
            seriesDescription="Our comprehensive range of customizable robotic solutions"
            productVariants={[
                {
                    id: "Scara-1",
                    name: "Scara-1",
                    specs: {
                        payload: "6kg",
                        reach: "700mm",
                        footprint: "Ø 200mm",
                        weight: "20kg"
                    },
                    image: "/3dRendering.png",
                    detailsLink: "#!"
                },
                {
                    id: "Scara-2",
                    name: "Coming soon",
                    specs: {
                        payload: "-",
                        reach: "-",
                        footprint: "-",
                        weight: "-"
                    },
                    image: "Robothania_logo_Green.svg",
                    detailsLink: "#!"
                },
                {
                    id: "Scara-3",
                    name: "Coming soon",
                    specs: {
                        payload: "-",
                        reach: "-",
                        footprint: "-",
                        weight: "-"
                    },
                    image: "Robothania_logo_Green.svg",
                    detailsLink: "#!"
                },
            ]}
            applicationsByIndustry={applicationsByIndustry} 
            applicationsSubtitle="Scara-series is engineered to be highly flexible and adaptable to any production environment, delivering flexibility in many applications across various industries."
            advantages={advantages}
            advantagesSubtitle="The Scara-series is designed to fit any production environment, delivering flexibility in many applications across various industries."
            caseStudies={caseStudies}
            ctaTitle="Get Started"
            ctaDescription="Ready to automate your processes?"
            ctaButtonText="Contact Us"
            ctaButtonLink="#!"
        />
    );
};

export default ScaraSeries;