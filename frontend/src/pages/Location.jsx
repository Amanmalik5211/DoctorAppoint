import React from "react";
import { FaClock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div style={containerStyle}>
      {/* Page Header */}
      <header style={headerStyle}>
        <h1 style={headingStyle}>Base Hospital Delhi Cantt</h1>
        <p style={subHeadingStyle}>Find us and get in touch!</p>
      </header>

      {/* Main Content: Map and Info aligned horizontally */}
      <div style={contentContainerStyle}>
        {/* Map Embed */}
        <div style={mapContainerStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.66638087611!2d77.13189597557253!3d28.60978367567717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1cce28c27de5%3A0x161fe277328cdd31!2sBase%20Hospital%20Delhi%20Cantt!5e0!3m2!1sen!2sin!4v1726338906010!5m2!1sen!2sin&scale=2"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Hospital Info Section */}
        <div style={infoContainerStyle}>
          <div style={infoItemStyle}>
            <FaClock style={iconStyle} />
            <span style={textStyle}><strong>Opening Hours:</strong> Mon - Sat: 9:00 AM - 5:00 PM</span>
          </div>
          <div style={infoItemStyle}>
            <FaPhone style={iconStyle} />
            <span style={textStyle}><strong>Phone Number:</strong> +91 9876543210</span>
          </div>
          <div style={infoItemStyle}>
            <FaMapMarkerAlt style={iconStyle} />
            <span style={textStyle}><strong>Address:</strong> Base Hospital Delhi Cantt, Delhi, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  fontFamily: "'Arial', sans-serif",
  backgroundColor: "#f0f4f8",
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "40px",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#333",
  margin: "0",
};

const subHeadingStyle = {
  fontSize: "1.2rem",
  color: "#666",
};

const contentContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  marginTop: "40px",
  flexWrap: "wrap", // Ensures wrapping on smaller screens
};

const mapContainerStyle = {
  flex: 1,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  transition: "transform 0.3s, box-shadow 0.3s",
  transform: "perspective(1000px) rotateY(-5deg)",
  minWidth: "300px", // Ensures the map doesn't shrink too small
};

const infoContainerStyle = {
  flex: 1,
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  transform: "perspective(1000px) rotateY(5deg)",
  marginLeft: "20px",
  minWidth: "300px", // Ensures the info section doesn't shrink too small
};

const infoItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  padding: "10px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  cursor: "pointer",
};

const iconStyle = {
  marginRight: "15px",
  color: "#007bff",
  fontSize: "1.5rem",
};

const textStyle = {
  fontSize: "1rem",
  color: "#333",
};

// Adding hover effect for 3D style
infoItemStyle[':hover'] = {
  transform: "scale(1.05)",
};

mapContainerStyle[':hover'] = {
  transform: "perspective(1000px) rotateY(-3deg)",
  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
};

infoContainerStyle[':hover'] = {
  transform: "perspective(1000px) rotateY(3deg)",
  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
};

// Media Queries for responsiveness
const responsiveStyle = `
@media (max-width: 768px) {
  ${contentContainerStyle} {
    flexDirection: 'column', // Stack items vertically on small screens
    gap: '20px',
  }
  ${mapContainerStyle} {
    transform: 'none', // Remove 3D effect on smaller screens
    boxShadow: 'none',
  }
  ${infoContainerStyle} {
    transform: 'none', // Remove 3D effect on smaller screens
    boxShadow: 'none',
    marginLeft: '0', // Remove margin between elements
  }
}

@media (max-width: 480px) {
  ${headingStyle} {
    fontSize: '1.8rem', // Make the heading smaller on mobile devices
  }
  ${subHeadingStyle} {
    fontSize: '1rem',
  }
  ${textStyle} {
    fontSize: '0.9rem', // Smaller text size on mobile
  }
}
`;

export default Location;
