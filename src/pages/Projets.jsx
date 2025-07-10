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
    const projets = [
        {
            name: "Movela",
            description: "Site répertoire de film type Allociné réalisé avec PHP, Javascript et l'API The Movie Database (TMDb).",
            compétences: ["API", "PHP", "JS", "MySQL", "Tailwind"],
            link: "Movela/",
            image: movelaImg,
        },
        {
            name: "Dofus Clicker",
            description: "Création d'un jeu de type 'clicker' inspiré de Dofus, réalisé avec Javascript.",
            compétences: ["JS", "Json", "Tailwind"],
            link: "Clicker/",
            image: dofusClickerImg,
        },
        {
            name: "Demetech",
            description: "Boutique en ligne de produits high-tech, réalisée avec PHP et MySQL.",
            compétences: ["PHP", "JS", "MySQL", "Tailwind"],
            link: "Demetech/",
            image: demetechImg,
        },
        {
            name: "Echo Book",
            description: "Site de livre d'or en ligne, réalisé en PHP et MySQL.",
            compétences: ["PHP", "MySQL"],
            link: "livre-or/views/index.php",
            image: livreOrImg,
        },
        {
            name: "Happy Meal",
            description: "Site de recettes de repas en ligne, réalisé en PHP, JS et MySQL.",
            compétences: ["PHP", "JS", "MySQL"],
            link: "happyMeal/",
            image: tastyImg,
        },
        {
            name: "Carteo",
            description: "Site de recette typé admin panel, réalisé en PHP et MySQL.",
            compétences: ["PHP", "MySQL"],
            link: "gestionnaire-de-menu/",
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
                    <p className='w-9/10 text-xl mb-4'>Approche Mobile First tout au long des mes formations et de mes projets.<br/><br/> Depuis ma découverte de Tailwind en Mars 2024 je l'ai introduit petit à petit dans mes projets et je suis aujourd'hui capable d'en faire sans même avoir de css (sauf quelques exceptions ex: animations diverses).<br/><br/> J'ai ensuite découvert l'extension de Tailwind: DaisyUI, qui améliore tailwind en un semblant de Bootstrap en incluant des composants modernes.</p>
                </div>
                <div className='divider divider-start pl-6 text-2xl main-font-m'>Projets</div>
                <section className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12 gap-4'>
                    {projets.map((projet) => (
                        <div key={projet.index} className="card w-full lg:max-w-96 lg:max-h-96 bg-base-100 shadow-sm">
                            <figure>
                                <img
                                src={projet.image}
                                alt={`image du projet ${projet.name}`} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title main-font-m">{projet.name}</h2>
                                <p className='text-lg'>{projet.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {projet.compétences.map((compétence, index) => (
                                        <div key={index} className="badge badge-soft badge-accent">{compétence}</div>
                                    ))}
                                </div>
                                <div className="card-actions justify-end">
                                    <a className='btn btn-neutral' href={`${domain}${projet.link}`}>Voir le projet</a>
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