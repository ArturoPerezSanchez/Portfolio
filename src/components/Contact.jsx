import { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useMediaQuery } from 'react-responsive';
import { github, linkedin, leetcode } from "../assets"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const service_ID = "service_4692mo7";
    const templateID = "template_zzlr2sc";
    const public_key = "gtu4zOSweC0laqsnB";
    
    emailjs.send(service_ID, templateID, 
      {
        from_name: form.name,
        to_name: 'Arturo',
        from_email: form.email,
        to_email: 'arturoperez.bs@gmail.com',
        message: form.message
      },
      public_key
    )
    .then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Oops, Something went wrong.')
    }
    )
  }
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define the minimum width to consider the device as desktop

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      
      <form
        ref = {formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
        </label>
        
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
        </label>
        
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your message</span>
          <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
        </label>



        <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      <h5 style={{borderTop: '2px dashed #aaa6c3'}} className="pt-4 w-full mt-5  text-[14px] text-secondary uppercase tracking-wider">Or contact through my social networks</h5>
      <div className='flex flex-row flex-wrap justify-around gap-4 mt-5'>
          <div><a className="rounded-full" target="_blank" href="https://www.linkedin.com/in/arturoperezsanchez/"><img src={linkedin} alt="linkedin" className="md:w-12 md:h-12 w-8 h-8 rounded-full object-contain"></img></a></div>
          <div><a className="rounded-full" target="_blank" href="https://leetcode.com/ArturoPerez/"><img src={leetcode} alt="leetcode" className="md:w-12 md:h-12 w-8 h-8 rounded-full object-contain"></img></a></div>
          <div><a className="rounded-full" target="_blank" href="https://github.com/ArturoPerezSanchez" ><img src={github} alt="github" className="md:w-12 md:h-12 w-8 h-8 rounded-full object-contain"></img></a></div>        
        </div>
      </motion.div>


        {isDesktop && <EarthCanvas />} {/* Renders <EarthCanvas /> only in desktop devices */}

    </div>
  )
}

export default SectionWrapper(Contact, "contact")