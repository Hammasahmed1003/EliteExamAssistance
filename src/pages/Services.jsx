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
      'Structured online course support for students who need help staying on track, understanding the material, and finishing confidently.',
    features: ['Course-by-course guidance', 'Weekly progress structure', 'Personalized support'],
  },
  {
    icon: <BookText size={24} />,
    title: 'WGU Courses',
    description:
      'Focused help for WGU students balancing deadlines, assessments, and self-paced coursework without losing momentum.',
    features: ['Assessment prep', 'Concept review', 'Flexible online support'],
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Sophia',
    description:
      'Clear, step-by-step guidance for Sophia courses so assignments feel organized and credits keep moving forward.',
    features: ['Assignment guidance', 'Pacing help', 'Smarter course strategy'],
  },
  {
    icon: <BrainCircuit size={24} />,
    title: 'Apex Courses',
    description:
      'Targeted Apex coursework support that helps students stay organized, understand concepts, and finish strong.',
    features: ['Concept reinforcement', 'Deadline planning', 'Confidence-building review'],
  },
];

const certificationServices = [
  {
    icon: <Trophy size={24} />,
    title: 'GED',
    description:
      'Prep that strengthens weak areas, improves test readiness, and helps students approach the GED with a clear plan.',
    features: ['Skill-gap review', 'Practice support', 'Test-day confidence'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'TEAS',
    description:
      'Strategic TEAS support focused on content mastery, timing, and consistent improvement across sections.',
    features: ['Science and math review', 'Pacing strategy', 'Targeted review'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'ATI TEAS',
    description:
      'Specialized ATI TEAS prep designed to sharpen high-yield topics and reduce score-killing uncertainty.',
    features: ['High-yield prep plans', 'Section strategy', 'Performance tracking'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'HESI',
    description:
      'A guided HESI prep path for students who want stronger understanding, cleaner execution, and less test anxiety.',
    features: ['Weak-area targeting', 'Question breakdowns', 'Confidence support'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'CNA',
    description:
      'Support for CNA students who need help preparing with practical, easy-to-follow review plans.',
    features: ['Foundational review', 'Exam readiness support', 'Structured repetition'],
  },
  {
    icon: <Trophy size={24} />,
    title: 'CompTIA',
    description:
      'Certification prep for CompTIA students who need organized structure and a clearer path through technical material.',
    features: ['Topic-by-topic guidance', 'Progress accountability', 'Exam-focused review'],
  },
];

const Services = () => {
  return (
    <div className="page standard-page">
      <section className="page-hero">
        <div className="container page-hero__content animate-fade-up">
          <p className="eyebrow">Programs built for real score movement</p>
          <h1>Online courses and certification prep tailored to the path you are on.</h1>
          <p>
            We support students across flexible online course platforms and high-stakes
            certifications with a plan that turns confusion into forward motion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">Online courses</p>
            <h2>Flexible support for self-paced platforms where students often need structure most.</h2>
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
            <h2>Prep support for exams that require precision, repetition, and confidence under pressure.</h2>
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
            <p className="eyebrow">Need help choosing?</p>
            <h2>We’ll point you to the right plan before you spend a dollar.</h2>
            <p>
              A quick strategy call helps us understand which course or certification you are
              working on, where you feel stuck, and what kind of support will move you fastest.
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
            <h2>A premium academic support experience with structure, warmth, and accountability.</h2>
          </div>
          <div className="checklist-grid">
            <article className="checklist-card animate-fade-up delay-100">
              <BadgeCheck size={22} />
              <h3>Clear milestones</h3>
              <p>We set weekly goals, review what changed, and adjust the plan without wasting time.</p>
            </article>
            <article className="checklist-card animate-fade-up delay-200">
              <BookText size={22} />
              <h3>Focused assignment guidance</h3>
              <p>Coursework support is deliberate, manageable, and directly tied to your next breakthrough.</p>
            </article>
            <article className="checklist-card animate-fade-up delay-300">
              <BrainCircuit size={22} />
              <h3>Calmer execution</h3>
              <p>We support the mental side too, because strong knowledge still needs strong performance under pressure.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
