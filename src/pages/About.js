import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn more about our company and our mission.</p>
      </section>
      
      <section className="section our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <div className="story-image">
            <img src="https://source.unsplash.com/random/600x400/?team" alt="Our Team" />
          </div>
          <div className="story-text">
            <p>
              Founded in 2010, MyWebsite has been on a mission to help businesses establish a strong online presence. 
              We started as a small team of passionate web developers and designers, and have since grown into a 
              full-service digital agency.
            </p>
            <p>
              Our journey has been marked by continuous innovation and a commitment to excellence. We believe in 
              creating websites that not only look beautiful but also deliver results for our clients.
            </p>
            <p>
              Today, we're proud to have worked with hundreds of businesses across various industries, helping them 
              achieve their online goals and grow their digital footprint.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section our-team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <div className="member-image">
              <img src="https://source.unsplash.com/random/300x300/?man" alt="John Doe" />
            </div>
            <h3>John Doe</h3>
            <p className="member-title">Founder & CEO</p>
            <p>John has over 15 years of experience in web development and digital marketing.</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://source.unsplash.com/random/300x300/?woman" alt="Jane Smith" />
            </div>
            <h3>Jane Smith</h3>
            <p className="member-title">Creative Director</p>
            <p>Jane leads our design team and ensures all projects meet our high aesthetic standards.</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://source.unsplash.com/random/300x300/?developer" alt="Mike Johnson" />
            </div>
            <h3>Mike Johnson</h3>
            <p className="member-title">Lead Developer</p>
            <p>Mike oversees all technical aspects of our projects and leads our development team.</p>
          </div>
        </div>
      </section>
      
      <section className="section our-values">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We continuously explore new technologies and approaches to deliver cutting-edge solutions.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>We are committed to excellence in everything we do, from code to design to client service.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We operate with transparency and honesty in all our client and team relationships.</p>
          </div>
          <div className="value-card">
            <h3>Client Success</h3>
            <p>Our ultimate goal is to help our clients succeed online and achieve their business objectives.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 