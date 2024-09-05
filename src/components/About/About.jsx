import React from 'react'
import './About.css'
import about_img from '../../assets/constitution.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
           <img src={about_img} alt='' className='about-img'/>
        </div>
        <div className='about-right'>
            <h3> ABOUT न्याय मित्र </h3>
            <h2>Empowering every citizen with easy access to the Indian Constitution</h2>
            <p>We are dedicated to making the Indian Constitution accessible to everyone. Our platform simplifies complex legal terms through a user-friendly chatbot, ensuring that individuals with little or no prior knowledge can easily understand their fundamental rights and duties.</p>
            <p> For law professionals and students, our site offers a quick and reliable resource for instant references, enhancing both their studies and professional practice. </p> 
            <p> We also provide multilingual support via the Google Translator API, allowing users to interact in their preferred language, making the Constitution accessible to diverse populations across India. </p>
            <p> Additionally, our platform offers affordable legal guidance to reduce financial barriers and includes features like text-to-speech and voice assistants to ensure accessibility for disabled individuals, particularly those who are visually impaired.</p>
        </div>
      
    </div>
  )
}

export default About
