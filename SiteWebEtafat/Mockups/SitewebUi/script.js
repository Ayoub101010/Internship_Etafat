// Leaflet Map
const map = L.map("map").setView([35.7596, -5.8339], 13); // Par exemple : Tanger
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Chart.js Circular Sync Chart
const syncChart = new Chart(document.getElementById("syncChart"), {
  type: "doughnut",
  data: {
    labels: ["Synced", "Remaining"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#4caf50", "#ddd"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: { display: false },
    },
  },
});

// Bar Chart
const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Zone 1", "Zone 2", "Zone 3", "Zone 4"],
    datasets: [
      {
        label: "Collectes",
        data: [30, 45, 20, 51],
        backgroundColor: "#1976d2",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  },
});

// Pie Chart
const pieChart = new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Validées", "En attente", "Rejetées"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
      },
    ],
  },
});
