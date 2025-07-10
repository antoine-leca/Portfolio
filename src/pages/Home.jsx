import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../assets/css/index.css';

// Import des icônes
import reactIcon from '../assets/icons/react.svg';
import nodeIcon from '../assets/icons/node.svg';
import vueIcon from '../assets/icons/vue.svg';
import jsIcon from '../assets/icons/js.svg';
import phpIcon from '../assets/icons/php.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import daisyuiIcon from '../assets/icons/daisyui-r.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github.svg';
import dockerIcon from '../assets/icons/docker.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';

// Import des images
import profileImg from '../assets/img/19362653.jpg';
import linkedinIcon from '../assets/icons/linkedin-logo.png';
import githubLogoIcon from '../assets/icons/github.png';
import emailIcon from '../assets/icons/email.png';

// import du CV 
import CV from '../assets/CV_Antoine_LECA.pdf';

const Home = () => {
    const icons = [
        reactIcon,
        nodeIcon,
        vueIcon,
        jsIcon,
        phpIcon,
        tailwindIcon,
        daisyuiIcon,
        gitIcon,
        githubIcon,
        dockerIcon,
        mysqlIcon,
        htmlIcon,
        cssIcon,
        bootstrapIcon
    ];
    const duplicatedIcons = [...icons, ...icons, ...icons];

    return (
        <div>
            <Header/>
            <main>
                <title>Antoine LECA</title>
                <section className='flex flex-col items-center'>
                    <div className="carousel glass w-full overflow-hidden">
                        <div className="flex animate-scroll">
                            {duplicatedIcons.map((icon, index) => (
                                <div key={index} className="carousel-item w-12 p-2 flex-shrink-0">
                                    <img src={icon} className="w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='lg:flex lg:justify-center'>
                    <div className='lg:w-5/10 flex flex-col lg:flex-row-reverse lg:justify-center'>
                        <div className="flex flex-col items-center uppercase lg:justify-end">
                            <div className='w-9/10 flex flex-col mt-6'>
                                    <div className='flex gap-2'>
                                    <h5 className='text-lg lg:text-xl title-font-sm'>étudiant</h5>
                                    <h4 className='text-lg lg:text-xl italic'>En recherche d'alternance</h4>
                                </div>
                                <h1 className='text-3xl lg:text-5xl title-font-b'>Développeur web fullstack</h1>
                                <h4 className='text-lg lg:text-xl italic'>& aspirant UX/UI Designer</h4>
                            </div>
                        </div>
                        <div className='flex lg:w-5/10 justify-center lg:justify-end pt-6'>
                            <img className='w-6/10 lg:w-full h-80 rounded-xl object-cover' src={profileImg} alt="" />
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center'>
                    <div className='lg:w-5/10 flex flex-col items-center justify-center text-center mt-6'>
                        <p className='w-9/10 py-4 text-xl lg:text-2xl'>Passionné par la technologie, j'aime le dev, la création graphique autant que me mettre à la place des utilisateurs. C'est pourquoi j'ai comme projet de devenir Web Dev Fullstack & designer UX/UI.</p>
                        <div>
                            <h1 className='text-3xl lg:text-5xl title-font-b'>Antoine LECA</h1>
                            <div className='flex justify-center mt-2'>
                                <div className='p-1'> <a href="https://www.linkedin.com/in/antoine-leca/"> <img className='w-12 rounded-full' src={linkedinIcon} alt="" /></a></div>
                                <div className='p-1'> <a href="https://github.com/antoine-leca"> <img className='w-12' src={githubLogoIcon} alt="" /></a></div>
                                <div className='p-1'> <a href="mailto:antoine.leca.forma@gmail.com"> <img className='w-12' src={emailIcon} alt="" /></a></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='flex justify-center gap-4 mt-6'>
                        <a href={CV} target="_blank" className='btn btn-neutral btn-lg w-36 lg:text-2xl lg:w-72 lg:btn-xl'>Mon CV</a>
                        <a href="/projets" className='btn btn-neutral btn-lg w-36 lg:text-2xl lg:w-72 lg:btn-xl'>Mes projets</a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;