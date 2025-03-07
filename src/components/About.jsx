import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import 'https://cdn.jsdelivr.net/gh/ArturoPerezSanchez/ArturoPerezSanchez.github.io/WebComponents/parallax-card.js';


const About = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants = {fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">

    With a solid foundation in software engineering principles and a constant thirst for knowledge, I thrive on the exciting challenge of translating complex ideas into elegant and efficient digital solutions.
    <br/>
    I have honed my expertise over the course of 4 years in the industry. My hands-on experience and continuous learning enable me to stay ahead of the curve in an ever-evolving field.
  
    </motion.p>
    <div className="mt-10 flex flex-wrap gap-[5em] justify-around">
      {services.map((service) => (
           <parallax-card
           key = {service.title}
           title={service.title}
           src={service.icon}
           description={service.description}
           background={service.background}>
         </parallax-card>
        
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About, "about")