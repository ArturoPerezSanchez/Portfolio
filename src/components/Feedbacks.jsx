import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { useMediaQuery } from 'react-responsive';


const FeedbackCard = ({ mobile, testimonial, name, designation, company, image, head }) => {
  if (mobile){
    return  <>
      <div className='ml-2 mr-2'>
        <div style = {{background: "linear-gradient(135deg, #322266, #100d25)"}} className='border border-sky-500 md:border-0 rounded-[20px] items-center mb-16 min-h-[500px]'>
  
          <div className='w-24 md:min-w-[100px] md:ml-[-50px] m-auto'>
            <img src={image} alt={`feedback by ${name}`} className='w-16 h-24 md:min-h-[100px] md:w-25 md:h-25 mt-4 md:mt-0 rounded-full' />
          </div>
          <div className='flex flex-col min-h-[400px] ml-4 mr-4 justify-around'>
            <p className='text-white font-black text-xl font-bold mt-4 '>&quot;{head}&quot;</p>
            <p className='text-white md:text-[20px] mt-8 mb-8 md:m-auto'>{testimonial}</p>
              <div className='flex justify-center items-center pb-4'>
                {/* name */}
                <p className='text-white text-[16px] text-base'>{name}</p>
                {/* position */}
                <p className='p-2 pr-0 mr-2' style={{borderRight: "solid"}}>&nbsp;</p>
                <p className='text-gray-300 text-[14px] p-2'>{designation} at {company} </p>
              </div>
          </div>
        </div>
      </div>
    </>
  } else { 
  return  <>
  <div className='md:ml-10 md:mr-10'>
    <div className='sm:ml-[50px] sm:mr-10'>
      <div style = {{background: "linear-gradient(135deg, #322266, #100d25)"}} className='border border-sky-500 md:border-0 sm:shadow-[10px_10px_40px_rgba(0,0,0)] md:flex rounded-[20px] items-center mb-16 min-h-[450px] max-h-[450px]'>

        <div className='w-24 md:min-w-[100px] md:ml-[-50px] m-auto'>
          <img src={image} alt={`feedback by ${name}`} className='w-16 h-24 md:min-h-[100px] md:w-25 md:h-25 mt-4 md:mt-0 rounded-full' />
        </div>
        <div className='flex flex-col md:min-h-[400px] ml-4 mr-4 sm:ml-10 sm:mr-10 '>
          <p className='text-white font-black text-2xl md:text-4xl font-bold mt-4 '>&quot;{head}&quot;</p>
          <p className='text-white md:text-[20px] mt-8 mb-8 md:m-auto'>{testimonial}</p>
            <div className='flex justify-center items-center'>
              {/* name */}
              <p className='text-white text-2xl text-base'> <span className='blue-text-gradient'>@</span> {name}&nbsp;</p>
              {/* position */}
              <p style={{borderRight: "solid"}}>&nbsp;</p>
              <p className='text-gray-300 text-sm'>&nbsp; {designation} at {company} </p>
            </div>
        </div>
      </div>
    </div>
  </div>
  </>
  }
}

const Feedbacks = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className='bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} rounded-2xl min-h-[200px] sm:min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`sm:px-16 px-0 -mt-20 pb-14`}>
        <Carousel showThumbs={false} showStatus={false} showArrows={isDesktop} infiniteLoop autoPlay={isDesktop}>
        {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <FeedbackCard mobile={!isDesktop}  {...testimonial } />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedbacks');
