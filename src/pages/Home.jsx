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
} from 'lucide-react';
import { Link } from 'react-router-dom';

const proofStats = [
  { value: '97%', label: 'Students who say they felt more prepared within the first month' },
  { value: '1:1', label: 'Private support built around your exam, pace, and pressure points' },
  { value: '25%', label: 'Average score improvement reported after focused tutoring cycles' },
];

const featureCards = [
  {
    icon: <Target size={24} />,
    title: 'Precision study plans',
    text: 'We identify where points are leaking and build a plan that attacks the highest-value gaps first.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Confidence under pressure',
    text: 'Sessions blend content mastery with practical coaching so anxiety does not hijack performance.',
  },
  {
    icon: <ChartColumn size={24} />,
    title: 'Progress you can see',
    text: 'Every week has clear checkpoints, score targets, and next-step decisions instead of vague studying.',
  },
];

const roadmapSteps = [
  {
    title: 'Diagnose the real blockers',
    text: 'We audit your weak topics, testing habits, pacing, and mindset so we solve the right problem first.',
  },
  {
    title: 'Build the passing system',
    text: 'You get a focused game plan with drills, tutoring sessions, and review loops matched to your deadline.',
  },
  {
    title: 'Train for exam day',
    text: 'We sharpen timing, confidence, and decision-making until the test feels familiar instead of overwhelming.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    exam: 'NCLEX-RN',
    text: 'I went from feeling embarrassed about failing twice to feeling genuinely ready. The strategy made all the difference.',
  },
  {
    name: 'James T.',
    exam: 'SAT',
    text: 'My score jumped 240 points because every session was aimed at exactly what was holding me back.',
  },
  {
    name: 'Jessica L.',
    exam: 'TEAS',
    text: 'They helped me fix both the science content and the panic that used to show up during practice tests.',
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
              Personalized tutoring for high-stakes exams
            </p>
            <h1>
              Turn test stress into a clear, measurable plan to pass.
            </h1>
            <p className="hero-lead">
              Elite Exam Assistance helps students recover from missed scores, rebuild
              confidence, and walk into exam day knowing exactly what to do.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-accent">
                Book a Free Strategy Call <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                See how we work
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>Trusted by anxious test takers</strong>
                <span>Built for NCLEX, SAT, ACT, TEAS, and admissions prep.</span>
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
                Weekly tutoring roadmap
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
            <h2>We replace generic prep with focused coaching that changes outcomes.</h2>
            <p>
              The difference is not more worksheets. It is knowing what to practice, how to
              practice it, and how to stay composed when the stakes feel high.
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

      <section className="section section-muted">
        <div className="container process-layout">
          <div className="process-copy animate-fade-up">
            <p className="eyebrow">How we build momentum</p>
            <h2>A simple three-step system that gives you traction fast.</h2>
            <p>
              This is a hands-on partnership, not passive tutoring. We use each session to
              reduce noise, sharpen decisions, and push you toward the score you need.
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
                Structured homework and feedback loops between sessions
              </p>
              <p>
                <CheckCircle2 size={18} />
                Strategy coaching for pacing, confidence, and question selection
              </p>
              <p>
                <CheckCircle2 size={18} />
                Clear accountability so progress does not stall between study blocks
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
            <h2>Real progress from students who were tired of guessing.</h2>
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
          <Link to="/services" className="btn btn-accent">
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
