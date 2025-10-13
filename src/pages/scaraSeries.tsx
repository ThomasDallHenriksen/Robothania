// src/pages/testProduct.tsx
import React from 'react';
import ProductTemplate from '../components/ProductTemplate';

const ScaraSeries: React.FC = () => {
    // NEW: Organized applications by industry
    const applicationsByIndustry = {
        industrial: [
            { id: "welding", name: "Welding", icon: "/icons/welding.svg" },
            { id: "painting", name: "Painting", icon: "/icons/painting.svg" },
            { id: "material-handling", name: "Material Handling", icon: "/icons/material-handling.svg" },
            { id: "assembly", name: "Assembly", icon: "/icons/assembly.svg" },
            { id: "packaging", name: "Packaging", icon: "/icons/packaging.svg" }
        ],
        medical: [
            { id: "surgical", name: "Surgical", icon: "/icons/surgical.svg" },
            { id: "rehabilitation", name: "Rehabilitation", icon: "/icons/rehabilitation.svg" },
            { id: "pharmacy", name: "Pharmacy Automation", icon: "/icons/pharmacy.svg" },
            { id: "telepresence", name: "Telepresence", icon: "/icons/telepresence.svg" },
            { id: "disinfection", name: "Disinfection", icon: "/icons/disinfection.svg" }
        ],
        service: [
            { id: "cleaning", name: "Cleaning", icon: "/icons/cleaning.svg" },
            { id: "delivery", name: "Delivery", icon: "/icons/delivery.svg" },
            { id: "reception", name: "Reception", icon: "/icons/reception.svg" },
            { id: "security", name: "Security", icon: "/icons/security.svg" },
            { id: "hotel-service", name: "Hotel Service", icon: "/icons/hotel-service.svg" }
        ],
        agricultural: [
            { id: "harvesting", name: "Harvesting", icon: "/icons/harvesting.svg" },
            { id: "weeding", name: "Weeding", icon: "/icons/weeding.svg" },
            { id: "drone-spraying", name: "Drone Spraying", icon: "/icons/drone-spraying.svg" },
            { id: "planting", name: "Planting", icon: "/icons/planting.svg" },
            { id: "livestock-monitoring", name: "Livestock Monitoring", icon: "/icons/livestock.svg" }
        ],
        space: [
            { id: "rover", name: "Rover", icon: "/icons/rover.svg" },
            { id: "robotic-arm", name: "Robotic Arm", icon: "/icons/robotic-arm.svg" },
            { id: "space-probe", name: "Space Probe", icon: "/icons/space-probe.svg" },
            { id: "satellite-servicing", name: "Satellite Servicing", icon: "/icons/satellite.svg" },
            { id: "autonomous-spacecraft", name: "Autonomous Spacecraft", icon: "/icons/spacecraft.svg" }
        ],
        underwater: [
            { id: "rov", name: "Remotely Operated Vehicle (ROV)", icon: "/icons/rov.svg" },
            { id: "auv", name: "Autonomous Underwater Vehicle (AUV)", icon: "/icons/auv.svg" },
            { id: "inspection", name: "Underwater Inspection", icon: "/icons/inspection.svg" },
            { id: "marine-monitoring", name: "Marine Monitoring", icon: "/icons/marine.svg" }
        ],
        education: [
            { id: "stem-learning", name: "STEM Learning", icon: "/icons/stem.svg" },
            { id: "ai-research", name: "AI Research", icon: "/icons/ai.svg" },
            { id: "simulation", name: "Simulation", icon: "/icons/simulation.svg" }
        ],
        domestic: [
            { id: "vacuum", name: "Vacuum", icon: "/icons/vacuum.svg" },
            { id: "lawn-mowing", name: "Lawn Mowing", icon: "/icons/lawn-mowing.svg" },
            { id: "cooking", name: "Cooking", icon: "/icons/cooking.svg" },
            { id: "companion", name: "Companion", icon: "/icons/companion.svg" }
        ],
        defense: [
            { id: "bomb-disposal", name: "Bomb Disposal", icon: "/icons/bomb-disposal.svg" },
            { id: "reconnaissance", name: "Reconnaissance", icon: "/icons/reconnaissance.svg" },
            { id: "ugv", name: "Unmanned Ground Vehicle (UGV)", icon: "/icons/ugv.svg" },
            { id: "combat-drone", name: "Combat Drone", icon: "/icons/combat-drone.svg" }
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
            image: "/public/assembly.png",
            videoLink: "/videos/manufacturing-case"
        },
        {
            id: "tech-startup",
            company: "TechStart Robotics",
            description: "TechStart Robotics leveraged Scara-series for their automated testing facility, reducing testing time by 60% while improving accuracy.",
            image: "/public/industrial.png",
            videoLink: "/videos/techstart-case"
        },
        {
            id: "medical-devices",
            company: "MediTech Solutions",
            description: "MediTech Solutions implemented Scara-series robots for precision medical device assembly, achieving 99.9% quality standards.",
            image: "/public/medtech.png",
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