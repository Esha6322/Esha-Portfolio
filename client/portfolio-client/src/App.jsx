import { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos'                // AOS ইম্পোর্ট
import 'aos/dist/aos.css'           // AOS CSS ইম্পোর্ট
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa' // সোশ্যাল আইকন ইম্পোর্ট
import './App.css'
import profileImg from './assets/image.png' 
import Navbar from './components/Navbar'

// ইনপুট ফিল্ডের স্টাইল অবজেক্ট
const formInputStyle = {
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  background: 'var(--bg)',
  color: 'var(--text)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  fontFamily: 'inherit',
  width: '100%'
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // টাইপরাইটার হুক
  const [text] = useTypewriter({
    words: ['React Developer', 'Creative Designer', 'Frontend Enthusiast', 'Problem Solver'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  useEffect(() => {
    // ডার্ক মোড ক্লাস ম্যানেজমেন্ট
    if (darkMode) {
      document.body.className = 'dark-theme';
    } else {
      document.body.className = '';
    }

    // AOS অ্যানিমেশন ইনিশিয়ালাইজ করা
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <Navbar />

      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
        aria-label="Toggle Theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <main id="center">
        <div className="hero" data-aos="zoom-in">
          <div className="base" style={{ 
            borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', border: '4px solid var(--accent)',
            position: 'relative', boxShadow: 'var(--shadow)'
          }}>
             <img src={profileImg} alt="Esha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="framework">🚀</div>
          <div className="vite">⚡</div>
        </div>

        <h1 data-aos="fade-right">Hi, I'm <span style={{ color: 'var(--accent)' }}>Esha</span></h1>

        <div style={{ minHeight: '30px', maxWidth: '500px', margin: '0 auto 25px', fontSize: '1.2rem' }}>
          <span>I am a </span>
          <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{text}</span>
          <span style={{ color: 'var(--accent)' }}><Cursor cursorStyle='_' /></span>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }} data-aos="fade-up">
          <button className="counter" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
          <button className="counter" style={{ background: 'transparent', border: '1px solid var(--border)' }}>
            Download CV
          </button>
        </div>
      </main>

      {/* Projects Section */}
      <section style={{ padding: '60px 20px', borderTop: '1px solid var(--border)', background: 'var(--social-bg)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }} data-aos="fade-down">Recent Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '0 auto' }}>
          
          <div className="project-card" data-aos="fade-up" style={{ padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Personal Portfolio</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>My professional portfolio built with React and Vite.</p>
            <a href="https://github.com/Esha6322/Esha-Portfolio.git" target="_blank" rel="noreferrer" style={{ color: 'var(--text-h)', fontWeight: 'bold', textDecoration: 'none' }}>View Github →</a>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="100" style={{ padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Kids School</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>Interactive and colorful website designed for educational platforms.</p>
            <a href="https://github.com/Esha6322/B11-A2-Kids-School.git" target="_blank" rel="noreferrer" style={{ color: 'var(--text-h)', fontWeight: 'bold', textDecoration: 'none' }}>View Github →</a>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="200" style={{ padding: '24px', borderRadius: '12px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>G3 Architects</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>A beautifully designed website for architectural services.</p>
            <a href="https://github.com/Esha6322/g3-architects-website.git" target="_blank" rel="noreferrer" style={{ color: 'var(--text-h)', fontWeight: 'bold', textDecoration: 'none' }}>View Github →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>Get In Touch</h2>
        <form action="https://formspree.io/f/mqeweykz" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <input type="text" name="name" placeholder="Your Name" required style={formInputStyle} />
            <input type="email" name="email" placeholder="Your Email" required style={formInputStyle} />
          </div>
          <input type="text" name="subject" placeholder="Subject" required style={formInputStyle} />
          <textarea name="message" placeholder="Your Message" rows="6" required style={formInputStyle}></textarea>
          <button type="submit" className="counter" style={{ alignSelf: 'center', padding: '12px 40px' }}>Send Message</button>
        </form>
      </section>

      {/* About & Social Section - আপনার লিঙ্কগুলো এখানে আপডেট করা হয়েছে */}
      <section id="next-steps" data-aos="zoom-in">
        <div id="docs">
          <h2>About Me</h2>
          <p>I focus on React, Vite, and modern CSS.</p>
        </div>
        <div>
          <h2>Connect & Skills</h2>
          <ul className="skills-list" style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '20px 0', justifyContent: 'center' }}>
            {/* GitHub */}
            <li>
              <a href="https://github.com/Esha6322" target="_blank" rel="noreferrer">
                <FaGithub size={30} color="var(--accent)" />
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a href="https://www.linkedin.com/in/tasnia-taher-551996290" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} color="var(--accent)" />
              </a>
            </li>
            {/* Facebook */}
            <li>
              <a href="https://www.facebook.com/rupshariva.orsha" target="_blank" rel="noreferrer">
                <FaFacebook size={30} color="var(--accent)" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.7 }}>
        © {new Date().getFullYear()} Esha. All rights reserved.
      </footer>
    </div>
  )
}

export default App;