import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';

const BranchesSection = () => {
  return (
    <section className="branches-section">
      <Container>
        <div className="branches-text text-center">
          <h2>Our Branches Across India</h2>
          <p>
            Explore our creative hubs located across India. Join a campus near you and start your animation journey.
          </p>
        </div>

        <div className="branches-marquee">
          <div className="marquee-track">
            <div className="branch-card">Delhi</div>
            <div className="branch-card">Mumbai</div>
            <div className="branch-card">Bangalore</div>
            <div className="branch-card">Chennai</div>
            <div className="branch-card">Kolkata</div>
            <div className="branch-card">Hyderabad</div>
            <div className="branch-card">Pune</div>
            <div className="branch-card">Ahmedabad</div>
            <div className="branch-card">Jaipur</div>
            <div className="branch-card">Lucknow</div>
            <div className="branch-card">Chandigarh</div>
            <div className="branch-card">Gurgaon</div>
            <div className="branch-card">Noida</div>
            <div className="branch-card">Nagpur</div>
            <div className="branch-card">Bhubaneswar</div>
            <div className="branch-card">Indore</div>
            <div className="branch-card">Coimbatore</div>
            <div className="branch-card">Goa</div>
            <div className="branch-card">Trivandrum</div>
            <div className="branch-card">Patna</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BranchesSection;
