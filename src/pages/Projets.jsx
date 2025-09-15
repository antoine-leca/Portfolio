import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../assets/css/projets.css';

// Import des images des projets
import movelaImg from '../assets/img/Movela.png';
import dofusClickerImg from '../assets/img/Dofus-clicker.png';
import demetechImg from '../assets/img/Demetech.png';
import livreOrImg from '../assets/img/livre-or.png';
import tastyImg from '../assets/img/Tasty.png';
import carteoImg from '../assets/img/Carteo.png';

const Projets = () => {
    const domain = "https://antoine-leca.students-laplateforme.io/";
    const githubDomain = "https://github.com";
    const projets = [
        {
            name: "Movela",
            description: "Site répertoire de film réalisé avec PHP, Javascript et l'API TMDb.",
            compétences: ["API", "PHP", "JS", "MySQL", "Tailwind"],
            link: "Movela/",
            gitlink: "/marvin-delansorne/Movela",
            image: movelaImg,
        },
        {
            name: "Dofus Clicker",
            description: "Création d'un jeu de type 'clicker' inspiré de Dofus, réalisé avec Javascript.",
            compétences: ["JS", "Json", "Tailwind"],
            link: "Clicker/",
            gitlink: "/marvin-delansorne/Clicker",
            image: dofusClickerImg,
        },
        {
            name: "Demetech",
            description: "Boutique en ligne de produits high-tech, réalisée avec PHP et MySQL.",
            compétences: ["PHP", "JS", "MySQL", "Tailwind"],
            link: "Demetech/",
            gitlink: "/antoine-leca/boutique-en-ligne",
            image: demetechImg,
        },
        {
            name: "Echo Book",
            description: "Site de livre d'or en ligne, réalisé en PHP et MySQL.",
            compétences: ["PHP", "MySQL"],
            link: "livre-or/views/index.php",
            gitlink: "/esteban-genty/livre-or",
            image: livreOrImg,
        },
        {
            name: "Happy Meal",
            description: "Site de recettes de repas en ligne, réalisé en PHP, JS et MySQL.",
            compétences: ["PHP", "JS", "MySQL"],
            link: "happyMeal/",
            gitlink: "/antoine-leca/happyMeal",
            image: tastyImg,
        },
        {
            name: "Carteo",
            description: "Site de recette typé admin panel, réalisé en PHP et MySQL.",
            compétences: ["PHP", "MySQL"],
            link: "gestionnaire-de-menu/",
            gitlink: "esteban-genty/gestionnaire-de-menu",
            image: carteoImg,
        }
    ]

    return (
        <div>
            <Header/>
            <main className='min-h-[80vh]'>
                <title>Antoine LECA - Projets</title>
                <div className='divider divider-start pl-6 text-2xl main-font-m'>Description</div>
                <div className='flex justify-center items-center flex-col'>
                    <p className='w-9/10 text-xl mb-4 p-2 lg:p-0'>Approche Mobile First tout au long des mes formations et de mes projets.<br/><br/> Depuis ma découverte de Tailwind en Mars 2024 je l'ai introduit petit à petit dans mes projets et je suis aujourd'hui capable d'en faire sans même avoir de fichier css (sauf quelques exceptions ex: animations diverses).<br/><br/> J'ai ensuite découvert l'extension de Tailwind: DaisyUI, qui améliore tailwind en un semblant de Bootstrap en incluant des composants modernes.</p>
                </div>
                <div className='divider divider-start pl-6 text-2xl main-font-m'>Projets</div>
                <section className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12 gap-4'>
                    {projets.map((projet, idx) => (
                        <div key={idx} className="card w-full lg:max-w-96 lg:max-h-120 bg-base-100 shadow-sm">
                            <figure>
                                <img
                                src={projet.image}
                                alt={`image du projet ${projet.name}`} 
                                className='min-h-48'
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title main-font-m">{projet.name}</h2>
                                <p className='text-lg'>{projet.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {projet.compétences.map((compétence, index) => (
                                        <div key={index} className="badge bg-[#0E3530] border-none text-white">{compétence}</div>
                                    ))}
                                </div>
                                <div className="card-actions justify-between">
                                    <a
                                        href={`${githubDomain}${projet.gitlink}`}
                                        target="blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost"
                                        title="Voir sur GitHub"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                        </svg>
                                    </a>
                                    <a className='btn btn-[#FFFFFF]' target='blank' href={`${domain}${projet.link}`}>Voir le projet</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Projets;