import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] sm:mb-5" id="contact">
        <div className='flex flex-col items-center'>
            <h1 className="heading lg:max-w-[45vw]">Looking for fresh talent? <span className="text-purple">Contact me</span>.</h1>
            <p className="text-white-200 md:mt-10 my-6 text-center">Let&apos;s connect. <span className="text-purple">Contact me</span> today, and we&apos;ll explore how we can work together.</p>
            <a href="mailto:achrafbayi@icloud.com">
                <MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position="right"/>
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Achraf</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile)=>(
                    <a href={profile.link}>
                    <div key={profile.id} className="w-10 name-10 cursor-pointer flex justify-center items-center backdrop-filter  backfrop-blue-lg saturate-180 bg-opacity-75 bg-black-200 border rounded-lg border-black-300 z-index-5">
                        <Image src={profile.img} alt={`${profile.id}`} width={20} height={20}/>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;