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
          name: "Saravanampatti",
          address: "Address - Indian bank building, sathy road west, Saravanampatti, Coimbatore, Tamil Nadu 641035 . Phone Number - 89258 71588",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",
          image: "/images/thane-branch.jpg",
        },
        {
          name: "Malumichampatti",
          address: "Address - S.NO.4 P, Indhira Nagar, Malumichampatti, Coimbatore, Tamil Nadu 641050. . Phone Number - 98433 37779",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",
          image: "/images/thane-branch.jpg",
        },
      ],
    },
    {
      state: "Chennai",
      cities: [
        {
          name: "Vadapalani",
          address: "Address - #13, Doshi Garden(3RD FLOOR),NO. 174, Arcot Road,Vadapalani, Chennai - 26. . Phone Number - 90807 06050",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
        {
          name: "Velachery",
          address: "Address - No 14, 1st Floor, Vee Jay Tower, Velachery Bypass Rd, , Vijaya Nagar, Velachery, Chennai - 600042. . Phone Number - 84895 91801",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
        {
          name: "Tambaram",
          address: "Address - #23, 2nd Floor, Rajaji Road, Near Girias, Tambaram West, Chennai-45. . Phone Number - 99402 11129",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
        {
          name: "Poonamallee",
          address: "Address - 222, First Floor, Poojaa Diamond Anandam, Poonamallee High Road, Poonamallee, Chennai West, Chennai - 600056 . Phone Number - 86675 42372",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
        {
          name: "Ambattur",
          address: "Address - 235A Tinny Sector, Indl Estate South, Ambattur, Chennai - 600018 . Phone Number - 90032 01270",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
      ],
    },
    {
      state: "Tiruppur",
      cities: [
        {
          name: "Tiruppur",
          address: "Address - BMW Towers, Bungalow stop, opposite RK Residencey, Murungapalayam, Odakkadu, Tiruppur - 641602 . Phone Number - 93630 39367",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
      
      ],
    },
   
    {
      state: "Bangalore",
      cities: [
        {
          name: "Bangalore - Marathahalli",
          address: "Address - # SY. NO 88, OUTER RING ROAD,OPP MORE MEGASTORE,MARATHAHALLI, BANGALORE-37. . Phone Number - 89047 08555",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
        {
          name: "Bangalore - Bommasandra",
          address: "Address - # SY. NO 88, OUTER RING ROAD,OPP MORE MEGASTORE,MARATHAHALLI, BANGALORE-37. . Phone Number - 89047 08555",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
      ],
    },

    {
      state: "Hosur",
      cities: [
        {
          name: "Hosur",
          address: "Address - KK Towers, 1st Floor, Commercial Street, Vaishnavi Nagar, NH-7, Hosur - 635109 . Phone Number - 9361531823",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443!2d76.96339270964218!3d11.019241389099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855dedbd613%3A0x8ed7e2d1b830aa29!2sPumo%20Technovation!5e0!3m2!1sen!2sin!4v1761311722655!5m2!1sen!2sin",

          image: "/images/bangalore.jpg",
        },
      ],
    },
    {
      state: "Dubai",
      cities: [
        {
          name: "Dubai",
          address: "Address - AL KARAMA ,Zabel Building ,Dubai. . Phone Number - +971 557233850",
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
