import React from 'react';
import AppliEsme from '../assets/portfolio/projet_esme_logo.png';
import SiteWeb from '../assets/portfolio/website.png';
import Biotech from '../assets/portfolio/biotech.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: AppliEsme,
            type: 'Demo',
            title: 'Application ESME',
            href: 'https://www.youtube.com/shorts/pMRQ5X8p26w',
            href2 : 'https://github.com/hugoat91/My_Digital_Campus_Mobile'
            
        },
        {
            id: 2,
            src: SiteWeb,
            type: 'Demo',
            title: 'Mon site web',
            href2: 'https://github.com/hugoat91/my_web_site'
            
        },
        {
            id: 3,
            src: Biotech,
            type: 'PowerPoint',
            title: 'Prothèse + traitement image',
            href: '/PP_Biotech.pptx',
            download: true
        },


        
    ]


  return (
    <div name="projets" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    Projets
                </p>
                <p className=' py-6'>
                    Un petit coup d'oeil sur mes projets ?
                </p>
            </div>

            

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src, type, title, href, href2, download}) => (
                    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                        <img 
                            src={src} 
                            alt="" 
                            className=' rounded-md duration-200 hover:scale-105'
                        />
                        <div className=' flex items-center justify-center'>
                            <a 
                            href={href} 
                            target='_blank'
                            rel='noreferrer'
                            download = {download}
                            > 
                            <button className=' w-1/2 px-6 py-3 m-4 
                            duration-200 hover:scale-105'>{type}</button>
                            </a>     
                            <a 
                            href={href2} 
                            target='_blank'
                            rel='noreferrer'
                            > 
                            <button className=' w-1/2 px-6 py-3 m-4 
                            duration-200 hover:scale-105'>GitHub</button>
                            </a>
                        </div>
                            <p className=' mt-4 text-center font-bold mb-5'>{title}</p>
                        
                    </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio

                       