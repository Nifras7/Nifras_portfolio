export interface ExperienceStory {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  columnType: 'lead-story' | 'secondary-column' | 'dispatch';
  headline: string;
  leadParagraph: string;
  paragraphs: string[];
  bulletContributions: string[];
  technologies: string[];
  verifiedProject?: string;
  byline: string;
}

export const EXPERIENCES_DATA: ExperienceStory[] = [
  {
    id: 'bdreamz-global',
    company: 'BDreamz Global Solution',
    role: 'Data Analyst Intern',
    duration: 'January 2026 — June 2026',
    location: 'Chennai, India (Hybrid)',
    columnType: 'lead-story',
    headline: 'ENGINEERING ENTERPRISE ETL PIPELINES & CUSTOMER CLUSTERING TELEMETRY AT BDREAMZ GLOBAL',
    leadParagraph:
      'Operating as a Data Analyst Intern, Mohamed Nifras delivered production ETL data pipelines and interactive executive dashboards to track multi-dimensional commercial performance telemetry across enterprise datasets.',
    paragraphs: [
      'Tasked with processing corporate transactional records, Nifras architected automated SQL scripts and cleansing procedures to transform disjointed raw operational streams into structured analytics-ready warehouses hosted on cloud storage.',
      'A core milestone of this tenure was the delivery of the Customer Behavior Analysis system: applying multivariate statistical clustering and RFM algorithms to segment client cohorts, providing executive leadership with actionable retention insights.',
    ],
    bulletContributions: [
      'Engineered automated SQL data ingestion pipelines extracting, sanitizing, and consolidating corporate records.',
      'Designed interactive executive Power BI reporting dashboards tracking core operational KPIs and revenue trendlines.',
      'Executed the verified Customer Behavior Analysis project, establishing RFM behavioral clustering models.',
      'Collaborated closely with product and engineering teams to identify query bottlenecks and accelerate BI report rendering speed.',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'AWS', 'Data Analytics'],
    verifiedProject: 'Customer Behavior Analysis',
    byline: 'BY THE EDITORIAL BOARD · CORPORATE ANALYTICS DESK',
  },
  {
    id: 'evolve-robotics',
    company: 'Evolve Robotics Lab',
    role: 'Robotics & AI Intern',
    duration: 'August 2023 — September 2023',
    location: 'Chennai, India (On-site)',
    columnType: 'secondary-column',
    headline: 'AUTONOMOUS SENSOR INTEGRATION & ROBOTIC FIRMWARE DIAGNOSTICS AT EVOLVE LABS',
    leadParagraph:
      'During an intensive engineering tenure at Evolve Robotics Lab, Nifras focused on low-level system troubleshooting, sensor telemetry ingestion, and Python scripting for robotic prototypes.',
    paragraphs: [
      'Nifras contributed directly to the hardware-software interfacing layer, resolving communication latencies between microcontroller buses and host computing units.',
      'By authoring automated Python test routines and diagnostic scripts, edge prototype fault identification cycles were significantly streamlined.',
    ],
    bulletContributions: [
      'Configured sensor telemetry and data acquisition scripts for real-time robotic prototype evaluation.',
      'Executed hardware-software diagnostics and signal debugging to resolve edge latency bottlenecks.',
      'Scripted automated Python utility libraries for sensor calibration and fault logging.',
    ],
    technologies: ['Python', 'Robotics', 'Hardware Interfacing', 'Troubleshooting', 'Embedded Systems'],
    byline: 'BY THE TECHNOLOGY CORRESPONDENT',
  },
  {
    id: 'aistratx-technologies',
    company: 'AIstratX Technologies',
    role: 'CEO & AI Systems Engineer',
    duration: '2024 — Present',
    location: 'Remote-First',
    columnType: 'dispatch',
    headline: 'FOUNDER DISPATCH: SCALING HETEROGENEOUS AI RUNTIMES & ENTERPRISE MULTI-AGENT SYSTEMS',
    leadParagraph:
      'Serving as Founder and Lead AI Engineer at AIstratX Technologies, Nifras provides architectural leadership designing custom LLM pipelines, autonomous multi-agent tool executors, and enterprise data solutions.',
    paragraphs: [
      'Spearheaded technical discovery, neural vector embedding strategies, and retrieval-augmented architectures that drastically reduce operational research latency for enterprise clients.',
      'Maintains hands-on technical ownership across cloud deployments, prompt tuning, vector indexing schemas, and RESTful API backends.',
    ],
    bulletContributions: [
      'Architected end-to-end Retrieval-Augmented Generation (RAG) engines reducing manual document query latency by over 60%.',
      'Orchestrated multi-agent autonomous decision workflows integrating custom tools and vector databases.',
      'Formulated strategic technical roadmaps and delivered production client deployments on AWS.',
    ],
    technologies: ['Python', 'LLMs', 'LangChain', 'ChromaDB', 'Machine Learning', 'AWS', 'System Architecture'],
    byline: 'SPECIAL DISPATCH · EXECUTIVE DESK',
  },
];

