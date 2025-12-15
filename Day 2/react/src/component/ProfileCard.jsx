import React from 'react'
import Footer from './Footer'


const ProfileCard = ({name,role,company,linkedin}) => {
  return (
  <>
<article className='profile-card'>

    <header className='card-header'>
    <img src="profile.png" alt="profile image" className='profile-photo' />
    <h2>{name}</h2>
    <p>{role}</p>
    </header>


    <section className='bio'>
        <h3>{company}</h3>
        <a href={linkedin} className='btn btn-linkedin'>Connect to LinkedIn</a>
    </section>

    <section className='contact-from-section'>
        <h2>Send a Quick note</h2>
        <form action="" className='contact-form'>
            <label htmlFor="email-input">Your Email:</label>
            <input type="email" name="email" id="email-input" />

            <button type='submit' className='btn btn-contact '>Send Message</button>
        </form>
    </section>
    <Footer/>
</article>

  </>
  )
}

export default ProfileCard
