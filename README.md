# CelestiGuard
Intelligent Orbital Risk Monitoring &amp; Maneuver Planning System
Project Overview

CelestiGuard is a Space Situational Awareness (SSA) platform designed to:

Track satellites in real time using TLE data

Propagate orbital positions using SGP4

Detect potential close approaches (simulated conjunction detection)

Compute risk scores

Suggest avoidance maneuver adjustments

Provide 3D visualization dashboard

It uses real orbital mechanics libraries but simplified risk modeling.

🏗 System Architecture
Frontend (Next.js + Three.js)
        |
        | REST API
        |
Backend (Node.js + Express)
        |
        | satellite.js (SGP4 propagation)
        |
Risk Engine + Conjunction Simulator

📁 Complete Project Structure
celestiguard/
│
├── backend/
│   ├── server.js
│   ├── riskEngine.js
│   ├── conjunctionEngine.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   │   └── page.js
│   ├── components/
│   │   ├── Globe.jsx
│   │   ├── Dashboard.jsx
│   │   └── SatelliteCard.jsx
│   └── package.json
│
└── README.md
