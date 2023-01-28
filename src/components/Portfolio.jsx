import React from 'react';
import AppliEsme from '../assets/portfolio/projet_esme_logo.jpg';
import SiteWeb from '../assets/portfolio/website.jpg';
import Biotech from '../assets/portfolio/biotech.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: AppliEsme,
            type: 'Demo'
        },
        {
            id: 2,
            src: SiteWeb,
            type: 'Demo'
        },
        {
            id: 3,
            src: Biotech,
            type: 'PowerPoint'
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
                portfolios.map(({id, src, type}) => (
                    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                        <img 
                            src={src} 
                            alt="" 
                            className=' rounded-md duration-200 hover:scale-105'
                        />
                        <div className=' flex items-center justify-center'>
                            <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                {type}
                            </button>
                            <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                GitHub
                            </button>
                        </div>
                    </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio