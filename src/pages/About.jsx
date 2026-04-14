import { HeartHandshake, Rocket, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Shield size={24} />,
    title: 'High standards',
    text: 'Students trust us with high-stakes goals, so we bring structure, preparation, and honest guidance to every milestone.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Human support',
    text: 'We understand what it feels like to be discouraged, behind schedule, or unsure where to start, and we support students from that reality.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Forward momentum',
    text: 'The goal is not to feel busy. The goal is to make each week count and keep progress moving in the right direction.',
  },
];

const About = () => {
  return (
    <div className="page standard-page">
      <section className="page-hero page-hero-dark">
        <div className="container page-hero__content animate-fade-up">
          <p className="eyebrow eyebrow-light">About Elite Exam Assistance</p>
          <h1>We help students rebuild belief in themselves and back it up with a real plan.</h1>
          <p>
            Our work sits at the intersection of academic support, strategy, and steady encouragement.
            We are here for the student who knows they can do more but needs the right support to prove it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <div className="about-story animate-fade-up">
            <p className="eyebrow">Our mission</p>
            <h2>Take the fear and confusion out of high-stakes exam prep.</h2>
            <p>
              Elite Exam Assistance was built for students who are tired of generic advice and
              random course routines. We focus on the patterns behind low scores, then create a
              targeted path toward stronger performance.
            </p>
            <p>
              That means better review systems, better pacing, better confidence, and a support team
              that understands both the academic and emotional side of the process.
            </p>
            <Link to="/services" className="btn btn-primary">
              Explore our services
            </Link>
          </div>

          <div className="about-highlight animate-fade-up delay-200">
            <div className="about-highlight__card">
              <Users size={28} />
              <strong>Students first</strong>
              <p>Every recommendation is tailored to the person, not forced into a one-size-fits-all package.</p>
            </div>
            <div className="about-highlight__stats">
              <div>
                <span>97%</span>
                <p>report stronger confidence after consistent support</p>
              </div>
              <div>
                <span>7 days</span>
                <p>of weekly flexibility for busy students and working professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">What guides our work</p>
            <h2>The values behind every plan, milestone, and student conversation.</h2>
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
