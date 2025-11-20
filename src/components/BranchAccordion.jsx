import React, { useState } from "react";
import "../App.css";
import { Container, Row } from "react-bootstrap";

export default function BranchAccordion() {
  const branches = [
    {
      state: "Coimbatore",
      cities: [
        {
          name: "Gandhipuram",
          address:
            "401-A, GES Complex, Second Floor, 7th Street, Gandhipuram, Coimbatore, Tamil Nadu 641012",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",
          image:
            "https://monzcreativeschool.com/assets/images/why-choose/4.webp",
        },
        {
          name: "Andheri",
          address: "Sample address for Andheri",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",
          image: "/images/thane-branch.jpg",
        },
      ],
    },
    {
      state: "Karnataka",
      cities: [
        {
          name: "Bangalore",
          address: "Sample address for Bangalore",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
      ],
    },
  ];

  const [selectedState, setSelectedState] = useState(branches[0].state);
  const [selectedCity, setSelectedCity] = useState(branches[0].cities[0].name);

  const currentState = branches.find((b) => b.state === selectedState);

  return (
    <section className="overflow-hidden">
      <container>
        <Row>
          <div className="branch-accordion">
            <h2 className="branches-accord-headding">
              Monz Creative School Branches
            </h2>
            <p className="branches-accord-p">Where You Can Find Us</p>
            <div className="state-tabs">
              {branches.map((b) => (
                <button
                  key={b.state}
                  className={b.state === selectedState ? "active" : ""}
                  onClick={() => {
                    setSelectedState(b.state);
                    setSelectedCity(b.cities[0].name);
                  }}
                >
                  {b.state}
                </button>
              ))}
            </div>

            <div className="city-tabs">
              {currentState.cities.map((city) => (
                <button
                  key={city.name}
                  className={city.name === selectedCity ? "active" : ""}
                  onClick={() => setSelectedCity(city.name)}
                >
                  {city.name}
                </button>
              ))}
            </div>

            <div className="branch-details">
              {currentState.cities.map(
                (city) =>
                  city.name === selectedCity && (
                    <div key={city.name} className="branch-card">
                      <div className="branch-left">
                        <h3>{city.name}</h3>
                        <p>{city.address}</p>
                        <img src={city.image} alt={city.name} />
                      </div>
                      <div className="branch-right">
                        <iframe
                          src={city.mapLink}
                          width="100%"
                          height="300"
                          style={{ border: 0, borderRadius: "12px" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Map"
                        ></iframe>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </Row>
      </container>
    </section>
  );
}
