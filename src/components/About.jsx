import React from 'react'

const About = () => {
  return (
    <div name="a propos" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    A propos de moi
                </p>
            </div>

            <p className=' text-xl mt-20'>
                Je m'appelle Hugo, j'ai 21 ans et d'ici moins de 2 ans je serai ingénieur spécialisé 
                en Iot / smart cities, diplomé de l'ESME Sudria. 
                Le concept de "smart cities" est quelque chose qui me passionne et j'aimerais que ma carrière professionnelle 
                me permette d'être un acteur de la transformation de nos villes. 
                Depuis quelques mois, je me suis grandement penché sur le "Big Data". Et ça tombe bien pour 
                transformer nos villes en "smart cities", les données sont quand même pas mal utiles.
            </p>

            <br />

            <p className=' text-xl'>
                J'ai alors découvert un vaste domaine. Une découverte qui m'a amené à suivre des cours, des formations et mener 
                des premiers projets afin de me familiariser avec la "datascience". 
                Aujourd'hui, les concepts d'intelligence artificielle, de machine learning, de deep learning ou 
                encore de collecte de données rythment mes journées. 
            </p>

            <br />

            <p className=' text-xl'>
                
                Ainsi, j'aimerais approfondir ces concepts grâce à une experience professionnelle. C'est pourquoi je saurais
                me rendre sérieux, curieux et interessé lors de mon futur stage.

            </p>
        </div>
    </div>
  )
}

export default About