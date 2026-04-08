import {
  ArrowRight,
  BadgeCheck,
  BookText,
  BrainCircuit,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'NCLEX Preparation',
    description:
      'Targeted coaching for nursing students who need stronger clinical reasoning, calmer test-day execution, and a passing plan.',
    features: ['Personalized weak-area review', 'Question strategy and pacing', 'Anxiety-aware coaching'],
  },
  {
    icon: <BookText size={24} />,
    title: 'SAT / ACT Mastery',
    description:
      'A high-focus tutoring track that improves score consistency through timed reps, pattern recognition, and smarter review.',
    features: ['Score-gap diagnostics', 'Section-by-section drills', 'Homework with feedback'],
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Admissions Support',
    description:
      'For students who need more than tutoring, we help shape essays, applications, and interview prep with strategic guidance.',
    features: ['Essay revision support', 'Application planning', 'Interview preparation'],
  },
];

const Services = () => {
  return (
    <div className="page standard-page">
      <section className="page-hero">
        <div className="container page-hero__content animate-fade-up">
          <p className="eyebrow">Programs built for real score movement</p>
          <h1>Services that meet students where they are and move them forward fast.</h1>
          <p>
            Every program is structured around diagnosis, focused repetition, and better exam
            decisions, so your study hours start producing visible results.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map(({ icon, title, description, features }, index) => (
              <article key={title} className={`service-card animate-fade-up delay-${(index + 1) * 100}`}>
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
        <div className="container consult-banner animate-fade-up">
          <div>
            <p className="eyebrow">Need help choosing?</p>
            <h2>We’ll point you to the right plan before you spend a dollar.</h2>
            <p>
              A quick strategy call helps us understand your exam date, recent scores, and the
              patterns that are holding you back.
            </p>
          </div>
          <Link to="/about" className="btn btn-primary">
            Meet the team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container checklist-panel">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">What students can expect</p>
            <h2>A premium tutoring experience with structure, warmth, and accountability.</h2>
          </div>
          <div className="checklist-grid">
            <article className="checklist-card animate-fade-up delay-100">
              <BadgeCheck size={22} />
              <h3>Clear milestones</h3>
              <p>We set weekly goals, review what changed, and adjust the plan without wasting time.</p>
            </article>
            <article className="checklist-card animate-fade-up delay-200">
              <BookText size={22} />
              <h3>Focused assignments</h3>
              <p>Practice between sessions is deliberate, manageable, and directly tied to your next breakthrough.</p>
            </article>
            <article className="checklist-card animate-fade-up delay-300">
              <BrainCircuit size={22} />
              <h3>Calmer execution</h3>
              <p>We coach the mental side too, because strong knowledge still needs strong performance under pressure.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
