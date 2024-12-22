import React, { useState, useEffect } from "react";
import axios from "axios"; // Or any other method to fetch data
import { useNavigate } from 'react-router-dom';
import '../styles/EditProfile.css';
import Layout from "../components/Layout";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile data (assuming you have an API endpoint for this)
    axios.get('/api/user/profile')
      .then(response => {
        setProfileData(response.data);
        setImagePreview(response.data.profilePicture);
      })
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileData({ ...profileData, profilePicture: file });
    setImagePreview(URL.createObjectURL(file)); // Preview the selected image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profileData.name);
    formData.append('email', profileData.email);
    if (profileData.profilePicture) {
      formData.append('profilePicture', profileData.profilePicture);
    }

    axios.post('/api/user/update-profile', formData)
      .then(response => {
        // Redirect or show a success message
        navigate('/profile');
      })
      .catch(error => console.log(error));
  };

  return (
    <Layout title="Edit your profile">
    <div className="edit-profile-edit-profile-page">
      <div className="edit-profile-main-content">
        

{/* Main Content (Profile Edit Form) */}
<div className="edit-profile-profile-form-container">
  <div className="edit-profile-profile-image-circle">
    {imagePreview && <img src={imagePreview} alt="Profile Preview" />}
  </div>
  <h1>Edit Profile</h1>
  <form onSubmit={handleSubmit}>
    <div className="edit-profile-form-group">
      <label htmlFor="fullName">
        <i className="fa fa-user"></i> Full Name
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={profileData.fullName}
        onChange={handleInputChange}
        placeholder="Enter your full name"
      />
    </div>
    <div className="edit-profile-form-group">
      <label htmlFor="gender">
        <i className="fa fa-venus-mars"></i> Gender
      </label>
      <select
        id="gender"
        name="gender"
        value={profileData.gender}
        onChange={handleInputChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="edit-profile-form-group">
      <label htmlFor="address">
        <i className="fa fa-map-marker"></i> Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={profileData.address}
        onChange={handleInputChange}
        placeholder="Enter your address"
      />
    </div>
    <div className="edit-profile-form-group">
      <label htmlFor="phoneNumber">
        <i className="fa fa-phone"></i> Phone Number
      </label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={profileData.phoneNumber}
        onChange={handleInputChange}
        placeholder="Enter your phone number"
      />
    </div>
    <div className="edit-profile-form-group">
      <label htmlFor="birthday">
        <i className="fa fa-birthday-cake"></i> Birthday
      </label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={profileData.birthday}
        onChange={handleInputChange}
      />
    </div>
    <div className="edit-profile-form-group">
      <label htmlFor="email">
        <i className="fa fa-envelope"></i> Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={profileData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
    </div>
    <div className="edit-profile-form-group edit-profile-profile-image-container">
      <label htmlFor="profilePicture">
        <i className="fa fa-camera"></i> Profile Picture
      </label>
      <input
        type="file"
        id="profilePicture"
        name="profilePicture"
        onChange={handleFileChange}
      />
    </div>
    <button type="submit" className="edit-profile-submit-btn">Save Changes</button>
  </form>
</div>




      </div>

      
    </div>
    </Layout>
  );
};

export default EditProfile;
