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
  { value: '97%', label: 'Students who say their workload felt clearer after getting organized support' },
  { value: '1:1', label: 'Private academic support built around your platform, deadline, and requirements' },
  { value: '24/7', label: 'Online-first help for courses, assignments, practicals, and certification pressure' },
];

const featureCards = [
  {
    icon: <Target size={24} />,
    title: 'Requirement-first planning',
    text: 'We help break down what your course, practical, assignment, or certification requires so nothing feels scattered.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Deadline control',
    text: 'We turn overdue tasks, confusing instructions, and exam pressure into a clear order of action.',
  },
  {
    icon: <ChartColumn size={24} />,
    title: 'Progress you can track',
    text: 'You always know what is pending, what is ready, and what needs attention next.',
  },
];

const roadmapSteps = [
  {
    title: 'Review the requirement',
    text: 'We look at the platform, course instructions, assignment expectations, or exam requirements first.',
  },
  {
    title: 'Organize the workload',
    text: 'We map the tasks, timelines, materials, and checkpoints so the work stops feeling impossible.',
  },
  {
    title: 'Move with confidence',
    text: 'You get steady support through coursework, assignments, practical requirements, or certification prep.',
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
    exam: 'WGU Course Management',
    text: 'I had multiple WGU tasks open and no clear order of action. Elite helped me understand the requirements, organize the workload, and keep momentum without feeling buried.',
  },
  {
    name: 'Daniel K.',
    exam: 'ATI TEAS Support',
    text: 'I was overwhelmed by ATI TEAS requirements and kept jumping between random materials. Their support gave me a cleaner structure, clear section priorities, and real accountability.',
  },
  {
    name: 'Shania P.',
    exam: 'GED and CNA Requirements',
    text: 'Between GED review and CNA requirements, I felt behind before I even started. The team broke everything into manageable steps and helped me move forward without panic.',
  },
  {
    name: 'Andre M.',
    exam: 'Sophia Assignment Planning',
    text: 'Sophia felt simple at first, but the assignments started piling up. Elite helped me understand the expectations, plan deadlines, and clean up my process.',
  },
  {
    name: 'Priya S.',
    exam: 'CompTIA Certification Support',
    text: 'CompTIA topics were hard to organize on my own. I got a cleaner path through the material, better accountability, and a practical way to track readiness.',
  },
  {
    name: 'Carlos V.',
    exam: 'StraighterLine Course Support',
    text: 'I needed structure more than anything. They helped me map the course, understand the task flow, and stay on schedule.',
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
              Coursework, assignment, practical, and certification support
            </p>
            <h1>
              Academic deadlines feel lighter when the workload is organized.
            </h1>
            <p className="hero-lead">
              Elite Exam Assistance helps students manage online courses, assignment pressure,
              practical requirements, and certification prep with a clear, private support plan.
            </p>
            <div className="hero-actions">
              <Link to="/book-call" className="btn btn-accent">
                Request Academic Support <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                See our process
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>Trusted by busy online students</strong>
                <span>Built for courses, assignments, practicals, GED, TEAS, HESI, CNA, and CompTIA.</span>
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
                Course and assignment roadmap
              </div>
              <div className="hero-chip">
                <Clock3 size={18} />
                Flexible online coordination
              </div>
              <div className="hero-chip">
                <ShieldCheck size={18} />
                Deadline accountability
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
            <p className="eyebrow">Why students choose us</p>
            <h2>We help turn messy academic requirements into a clear path forward.</h2>
            <p>
              Students come to us when coursework, assignments, practicals, and certification
              requirements start stacking up and they need organized, private support.
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
            <p className="eyebrow">What we handle</p>
            <h2>Academic support for online courses, assignments, practicals, and certifications.</h2>
            <p>
              We support students working through course platforms, assignment instructions,
              practical requirements, and certification expectations with a clear process.
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
            <p className="eyebrow">How support works</p>
            <h2>A simple system for turning academic pressure into organized progress.</h2>
            <p>
              We focus on clarity, requirements, timelines, and accountability so you are not
              trying to manage everything alone.
            </p>
            <Link to="/services" className="btn btn-primary">
              View services
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
            <p className="eyebrow">Built for overloaded students</p>
            <h2>You do not need more pressure. You need academic work to feel organized.</h2>
            <div className="success-points">
              <p>
                <CheckCircle2 size={18} />
                Assignment requirement breakdowns and feedback loops
              </p>
              <p>
                <CheckCircle2 size={18} />
                Practical prep, course planning, and certification readiness support
              </p>
              <p>
                <CheckCircle2 size={18} />
                Clear accountability so deadlines and requirements do not get lost
              </p>
            </div>
          </div>

          <div className="success-quote animate-fade-up delay-200">
            <MessageSquareMore size={28} />
            <p>
              “I stopped opening ten tabs and panicking. For the first time, I had a clear view
              of what needed to happen next.”
            </p>
            <strong>Online course student with multiple deadlines</strong>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading section-heading-light animate-fade-up">
            <p className="eyebrow eyebrow-light">Student experiences</p>
            <h2>Students come to us when academic pressure starts piling up.</h2>
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
          <h2>Let’s organize the course, assignment, or certification pressure in front of you.</h2>
          <p>
            Send your details and we’ll reach out to understand your deadline, platform, and
            academic support needs before recommending the next move.
          </p>
          <Link to="/book-call" className="btn btn-accent">
            Request Support <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
