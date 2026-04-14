import {
  ArrowRight,
  BookOpen,
  Brain,
  ChartColumn,
  CheckCircle2,
  Clock3,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const proofStats = [
  { value: '97%', label: 'Students who say they felt more prepared within the first month' },
  { value: '1:1', label: 'Private support built around your exam, pace, and pressure points' },
  { value: '25%', label: 'Average score improvement reported after focused support cycles' },
];

const featureCards = [
  {
    icon: <Target size={24} />,
    title: 'Precision support plans',
    text: 'We identify what is slowing you down and build a plan around the highest-value course or exam priorities first.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Confidence under pressure',
    text: 'Support blends content clarity with practical strategy so anxiety does not hijack performance.',
  },
  {
    icon: <ChartColumn size={24} />,
    title: 'Progress you can see',
    text: 'Every week has clear checkpoints, score targets, and next-step decisions instead of vague, overwhelming prep.',
  },
];

const roadmapSteps = [
  {
    title: 'Diagnose the real blockers',
    text: 'We audit your weak topics, testing habits, pacing, and mindset so we solve the right problem first.',
  },
  {
    title: 'Build the passing system',
    text: 'You get a focused game plan with guided checkpoints, review loops, and accountability matched to your deadline.',
  },
  {
    title: 'Prepare for exam day',
    text: 'We sharpen timing, confidence, and decision-making until the exam feels familiar instead of overwhelming.',
  },
];

const serviceGroups = [
  {
    title: 'Online Courses',
    accent: 'course',
    items: ['StraighterLine', 'WGU Courses', 'Sophia', 'Apex Courses'],
  },
  {
    title: 'Certifications',
    accent: 'certification',
    items: ['GED', 'TEAS', 'ATI TEAS', 'HESI', 'CNA', 'CompTIA'],
  },
];

const testimonials = [
  {
    name: 'Marissa R.',
    exam: 'WGU Coursework Support',
    text: 'I had multiple WGU tasks open and no clear order of attack. Elite helped me organize everything, understand what each requirement needed, and finally make steady progress again.',
  },
  {
    name: 'Daniel K.',
    exam: 'ATI TEAS Readiness',
    text: 'I was overwhelmed by the ATI TEAS and kept jumping between random materials. Their support gave me a clear plan, section priorities, and the confidence to stay consistent.',
  },
  {
    name: 'Shania P.',
    exam: 'GED and CNA Support',
    text: 'Between GED review and CNA requirements, I felt behind before I even started. The team broke everything down into manageable steps and helped me keep moving without panic.',
  },
  {
    name: 'Andre M.',
    exam: 'Sophia Assignment Guidance',
    text: 'Sophia felt simple at first, but the assignments started piling up. Elite helped me understand the expectations, plan my deadlines, and submit work I felt confident about.',
  },
  {
    name: 'Priya S.',
    exam: 'CompTIA Certification Prep',
    text: 'CompTIA topics were hard to organize on my own. I got a cleaner path through the material, better accountability, and a practical way to track what was ready and what was not.',
  },
  {
    name: 'Carlos V.',
    exam: 'StraighterLine Course Help',
    text: 'I needed structure more than anything. They helped me map the course, stay on schedule, and understand the parts that were slowing me down.',
  },
];

const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="container hero-layout">
          <div className="hero-copy animate-fade-up">
            <p className="eyebrow eyebrow-light">
              <Sparkles size={14} />
              Online course, assignment, and certification support
            </p>
            <h1>
              Turn test stress into a clear, measurable plan to pass.
            </h1>
            <p className="hero-lead">
              Elite Exam Assistance helps students recover from missed scores, rebuild
              confidence, and move through exams, coursework, and certifications with a clear plan.
            </p>
            <div className="hero-actions">
              <Link to="/book-call" className="btn btn-accent">
                Book a Free Strategy Call <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                See how we work
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>Trusted by anxious test takers</strong>
                <span>Built for online courses, assignments, GED, TEAS, HESI, CNA, and CompTIA.</span>
              </div>
              <div className="hero-stars" aria-label="Five star support">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-panel animate-fade-up delay-200">
            <div className="hero-card hero-card-primary">
              <p className="mini-label">Performance snapshot</p>
              <div className="hero-meter">
                <div>
                  <span>Current approach</span>
                  <strong>40%</strong>
                </div>
                <div className="meter-track">
                  <span className="meter-fill meter-fill-low" />
                </div>
              </div>
              <div className="hero-meter">
                <div>
                  <span>Elite Exam plan</span>
                  <strong>97%</strong>
                </div>
                <div className="meter-track">
                  <span className="meter-fill meter-fill-high" />
                </div>
              </div>
            </div>

            <div className="hero-card hero-card-floating">
              <div className="hero-chip">
                <BookOpen size={18} />
                Weekly course support roadmap
              </div>
              <div className="hero-chip">
                <Clock3 size={18} />
                Flexible online scheduling
              </div>
              <div className="hero-chip">
                <ShieldCheck size={18} />
                Accountability that sticks
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {proofStats.map((item) => (
            <article key={item.label} className="stat-card animate-fade-up">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">Why students stay with us</p>
            <h2>We replace generic advice with focused support that changes outcomes.</h2>
            <p>
              The difference is clarity. Students need to know what matters, what to prioritize,
              and how to stay composed when deadlines and exams feel heavy.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map(({ icon, title, text }, index) => (
              <article key={title} className={`feature-card animate-fade-up delay-${(index + 1) * 100}`}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-showcase-section">
        <div className="container">
          <div className="section-heading animate-fade-up">
            <p className="eyebrow">What we offer</p>
            <h2>Online course support and certification prep built around the exact path you are on.</h2>
            <p>
              We support students working through online academic platforms and major certification
              exams with focused help that keeps progress moving.
            </p>
          </div>

          <div className="service-showcase-grid">
            {serviceGroups.map((group, index) => (
              <article
                key={group.title}
                className={`service-showcase-card service-showcase-card--${group.accent} animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="service-showcase-card__header">
                  <div className="service-showcase-icon">
                    {group.accent === 'course' ? <BookOpen size={22} /> : <Trophy size={22} />}
                  </div>
                  <div>
                    <p className="mini-label service-mini-label">{group.title}</p>
                    <h3>{group.title} We Support</h3>
                  </div>
                </div>

                <div className="service-tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="service-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container process-layout">
          <div className="process-copy animate-fade-up">
            <p className="eyebrow">How we build momentum</p>
            <h2>A simple three-step system that gives you traction fast.</h2>
            <p>
              This is a hands-on academic support system. We reduce noise, sharpen decisions,
              and push you toward the course progress or score you need.
            </p>
            <Link to="/services" className="btn btn-primary">
              Explore programs
            </Link>
          </div>

          <div className="process-steps">
            {roadmapSteps.map((step, index) => (
              <article key={step.title} className={`process-card animate-fade-up delay-${(index + 1) * 100}`}>
                <span className="process-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container success-panel">
          <div className="success-copy animate-fade-up">
            <p className="eyebrow">Support beyond content review</p>
            <h2>You do not need more pressure. You need a better system.</h2>
            <div className="success-points">
              <p>
                <CheckCircle2 size={18} />
                Structured assignment guidance and feedback loops
              </p>
              <p>
                <CheckCircle2 size={18} />
                Strategy support for pacing, confidence, and question selection
              </p>
              <p>
                <CheckCircle2 size={18} />
                Clear accountability so progress does not stall between support blocks
              </p>
            </div>
          </div>

          <div className="success-quote animate-fade-up delay-200">
            <MessageSquareMore size={28} />
            <p>
              “I stopped spinning my wheels. For the first time, I had a plan that matched my
              actual weaknesses instead of random advice from the internet.”
            </p>
            <strong>Former repeat test taker, now passed</strong>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading section-heading-light animate-fade-up">
            <p className="eyebrow eyebrow-light">Student wins</p>
            <h2>Students trust us when coursework, assignments, and certification pressure start piling up.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`testimonial-card animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="hero-stars testimonial-stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={15} fill="currentColor" />
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.exam}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta animate-fade-up">
          <p className="eyebrow">Ready when you are</p>
          <h2>Let’s build the plan that gets you over the finish line.</h2>
          <p>
            Book a free intro call and we’ll map out your priorities, timeline, and best next
            move before you commit to anything.
          </p>
          <Link to="/book-call" className="btn btn-accent">
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
