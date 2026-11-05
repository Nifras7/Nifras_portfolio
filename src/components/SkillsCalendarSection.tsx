import React from 'react';
import { Brain, Cpu, Database, Briefcase } from 'lucide-react';
import { SectionFlipCalendar, CalendarItem } from './SectionFlipCalendar';

const SKILL_ITEMS: CalendarItem[] = [
  {
    pageNo: '01 / 04',
    stamp: 'CORE CAPABILITY · 01/04',
    stampIcon: <Brain size={14} style={{ color: 'var(--accent)' }} />,
    title: 'Artificial Intelligence & LLMs',
    subtitle: 'Generative systems, neural embeddings & retrieval pipelines',
    description:
      'Hands-on expertise engineering production Large Language Model pipelines, neural vector embeddings, retrieval systems, and autonomous multi-agent tool execution.',
    technologies: [
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'LangChain Framework',
      'Prompt Engineering & Alignment',
      'Vector Databases (ChromaDB)',
      'Generative AI Application Architectures',
    ],
  },
  {
    pageNo: '02 / 04',
    stamp: 'CORE CAPABILITY · 02/04',
    stampIcon: <Cpu size={14} style={{ color: 'var(--accent)' }} />,
    title: 'Machine Learning & Analytics',
    subtitle: 'Statistical modeling, forecasting & segmentation',
    description:
      'Formulating rigorous predictive algorithms, supervised & unsupervised models, time-series projections, and multivariate statistical clustering.',
    technologies: [
      'Python',
      'SQL',
      'Predictive Modeling',
      'Time Series Forecasting (Prophet)',
      'Clustering (K-Means, RFM)',
      'Scikit-learn & Statsmodels',
      'Supervised & Unsupervised Learning',
    ],
  },
  {
    pageNo: '03 / 04',
    stamp: 'CORE CAPABILITY · 03/04',
    stampIcon: <Database size={14} style={{ color: 'var(--accent)' }} />,
    title: 'Data Engineering & Cloud',
    subtitle: 'Scalable ETL pipelines, data warehouses & BI dashboards',
    description:
      'Building robust data pipelines, warehouse schemas in Snowflake, scheduled DAG orchestration with Apache Airflow, and containerized cloud deployment on AWS.',
    technologies: [
      'Power BI Dashboards',
      'SQL ETL & Data Pipelines',
      'Snowflake Data Warehouse',
      'Apache Airflow Orchestration',
      'AWS (S3, EC2, CloudWatch)',
      'Streamlit & Flask Deployment',
      'Git Version Control & CI/CD',
    ],
  },
  {
    pageNo: '04 / 04',
    stamp: 'CORE CAPABILITY · 04/04',
    stampIcon: <Briefcase size={14} style={{ color: 'var(--accent)' }} />,
    title: 'Business & Operations',
    subtitle: 'Startup leadership, product vision & stakeholder alignment',
    description:
      'Managing engineering velocity, leading cross-functional stakeholder discovery, scoping client solutions, and deploying customer-facing CRM automations.',
    technologies: [
      'AIstratX Executive Leadership',
      'Agile Sprint Management',
      'Product Roadmapping & Scoping',
      'Stakeholder Alignment',
      'HubSpot CRM Systems',
      'Jira Project Tracking',
      'Technical Documentation',
    ],
  },
];

export const SkillsCalendarSection: React.FC = () => {
  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative', borderTop: '1px solid var(--line)' }}>
      <div className="shell">
        {/* Section Header - Left aligned, clean */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--foreground)',
              margin: 0,
            }}
          >
            Technical Stack
          </h2>
        </div>

        {/* Section Spiral Flip Calendar */}
        <SectionFlipCalendar items={SKILL_ITEMS} ringsCount={24} minHeight="420px" />
      </div>
    </section>
  );
};

export default SkillsCalendarSection;

