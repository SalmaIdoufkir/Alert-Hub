import React from 'react';
import '../styles/CreateAccount.css'; // Assurez-vous de créer un fichier CSS correspondant pour le style
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Redirection vers la page "home"
    navigate("/home");
  };

  return (
    <div className="create-account-page">
      {/* Logo en haut à droite */}
      <div className="create-account-header-logo">
        <img
          src="/assets/3.png" // Remplacez par l'URL de votre logo
          alt="Logo"
        />
      </div>

      <div className="create-account-left-panel">
        <div className="create-account-alert-logo">
          <img
            src="/assets/logo2.png" // Remplacez par l'URL de votre logo ou icône
            alt="Alert Logo"
          />
        </div>
        <h2>Stay Prepared, Act Fast, Recover Strong</h2>
      </div>
      <div className="create-account-right-panel">
        <div className="create-account-form-container">
          <h2>Create Account</h2>
          <div className="create-account-social-login">
            <button className="create-account-social-button google">
              <img
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                alt="Google Logo"
              />
              Sign up with Google
            </button>
            <button className="create-account-social-button facebook">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
              />
              Sign up with Facebook
            </button>
          </div>
          <p className="create-account-separator">-OR-</p>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button
      type="button"
      className="create-account-btn"
      onClick={handleCreateAccount}
    >
      Create Account
    </button>
          </form>
          <p className="create-account-signin-link">
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
