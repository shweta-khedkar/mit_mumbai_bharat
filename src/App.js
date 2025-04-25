import React, { useRef } from 'react';
import './App.css';
import Header from './Pages/Includes/Header.js';
import Footer from './Pages/Includes/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ykk0bua',     // 🔁 Replace with your EmailJS Service ID
        'template_9vy4vao',    // 🔁 Replace with your EmailJS Template ID
        form.current,
        'x0dyV_SkAx13W0t-X'      // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert('✅ Enquiry submitted successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Something went wrong. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <Header />
      <main className="flex-grow-1">
        <section className="welcome-section position-relative text-white py-5">
          <div className="bg-overlay"></div>

          <div className="container position-relative">
            <div className="row align-items-start">
              {/* Welcome Message */}
              <div className="col-12 col-md-6 mb-4 text-justify">
                <h2 className="mb-3">Welcome to MAEER'S MIT MUMBAI</h2>
                <p>
                  With over 40 years of academic excellence and a global alumni network exceeding 100,000, MIT is a premier engineering institute approved by AICTE and affiliated with top Indian universities. Known for its commitment to innovation and quality education, MIT empowers students to meet global challenges through cutting-edge learning experiences.
                </p>
                <p>
                  Extending the legacy of MIT Pune, we are proud to launch our new Engineering College in the Mumbai Metropolitan Region from the academic year 2025–2026. Set in a nature-inspired campus, the institute offers advanced infrastructure, expert faculty, and a dynamic learning environment that promotes holistic development.
                </p>
                <p>
                  At MIT Mumbai, education is more than a degree—it’s a transformative journey toward professional and personal excellence.
                </p>
              </div>

              {/* Enquiry Form */}
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                <div className="enquiry-wrapper w-100 px-2">
                  <div className="card shadow p-4 bg-light text-dark">
                    <h4 className="mb-3">Enquiry Form</h4>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" id="phone" name="phone" required />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="course" className="form-label">Interested Course</label>
                        <select className="form-select" id="course" name="course" required>
                          <option value="">Select a course</option>
                          <option value="Computer Science and Engineering - AI & ML">Computer Science and Engineering - AI & ML</option>
                          <option value="Electronics Engineering">Electronics Engineering</option>
                          <option value="Mechanical Engineering">Mechanical Engineering</option>
                          <option value="Civil Engineering">Civil Engineering</option>
                        </select>
                      </div>

                      <div className="mb-0">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="3"></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-100">Submit Enquiry</button>
                    </form>
                  </div>
                </div>
              </div>
                {/* mit video section */}
                
            </div>
            
          </div>
        </section>
        {/* mit video section */}
<div className="col-12 mt-0">
  <div className="ratio ratio-16x9">
    <iframe
      src="https://www.youtube.com/embed/nY3yChbDJ1g?si=9fu0QZY6Kl3GLK5H"
      title="MIT Mumbai Campus Tour"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
