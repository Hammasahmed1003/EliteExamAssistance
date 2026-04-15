import { HeartHandshake, Rocket, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Shield size={24} />,
    title: 'Clear standards',
    text: 'Students trust us with high-stakes academic pressure, so we bring structure, privacy, and clear communication to every milestone.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Human support',
    text: 'We understand what it feels like to be behind, overwhelmed, or unsure where to start, and we support students from that reality.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Forward momentum',
    text: 'The goal is not to feel busy. The goal is to make each deadline count and keep progress moving in the right direction.',
  },
];

const About = () => {
  return (
    <div className="page standard-page">
      <section className="page-hero page-hero-dark">
        <div className="container page-hero__content animate-fade-up">
          <p className="eyebrow eyebrow-light">About Elite Exam Assistance</p>
          <h1>We help students manage academic pressure with structure, privacy, and a clear plan.</h1>
          <p>
            Our work sits at the intersection of coursework support, assignment planning,
            practical readiness, certification preparation, and steady accountability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <div className="about-story animate-fade-up">
            <p className="eyebrow">Our mission</p>
            <h2>Take the confusion out of online courses, assignments, practicals, and exams.</h2>
            <p>
              Elite Exam Assistance was built for students who are tired of scattered tabs,
              confusing instructions, overdue tasks, and unclear course expectations.
            </p>
            <p>
              We help turn academic pressure into an organized plan, so coursework, assignments,
              practical requirements, and certification goals feel easier to manage.
            </p>
            <Link to="/services" className="btn btn-primary">
              Explore our services
            </Link>
          </div>

          <div className="about-highlight animate-fade-up delay-200">
            <div className="about-highlight__card">
              <Users size={28} />
              <strong>Students first</strong>
              <p>Every support plan is tailored to the student, platform, deadline, and requirement in front of them.</p>
            </div>
            <div className="about-highlight__stats">
              <div>
                <span>97%</span>
                <p>report feeling more organized after consistent support</p>
              </div>
              <div>
                <span>7 days</span>
                <p>of weekly flexibility for busy students, working adults, and online learners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">What guides our work</p>
            <h2>The values behind every plan, deadline, and student conversation.</h2>
          </div>
          <div className="value-grid">
            {values.map(({ icon, title, text }, index) => (
              <article key={title} className={`value-card animate-fade-up delay-${(index + 1) * 100}`}>
                <div className="value-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
