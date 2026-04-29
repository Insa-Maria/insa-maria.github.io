# Raw Original Portfolio Projects

This README lists the projects shown on the portfolio page and summarizes their key characteristics.

## Projects rewrote


### 1. IGS Crop Height Tracker
- Overview: AI plant monitoring interface for tracking crop growth in a Growth Tower and enabling data-driven harvest decisions.
- Challenge: Manual crop-height checks are time-consuming and inconsistent, making comparisons and harvest prediction difficult. Lack of standardised height data complicates analysis and decision-making.
- Scope: Design, prototyping, testing and launch (Feb-Aug 2022).
- Tools: Azure, APIs, TypeScript, Angular, Plotly.js.
- Outcome: Customer-facing app that tracks crop growth and flags plants growing too close to lights, supporting trend analysis and operational alerts.

### 2. IGS Crop Height Tracker User Guide
- Overview: Documentation set for the IGS Crop Height Tracker, covering onboarding and core workflows.
- Challenge: Users needed clear, comprehensive guidance to adopt the tool quickly and confidently.
- Scope: User guide covering installation, setup and usage instructions.
- Tools: Documentation, tutorials and API reference.
- Outcome: A complete guide that helps users understand and use the Crop Height Tracker effectively.

### 3. IGS Visualisation Standards
- Overview: A set of visualisation standards and a catalogue to make plots feel native to their context with consistent grammar, typography and graph elements.
- Challenge: Define and document a practical visual grammar and provide code templates so teams can apply consistent styles across matplotlib, plotly and holoviews.
- Scope: Documentation, example templates and a Python package, plus Backstage developer docs and Quick Style Reference templates.
- Tools: matplotlib, plotly, holoviews.
- Outcome: Visual catalogue, code templates and a library of styles to reduce design debt and speed up consistent reporting, with examples and guidance on common mistakes.

### 4. Rave of Fairness
- Overview: An educational, interactive visualization that helps university students explore how representation works in ranked algorithms within networked social scenes. Using an accessible narrative (a club scenario with "Bobas" as a minority and "Tikas" as a majority), the project demonstrates how algorithm rankings don't always reflect true demographics, and how connection patterns (exclusive vs. inclusive) influence outcomes. Developed during the Visualizing Complexity Science Workshop 2025 at the Complexity Hub in Vienna.
- Challenge: Make complex network and algorithmic fairness concepts accessible to non-technical audiences. Contextualize three key variables—demographic proportion (minority-to-majority ratio), minority connection patterns (exclusive vs. inclusive), and majority connection patterns—in a way that shows how algorithmic ranking decisions emerge from these interactions.
- Scope: Multi-disciplinary workshop collaboration; ideation, prototyping and visualization design.
- Tools: Python (network data generation via `src/backend/convert_all_networks.py`), web-based interactive site (visualization library: NA).
- Outcome: Live interactive site ([https://adrigabzu.github.io/rave_of_fairness/](https://adrigabzu.github.io/rave_of_fairness/)) and open repository ([https://github.com/adrigabzu/rave_of_fairness/tree/main](https://github.com/adrigabzu/rave_of_fairness/tree/main)) that demonstrates how algorithm representation can underrepresent, overrepresent, or fairly represent minority groups depending on connection patterns—not demographics alone.


### 5. 2D/3D Visual Analytic Tool
- Overview: Large volumes of complex data require visual and interactive techniques so domain experts can interpret AI-generated outputs.
- Challenge: Develop a 2D/3D visualisation tool that supports structural examiners during condition assessments, enabling defect allocation, classification and severity evaluation in a photorealistic 3D environment.
- Scope: Concept to research, design, prototype and user testing.
- Tools: C++, Unreal Engine, Blender.
- Outcome: Interactive prototype validated through a tunnel case study demonstrating real-world applicability.

### 6. Image Acquisition System
- Overview: Traditional railway tunnel inspections are time-consuming and can produce inconsistent data. This project designed an optical-thermal camera rig to improve inspection quality and repeatability.
- Challenge: Design and manufacture an imaging rig to supplement visual/manual inspections and provide reliable data for condition monitoring and maintenance planning.
- Scope: 12-week honours thesis: research, conception, design, prototype and user testing.
- Tools: AutoCAD, SolidWorks, Keyshot.
- Outcome: Distinction dissertation and published work: [Imaging system for railway tunnel inspection](https://ieeexplore.ieee.org/abstract/document/8052679).

### 7. AI Visualisation Tool for Covid-19
- Overview: Members from GCU's Data Science Research Group, led by Professor Gordon Morison, took part in the week-long CoronaHack competition where multidisciplinary teams used public data to combat COVID-19. The event ran fully online via Slack and Microsoft Teams.
- Challenge: Build a solution to support first diagnosis of COVID-19 in hospitals using chest X-rays and clinical annotations. The team created a prototype visualisation tool that combines X-ray images and patient data to show severity.
- Scope: Five days: research, concepting and prototyping.
- Tools: Streamlit, Python, AI.
- Outcome: Prototype delivered and awarded [2nd place](https://www.gcu.ac.uk/student/news/studentnews-coronahack/) in the hackathon.

### 8. 360 Virtual Tour of GCU
- Overview: During the COVID-19 outbreak, Professor Gordon Morison purchased a 360 camera and repurposed Maria's data-visualisation skills. The project started within the Department of Computing and quickly scaled to School and University level.
- Challenge: Design and develop a 360 Virtual Tour website so prospective students can navigate Glasgow Campus facilities and have an immersive experience.
- Scope: Six weeks: research, concepting, prototyping, testing and launch.
- Tools: HTML, JS, CSS, Marzipano, Ricoh Theta, Resolve 360.
- Outcome: Launched the live tour, published a paper in [WEBIST 2020](https://www.scitepress.org/PublicationsDetail.aspx?ID=TzsprwABGhI=&t=1), shared [open-source code](https://github.com/Insa-Maria/Virtual_Tour.git), and delivered a [conference presentation](https://youtu.be/Hf_jQ0Z_Shs).


### 9. Visualising Water Environment (CREW)
- Overview: CREW (Scotland's Centre of Expertise for Waters) raises awareness of the water environment and pharmaceutical concentrations through effective visual communication.
- Challenge: Ideate data-visualisation solutions that communicate pharmaceutical risk to both domain experts and non-expert audiences.
- Scope: Ideation, research and visualisation.
- Tools: Sketching, visual techniques, GIS.
- Outcome: Recommended visualisation approaches delivered for the CREW-Reduction project.


### 10. Cooperative Minecraft Supported by NPCs
- Overview: A cooperative Minecraft experience where friendly NPCs guide players through shared tasks. The goal was to create a welcoming space that helps neurodivergent people connect, collaborate and feel included within religious communities.
- Challenge: Many tech interventions focus on education or therapy, not real social connection. The experience needed to feel safe, supportive and genuinely social while fitting the rhythms and values of a faith community.
- Scope: Research, concepting, prototyping, testing and launch over four months (June-Sep 2021).
- Tools: Java, AWS, Minecraft plugin and other APIs.
- Outcome: Designed and developed a Minecraft mod with in-game cooperative tasks supported by NPCs to encourage social interaction and inclusion.

### 11. VIS Tool for AI-Driven Cyber Deception (Lupovis)
- Overview: As a freelance UX Designer for Lupovis, I designed a cybersecurity visualisation system that helps operators make sense of complex attack data and turn it into actionable decisions during incident response.
- Challenge: The product was early-stage, so the interface needed to be convincing enough to secure funding while still grounded in real operator workflows, demonstrating clarity, scalability and a strong user story.
- Scope: UX research, concepting, prototyping and validation (Oct 2020 - Feb 2021).
- Tools: Figma.
- Outcome: Supported cross-functional MVP delivery and helped secure GBP 650k in funding to continue development.

### 12. Web-based 2D/3D Visualisation
- Overview: A survey of open-source tools for interactive 2D and 3D visualisation, including JavaScript libraries and R-based plotting frameworks.
- Challenge: Evaluate 2D and 3D tooling for interaction, measurement and annotation. Potree enabled elevation profiling in 3D models, while R and D3 supported techniques like parallel coordinates and boxplots.
- Scope: Comparative exploration and prototyping across 2D and 3D visual analytics workflows.
- Tools: D3.js, Potree, ggplot2, RStudio.
- Outcome: Documented strengths and limitations of each tool to inform future interactive visual analytics projects.

