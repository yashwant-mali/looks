import React from 'react'

export default function Home() {
  return (
    
        <div className="home-page">
          {/* Hero Section */}
          <div className="hero-section text-center py-5 bg-light">
            <h1 className="animated-text">Welcome to Looks Beauty Salon</h1>
            <p className="lead">Indulge in luxurious beauty services designed to make you feel your best.</p>
            <button className="btn btn-primary shadow-lg">Book an Appointment</button>
          </div>
    
          {/* Photo Gallery */}
          <div className="photo-gallery mt-4">
            <div className="row">
              <div className="col-md-4 mb-3">
                <img src="images\hair styling.jpeg" alt="Salon 1" className="img-fluid rounded zoom-effect" />
              </div>
              <div className="col-md-4 mb-3">
                <img src="images/bridal makeup.jpeg" alt="Salon 2" className="img-fluid rounded zoom-effect" />
              </div>
              <div className="col-md-4 mb-3">
                <img src="images\facial.jpeg" alt="Salon 3" className="img-fluid rounded zoom-effect" />
              </div>    
            </div>
          </div>
    
          {/* Services Section */}
          <div className="services-section text-center py-5 bg-light">
            <h2 className="section-heading">Our Signature Services</h2>
            <div className="row mt-4">
              <div className="col-md-4 service-box">
                <i className="bi bi-scissors feature-icon"></i>
                <h5>Hair Styling</h5>
                <p>From trendy cuts to glamorous styles, we make your hair dreams come true.</p>
              </div>
              <div className="col-md-4 service-box">
                <i className="bi bi-palette feature-icon"></i>
                <h5>Makeup</h5>
                <p>Flawless makeup for every occasion, tailored to enhance your natural beauty.</p>
              </div>
              <div className="col-md-4 service-box">
                <i className="bi bi-egg feature-icon"></i>
                <h5>Skincare</h5>
                <p>Relax and rejuvenate with our luxurious skincare treatments.</p>
              </div>
            </div>
          </div>
    
          {/* Customer Testimonials Section */}
          <div className="testimonials-section bg-dark text-white py-5">
            <div className="container">
              <h2 className="section-heading text-center">What Our Clients Say</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="testimonial-box">
                    <p>"Looks Salon made me feel like a queen! The styling was flawless, and the staff was so welcoming."</p>
                    <h5>- Emma White</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-box">
                    <p>"I love the makeup I got for my wedding. The team at Looks is amazing, and my makeup lasted all day!"</p>
                    <h5>- Lily Green</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-box">
                    <p>"A perfect place for a relaxing facial. My skin has never felt so smooth and refreshed."</p>
                    <h5>- Olivia Brown</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Call-to-Action (CTA) Section */}
          <div className="cta-section text-center py-5 bg-primary text-white">
            <h2>Book Your Appointment Today</h2>
            <p>Indulge in a luxury experience that makes you feel beautiful, inside and out.</p>
            <button className="btn btn-light btn-lg">Sign up</button>
          </div>
    
          {/* About Us Section */}
          <div className="about-us-section py-5">
            <div className="container text-center">
              <h2 className="section-heading">About Looks Beauty Salon</h2>
              <p>At Looks, we believe every woman deserves to feel confident, relaxed, and pampered. Our team of expert stylists, makeup artists, and estheticians are dedicated to offering the best beauty treatments in a serene and welcoming atmosphere.</p>
            </div>
          </div>
        </div>
  )
}
