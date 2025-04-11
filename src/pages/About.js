import React, { useState, useEffect }  from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next"; // Importer useTranslation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BorderColor } from "@mui/icons-material";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Vérifie la taille de l'écran au montage du composant

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const { t } = useTranslation(); // Initialisation de i18next pour la traduction
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const teamMembers = [
    {
      id: 1,
      name: "ID OUFKIR Salma",
      role: t("teamMember1Role"),
      image: "/assets/avatar.jpg",
    },
    {
      id: 2,
      name: "EL HADCHI Wafaa",
      role: t("teamMember2Role"),
      image: "/assets/avatar.jpg",
    },
  ];
  
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Montserrat Alternates', sans-serif",
      background: "linear-gradient(to bottom, #ffffff, #f1f1f1)",
      color: "#333",
      padding: "40px 20px",
      '@media (max-width: 768px)': {
        padding: "20px 10px",
      },
    },

    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    logo: {
      display: "block",
      margin: "0 auto",
      width: "150px",
      height: "50px",
      animation: "spin 3s linear infinite",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#d32f2f",
      marginTop: "20px",
      '@media (max-width: 768px)': {
        fontSize: "2rem",
      },
      '@media (max-width: 480px)': {
        fontSize: "1.5rem",
      },
    },

    content: {
      maxWidth: "900px",
      textAlign: "center",
      lineHeight: "1.8",
      marginBottom: "40px",
      fontSize:"18px"
    },
    highlights: {
      fontWeight: "bold",
      color: "#d32f2f",
    },
    section: {
      marginTop: "30px",
    },
    teamSection: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "50px",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      gap: "20px",
    },
  },

    teamMember: {
      textAlign: "center",
      padding: "20px",
      background: "#fff",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      maxWidth: "300px",
    },
    teamMemberHover: {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    teamImage: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      marginBottom: "15px",
      border: "4px solid #d32f2f",
    },
    teamName: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "10px 0 5px",
    },
    teamRole: {
      color: "#666",
    },
    footer: {
      marginTop: "60px",
      color: "#777",
      fontSize: "0.9rem",
    },
    objectivesSection: {
      textAlign: "center",
      // marginTop: "50px",
      padding: "20px",
      background: "#f9f9f9",
      borderRadius: "10px",
      // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom:"20px",
    },
    
    objectivesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    
    objectiveCard: {
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      '@media (max-width: 480px)': {
        padding: "10px",
      },
    },
    
    objectiveCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    carouselContainer: {
      margin: "20px auto",
      padding: "40px",
      maxWidth: "500px",
      background: "#fff",
      borderRadius: "10px",
      // borderColor: "#BD1723",  // Couleur de la bordure
      // borderWidth: "2px",      // Largeur de la bordure
      // borderStyle: "solid",    // Style de la bordure (doit être défini pour que la couleur s'affiche)
      // boxShadow: "0 4px 8px #BD1723",
    },
    
    objectiveIcon: {
      width: "60px",
      height: "60px",
      marginBottom: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",   /* Centrer horizontalement */
      marginRight: "auto",  /* Centrer horizontalement */
    },
    
    objectiveTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#d32f2f",
    },
    
    objectiveDescription: {
      fontSize: "0.95rem",
      color: "#666",
      lineHeight: "1.5",
    },
    statisticsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "150px",
    marginTop: "50px",
    marginBottom: "70px",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      gap: "30px",
    },
  },

    statisticCard: {
      textAlign: "center",
    },
    statisticNumber: {
      color: "#d32f2f",
      fontSize: "3rem",
      fontWeight: "bold",
    },
    statisticLabel: {
      color: "#555",
      fontSize: "1.2rem",
    },

    mainContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "20px",
      margin: "20px 0",
      flexWrap: "wrap",  // Permet aux éléments de passer à la ligne
    },

    
    testimonialsTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#d32f2f",
    },

    testimonialsContainer: {
      textAlign: "center",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    marginBottom: "20px",
    width: isMobile ? "90%" : "45%",
  },
    testimonial: {
      fontSize: "1rem",
      fontStyle: "italic",
      color: "#555",
      marginBottom: "16px",
      marginTop: "16px",
      padding: "16px",
      backgroundColor: "#fefefe",
      borderLeft: "4px solid #BD1723",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <Layout title={t('title')}>
      <div style={styles.page}>
        {/* Header */}
        <div style={styles.header}>
          <img
            src="/assets/3.png"
            alt="AlertHub Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>{t('title')}</h1>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          <p>
            {t('welcome', { defaultValue: "Welcome to <span class='highlight'>AlertHub</span>, the platform that ensures you stay ahead in times of emergencies. Our goal is simple: to provide reliable, real-time alerts to help you <b>stay prepared, act fast, and recover stronger</b>. With AlertHub, safety is just a click away." })}
          </p>
          <div style={styles.statisticsContainer}>
      <div style={styles.statisticCard}>
        <h3 style={styles.statisticNumber}>50,000+</h3>
        <p style={styles.statisticLabel}>{t("usersCount", { defaultValue: "Users" })}</p>
      </div>
      <div style={styles.statisticCard}>
        <h3 style={styles.statisticNumber}>10,000+</h3>
        <p style={styles.statisticLabel}>{t("reportsCount", { defaultValue: "Reports Submitted" })}</p>
      </div>
    </div>

          <div style={styles.section}>
            <h2>{t('visionTitle')}</h2>
            <p>{t('visionText')}</p>
          </div>
          
        </div>
        <div style={styles.mainContainer}>
        <div style={styles.objectivesSection}>
  <h2 style={styles.title}>{t("objectivesTitle", { defaultValue: "Our Objectives" })}</h2>
  <div style={styles.carouselContainer}>
  <Slider {...settings}>
 
    {/* Objectif 1 */}
    <div style={styles.objectiveCard}>
      <img
        src="/assets/icon1.svg"
        alt="Objective 1"
        style={styles.objectiveIcon}
      />
      <h3 style={styles.objectiveTitle}>
        {t("objective1Title", { defaultValue: "Real-Time Alerts" })}
      </h3>
      <p style={styles.objectiveDescription}>
        {t(
          "objective1Text",
          {
            defaultValue:
              "Ensure that you receive reliable and fast notifications in times of emergencies, keeping you ahead in critical situations.",
          }
        )}
      </p>
    </div>

    {/* Objectif 2 */}
    <div style={styles.objectiveCard}>
      <img
        src="/assets/icon2.svg"
        alt="Objective 2"
        style={styles.objectiveIcon}
      />
      <h3 style={styles.objectiveTitle}>
        {t("objective2Title", { defaultValue: "Community Support" })}
      </h3>
      <p style={styles.objectiveDescription}>
        {t(
          "objective2Text",
          {
            defaultValue:
              "Build a strong community where people can share information and support each other during crises.",
          }
        )}
      </p>
    </div>

    {/* Objectif 3 */}
    <div style={styles.objectiveCard}>
      <img
        src="/assets/icon3.svg"
        alt="Objective 3"
        style={styles.objectiveIcon}
      />
      <h3 style={styles.objectiveTitle}>
        {t("objective3Title", { defaultValue: "Preparedness Resources" })}
      </h3>
      <p style={styles.objectiveDescription}>
        {t(
          "objective3Text",
          {
            defaultValue:
              "Provide educational resources to help individuals and organizations prepare for emergencies effectively.",
          }
        )}
      </p>
    </div>
    {/* Objectif 4 */}
    <div style={styles.objectiveCard}>
          <img
            src="/assets/icon4.svg"
            alt="Objective 4"
            style={styles.objectiveIcon}
          />
          <h3 style={styles.objectiveTitle}>
            {t("objective4Title", { defaultValue: "Emergency Awareness" })}
          </h3>
          <p style={styles.objectiveDescription}>
            {t(
              "objective4Text",
              {
                defaultValue:
                  "Raise awareness about emergency situations and guide people toward safer responses.",
              }
            )}
          </p>
        </div>

        {/* Objectif 5 */}
        <div style={styles.objectiveCard}>
          <img
            src="/assets/icon5.svg"
            alt="Objective 5"
            style={styles.objectiveIcon}
          />
          <h3 style={styles.objectiveTitle}>
            {t("objective5Title", { defaultValue: "Global Collaboration" })}
          </h3>
          <p style={styles.objectiveDescription}>
            {t(
              "objective5Text",
              {
                defaultValue:
                  "Foster collaboration across borders to tackle global challenges more effectively.",
              }
            )}
          </p>
        </div>

        
    
    
 
  </Slider>
  
    </div>
   

</div>
<div style={styles.testimonialsContainer}>
  <h2 style={styles.title}>{t("testimonialsTitle", { defaultValue: "What Our Users Say" })}</h2>
  <p style={styles.testimonial}>
    "This platform has been a lifesaver during emergencies. Highly recommend!" - User A
  </p>
  <p style={styles.testimonial}>
    "The real-time alerts kept us safe and informed. Fantastic initiative!" - User B
  </p>
  <p style={styles.testimonial}>
    "The real-time alerts kept us safe and informed. Fantastic initiative!" - User C
  </p>
</div>
</div>

        {/* Meet the Team */}
        <h2 style={styles.title}>{t('teamTitle')}</h2>
        <div style={styles.teamSection}>
    {teamMembers.map((member) => (
      <div
        key={member.id}
        style={styles.teamMember}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = styles.teamMemberHover.transform;
          e.currentTarget.style.boxShadow = styles.teamMemberHover.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={styles.teamImage}
        />
        <h3 style={styles.teamName}>{member.name}</h3>
        <p style={styles.teamRole}>{member.role}</p>
      </div>
    ))}
  </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>
            {t('footerText', { defaultValue: "Ready to learn more? Visit our <a href='/contact'>Contact Us</a> page or follow us on social media." })}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
