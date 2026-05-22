import { motion } from "framer-motion";
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import React , { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/dish982'},
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dishaj9' },
  { name: 'Instagram', url: 'https://instagram.com/diish._'},
  { name: 'Resume', url: 'https://drive.google.com/file/d/1-4uLKGTl-a_h7ED8-9OMqkMtNM7GYdBs/view?usp=sharing' }
];
      
function Contact(){
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
        ...formData,
        [name]: value
    });
};

const [errors, setErrors] = useState({});

const validateForm = () => {
    let localErrors = {};

    if (!formData.name.trim()){
        localErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
    localErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
        localErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
        localErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
        localErrors.message = "Message cannot be empty.";
    }

    setErrors(localErrors);

    return Object.keys(localErrors).length === 0;
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
        try {
            const response = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
                method: "POST", mode: "no-cors", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            alert("Message sent successfully! Check your email for confirmation.");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});

        } catch (error) {
            alert("Something went wrong. Please try again later.");
            console.error("Submission error:", error);
        }
    }
};

    return(
        <>
    <div id="contact" className="bg-oat-milk">
        <motion.section initial={{opacity: 0, y:60 }} whileInView={{opacity:1, y:0}} transition={{duration: 0.6}}  className='max-w-6xl mx-auto bg-white rounded-3xl shadow-xl mb-20 px-5 mt-30'>
        <section className="w-full h-auto bg-white px-10 py-20">
            <span className=" font-bold text-sm uppercase">Contact</span><br/>
            <span className="font-serif text-5xl text-dark-bg">Contact Me</span>
            <div>
                <p className="text-sm italic text-(--text-muted) pb-2">Whether its for work or just a friendly chat, would love to have a conversation with you!<br/> Do let me know your thoughts on this portfolio!</p>    
            </div>

            {/* main grid */}
            
            <div className="max-w-6xl w-full mx-auto p-2 flex flex-col md:flex-row gap-10">

                <div className="md:w-[35%] flex flex-col">
                      <div className="space-y-6">
                        <div className="p-6 bg-blush rounded-2xl border-2">
                            <p className="text-xs text-dark-bg uppercase">Email</p>
                            <p className="font-bold">contact.dishaj@gmail.com</p>
                        </div>
                        <div className="p-6 bg-blush rounded-2xl border-2">
                            <p className="text-xs text-dark-bg uppercase">Location</p>
                            <p className="font-bold">Mumbai, India</p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {socialLinks.map((social) => (
                                    <a 
                                        key={social.name} 
                                        href={social.url} 
                                        target="_blank" 
                                        className="px-6 py-2 bg-oat-milk hover:bg-blush rounded-full text-sm font-medium hover:border-2"
                                    >
                                        {social.name}
                                    </a>
                            
                            ))}
                        </div>

                      </div>

                            

                </div>

                <div className="md:w-[65%]">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase font-bold mb-2 ">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full border-2 rounded-xl p-4"/>
                            
                            {errors.name && (
                                    <i><p className="text-red-500 text-sm mt-1 text-left">
                                        {errors.name}
                                    </p></i>
                            )}
                            
                        </div>
                        <div>
                            <label className="block text-xs uppercase font-bold mb-2">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="w-full border-2 rounded-xl p-4 " />

                            {errors.email && (
                                    <i><p className="text-red-500 text-sm mt-1 text-left">
                                        {errors.email}
                                    </p></i>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase font-bold mb-2 ">Subject</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter your subject" className="w-full border-2 rounded-xl p-4 " />

                        {errors.subject && (
                                    <i><p className="text-red-500 text-sm mt-1 text-left">
                                        {errors.subject}
                                    </p></i>
                            )}
                    </div>

                    <div>
                        <label className="block text-xs uppercase font-bold mb-2 ">Message</label>
                        <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="w-full border-2 rounded-xl p-4"></textarea>
                        {errors.message && (
                                    <i><p className="text-red-500 text-sm mt-1 text-left">
                                        {errors.message}
                                    </p></i>
                            )}
                    </div>

                    <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} theme="light" />

                    <button type="submit" className="w-full py-4 bg-red-wine text-rose-quartz hover:bg-rose-quartz hover:text-red-wine rounded-full font-bold transition-all transform active:scale-95">
                    Send message
                    </button>
                </form>

                </div>


                
            </div>

        </section>
        </motion.section> 
    </div>
    <div className="flex justify-center">
        <p>Made with ❤️ by Disha Jagetia | &copy; 2026 </p>
    </div>
    
    </>
    )
}

export default Contact;