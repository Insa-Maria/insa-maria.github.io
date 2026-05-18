# Portfolio Categories

## 1. Data Products That Drive Decisions

**Signal:** I build production-grade tools that solve real problems and enable better decisions.

**Why this matters:**
- Real users and real-world impact
- Clear decision-making context
- End-to-end ownership (from problem → product → outcome)

### Projects

- **Real-Time Crop Monitoring System for Growth Optimisation and Harvest Decisions**  
  *(IGS Crop Height Tracker)*  
  Detects risky plant growth early to prevent light damage and improve harvest decisions.

- **Cybersecurity Visual Platform for Real-Time Threat Detection and Response**  
  *(VIS Tool for AI-Driven Cyber Deception)*  
  Transforms complex attack data into actionable insights during live incident response.

- **3D Inspection Platform for Infrastructure Defect Detection and Risk Assessment**  
  *(2D/3D Visual Analytic Tool)*  
  Enables engineers to identify, classify, and prioritise structural defects in a spatial environment.

- **High-Precision Imaging System for Infrastructure Monitoring and Maintenance Planning**  
  *(Image Acquisition System)*  
  Captures consistent optical and thermal data to improve inspection reliability and decision-making.

---

## 2. Making Complex Data Understandable

**Signal:** I turn complex, abstract, or messy data into clear and interpretable insights.

### Projects

- **Interactive Tool for Auditing Bias in Ranking and Recommendation Systems**  
  *(Rave of Fairness)*  

- **Visualising Environmental Risk from Pharmaceutical Data for Public Understanding**  
  *(Visualising Water Environment – CREW)*  

- **Interactive Exploration of 2D/3D Visualisation Techniques for Complex Data Analysis**  
  *(Web-based 2D/3D Visualisation)*  

---

## 3. AI & Intelligent Systems

**Signal:** I integrate machine learning and AI into usable, decision-support tools.

### Projects

- **AI-Assisted Diagnosis Platform Combining X-ray Imaging and Clinical Data**  
  *(AI Visualisation Tool for Covid-19)*  

---

## 4. Scalable Visualisation Systems

**Signal:** I build reusable systems that improve consistency, scalability, and team productivity.

### Projects

- **Scalable Data Visualisation Design System for Consistent Analytics Across Teams**  
  *(IGS Visualisation Standards)*  

- **Real-Time Crop Monitoring System User Guide**  
  *(IGS Crop Height Tracker User Guide)*  

---

## 5. Immersive & Experimental Interfaces

**Signal:** I explore new interaction paradigms to create engaging and meaningful user experiences.

### Projects

- **360° Immersive Platform for Remote Exploration of Physical Environments**  
  *(360 Virtual Tour of GCU)*  

- **Cooperative Game Environment for Social Inclusion and Guided Collaboration**  
  *(Cooperative Minecraft Supported by NPCs)*  


---

# 5-Second Card Projects

## 🟢 Data Products That Drive Decisions

### Real-Time Crop Monitoring System for Growth Optimisation and Harvest Decisions
Detects risky plant growth early to prevent light damage and improve harvest decisions  
**Impact:** Used in production  
**Signals:** Data Product · AI · Real-time · Decision Support · UX  

---

### Cybersecurity Visual Platform for Real-Time Threat Detection and Response
Turns complex attack data into actionable insights during live incidents  
**Impact:** £650k funding secured  
**Signals:** Data Product · UX · Decision Support · Security · Visual Analytics  

---

### 3D Inspection Platform for Infrastructure Defect Detection and Risk Assessment
Enables engineers to assess damage severity directly in a spatial environment  
**Impact:** Validated with real tunnel case  
**Signals:** 3D · Visual Analytics · Decision Support · Engineering · UX  

---

### High-Precision Imaging System for Infrastructure Monitoring and Maintenance Planning
Captures consistent inspection data to support maintenance decisions  
**Impact:** Published research  
**Signals:** Data Acquisition · Engineering · Hardware · Reliability · Analysis  

---

## 🟡 Making Complex Data Understandable

### Interactive Tool for Auditing Bias in Ranking and Recommendation Systems
Explains how ranking systems misrepresent groups through interactive scenarios  
**Impact:** Research workshop (Vienna)  
**Signals:** Storytelling · Networks · Interactive · Data Science · Education  

---

### Visualising Environmental Risk from Pharmaceutical Data for Public Understanding
Translates complex environmental data into accessible insights for policy awareness  
**Impact:** Government research initiative  
**Signals:** Data Storytelling · Public Sector · UX · Insight Communication  

---

### Interactive Exploration of 2D/3D Visualisation Techniques for Complex Data Analysis
Evaluates tools for analysing and interacting with complex datasets  
**Impact:** Research-informed toolkit decisions  
**Signals:** Data Viz · Tooling · Exploration · 3D · Analysis  

---

## 🔵 AI & Intelligent Systems

### AI-Assisted Diagnosis Platform Combining X-ray Imaging and Clinical Data
Combines medical imaging and patient data to support early severity assessment  
**Impact:** 2nd place hackathon  
**Signals:** AI · Healthcare · Data Fusion · Decision Support · Rapid Prototyping  

---

## 🟣 Scalable Visualisation Systems

### Scalable Data Visualisation Design System for Consistent Analytics Across Teams
Standardises plots across teams to improve clarity and reduce design debt  
**Impact:** Team-wide adoption  
**Signals:** Design Systems · Data Viz · Python · Scalability · Enablement  

---

### Real-Time Crop Monitoring System User Guide
Documentation for the Real-Time Crop Monitoring System for Growth Optimisation and Harvest Decisions, helping customers use the app effectively.
**Impact:** Improved usability & adoption  
**Signals:** Documentation · UX · Enablement · Product Thinking  

---

## 🟠 Immersive & Experimental Interfaces

### 360° Immersive Platform for Remote Exploration of Physical Environments
Allows users to explore real-world spaces remotely  
**Impact:** Live deployed + published research  
**Signals:** Immersive · Web · UX · Interaction · Visual Experience  

---

### Cooperative Game Environment for Social Inclusion and Guided Collaboration
Uses guided gameplay to foster collaboration among neurodivergent users  
**Impact:** Real-world community use  
**Signals:** Interaction Design · Social Impact · UX · Systems · Game Design  


---

# Top Projects

## AI Crop Monitoring System for Growth Optimisation and Harvest Decisions
### Summary
Greenhouse teams need to monitor thousands of plants daily, but manual checks are slow, inconsistent, and often too late to prevent crop damage.

I built a live monitoring system that tracks plant growth across towers, flags risk conditions, and gives operators a clear view of what needs action.

Teams use it daily to decide when to harvest, adjust lighting, and intervene before yield is impacted.

### Outcomes
- Enabled operators to identify plants exceeding safe height thresholds early, resulting in reduced crop loss and fewer emergency interventions  
- Enabled teams to decide optimal harvest timing based on growth trends, resulting in improved yield consistency across cycles  
- Enabled farm managers to detect underperforming towers quickly, resulting in faster corrective actions and reduced production variability  
- Enabled operators to prioritise daily interventions (lighting adjustments, repositioning), resulting in faster decision-making during operations  
- Enabled standardised measurement across sites, resulting in more reliable data and reduced discrepancies between operators  

### UX & Decision Layer

**Users:**  
Greenhouse operators and farm managers running vertical farming systems  

**Context:**  
Used during daily operations to monitor crop performance across multiple towers and growing cycles  

**Decisions enabled:**  
- What needs immediate intervention today  
- Which crops are ready for harvest  
- Where to adjust lighting or environmental conditions  
- Which towers are underperforming and need attention  

**Pain points solved:**  
- Time-consuming manual measurements  
- Inconsistent tracking across operators  
- Late detection of growth-related risks  
- No clear way to compare performance across towers  

### Technical Overview

**Frontend:**  
- Angular + TypeScript for a fast, operational dashboard used in daily workflows  
- Plotly.js to explore growth trends and detect anomalies interactively  

**Data:**  
- Live plant height data collected via sensors and APIs  
- Structured for trend tracking, threshold alerts, and cross-tower comparison  

**Infrastructure:**  
- Azure-backed system supporting real-time updates and scalability across farms  
- API layer enabling integration with existing farm systems  

### Interactive Tool for Auditing Bias in Ranking and Recommendation Systems

### Summary
Teams building ranking systems often rely on aggregate metrics, making it hard to see when certain groups are being under- or over-represented.

I built an interactive tool that lets users simulate ranking scenarios and see how network structure affects representation.

It’s used to explore, explain, and challenge algorithm behaviour before decisions are shipped to users.

### Outcomes
- Enabled data teams to detect when ranking outputs misrepresent minority groups, resulting in earlier identification of biased models before deployment  
- Enabled users to isolate the impact of network structure on ranking outcomes, resulting in more accurate diagnosis of bias root causes  
- Enabled product and data teams to test alternative scenarios, resulting in more informed decisions on algorithm design and tuning  
- Enabled teams to explain fairness issues visually to stakeholders, resulting in faster alignment and reduced misinterpretation of metrics  
- Enabled critical evaluation beyond aggregate metrics, resulting in more robust and defensible model validation processes  

### UX & Decision Layer

**Users:**  
Data scientists, product teams, and researchers working on ranking or recommendation systems  

**Context:**  
Used during model evaluation, design reviews, and when validating or explaining algorithm behaviour  

**Decisions enabled:**  
- Whether a ranking system is fair enough to deploy  
- What is causing biased outcomes (data vs structure)  
- How to adjust model or network assumptions  
- How to explain algorithm decisions to stakeholders or regulators  

**Pain points solved:**  
- Lack of visibility into why rankings behave the way they do  
- Difficulty explaining bias beyond metrics  
- Over-reliance on static evaluation methods  
- Limited tools for exploring alternative scenarios  

### Technical Overview

**Frontend:**  
- Lightweight web interface designed for interactive scenario exploration  
- Visual layer focused on making network effects easy to interpret  

**Data:**  
- Synthetic network generation in Python to simulate controlled scenarios  
- Models structured to isolate the impact of different variables  

**Infrastructure:**  
- Fast, reproducible setup for experimentation and demos  
- Open-source foundation to support transparency and reuse  

## Interactive Tool for Auditing Bias in Ranking and Recommendation Systems

### Summary
Algorithmic rankings often misrepresent minority groups, but these biases are difficult to detect and explain.

I built an interactive simulation tool that exposes how network structures—not just demographics—drive unfair ranking outcomes.

This enables users to audit, diagnose, and challenge algorithmic decisions with evidence.

### Outcomes
- Enabled students and researchers to identify when ranking systems under- or over-represent minority groups, improving critical evaluation of algorithm outputs  
- Enabled users to test how different connection patterns impact fairness, supporting more informed system design decisions  
- Enabled clearer communication of algorithmic bias, helping bridge the gap between technical models and real-world implications  
- Enabled exploration of “what-if” scenarios, supporting decision-making around fairer network and recommendation design  

### UX & Decision Layer

**Users:**  
Data scientists, researchers, students, and policy-aware product teams  

**Context:**  
Understanding and evaluating ranking algorithms used in social platforms, recommendation systems, or network-based products  

**Workflows:**  
- Adjust demographic ratios (minority vs majority)  
- Modify connection patterns (exclusive vs inclusive networks)  
- Run simulations of ranking outcomes  
- Visually compare representation vs ground truth  

**Decisions enabled:**  
- Whether an algorithm is producing biased rankings  
- What structural factors are causing unfair outcomes  
- How to redesign connection or recommendation strategies  
- How to justify fairness-related decisions to stakeholders  

**Pain points solved:**  
- Black-box perception of algorithmic decisions  
- Difficulty explaining fairness issues to non-technical audiences  
- Lack of intuitive tools for exploring bias drivers  
- Over-reliance on static metrics without context  

### Technical Overview

**Frontend:**  
- Web-based interactive interface designed for scenario exploration  
- Visual storytelling layer to make abstract network behaviour interpretable  

**Data:**  
- Synthetic network generation using Python to simulate different structural conditions  
- Models structured to isolate variables affecting ranking fairness  

**Infrastructure:**  
- Lightweight architecture enabling rapid experimentation and reproducibility  
- Open-source repository to support transparency and extensibility  


## AI-Assisted 3D Inspection Platform for Infrastructure Risk Assessment

### Summary
Infrastructure inspections rely on images, notes, and reports that are hard to connect, making defect assessment slow and inconsistent.

I designed an interactive 2D/3D visual analytics platform where inspectors can navigate an asset, view AI-detected defects in context, and assess severity in one place.

It’s used to support faster, more consistent decisions about maintenance and risk.

### Outcomes
- Enabled inspectors to locate and assess defects within a spatial 3D context, resulting in reduced misclassification and interpretation errors  
- Enabled teams to prioritise maintenance actions based on severity and location, resulting in faster response times and reduced risk exposure  
- Enabled validation of AI-detected defects in context, resulting in increased trust and reduced false-positive acceptance  
- Enabled consistent defect classification across inspectors, resulting in improved reporting accuracy and comparability  
- Enabled consolidation of inspection data into a single interface, resulting in reduced time spent switching between tools and sources  

### UX & Decision Layer

**Users:**  
Structural inspectors, civil engineers, and infrastructure managers  

**Context:**  
Used during inspection review and maintenance planning for large-scale infrastructure (e.g. tunnels)  


**Decisions enabled:**  
- Which defects require immediate repair  
- How severe and widespread issues are  
- How to prioritise maintenance across the asset  
- Whether AI detections are accurate or need review  

**Pain points solved:**  
- Disconnected inspection data across tools and formats  
- Difficulty understanding defects without spatial context  
- Inconsistent classification between inspectors  
- Low trust in AI outputs without visual validation  

### Technical Overview

**Frontend:**  
- Unreal Engine powering a navigable, photorealistic 3D inspection environment  
- Interactive tools for selecting, annotating, and classifying defects  

**Data:**  
- AI-generated defect detections integrated into spatial models  
- Structured layers supporting classification and severity tagging  

**Infrastructure:**  
- C++ for performance-critical rendering and interaction  
- Blender for preparing and optimising 3D assets  


