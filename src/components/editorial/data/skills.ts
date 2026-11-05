export interface SkillCategory {
  id: string;
  sectionCode: string;
  name: string;
  headline: string;
  overview: string;
  skills: {
    name: string;
    description: string;
    tag?: string;
  }[];
}

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    id: 'programming',
    sectionCode: 'DISCIPLINE 01',
    name: 'Programming & Core Languages',
    headline: 'Foundational syntax and algorithmic computation engines',
    overview:
      'Rigorous foundational proficiency in writing production-ready, performant, and maintainable software systems across procedural, statistical, and asynchronous paradigms.',
    skills: [
      {
        name: 'Python',
        description: 'Primary computational language for AI, data pipelines, statistical modeling, and backends.',
        tag: 'PRIMARY',
      },
      {
        name: 'SQL',
        description: 'Complex analytical queries, relational window functions, CTEs, and schema optimization.',
        tag: 'DATA CORE',
      },
      {
        name: 'JavaScript',
        description: 'Modern ES6+ frontend interactivity, event coordination, and asynchronous API consumption.',
        tag: 'UI RUNTIME',
      },
    ],
  },
  {
    id: 'ai-ml',
    sectionCode: 'DISCIPLINE 02',
    name: 'Artificial Intelligence & Machine Learning',
    headline: 'Neural networks, computer vision, and predictive modeling',
    overview:
      'Designing, training, and deploying neural architectures, computer vision pipelines, and supervised learning classifiers to extract predictive intelligence from real-world datasets.',
    skills: [
      {
        name: 'Machine Learning',
        description: 'Supervised classification, regression, clustering, ensemble algorithms, and hyperparameter tuning.',
        tag: 'APPLIED',
      },
      {
        name: 'Deep Learning',
        description: 'Multi-layer neural networks, backpropagation calculus, and deep representation learning.',
        tag: 'NEURAL',
      },
      {
        name: 'Computer Vision',
        description: 'Spatial feature detection, image filtering, spatial bounding localization, and video telemetry.',
        tag: 'VISION',
      },
      {
        name: 'OpenCV',
        description: 'Real-time computer vision routines, morphological transformations, and frame stream processing.',
        tag: 'TOOLKIT',
      },
    ],
  },
  {
    id: 'data-analytics',
    sectionCode: 'DISCIPLINE 03',
    name: 'Data Analytics & Intelligence',
    headline: 'Exploratory telemetry, business intelligence, and visualization',
    overview:
      'Transforming large, unstructured raw datasets into crisp executive dashboards, cohort segmentations, and actionable commercial telemetry.',
    skills: [
      {
        name: 'Power BI',
        description: 'Executive reporting dashboards, DAX measures, automated KPI telemetry, and data modeling.',
        tag: 'BI SUITE',
      },
      {
        name: 'Microsoft Excel',
        description: 'Advanced financial projections, pivot tables, statistical lookup formulas, and tabular audit models.',
        tag: 'ANALYSIS',
      },
      {
        name: 'Pandas',
        description: 'High-speed DataFrame manipulation, time-series resampling, reshaping, and aggregation.',
        tag: 'DATA FRAME',
      },
      {
        name: 'Data Visualization',
        description: 'Visual communication of statistical distributions, correlation heatmaps, and trend projections.',
        tag: 'EDITORIAL',
      },
    ],
  },
  {
    id: 'databases',
    sectionCode: 'DISCIPLINE 04',
    name: 'Relational Database Systems',
    headline: 'Structured persistence, integrity constraints, and query execution',
    overview:
      'Designing normalized relational schemas, index architectures, ACID-compliant transactions, and high-throughput query plans.',
    skills: [
      {
        name: 'MySQL',
        description: 'Relational data modeling, foreign key integrity, index optimization, and high-concurrency read replicas.',
        tag: 'RDBMS',
      },
      {
        name: 'PostgreSQL',
        description: 'Advanced relational database with JSONB indexing, procedural functions, and complex analytical window queries.',
        tag: 'ENTERPRISE',
      },
    ],
  },
  {
    id: 'tools',
    sectionCode: 'DISCIPLINE 05',
    name: 'Development, Versioning & Tooling',
    headline: 'Modern developer workflows, version control, and environments',
    overview:
      'Disciplined engineering practices ensuring reproducible environments, robust source code control, and clean continuous development.',
    skills: [
      {
        name: 'Git',
        description: 'Distributed source control, branching models, atomic commit strategies, and rebase workflows.',
        tag: 'VCS',
      },
      {
        name: 'GitHub',
        description: 'Remote repository hosting, issue tracking, CI/CD automated actions, and code review governance.',
        tag: 'COLLAB',
      },
      {
        name: 'VS Code',
        description: 'Optimized development environment with language servers, remote SSH containers, and debug tooling.',
        tag: 'IDE',
      },
    ],
  },
];

