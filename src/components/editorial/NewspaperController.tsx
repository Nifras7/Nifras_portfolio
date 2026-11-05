import React, { useState } from 'react';
import { WorkNewspaper } from './newspapers/WorkNewspaper';
import { ExperienceNewspaper } from './newspapers/ExperienceNewspaper';
import { SkillsNewspaper } from './newspapers/SkillsNewspaper';
import './styles/newspaper.css';

export const NewspaperController: React.FC = () => {
  // Independent Page Index State for EACH publication (preserved across scrolling)
  const [workPageIndex, setWorkPageIndex] = useState<number>(0);
  const [expPageIndex, setExpPageIndex] = useState<number>(0);
  const [skillsPageIndex, setSkillsPageIndex] = useState<number>(0);

  return (
    <div className="editorial-sectors-stack">
      {/* 1. SECTOR ONE: THE WORK CHRONICLE */}
      <section id="work" className="editorial-experience-section" aria-label="The Work Chronicle">
        <div className="shell">
          <WorkNewspaper
            pageIndex={workPageIndex}
            onPageChange={setWorkPageIndex}
          />
        </div>
      </section>

      {/* 2. SECTOR TWO: THE CAREER TIMES */}
      <section id="experience" className="editorial-experience-section" aria-label="The Career Times" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="shell">
          <ExperienceNewspaper
            pageIndex={expPageIndex}
            onPageChange={setExpPageIndex}
          />
        </div>
      </section>

      {/* 3. SECTOR THREE: THE TECHNICAL JOURNAL */}
      <section id="skills" className="editorial-experience-section" aria-label="The Technical Journal" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="shell">
          <SkillsNewspaper
            pageIndex={skillsPageIndex}
            onPageChange={setSkillsPageIndex}
          />
        </div>
      </section>
    </div>
  );
};

export default NewspaperController;
