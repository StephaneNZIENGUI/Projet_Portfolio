import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import Planon from "../assets/companies/P.jpg";
import NZIENG from "../assets/companies/NZIENG.png";


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];


const experiences = [
    {
        id: 1,
        role: "Freelance",
        company: "NZIENGU-INNOVATION - Projet : Envoi des SMS avec FileMaker via l’API Brevo ",
        period: "Oct 2021 - Sep 2023",
        description: [
            "Conception et création d’interface utilisateur",
            "Intégration d’API",
            "Création de script",
            "Ecrire la procédure d'envoi de SMS",
            "Tests unitaires",
            "Mise en production"
            
        ],
        image: NZIENG,
    },
    {
        id: 1,
        role: "Freelance",
        company: "NZIENGU-INNOVATION - Projet : Intégration de Google Calendar et Gmail dans FileMaker",
        period: "Mai 2025",
        description: [
            "Conception et création d’interface utilisateur",
            "Intégration d’API",
            "configuration serveurs, mise en place de solutions de sauvegarde, création de procédures d’exploitation.",
            "Création de script",
            "Ecrire les différentes procédures d’intégrations",
            "Tests unitaires",
            "Mise en production"
        ],
        image: NZIENG,
    },
    {
        id: 2,
        role: "Développeur Web (système de gestion sur mesure) ",
        company: "Planon",
        period: "Sep 2022 - Sep 2023",
        description: [
            "Conception et développement d’interface utilisateur pour des grands comptes",
            "Intégration d’API",
            "Gestion des tests unitaires",
            "Déploiements des applications en production",
            "Maintenance régulière des applications",
        ],
        image: Planon,
    },
    
];


const Experiences = () => {
   return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences