
// Portfolio data for Deepak Manoharan
export const personalInfo = {
  name: "Deepak Manoharan",
  title: "Senior Data Scientist & ML Engineer",
  subtitle: "9+ Years Experience in Data Science & Machine Learning",
  location: "New Zealand",
  email: "deepak.manoharan@email.com",
  linkedin: "https://linkedin.com/in/deepak-manoharan",
  github: "https://github.com/deepak-manoharan",
  profileImage: "https://blog.icons8.com/wp-content/uploads/2023/10/professional-headshot-example-768x1024.webp",
  heroBackground: "https://cdn2.slidemodel.com/wp-content/uploads/13036-01-editable-charts-components-powerpoint-dashboard-16x9-1.jpg",
  aboutDescription: `Senior Data Scientist with 9+ years of experience specializing in machine learning, artificial intelligence, and data analytics. Currently leading data science initiatives at Watercare Services Limited, focusing on utilities analytics and operational optimization. Proven track record of delivering end-to-end ML solutions across healthcare, finance, retail, energy, and manufacturing domains.

Expert in Python, AWS cloud services, MLOps, and Generative AI technologies. Passionate about transforming complex data into actionable business insights and building scalable ML systems that drive organizational growth.`,
  careerHighlights: [
    "Led ML initiatives serving 1.7M+ customers at Watercare Services Limited",
    "Deployed 15+ production ML models with 95%+ accuracy rates",
    "Reduced operational costs by 30% through predictive analytics",
    "Expert in utilities domain analytics and water management systems",
    "Published researcher in AI/ML with focus on practical applications"
  ]
};

export const education = [
  {
    degree: "Master of Business Data Science",
    institution: "University of Otago",
    location: "New Zealand",
    year: "2019-2021",
    description: "Specialized in advanced analytics, business intelligence, and statistical modeling"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Anna University",
    location: "India", 
    year: "2010-2014",
    description: "Foundation in computer science, algorithms, and software engineering"
  }
];

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 95 },
    { name: "R", level: 90 },
    { name: "SQL", level: 92 },
    { name: "Scala", level: 80 },
    { name: "Java", level: 75 }
  ],
  "Machine Learning & AI": [
    { name: "TensorFlow/Keras", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 95 },
    { name: "XGBoost/LightGBM", level: 90 },
    { name: "Generative AI", level: 85 },
    { name: "Computer Vision", level: 80 },
    { name: "NLP", level: 85 }
  ],
  "Cloud & Infrastructure": [
    { name: "AWS", level: 90 },
    { name: "Azure", level: 80 },
    { name: "Snowflake", level: 85 },
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "MLOps", level: 88 }
  ],
  "Data Tools & Frameworks": [
    { name: "Apache Spark", level: 85 },
    { name: "Airflow", level: 80 },
    { name: "Kafka", level: 75 },
    { name: "Tableau", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Git/GitHub", level: 90 }
  ]
};

export const experience = [
  {
    title: "Senior Data Scientist",
    company: "Watercare Services Limited",
    location: "Auckland, New Zealand",
    period: "2021 - Present",
    description: "Leading data science initiatives for New Zealand's largest water utility serving 1.7M+ customers.",
    achievements: [
      "Developed predictive models for water demand forecasting with 95% accuracy",
      "Implemented ML-based leak detection system reducing water loss by 25%",
      "Built real-time analytics dashboard for operational monitoring",
      "Led cross-functional team of 8 data scientists and engineers",
      "Established MLOps pipeline reducing model deployment time by 60%"
    ],
    technologies: ["Python", "AWS", "Snowflake", "TensorFlow", "Apache Spark", "MLOps"]
  },
  {
    title: "Data Scientist",
    company: "Tech Solutions NZ",
    location: "Wellington, New Zealand", 
    period: "2019 - 2021",
    description: "Delivered end-to-end ML solutions for clients across multiple industries.",
    achievements: [
      "Built fraud detection system processing 100K+ transactions daily",
      "Developed recommendation engine increasing client revenue by 40%",
      "Created time series forecasting models for energy sector",
      "Implemented computer vision solutions for manufacturing quality control"
    ],
    technologies: ["Python", "R", "Azure", "TensorFlow", "PyTorch", "Docker"]
  },
  {
    title: "Machine Learning Engineer",
    company: "DataFlow Systems",
    location: "Mumbai, India",
    period: "2016 - 2019", 
    description: "Specialized in building scalable ML infrastructure and deployment pipelines.",
    achievements: [
      "Architected ML platform serving 50+ models in production",
      "Reduced model training time by 70% through optimization",
      "Built automated ML pipeline for continuous model updates",
      "Mentored junior data scientists and ML engineers"
    ],
    technologies: ["Python", "Java", "AWS", "Kubernetes", "Apache Spark", "MLflow"]
  },
  {
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Chennai, India",
    period: "2014 - 2016",
    description: "Started career analyzing business data and building predictive models.",
    achievements: [
      "Developed customer segmentation models for retail clients",
      "Created automated reporting systems saving 20 hours/week",
      "Built statistical models for marketing campaign optimization",
      "Collaborated with business stakeholders to identify data opportunities"
    ],
    technologies: ["Python", "R", "SQL", "Tableau", "Excel", "Statistics"]
  }
];

export const projects = [
  {
    title: "Healthcare Medical Image Analysis",
    description: "Advanced computer vision system for medical image classification and diagnosis using deep learning. Implements CNN architectures for detecting abnormalities in X-rays and MRI scans with 94% accuracy.",
    category: "Healthcare",
    technologies: ["Python", "TensorFlow", "OpenCV", "ResNet", "Flask", "Docker"],
    githubUrl: "https://github.com/deepak-manoharan/healthcare-image-analysis",
    demoUrl: "https://healthcare-ml-demo.herokuapp.com",
    image: "https://i.ytimg.com/vi/76LqIY7uL2w/maxresdefault.jpg",
    highlights: [
      "94% accuracy in abnormality detection",
      "Processes 1000+ images per minute",
      "HIPAA compliant data handling",
      "Real-time inference API"
    ]
  },
  {
    title: "Financial Fraud Detection API",
    description: "Real-time fraud detection system processing financial transactions using ensemble ML models. Features anomaly detection, risk scoring, and automated alerts with sub-second response times.",
    category: "Finance",
    technologies: ["Python", "XGBoost", "Kafka", "Redis", "FastAPI", "AWS"],
    githubUrl: "https://github.com/deepak-manoharan/fraud-detection-api", 
    demoUrl: "https://fraud-detection-demo.herokuapp.com",
    image: "https://www.slideteam.net/wp/wp-content/uploads/2024/01/Dashboard-for-monitoring-fraud-and-money-laundering-transactions-1024x576.png",
    highlights: [
      "99.2% fraud detection accuracy",
      "Sub-second response time",
      "Processes 100K+ transactions/day",
      "Real-time risk scoring"
    ]
  },
  {
    title: "Retail Recommendation Engine",
    description: "Personalized product recommendation system using collaborative filtering and deep learning. Implements hybrid approach combining user behavior, product features, and contextual information.",
    category: "Retail",
    technologies: ["Python", "PyTorch", "Spark", "Neo4j", "Django", "AWS"],
    githubUrl: "https://github.com/deepak-manoharan/retail-recommendation-engine",
    demoUrl: "https://retail-recommendations-demo.herokuapp.com",
    image: "https://lh3.googleusercontent.com/ew973Yt2akCeufB6om54MJhWqcSEshZx4tZSd13fneB5MBF38-YTHMaXxE6Lb953_eVVr241bdcHsKNeF_zAxSY_RtMr6m6HGlswG7Ozh3ik9CQZLqaNNoRBDk83gJKk7iD97u2cQWB15pVtJ7nBctg",
    highlights: [
      "40% increase in click-through rate",
      "Handles 1M+ users and 100K+ products",
      "Real-time personalization",
      "A/B tested recommendation algorithms"
    ]
  },
  {
    title: "Energy Demand Forecasting",
    description: "Time series forecasting system for predicting energy consumption patterns. Uses LSTM networks and statistical models to forecast demand with seasonal and trend analysis.",
    category: "Energy",
    technologies: ["Python", "TensorFlow", "LSTM", "Prophet", "Plotly", "Docker"],
    githubUrl: "https://github.com/deepak-manoharan/energy-demand-forecasting",
    demoUrl: "https://energy-forecast-demo.herokuapp.com",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFTc6ed9X6bmg/article-cover_image-shrink_720_1280/B4EZWhhbK_GgAI-/0/1742171650078?e=2147483647&v=beta&t=xZhMmzGhNPgKs-j08tkwSD0UTvwaW1qqi-XJnzODq-Y",
    highlights: [
      "95% forecast accuracy",
      "Multi-horizon predictions",
      "Seasonal pattern recognition",
      "Interactive forecast visualization"
    ]
  },
  {
    title: "Transportation Route Optimization",
    description: "Intelligent route optimization system using graph algorithms and machine learning. Optimizes delivery routes considering traffic patterns, vehicle capacity, and time constraints.",
    category: "Transportation",
    technologies: ["Python", "NetworkX", "Google Maps API", "Genetic Algorithm", "Flask"],
    githubUrl: "https://github.com/deepak-manoharan/transportation-route-optimization",
    demoUrl: "https://route-optimizer-demo.herokuapp.com",
    image: "https://smartroutes.io/blogs/content/images/size/w2000/2023/04/Route-Optimization_-The-complete-guide.png.webp",
    highlights: [
      "30% reduction in travel time",
      "Multi-vehicle route planning",
      "Real-time traffic integration",
      "Cost optimization algorithms"
    ]
  },
  {
    title: "Manufacturing Predictive Maintenance",
    description: "IoT-based predictive maintenance system for manufacturing equipment. Uses sensor data and machine learning to predict equipment failures and optimize maintenance schedules.",
    category: "Manufacturing", 
    technologies: ["Python", "IoT", "Time Series", "Anomaly Detection", "Streamlit", "AWS"],
    githubUrl: "https://github.com/deepak-manoharan/manufacturing-predictive-maintenance",
    demoUrl: "https://predictive-maintenance-demo.herokuapp.com",
    image: "https://grafana.com/media/blog/IIoT-industrial-automation/IIoT-UMH-dashboard.png",
    highlights: [
      "50% reduction in downtime",
      "Predictive alerts 2 weeks in advance",
      "IoT sensor data integration",
      "Maintenance cost optimization"
    ]
  }
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];
