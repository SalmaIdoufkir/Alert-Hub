import React from 'react';

const SignIn = () => {
  const styles = {
    page: {
      fontFamily: "'Montserrat Alternates', sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    headerLogo: {
      position: "absolute",
      top: "20px",
      left: "20px",
    },
    logoImage: {
      width: "170px",
      height: "auto",
    },
    mainContainer: {
      display: "flex",
      flex: 1,
    },
    leftPanel: {
      flex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      backgroundColor: "#ffffff",
    },
    
    formHeader: {
      marginBottom: "30px",
      textAlign: "left",
      color: "#333333",
      fontSize: "24px",
      fontWeight: "bold",
    },
    socialLogin: {
      display: "flex", /* Affiche les éléments en ligne */
      justifyContent: "center", /* Centre les boutons horizontalement */
    gap: "100px", /* Espace entre les boutons */
    marginBottom: "20px",
    },
    socialButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "10px 20px",
      fontSize: "16px",
      color: "#333",
      cursor: "pointer",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      fontFamily: "'Montserrat Alternates', sans-serif",
    },
    
    socialButtonHover: {
      backgroundColor: "#f5f5f5",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    separator: {
      textAlign: "center",
      color: "#aaa",
      margin: "20px 0",
      fontSize: "14px",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "14px",
      marginBottom: "15px",
    },
    signInButton: {
      backgroundColor: "#c8102e",
      color: "white",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontFamily: "'Montserrat Alternates', sans-serif",
    },
    signInButtonHover: {
      backgroundColor: "#a30c24",
    },
    signupLink: {
      marginTop: "10px",
      textAlign: "right",
      fontSize: "14px",
    },
    signupAnchor: {
      color: "#c8102e",
      textDecoration: "none",
      fontWeight: "bold",
    },
    rightPanel: {
      flex: 1,
      backgroundColor: "#000000",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
    },
    alertImage: {
      width: "170px",
      height: "auto",
      marginBottom: "10px",
    },
    alertText: {
      fontSize: "20px",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.page}>
      {/* Logo en haut à gauche */}
      <div style={styles.headerLogo}>
        <img src="/assets/3.png" alt="Alert Hub Logo" style={styles.logoImage} />
      </div>

      {/* Contenu principal */}
      <div style={styles.mainContainer}>
        {/* Section gauche */}
        <div style={styles.leftPanel}>
          <div style={styles.formContainer}>
            <h2 style={styles.formHeader}>Sign In</h2>
            <div style={styles.socialLogin}>
              <button style={styles.socialButton}>
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google Logo"
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                />
                Sign in with Google
              </button>
              <button style={styles.socialButton}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook Logo"
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                />
                Sign in with Facebook
              </button>
            </div>
            <p style={styles.separator}>-OR-</p>
            <form>
              <input type="email" placeholder="Email Address" required style={styles.formInput} />
              <input type="password" placeholder="Password" required style={styles.formInput} />
              <button type="submit" style={styles.signInButton}>
                Sign In
              </button>
            </form>
            <p style={styles.signupLink}>
              Don't have an account? <a href="/" style={styles.signupAnchor}>Sign up</a>
            </p>
          </div>
        </div>

        {/* Section droite */}
        <div style={styles.rightPanel}>
          <img src="/assets/logo2.png" alt="Alert Icon" style={styles.alertImage} />
          <p style={styles.alertText}>Stay Prepared, Act Fast, Recover Strong</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
