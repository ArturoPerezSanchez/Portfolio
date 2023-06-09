import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { useMediaQuery } from 'react-responsive';


const FeedbackCard = ({ testimonial, name, designation, company, image, head }) => (
  <>
  <div className='md:ml-10 md:mr-10'>
    <div className='sm:ml-[50px] sm:mr-10'>
      <div style = {{background: "linear-gradient(135deg, #322266, #100d25)"}} className='border border-sky-500 md:border-0 sm:shadow-[10px_10px_40px_rgba(0,0,0)] md:flex rounded-[20px] items-center mb-16 min-h-[500px] max-h-[500px] md:min-h-[400px] md:max-h-[400px]'>

        <div className='w-24 md:min-w-[100px] md:ml-[-50px] m-auto'>
          <img src={image} alt={`feedback by ${name}`} className='w-16 h-24 md:min-h-[100px] md:w-25 md:h-25 mt-4 md:mt-0 rounded-full' />
        </div>
        <div className='flex flex-col md:min-h-[300px] mt-4 md:mt-10 ml-10 mr-10'>
          <p className='text-white font-black text-2xl md:text-4xl font-bold mt-4'>&quot;{head}&quot;</p>
          <p className='text-white md:text-lg mt-8 mb-8 md:m-auto'>{testimonial}</p>
            <div className='ml-4 flex justify-center items-center'>
              {/* name */}
              <p className='text-white text-2xl text-base'> <span className='blue-text-gradient'>@</span> {name}</p>
              {/* position */}
              <p style={{borderRight: "solid"}}> &nbsp; &nbsp;</p>
              <p className='text-gray-300 text-sm'>&nbsp; &nbsp;{designation} of {company} </p>
            </div>
        </div>
      </div>
    </div>
  </div>
  </>
);

const Feedbacks = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define el ancho mínimo para considerar como versión de escritorio

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} rounded-2xl min-h-[200px] sm:min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <Carousel showThumbs={false} showStatus={false} showArrows={isDesktop} infiniteLoop autoPlay>
        {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <FeedbackCard {...testimonial} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
