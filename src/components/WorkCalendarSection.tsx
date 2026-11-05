import React from 'react';
import { Sparkles } from 'lucide-react';
import { SectionFlipCalendar, CalendarItem } from './SectionFlipCalendar';

const PROJECT_ITEMS: CalendarItem[] = [
  {
    pageNo: '01 / 06',
    stamp: 'FLAGSHIP ARCHITECTURE · 2026',
    stampIcon: <Sparkles size={14} style={{ color: '#D97706' }} />,
    title: 'DARE — Dynamic Adaptive Runtime Engine',
    subtitle: 'Heterogeneous AI Computing Runtime',
    description:
      'A latency-aware scheduler and runtime architecture designed for heterogeneous AI computing across CPUs, GPUs, and edge NPUs with dynamic computational sub-graph partitioning.',
    technologies: ['Python', 'C++', 'CUDA', 'PyTorch', 'ONNX Runtime', 'React'],
    link: 'https://github.com/Nifras7/DARE-Designing-an-Adaptive-Runtime-Engine-for-Heterogeneous-AI-Computing',
    linkText: 'View Flagship Repository',
  },
  {
    pageNo: '02 / 06',
    stamp: 'DEMAND FORECASTING · 2026',
    title: 'AI Powered Retail Analytics',
    subtitle: 'Predictive Stock & Demand Intelligence',
    description:
      'An end-to-end intelligence system that optimizes stock levels and forecasts retail demand based on historical purchase patterns and seasonal trends.',
    technologies: ['Python', 'SQL', 'Streamlit', 'Statsmodels', 'Pandas'],
    link: 'https://github.com/Nifras7/ai-powered-retail-analytics',
    linkText: 'View Repository',
  },
  {
    pageNo: '03 / 06',
    stamp: 'LLMS & RETRIEVAL · 2026',
    title: 'AI Hiring Assistant',
    subtitle: 'Automated Candidate Matching & Screening',
    description:
      'Streamlining recruiter workflows using LLMs, vector database embedding matching, and LangChain for automated, objective candidate resume screening.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'OpenAI API', 'Flask'],
    link: 'https://github.com/Nifras7/ai-hiring-assistant',
    linkText: 'View Repository',
  },
  {
    pageNo: '04 / 06',
    stamp: 'ANALYTICS & RFM · 2025',
    title: 'Customer Behaviour Analysis',
    subtitle: 'Multi-Cohort Behavioral Clustering',
    description:
      'Segmenting multi-dimensional customer cohorts using RFM behavioral clustering models to drive high-conversion targeted retention campaigns.',
    technologies: ['SQL', 'Python', 'Power BI', 'Scikit-learn', 'Excel'],
    link: 'https://github.com/Nifras7/customer-behaviour-analysis',
    linkText: 'View Repository',
  },
  {
    pageNo: '05 / 06',
    stamp: 'MACHINE LEARNING · 2025',
    title: 'Sales & Revenue Forecasting',
    subtitle: 'Time-Series Demand & Margin Projections',
    description:
      'Time-series forecasting models using Facebook Prophet to project commercial product demand and revenue margins with calibrated uncertainty intervals.',
    technologies: ['Python', 'Prophet', 'Pandas', 'Flask', 'Matplotlib'],
    link: 'https://github.com/Nifras7/sales-forecasting',
    linkText: 'View Repository',
  },
  {
    pageNo: '06 / 06',
    stamp: 'PREDICTIVE BI · 2025',
    title: 'Customer Churn Analysis',
    subtitle: 'Attrition Risk Telemetry & Dashboard',
    description:
      'Identifying customer attrition indicators and visualizing churn probability cohorts using custom executive business intelligence dashboards.',
    technologies: ['Python', 'SQL', 'Scikit-learn', 'Power BI', 'Excel'],
    link: 'https://github.com/Nifras7/customer-churn-analysis',
    linkText: 'View Repository',
  },
];

export const WorkCalendarSection: React.FC = () => {
  return (
    <section id="work" style={{ padding: '5rem 0', position: 'relative', borderTop: '1px solid var(--line)' }}>
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
            Featured Work
          </h2>
        </div>

        {/* Section Spiral Flip Calendar */}
        <SectionFlipCalendar items={PROJECT_ITEMS} ringsCount={24} minHeight="420px" />
      </div>
    </section>
  );
};

export default WorkCalendarSection;

