export const projects = [
  // =========================
  // 🟢 DATA PRODUCTS
  // =========================

  {
    id: "crop-monitoring",
    category: "Data Products",
    title: "Real-Time Crop Monitoring System for Yield Protection and Harvest Decisions",
    coverImage: "/assets/full/crop-monitor.png",
    images: [
      "/assets/full/crop-monitor.png",
      "/assets/full/documentation-crop-monitor.png"
    ],
    imageSections: [
      {
        src: "/assets/full/crop-monitor.png",
        title: "Operational Monitoring View",
        description:
          "Dashboard view designed to help operators identify plants that need intervention, compare growth across towers, and make daily harvest decisions."
      },
      {
        src: "/assets/full/documentation-crop-monitor.png",
        title: "Adoption and Enablement",
        description:
          "Supporting documentation and product guidance helped turn the monitoring system into a repeatable workflow for production teams."
      }
    ],
    description:
      "Detects risky plant growth early to prevent light damage and improve harvest decisions",
    impact: "Used in production",
    contexts: ["AgriTech", "Operations"],
    outputs: ["AI interfaces", "Data acquisition", "Decision-support tools", "Visual analytics"],
    tags: ["Data Product", "AI", "Real-time", "Decision Support", "UX"],
    top: true,
    overview: [
      "AI plant monitoring interface for tracking crop growth in a growth tower and enabling data-driven harvest decisions.",
      "Manual crop-height checks are time-consuming and inconsistent, making comparisons and harvest prediction difficult. Lack of standardised height data complicates analysis and decision-making.",
      "I designed, prototyped, tested, and launched a customer-facing app that tracks crop growth, flags plants growing too close to lights, supports trend analysis, and gives operators a clearer way to act before yield is impacted."
    ],

    hook:
      "Greenhouse teams need to monitor thousands of plants daily, but manual checks are slow, inconsistent, and often too late to prevent crop damage.",

    problem:
      "Manual checks are slow, inconsistent, and often too late to prevent crop damage.",

    solution:
      "I built a live monitoring system that tracks plant growth across towers, flags risk conditions, and gives operators a clear view of what needs action.",

    impactDetails: [
      "Enabled operators to identify plants exceeding safe height thresholds early, resulting in reduced crop loss and fewer emergency interventions",
      "Enabled teams to decide optimal harvest timing based on growth trends, resulting in improved yield consistency across cycles",
      "Enabled farm managers to detect underperforming towers quickly, resulting in faster corrective actions and reduced production variability",
      "Enabled operators to prioritise daily interventions (lighting adjustments, repositioning), resulting in faster decision-making during operations",
      "Enabled standardised measurement across sites, resulting in more reliable data and reduced discrepancies between operators"
    ],

    ux: [
      "What needs immediate intervention today",
      "Which crops are ready for harvest",
      "Where to adjust lighting or environmental conditions",
      "Which towers are underperforming and need attention"
    ],

    tech: [
      "Angular + TypeScript for a fast, operational dashboard used in daily workflows",
      "Plotly.js to explore growth trends and detect anomalies interactively",
      "Live plant height data collected via sensors and APIs",
      "Azure-backed system supporting real-time updates and scalability across farms",
      "API layer enabling integration with existing farm systems"
    ]
  },

  {
    id: "cybersecurity-visual-platform",
    category: "Data Products",
    title: "Cybersecurity Visual Platform for Real-Time Threat Detection and Response",
    coverImage: "/assets/full/cybersecurity-visual-platform (1).png",
    description:
      "Turns complex attack data into actionable insights during live incidents",
    impact: "GBP 650k funding secured",
    contexts: ["Cybersecurity", "Tech"],
    outputs: ["Decision-support tools", "Visual analytics"],
    tags: ["Data Product", "UX", "Decision Support", "Security", "Visual Analytics"],
    top: false,
    overview: [
      "As a freelance UX Designer for Lupovis, I designed a cybersecurity visualisation system that helps operators make sense of complex attack data and turn it into actionable decisions during incident response.",
      "The product was early-stage, so the interface needed to be convincing enough to secure funding while still grounded in real operator workflows, demonstrating clarity, scalability, and a strong user story.",
      "The work supported cross-functional MVP delivery and helped secure GBP 650k in funding to continue development."
    ],
    problem:
      "Security teams needed a clearer way to interpret complex deception and attack data during live incidents.",
    solution:
      "I shaped UX concepts and prototype flows that made attack activity easier to understand, communicate, and act on.",
    impactDetails: [
      "Supported MVP storytelling and validation for an early-stage cybersecurity product",
      "Helped secure GBP 650k in funding for continued product development",
      "Improved the clarity of operator workflows around incident response and visual analysis"
    ],
    ux: [
      "Which attack activity needs attention",
      "How to interpret complex deception data",
      "How to communicate threat patterns to stakeholders",
      "Where the product story needed to be clearer for funding and validation"
    ],
    tech: [
      "Figma for UX design, prototyping, and stakeholder validation",
      "Visual analytics patterns for cybersecurity incident response",
      "Concepting and workflow design across early MVP development"
    ]
  },

  {
    id: "3d-inspection-platform",
    category: "Data Products",
    title: "3D Inspection Platform for Infrastructure Defect Detection and Risk Assessment",
    coverImage: "/assets/full/3d-inspection-platform (1).png",
    images: [
      "/assets/full/3d-inspection-platform (1).png",
      "/assets/full/3d-inspection-platform (2).png",
      "/assets/full/3d-inspection-platform (3).png",
      "/assets/full/3d-inspection-platform (4).png"
    ],
    imageSections: [
      {
        src: "/assets/full/3d-inspection-platform (1).png",
        title: "Spatial Inspection Context",
        description:
          "A navigable 3D environment gives inspectors a shared spatial reference for reviewing defects and understanding their location within the asset."
      },
      {
        src: "/assets/full/3d-inspection-platform (2).png",
        title: "Defect Review in Place",
        description:
          "AI-detected issues can be inspected in context, reducing the need to jump between disconnected images, notes, and reports."
      },
      {
        src: "/assets/full/3d-inspection-platform (3).png",
        title: "Severity and Prioritisation",
        description:
          "Visual inspection tools support faster maintenance decisions by making defect severity and distribution easier to compare."
      },
      {
        src: "/assets/full/3d-inspection-platform (4).png",
        title: "Engineering Workflow",
        description:
          "The interface brings review, annotation, and classification into one workflow for infrastructure inspection teams."
      }
    ],
    description:
      "Enables engineers to assess damage severity directly in a spatial environment",
    impact: "Validated with real tunnel case",
    contexts: ["Infrastructure", "Engineering"],
    outputs: ["Decision-support tools", "2D/3D visualisation", "AI interfaces"],
    tags: ["3D", "Visual Analytics", "Decision Support", "Engineering", "UX"],
    top: true,
    overview: [
      "Large volumes of complex inspection data require visual and interactive techniques so domain experts can interpret AI-generated outputs with confidence.",
      "The project developed a 2D/3D visualisation tool that supports structural examiners during condition assessments, enabling defect allocation, classification, and severity evaluation in a photorealistic 3D environment.",
      "The interactive prototype was validated through a tunnel case study, demonstrating real-world applicability for infrastructure inspection workflows."
    ],

    hook:
      "Infrastructure inspections rely on images, notes, and reports that are hard to connect, making defect assessment slow and inconsistent.",

    problem:
      "Inspection data is fragmented across images, notes, and reports, making decisions slow and inconsistent.",

    solution:
      "I designed an interactive 2D/3D visual analytics platform where inspectors can navigate an asset, view AI-detected defects in context, and assess severity in one place.",

    impactDetails: [
      "Enabled inspectors to locate and assess defects within a spatial 3D context, resulting in reduced misclassification and interpretation errors",
      "Enabled teams to prioritise maintenance actions based on severity and location, resulting in faster response times and reduced risk exposure",
      "Enabled validation of AI-detected defects in context, resulting in increased trust and reduced false-positive acceptance",
      "Enabled consistent defect classification across inspectors, resulting in improved reporting accuracy and comparability",
      "Enabled consolidation of inspection data into a single interface, resulting in reduced time spent switching between tools and sources"
    ],

    ux: [
      "Which defects require immediate repair",
      "How severe and widespread issues are",
      "How to prioritise maintenance across the asset",
      "Whether AI detections are accurate or need review"
    ],

    tech: [
      "Unreal Engine powering a navigable, photorealistic 3D inspection environment",
      "Interactive tools for selecting, annotating, and classifying defects",
      "AI-generated defect detections integrated into spatial models",
      "C++ for performance-critical rendering and interaction",
      "Blender for preparing and optimising 3D assets"
    ]
  },

  {
    id: "image-acquisition-system",
    category: "Data Products",
    title: "High-Precision Imaging System for Infrastructure Monitoring and Maintenance Planning",
    coverImage: "/assets/full/image-acquisition-system (1).jpg",
    description:
      "Captures consistent inspection data to support maintenance decisions",
    impact: "Published research",
    contexts: ["Infrastructure", "Engineering"],
    outputs: ["Research prototypes", "Data acquisition", "Reports"],
    tags: ["Data Acquisition", "Engineering", "Hardware", "Reliability", "Analysis"],
    top: false,
    sourceLinks: [
      {
        label: "Published paper",
        href: "https://ieeexplore.ieee.org/abstract/document/8052679"
      }
    ],
    overview: [
      "Traditional railway tunnel inspections are time-consuming and can produce inconsistent data. This project designed an optical-thermal camera rig to improve inspection quality and repeatability.",
      "The challenge was to design and manufacture an imaging rig that could supplement visual/manual inspections and provide reliable data for condition monitoring and maintenance planning.",
      "The 12-week honours thesis covered research, conception, design, prototyping, and user testing, resulting in a distinction dissertation and published work."
    ],
    problem:
      "Manual tunnel inspections can produce inconsistent data and make long-term condition monitoring difficult.",
    solution:
      "I designed and prototyped an optical-thermal imaging rig to capture more consistent inspection data for maintenance planning.",
    impactDetails: [
      "Produced a distinction dissertation and published research output",
      "Created a repeatable imaging concept for railway tunnel inspection",
      "Supported more reliable condition monitoring and maintenance planning"
    ],
    ux: [
      "What inspection data needs to be captured consistently",
      "How imaging hardware can support maintenance planning",
      "How to reduce inconsistency in visual/manual inspections"
    ],
    tech: [
      "AutoCAD and SolidWorks for mechanical design",
      "Keyshot for visualisation and presentation",
      "Optical and thermal imaging concepts for inspection workflows"
    ]
  },

  // =========================
  // 🟡 COMPLEX DATA
  // =========================

  {
    id: "rave-of-fairness",
    category: "Complex Data",
    title: "Interactive Tool for Auditing Bias in Ranking and Recommendation Systems",
    coverImage: "/assets/full/rave-of-fairness.png",
    images: [
      "/assets/full/rave-of-fairness.png"
    ],
    imageSections: [
      {
        src: "/assets/full/rave-of-fairness.png",
        title: "Interactive Fairness Exploration",
        description:
          "The tool lets users adjust ranking scenarios and see how representation changes, making bias visible beyond aggregate metrics."
      }
    ],
    description:
      "Explains how ranking systems misrepresent groups through interactive scenarios",
    impact: "Research workshop (Vienna)",
    contexts: ["Education", "Tech ethics", "Research"],
    outputs: ["Research prototypes", "Microsites"],
    tags: ["Storytelling", "Networks", "Interactive", "Data Science", "Education"],
    top: true,
    sourceLinks: [
      {
        label: "Live project",
        href: "https://adrigabzu.github.io/rave_of_fairness/"
      },
      {
        label: "GitHub",
        href: "https://github.com/adrigabzu/rave_of_fairness/tree/main"
      }
    ],
    overview: [
      "An educational, interactive visualisation that helps students and researchers explore how representation works in ranked algorithms within networked social scenes.",
      "Using an accessible club scenario with a minority and majority group, the project shows that rankings do not always reflect true demographics, and that connection patterns can influence outcomes as much as group size.",
      "Developed during the Visualizing Complexity Science Workshop 2025 at the Complexity Hub in Vienna, the live tool and open repository support transparent exploration of algorithmic representation."
    ],

    hook:
      "Teams building ranking systems often rely on aggregate metrics, making it hard to see when certain groups are being under- or over-represented.",

    problem:
      "Bias in ranking systems is difficult to detect using aggregate metrics.",

    solution:
      "I built an interactive tool that lets users simulate ranking scenarios and see how network structure affects representation.",

    impactDetails: [
      "Enabled data teams to detect when ranking outputs misrepresent minority groups, resulting in earlier identification of biased models before deployment",
      "Enabled users to isolate the impact of network structure on ranking outcomes, resulting in more accurate diagnosis of bias root causes",
      "Enabled product and data teams to test alternative scenarios, resulting in more informed decisions on algorithm design and tuning",
      "Enabled teams to explain fairness issues visually to stakeholders, resulting in faster alignment and reduced misinterpretation of metrics",
      "Enabled critical evaluation beyond aggregate metrics, resulting in more robust and defensible model validation processes"
    ],

    ux: [
      "Whether a ranking system is fair enough to deploy",
      "What is causing biased outcomes (data vs structure)",
      "How to adjust model or network assumptions",
      "How to explain algorithm decisions to stakeholders or regulators"
    ],

    tech: [
      "Lightweight web interface designed for interactive scenario exploration",
      "Synthetic network generation in Python to simulate controlled scenarios",
      "Models structured to isolate the impact of different variables",
      "Fast, reproducible setup for experimentation and demos",
      "Open-source foundation to support transparency and reuse"
    ]
  },

  {
    id: "water-environment",
    category: "Complex Data",
    title: "Visualising Environmental Risk from Pharmaceutical Data for Public Understanding",
    coverImage: "/assets/full/water-environment (1).png",
    description:
      "Translates complex environmental data into accessible insights for policy awareness",
    impact: "Government research initiative",
    contexts: ["Environment", "Public sector", "Research"],
    outputs: ["Reports", "Research communication"],
    tags: ["Data Storytelling", "Public Sector", "UX", "Insight Communication"],
    overview: [
      "CREW, Scotland's Centre of Expertise for Waters, raises awareness of the water environment and pharmaceutical concentrations through effective visual communication.",
      "The work explored data-visualisation solutions that communicate pharmaceutical risk to both domain experts and non-expert audiences.",
      "The outcome was a set of recommended visualisation approaches for the CREW-Reduction project."
    ],
    problem:
      "Pharmaceutical concentration data is complex, technical, and difficult for non-expert audiences to interpret.",
    solution:
      "I explored visual communication approaches that make environmental risk clearer for public understanding and policy awareness.",
    impactDetails: [
      "Delivered recommended visualisation approaches for the CREW-Reduction project",
      "Supported communication between domain experts and broader public audiences",
      "Helped translate complex environmental data into more accessible insight"
    ],
    ux: [
      "How to communicate environmental risk clearly",
      "Which audiences need technical detail versus public-facing explanation",
      "Which visual techniques can support awareness and policy discussion"
    ],
    tech: [
      "Sketching and visual ideation",
      "GIS-informed visual techniques",
      "Data storytelling for environmental and public-sector communication"
    ]
  },

  {
    id: "2d-3d-visualisation",
    category: "Complex Data",
    title: "Interactive Exploration of 2D/3D Visualisation Techniques for Complex Data Analysis",
    coverImage: "/assets/full/2d-3d-visualisation (1).png",
    description:
      "Evaluates tools for analysing and interacting with complex datasets",
    impact: "Research-informed toolkit decisions",
    contexts: ["Research", "Tech"],
    outputs: ["2D/3D visualisation", "Reports"],
    tags: ["Data Viz", "Tooling", "Exploration", "3D", "Analysis"],
    overview: [
      "A survey of open-source tools for interactive 2D and 3D visualisation, including JavaScript libraries and R-based plotting frameworks.",
      "The project evaluated 2D and 3D tooling for interaction, measurement, and annotation. Potree enabled elevation profiling in 3D models, while R and D3 supported techniques like parallel coordinates and boxplots.",
      "The outcome documented strengths and limitations of each tool to inform future interactive visual analytics projects."
    ],
    problem:
      "Teams needed to understand which 2D and 3D tools were suitable for complex visual analytics workflows.",
    solution:
      "I compared and prototyped multiple visualisation tools to evaluate interaction, measurement, annotation, and analysis capabilities.",
    impactDetails: [
      "Documented strengths and limitations across open-source visualisation tools",
      "Informed future toolkit decisions for interactive visual analytics projects",
      "Explored practical workflows across 2D and 3D analysis contexts"
    ],
    ux: [
      "Which tool best supports a specific visual analysis workflow",
      "Where 3D interaction adds value over 2D charts",
      "How users can measure, annotate, and inspect complex data"
    ],
    tech: [
      "D3.js for web-based visualisation exploration",
      "Potree for point-cloud and 3D model interaction",
      "ggplot2 and RStudio for statistical visualisation techniques"
    ]
  },

  // =========================
  // 🔵 AI SYSTEMS
  // =========================

  {
    id: "ai-diagnosis",
    category: "AI Systems",
    title: "AI-Assisted Diagnosis Platform Combining X-ray Imaging and Clinical Data",
    coverImage: "/assets/full/ai-diagnosis (1).png",
    description:
      "Combines medical imaging and patient data to support early severity assessment",
    impact: "2nd place hackathon",
    contexts: ["Healthcare", "AI"],
    outputs: ["AI interfaces", "Decision-support tools", "Visual analytics"],
    tags: ["AI", "Healthcare", "Data Fusion", "Decision Support", "Rapid Prototyping"],
    sourceLinks: [
      {
        label: "Hackathon result",
        href: "https://www.gcu.ac.uk/student/news/studentnews-coronahack/"
      }
    ],
    overview: [
      "Members from GCU's Data Science Research Group, led by Professor Gordon Morison, took part in the week-long CoronaHack competition where multidisciplinary teams used public data to combat COVID-19.",
      "The challenge was to build a solution to support first diagnosis of COVID-19 in hospitals using chest X-rays and clinical annotations.",
      "The team created a prototype visualisation tool that combines X-ray images and patient data to show severity, delivering the prototype in five days and winning 2nd place."
    ],
    problem:
      "Clinicians needed rapid ways to combine medical imaging and patient annotations during early COVID-19 diagnosis.",
    solution:
      "The prototype brought X-ray images and clinical data into a single visual interface to support early severity assessment.",
    impactDetails: [
      "Delivered a working prototype during a five-day online hackathon",
      "Awarded 2nd place in CoronaHack",
      "Explored how AI and clinical data fusion could support diagnosis workflows"
    ],
    ux: [
      "How severe a case appears from imaging and patient data",
      "Which clinical annotations should be reviewed alongside X-rays",
      "How to present AI-assisted evidence quickly during triage"
    ],
    tech: [
      "Streamlit for rapid interface prototyping",
      "Python for data handling and AI integration",
      "Medical imaging and clinical annotation data"
    ]
  },

  // =========================
  // 🟣 SCALABLE SYSTEMS
  // =========================

  {
    id: "viz-design-system",
    category: "Scalable Systems",
    title: "Scalable Data Visualisation Design System for Consistent Analytics Across Teams",
    coverImage: "/assets/full/viz-design-system (1).png",
    description:
      "Standardises plots across teams to improve clarity and reduce design debt",
    impact: "Team-wide adoption",
    contexts: ["Analytics enablement", "Tech"],
    outputs: ["Design systems", "Documentation"],
    tags: ["Design Systems", "Data Viz", "Python", "Scalability", "Enablement"],
    overview: [
      "A set of visualisation standards and a catalogue to make plots feel native to their context with consistent grammar, typography, and graph elements.",
      "The work defined and documented a practical visual grammar and provided code templates so teams could apply consistent styles across matplotlib, plotly, and holoviews.",
      "The outcome included a visual catalogue, code templates, a Python package, Backstage developer docs, and quick reference templates to reduce design debt and speed up consistent reporting."
    ],
    problem:
      "Different teams were producing charts with inconsistent styles, grammar, and quality, creating design debt across analytics work.",
    solution:
      "I created standards, examples, templates, and reusable styles that helped teams produce clearer and more consistent visualisations.",
    impactDetails: [
      "Improved consistency across team visualisation outputs",
      "Reduced repeated styling decisions and design debt",
      "Provided reusable templates and guidance for common plotting mistakes"
    ],
    ux: [
      "Which chart style should be used in a specific context",
      "How to make plots feel consistent across teams",
      "How to avoid common visualisation mistakes"
    ],
    tech: [
      "matplotlib, plotly, and holoviews",
      "Python package for reusable styles",
      "Backstage developer documentation and quick style references"
    ]
  },

  {
    id: "documentation-crop-monitor",
    category: "Scalable Systems",
    title: "Real-Time Crop Monitoring System User Guide",
    coverImage: "/assets/full/documentation-crop-monitor.png",
    description:
      "Documentation for the Real-Time Crop Monitoring System for Yield Protection and Harvest Decisions, helping customers use the app effectively.",
    impact: "Improved usability & adoption",
    contexts: ["Analytics enablement", "AgriTech"],
    outputs: ["Documentation", "Reports"],
    tags: ["Documentation", "UX", "Enablement", "Product Thinking"],
    overview: [
      "Documentation set for the IGS Crop Height Tracker, covering onboarding and core workflows.",
      "Users needed clear, comprehensive guidance to adopt the tool quickly and confidently.",
      "The outcome was a complete guide covering installation, setup, usage instructions, tutorials, and API reference material to help users understand and use the Crop Height Tracker effectively."
    ],
    problem:
      "Users needed clearer guidance to adopt the Crop Height Tracker confidently.",
    solution:
      "I created a documentation set covering onboarding, setup, usage workflows, tutorials, and reference material.",
    impactDetails: [
      "Improved onboarding for a complex data product",
      "Helped users understand core workflows more quickly",
      "Supported adoption of the Crop Height Tracker in operational contexts"
    ],
    ux: [
      "How to get started with the tool",
      "How to complete core monitoring workflows",
      "Where to find setup and API guidance"
    ],
    tech: [
      "Product documentation and tutorials",
      "Usage instructions and setup guidance",
      "API reference material"
    ]
  },

  // =========================
  // 🟠 IMMERSIVE
  // =========================

  {
    id: "virtual-tour",
    category: "Immersive",
    title: "360° Immersive Platform for Remote Exploration of Physical Environments",
    coverImage: "/assets/full/virtual-tour (1).png",
    description:
      "Allows users to explore real-world spaces remotely",
    impact: "Live deployed + published research",
    contexts: ["Education", "Immersive web", "Research"],
    outputs: ["Microsites", "Research communication", "Documentation"],
    tags: ["Immersive", "Web", "UX", "Interaction", "Visual Experience"],
    sourceLinks: [
      {
        label: "Published paper",
        href: "https://www.scitepress.org/PublicationsDetail.aspx?ID=TzsprwABGhI=&t=1"
      },
      {
        label: "GitHub",
        href: "https://github.com/Insa-Maria/Virtual_Tour.git"
      },
      {
        label: "Presentation",
        href: "https://youtu.be/Hf_jQ0Z_Shs"
      }
    ],
    overview: [
      "During the COVID-19 outbreak, a 360 camera was used to turn data-visualisation skills toward a remote campus exploration experience.",
      "The challenge was to design and develop a 360 Virtual Tour website so prospective students could navigate Glasgow Campus facilities and have an immersive experience from a distance.",
      "The project scaled from the Department of Computing to School and University level, launched live, produced a WEBIST 2020 paper, shared open-source code, and was presented at conference."
    ],
    problem:
      "Prospective students needed a way to explore campus facilities remotely during COVID-19 restrictions.",
    solution:
      "I designed and developed a 360 Virtual Tour website that let users navigate real campus spaces through an immersive web experience.",
    impactDetails: [
      "Launched a live virtual tour for Glasgow Campus",
      "Published research in WEBIST 2020",
      "Shared open-source code and delivered a conference presentation"
    ],
    ux: [
      "How to navigate physical spaces remotely",
      "Which campus facilities to explore before visiting",
      "How to make remote exploration feel spatial and intuitive"
    ],
    tech: [
      "HTML, JavaScript, and CSS",
      "Marzipano for 360 web tours",
      "Ricoh Theta and Resolve 360 for capture and preparation"
    ]
  },

  {
    id: "minecraft-cooperate",
    category: "Immersive",
    title: "Cooperative Game Environment for Social Inclusion and Guided Collaboration",
    coverImage: "/assets/full/minecraft-cooperate (1).png",
    description:
      "Uses guided gameplay to foster collaboration among neurodivergent users",
    impact: "Real-world community use",
    contexts: ["Social impact", "Community", "Immersive systems"],
    outputs: ["Research prototypes"],
    tags: ["Interaction Design", "Social Impact", "UX", "Systems", "Game Design"],
    overview: [
      "A cooperative Minecraft experience where friendly NPCs guide players through shared tasks.",
      "Many tech interventions focus on education or therapy, not real social connection. The experience needed to feel safe, supportive, and genuinely social while fitting the rhythms and values of a faith community.",
      "Over four months, the project moved through research, concepting, prototyping, testing, and launch, resulting in a Minecraft mod with cooperative tasks supported by NPCs to encourage social interaction and inclusion."
    ],
    problem:
      "Neurodivergent users needed a welcoming social experience that supported connection and collaboration rather than only education or therapy.",
    solution:
      "I designed and developed a cooperative Minecraft environment where NPCs guide players through shared tasks in a supportive community context.",
    impactDetails: [
      "Designed and developed a Minecraft mod for real-world community use",
      "Created guided cooperative tasks to encourage social interaction",
      "Supported inclusion within a faith community setting"
    ],
    ux: [
      "How to make gameplay feel safe and welcoming",
      "How to guide collaboration without making it feel forced",
      "How to support social connection through shared tasks"
    ],
    tech: [
      "Java for Minecraft mod development",
      "AWS and Minecraft plugin APIs",
      "NPC-supported interaction design and game prototyping"
    ]
  }
];

