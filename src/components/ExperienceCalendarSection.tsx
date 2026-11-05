import React from 'react';
import { Building2 } from 'lucide-react';
import { SectionFlipCalendar, CalendarItem } from './SectionFlipCalendar';

const EXPERIENCE_ITEMS: CalendarItem[] = [
  {
    pageNo: '01 / 02',
    stamp: 'EXECUTIVE & AI TENURE · 2024–PRESENT',
    stampIcon: <Building2 size={14} style={{ color: 'var(--accent)' }} />,
    title: 'AIstratX Technologies',
    subtitle: 'CEO & AI Engineer · Chennai, India (Remote-First)',
    description:
      'Executive leadership and architectural oversight for custom AI systems and computational analytics products.',
    bulletPoints: [
      'Founded and scaled AIstratX, engineering custom LLM solutions, multi-agent frameworks, and automated computational data tools for enterprise clients.',
      'Architected end-to-end Retrieval-Augmented Generation (RAG) engines reducing manual information discovery time by over 60%.',
      'Led technical discovery, product strategy, client alignment, and full-stack implementation across distributed machine learning models.',
      'Maintained hands-on technical ownership across cloud deployments, prompt optimization, vector index architectures, and API integrations.',
    ],
    technologies: ['Python', 'Machine Learning', 'AI Engineering', 'LLMs', 'LangChain', 'HubSpot', 'Strategic Roadmapping'],
  },
  {
    pageNo: '02 / 02',
    stamp: 'ANALYTICS INTERNSHIP · JAN 2026–JUN 2026',
    stampIcon: <Building2 size={14} style={{ color: 'var(--accent)' }} />,
    title: 'BDreamz Global Solutions',
    subtitle: 'Data Analyst Intern · Chennai, India (Hybrid)',
    description:
      'Delivered production ETL pipelines and executive BI reporting tracking corporate KPI telemetry.',
    bulletPoints: [
      'Engineered automated SQL ETL pipelines to extract, clean, and transform multi-source corporate datasets into structured analytics warehouses.',
      'Designed interactive Power BI executive reporting dashboards tracking KPI telemetry, operational efficiency, and revenue trendlines.',
      'Conducted statistical hypothesis testing, cohort clustering, and time-series forecasting to guide leadership in strategic resource allocation.',
      'Collaborated directly with product teams to eliminate database query bottlenecks and enhance reporting speed.',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'AWS', 'Statistical Analytics'],
  },
];

export const ExperienceCalendarSection: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative', borderTop: '1px solid var(--line)' }}>
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
            Experience
          </h2>
        </div>

        {/* Section Spiral Flip Calendar */}
        <SectionFlipCalendar items={EXPERIENCE_ITEMS} ringsCount={24} minHeight="420px" />
      </div>
    </section>
  );
};

export default ExperienceCalendarSection;

