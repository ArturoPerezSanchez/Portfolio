import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ testimonial, name, designation, company, image, head }) => (
  <>
    <div className='ml-[50px] mr-10'>
      <div style = {{boxShadow: "10px 10px 40px black", background: "linear-gradient(135deg, #322266, #100d25)"}} className='flex rounded-[20px] items-center mb-16'>

        <div style = {{marginLeft: '-50px'}} className='relative min-w-[100px] -ml-50'>
          <img src={image} alt={`feedback by ${name}`} className='w-25 h-25 rounded-full' />
        </div>
        <div className='flex flex-col min-h-[300px] mt-10 mb-10 ml-10 mr-10'>
          <p className='text-white font-black text-4xl font-bold mt-4'>"{head}"</p>
          <p className='text-white tracking-wider text-lg m-auto'>{testimonial}</p>
            <div className='ml-4 flex justify-center items-center'>
              {/* name */}
              <p className='text-white text-2xl text-base'> <span className='blue-text-gradient'>@</span> {name} &nbsp;| &nbsp; </p>
              {/* position */}
              <p className='mt-1 text-gray-300 text-sm'>{designation} of {company} </p>
            </div>
        </div>
      </div>
    </div>
  </>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <Carousel showThumbs={false} showStatus={false} showArrows={false} infiniteLoop autoPlay>
        {testimonials.map((testimonial, index) => (
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
