import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faCarCrash,
  faFistRaised,
  faEdit,
  faTrash,
  faFileAlt,
  faShareAlt,
  faComment,
  faArrowUp, 
  faArrowDown,
  faExclamationTriangle,
  faEye, faHouseChimneyCrack, faWater ,
  

} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import "../styles/myreportt.css";
import { Card, CardContent, Typography, Grid,Box} from "@mui/material";
import { Warning, CheckCircle } from '@mui/icons-material'; // Import the icons

// Register Chart.js components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MyReports = () => {
  const reports = [
    {
      id: 1,
      title: "Fire in Casablanca",
      description: "A huge fire broke out near the central market. Immediate action required.",
      type: "Fire",
      location: "Downtown, Casablanca",
      image:"/assets/explosion-gaz.jpg",
      date:"10/11/2024",
      
      video: "",
      shares: 50,
      comments: 10,
    },
    {
      id: 2,
      title: "Car Accident on Highway A3",
      description: "Serious accident with multiple casualties, emergency help needed.",
      type: "Accident",
      location: "Highway A3, near exit 12",
      image: "/assets/accident.jpg",
      video: "",
      date:"02/06/2024",
      shares: 30,
      comments: 5,
    },
    {
      id: 3,
      title: "Violence at Mohammed V Square",
      description: "A violent fight broke out between two groups, police intervention needed.",
      type: "Violence",
      location: "Mohammed V Square, Casablanca",
      image: "/assets/violence-ultras.jpg",
      video: "",
      date:"11/05/2024",
      shares: 15,
      comments: 2,
    },
    {
        id: 1,
        title: "Effondrement d’un Immeuble à Casablanca (2020)",
        description: "Un immeuble de plusieurs étages s'est effondré en plein cœur de Casablanca...",
        type: "catastrophe",
        location: "Centre-ville, Casablanca",
        image: "/assets/effondrement-immeuble.jpg",
        video: "",
        date:"05/04/2024",
        shares: 120,
        comments: 45,
      },
      {
        id: 2,
        title: "Explosion de Gaz à Mohammedia (2022)",
        description: "Une explosion de gaz dans un bâtiment résidentiel à Mohammedia ...",
        type: "Fire",
        location: "Mohammedia, Quartier Al Irfane",
        image: "/assets/explosion-gaz.jpg",
        video: "",
        date:"19/03/2024",
        shares: 85,
        comments: 30,
      },
      {
        "id": 4,
        "title": "Casablanca Earthquake (2023)",
        "description": "A magnitude 6.8 earthquake struck near Casablanca on September 8, 2023,....",
        "type": "Earthquake",
        "location": "Casablanca, Morocco",
        "image": "/assets/seisme.jpg",
        "video": "",
        "date": "08/09/2023",
        "shares": 200,
        "comments": 50
      },
      {
        "id": 5,
        "title": "Flooding in Casablanca (2023)",
        "description": "Heavy rainfall in early 2023 led to significant flooding in Casablanca...",
        "type": "Flood",
        "location": "Casablanca, Morocco",
        "image": "/assets/inondation.jpg",
        "video": "",
        "date": "January 2023",
        "shares": 150,
        "comments": 40
      }
      
  ];

  const handleEdit = (id) => {
    alert(`Editing report with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleting report with ID: ${id}`);
  };
  const handleViewDetails = (reportId) => {
    // Define what happens when the view details button is clicked
    console.log("Viewing details for report id:", reportId);
    // You can navigate to a different page or show a modal with report details
  };

  
// Data for the charts
const reportTypeData = {
    labels: ["Accident", "Fire", "Violence","Flood","Earthquate", "Other"], // Added 'Other' category for miscellaneous reports
    datasets: [
      {
        data: [
          reports.filter((report) => report.type === "Accident").length,
          reports.filter((report) => report.type === "Fire").length,
          reports.filter((report) => report.type === "Violence").length,
          reports.filter((report) => report.type === "Flood").length,
          reports.filter((report) => report.type === "Earthquate").length,

          reports.filter((report) => report.type !== "Accident" && report.type !== "Fire" && report.type !== "Violence").length, // Miscellaneous
        ],
        backgroundColor: ["#D32F2F", "#C2185B", "#1976D2","#4CAF50","#FFEB3B", "#757575"], // Red, Pink, Blue, Grey (Matches your theme)
      },
    ],
  };
  
  const reportStatusData = {
    labels: ["Safe", "Alert", "Dangerous"],
  datasets: [
    {
      label: "Emergency Status in Casablanca",
      data: [
        reports.filter((report) => report.status === "Resolved").length, // Safe: Resolved Reports
        reports.filter((report) => report.status === "Active").length,   // Alert: Active Reports
        reports.filter((report) => report.status === "Pending").length,  // Dangerous: Pending Reports
      ],
      backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336"], // Green for Safe, Yellow for Alert, Red for Dangerous
      hoverBackgroundColor: ["#66BB6A", "#FBC02D", "#D32F2F"], // Darker shades for hover effect
    },
  ],
  };
   // Hardcoded data for emergency status in Casablanca
   const emergencyStatusData = {
    labels: ["Safe", "Alert", "Dangerous"],
    datasets: [
      {
        label: "Emergency Status in Casablanca",
        data: [120, 80, 40], // Safe: 120, Alert: 80, Dangerous: 40
        backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336"],
        hoverBackgroundColor: ["#66BB6A", "#FBC02D", "#D32F2F"],
      },
    ],
  };

  // Hardcoded data for types of emergencies
  const emergencyTypeData = {
    labels: ["Accident", "Fire", "Violence", "Natural Disaster", "Other Emergencies"],
    datasets: [
      {
        label: "Types of Emergencies in Casablanca",
        data: [45, 20, 50, 15, 10], // Violence: 50, Accidents: 45, etc.
        backgroundColor: ["#1976D2", "#D32F2F", "#FFC107", "#4CAF50", "#757575"],
        hoverBackgroundColor: ["#1565C0", "#C2185B", "#FF9800", "#66BB6A", "#616161"],
      },
    ],
  };

  const isDangerous = true; // Assume Casablanca is dangerous based on the data
  const highestDangerType = "Violence"; // Hardcoded highest danger type

  

  return (
    <Layout title="My Reports">
      <div className="dashboard-container">
        {/* Main Content */}
        <div className="main-content">
          <div className="main">
            <div className="my-report-container">
              <div className="main-title">
                <h2>Your Reports Summary</h2>
              </div>

          {/* Stat Cards */}
            {/* Stat Cards */}
            <div className="stat-cards">
              <div className="stat-cards-item">
                <FontAwesomeIcon icon={faFileAlt} className="stat-cards-icon primary" />
                <div className="stat-cards-info">
                  <div className="stat-cards-info__num">{reports.length}</div>
                  <div className="stat-cards-info__title">Total Reports</div>
                  <div className="stat-cards-info__trend">
                    <div className="trend-info">
                      <span>Last Month</span>
                      <FontAwesomeIcon icon={faArrowUp} className="trend-icon positive" />
                      <span className="trend-value">+5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-cards-item">
                <FontAwesomeIcon icon={faShareAlt} className="stat-cards-icon warningg" />
                <div className="stat-cards-info">
                  <div className="stat-cards-info__num">
                    {reports.reduce((total, report) => total + report.shares, 0)}
                  </div>
                  <div className="stat-cards-info__title">Total Shares</div>
                  <div className="stat-cards-info__trend">
                    <div className="trend-info">
                      <span>Last Month</span>
                      <FontAwesomeIcon icon={faArrowDown} className="trend-icon negative" />
                      <span className="trend-value">-3%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-cards-item">
                <FontAwesomeIcon icon={faComment} className="stat-cards-icon success" />
                <div className="stat-cards-info">
                  <div className="stat-cards-info__num">
                    {reports.reduce((total, report) => total + report.comments, 0)}
                  </div>
                  <div className="stat-cards-info__title">Total Comments</div>
                  <div className="stat-cards-info__trend">
                    <div className="trend-info">
                      <span>Last Month</span>
                      <FontAwesomeIcon icon={faArrowUp} className="trend-icon positive" />
                      <span className="trend-value">+10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          {/* Reports Table */}
          <div className="table-wrapper">
            <table className="posts-table">
              <thead>
                <tr>
                  <th>Media</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Emergency Type</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      {report.image ? (
                        <img src={report.image} alt={report.title} />
                      ) : report.video ? (
                        <video src={report.video} controls />
                      ) : (
                        <span>No media</span>
                      )}
                    </td>
                    <td>{report.title}</td>
                    <td>{report.description}</td>
                    <td>
                      {/* Emergency Type Icons */}
                      <FontAwesomeIcon
                        icon={
                          report.type === "Fire"
                            ? faFire
                            : report.type === "Accident"
                            ? faCarCrash
                            : report.type === "Violence"
                            ? faFistRaised
                            : report.type === "Earthquake"
                            ? faHouseChimneyCrack
                            : report.type === "Flood"
                            ? faWater
                            : faFistRaised // Default icon if no match
                        }
                        className={`type-icon ${report.type.toLowerCase()}`}
                        style={{ marginRight: '8px' }} // Adds some space between icon and text
                      />
                      {report.type}
                    </td>
                    <td>{report.location}</td>
                    <td>{report.date}</td>
                    <td className="action-buttons">
                      <button className="edit-btn" onClick={() => handleEdit(report.id)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(report.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      {/* View Details Icon */}
                      <button className="view-btn" onClick={() => handleViewDetails(report.id)}>
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>

      {/* Charts */}
      <div className="stats-section">


          <div className="charts-container">
            <div className="chart">
              <h3 className="chart-title">Total Reports by Type</h3>
              <Pie data={reportTypeData} />
            </div>
            <div className="chart">
              <h3 className="chart-title">Reports Status Breakdown</h3>
              <Bar data={reportStatusData} options={{ responsive: true }} />
            </div>
          </div>
          <div style={{ padding: "20px" }}>
          <Grid container spacing={2}>
            {/* Current Danger State */}
            <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h6">Current Danger State</Typography>
          
          {/* Line containing the icon and text */}
          <Box display="flex" alignItems="center" gap={1}>
            <FontAwesomeIcon 
              icon={isDangerous ? faExclamationTriangle : faFistRaised} // Show different icons based on danger state
              style={{ color: isDangerous ? 'red' : 'green', fontSize: '30px' }}
            />
            <Typography variant="body1">
              Casablanca is currently: <strong>{isDangerous ? "Dangerous" : "Safe"}</strong>
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <FontAwesomeIcon 
              icon={faExclamationTriangle} // You can adjust this to any other icon
              style={{ color: 'orange', fontSize: '25px' }} 
            />
            <Typography variant="body1">
              Highest Danger Type: <strong>{highestDangerType}</strong>
            </Typography>
          </Box>
          
        </CardContent>
      </Card>
    </Grid>

            {/* Emergency Status Chart */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Emergency Status</Typography>
                  <Pie data={emergencyStatusData} />
                </CardContent>
              </Card>
            </Grid>

            {/* Emergency Type Chart */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Types of Emergencies</Typography>
                  <Bar data={emergencyTypeData} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default MyReports;
