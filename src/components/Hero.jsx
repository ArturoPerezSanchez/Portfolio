import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MobileHero = () => {
  return (
    <div className='flex flex-col relative w-full items-center'>
      <div className='w-2/4 absolute left-2/4'>
        <img src="https://avatars.githubusercontent.com/u/43266687?v=4" className='rounded-full w-full p-5'/>
      </div>
      <div className='w-full bg-tertiary mr-8 p-8 rounded-3xl mt-24'>
        <a className="text-secondary" href='#about'><pre>&lt;About /&gt;</pre></a><br/>
        <a className="text-secondary" href='#work'><pre>  &lt;Experience /&gt;</pre></a><br/>
        <a className="text-secondary" href='#works'><pre>   &lt;Projects /&gt;</pre></a><br/>
        <a className="text-secondary" href='#feedbacks'><pre> &lt;Testimonials /&gt;</pre></a><br/>
        <a className="text-secondary" href='#contact'><pre>&lt;Contact /&gt;</pre></a>  
      </div>
    </div>

  )
}

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 640 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldBeVisible = scrollTop <= 30; // Change this condition as per your requirement
      setIsScrolled(!shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollElementClass = isScrolled ? 'opacity-0' : '';

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className={`${styles.heroHeadText} text-white`}>👋 Welcome! <span className="text-[#915eff]">Arturo</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 p-2`}>I am a software engineer <br className='sm:block hidden'/> driven by the realms of Web Development and AI. </p>
          {isDesktop ? <div></div> :  <MobileHero />}  
        </div>
      </div>
      {isDesktop ? (
        <ComputersCanvas />
      ) : (
        <div className={`absolute bottom-14 w-full flex justify-center items-center ${scrollElementClass}`} style={{ transition: 'opacity 0.5s' }}>
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
}

export default Hero;
