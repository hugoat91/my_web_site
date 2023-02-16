import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/hugo-lacour-790b251a3/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/hugoat91',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:hugo.lcr91@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Mon CV <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/CV_LACOUR_Hugo.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

  return (
    <div className=' hidden lg:flex flex-col top-[30%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-gray-800 to-gray-200 " + style}>    
                    <a 
                    href={href} 
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel='noreferrer'
                    > 
                    {child}
                    </a>
                </li>
            ))}      
        </ul>
    </div>
  )
}

export default SocialLinks