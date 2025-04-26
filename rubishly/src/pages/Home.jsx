import "./Home.css";

function Home() {
  return (
    <div className="page">
      <div className="landing">
        <div className="landing-content">
          <div className="landing-img">
            <img src="/LandingImage.png" alt="Landing Image"></img>
          </div>
          <div className="landing-title-container">
            <h1 className="landing-title">Rubbish Gone. Fast.</h1>
            <h2 className="landing-sub-title">
              Book a pickup in seconds. We’ll handle the mess.
            </h2>
            <div className="CTA-Container">
              <button className="primary-CTA">Book a Collection</button>
              <button className="secondary-CTA">Learn More</button>
            </div>
          </div>
        </div>
        <div className="feature-token-container">
          <div className="feature-token">
            <p>Easy Online Booking</p>
          </div>
          <div className="feature-token">
            <p>Quick Quotes</p>
          </div>
          <div className="feature-token">
            <p>Local & Convenient</p>
          </div>
          <div className="feature-token">
            <p>Recycling Service</p>
          </div>
          <div className="feature-token">
            <p>Request Multiple Quotes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
