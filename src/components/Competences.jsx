import React from 'react';

import python from '../assets/python.png';
import firebase from '../assets/firebase.png';
import jupyter from '../assets/jupyter.png';
import mysql from '../assets/mysql.png';
import php from '../assets/php.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';
import numpy from '../assets/numpy.png';
import panda from '../assets/panda.png';
import sklearn from '../assets/sklearn.png';




const Competences = () => {

    const techs = [
    
        {
            id: 1,
            src: java,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id: 2,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 4,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500',
        },
        {
            id: 5,
            src: php,
            title: 'Php',
            style: 'shadow-blue-700',
        },
        {
            id: 6,
            src: react,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 8,
            src: firebase,
            title: 'FireBase',
            style: 'shadow-yellow-500',
        },
        {
            id: 9,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-400',
        },
        {
            id: 10,
            src: jupyter,
            title: 'Jupyter',
            style: 'shadow-orange-400',
        },
        {
            id: 11,
            src: numpy,
            title: 'Numpy',
            style: 'shadow-blue-200',
        },
        {
            id: 12,
            src: panda,
            title: 'Panda',
            style: 'shadow-blue-700',
        },
        {
            id: 13,
            src: sklearn,
            title: 'Scikit-Learn',
            style: 'shadow-orange-400',
        },
        {
            id: 14,
            src: mysql,
            title: 'MySql',
            style: 'shadow-blue-600',
        },
        {
            id: 15,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },      
    ]

  return (
    <div name='competences' className=' bg-gradient-to-b from-gray-800 to-black '>

        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
           
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Compétences
                </p>
                <p className=' py-6'>
                    Voici les technologies avec lesquelles je suis familié
                </p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className=' w-20 mx-auto'/>
                            <p className=' mt-4'>{title}</p>
                        </div>
                    ))
                }

               
            </div>
        </div>
    </div>
  )
}

export default Competences