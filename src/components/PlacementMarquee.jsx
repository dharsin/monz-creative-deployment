import React from "react";
import "./css/PlacementMarquee.css";

const PlacementMarquee = () => {
  const topRowStudents = [
    {
      name: "Aarav Sharma",
      package: "8.2 LPA",
      company: "Amazon",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Diya Patel",
      package: "7.5 LPA",
      company: "Netflix",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Rahul Mehta",
      package: "9 LPA",
      company: "Google",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Sneha Iyer",
      package: "6.8 LPA",
      company: "Adobe",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Adobe_Systems_logo_and_wordmark.svg",
      photo: "https://randomuser.me/api/portraits/women/41.jpg",
    },
  ];

  const bottomRowStudents = [
    {
      name: "Vikram Nair",
      package: "10.5 LPA",
      company: "Microsoft",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Ishita Das",
      package: "7.9 LPA",
      company: "Apple",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Apple_logo_black.svg",
      photo: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Arjun Rao",
      package: "8.4 LPA",
      company: "Infosys",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Infosys_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      name: "Priya Sen",
      package: "6.5 LPA",
      company: "Wipro",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Wipro_Primary_Logo_Color_RGB.svg",
      photo: "https://randomuser.me/api/portraits/women/26.jpg",
    },
  ];

  return (
    <section className="plecement-marquee-section">
      <h2 className="students-heading">
         Our <span>Students </span> Placements 
      </h2>
      

      <div className="students-marquee">
        <div className="marquee-group">
          {[...topRowStudents, ...topRowStudents].map((student, i) => (
            <div className="student-card" key={i}>
              <img src={student.photo} alt={student.name} className="student-photo" />
              <div className="student-info">
                <h4>{student.name}</h4>
                <p className="package">{student.package}</p>
                <div className="company">
                  <img src={student.companyLogo} alt={student.company} />
                  <span>{student.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="students-marquee reverse">
        <div className="marquee-group reverse">
          {[...bottomRowStudents, ...bottomRowStudents].map((student, i) => (
            <div className="student-card" key={i}>
              <img src={student.photo} alt={student.name} className="student-photo" />
              <div className="student-info">
                <h4>{student.name}</h4>
                <p className="package">{student.package}</p>
                <div className="company">
                  <img src={student.companyLogo} alt={student.company} />
                  <span>{student.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementMarquee;
