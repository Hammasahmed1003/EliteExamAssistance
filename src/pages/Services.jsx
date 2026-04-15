import {
  ArrowRight,
  BadgeCheck,
  BookText,
  BrainCircuit,
  CheckCircle2,
  GraduationCap,
  LaptopMinimal,
  Trophy,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const courseServices = [
  {
    icon: <LaptopMinimal size={24} />,
    title: 'StraighterLine',
    description:
      'Organized support for students managing StraighterLine modules, deadlines, quizzes, and course requirements.',
    features: ['Requirement breakdowns', 'Deadline mapping', 'Progress coordination'],
  },
  {
    icon: <BookText size={24} />,
    title: 'WGU Courses',
    description:
      'Focused support for WGU students balancing tasks, assessments, rubrics, and self-paced coursework.',
    features: ['Task organization', 'Assessment readiness', 'Rubric review support'],
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Sophia',
    description:
      'Clear support for Sophia courses so assignments, milestones, and course flow stay organized.',
    features: ['Assignment planning', 'Pacing support', 'Course flow management'],
  },
  {
    icon: <BrainCircuit size={24} />,
    title: 'Apex Courses',
    description:
      'Targeted Apex coursework support for students managing modules, requirements, and deadlines.',
    features: ['Module planning', 'Deadline planning', 'Requirement support'],
  },
];

const certificationServices = [
  {
    icon: <Trophy size={24} />,
    title: 'GED',
    description:
      'GED support for students who need clear organization, requirement review, and readiness planning.',
    features: ['Requirement review', 'Readiness planning', 'Confidence support'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'TEAS',
    description:
      'TEAS support focused on section priorities, timeline control, and exam readiness.',
    features: ['Section priorities', 'Timeline control', 'Readiness review'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'ATI TEAS',
    description:
      'ATI TEAS support designed to organize high-priority sections and reduce last-minute uncertainty.',
    features: ['Priority planning', 'Section strategy', 'Readiness tracking'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'HESI',
    description:
      'HESI support for students who need structure, requirement clarity, and calmer preparation.',
    features: ['Requirement clarity', 'Question review', 'Confidence support'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'CNA',
    description:
      'CNA support for students managing written requirements, practical expectations, and readiness pressure.',
    features: ['Practical readiness', 'Exam requirement support', 'Structured review'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'CompTIA',
    description:
      'CompTIA support for students who need organized structure across technical topics and exam requirements.',
    features: ['Topic organization', 'Progress accountability', 'Requirement review'],
  },
];

const Services = () => {
  return (
    <div className="page standard-page">
      <section className="page-hero">
        <div className="container page-hero__content animate-fade-up">
          <p className="eyebrow">Academic support services</p>
          <h1>Coursework, assignment, practical, and certification support for busy students.</h1>
          <p>
            We help students make sense of online platforms, deadlines, rubrics, practical
            requirements, and certification expectations with a clear support process.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">Online courses</p>
            <h2>Support for self-paced platforms where deadlines and requirements can pile up fast.</h2>
          </div>
          <div className="service-grid">
            {courseServices.map(({ icon, title, description, features }, index) => (
              <article key={title} className={`service-card animate-fade-up delay-${((index % 3) + 1) * 100}`}>
                <div className="service-card__icon">{icon}</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="service-feature-list">
                  {features.map((feature) => (
                    <div key={feature} className="service-feature">
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">Certifications</p>
            <h2>Certification support for exams that require structure, readiness, and calm execution.</h2>
          </div>
          <div className="service-grid">
            {certificationServices.map(({ icon, title, description, features }, index) => (
              <article key={title} className={`service-card animate-fade-up delay-${((index % 3) + 1) * 100}`}>
                <div className="service-card__icon">{icon}</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="service-feature-list">
                  {features.map((feature) => (
                    <div key={feature} className="service-feature">
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container consult-banner animate-fade-up">
          <div>
            <p className="eyebrow">Need help sorting it out?</p>
            <h2>We’ll help you identify the right support path before you commit.</h2>
            <p>
              A quick request helps us understand your course, assignment, practical, or
              certification situation and what kind of support makes sense.
            </p>
          </div>
          <Link to="/about" className="btn btn-primary">
            Learn more <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container checklist-panel">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">What students can expect</p>
            <h2>A premium support experience built around requirements, timelines, and accountability.</h2>
          </div>
          <div className="checklist-grid">
            <article className="checklist-card animate-fade-up delay-100">
              <BadgeCheck size={22} />
              <h3>Clear milestones</h3>
              <p>We organize what is due, what matters most, and what needs attention next.</p>
            </article>
            <article className="checklist-card animate-fade-up delay-200">
              <BookText size={22} />
              <h3>Focused assignment planning</h3>
              <p>Assignment instructions, rubrics, and deadlines are broken into manageable next steps.</p>
            </article>
            <article className="checklist-card animate-fade-up delay-300">
              <BrainCircuit size={22} />
              <h3>Calmer execution</h3>
              <p>We help reduce the panic that comes from messy platforms, unclear requirements, and tight timelines.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
