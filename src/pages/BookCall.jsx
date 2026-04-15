import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, User } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
};

const BookCall = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="page standard-page">
      <section className="page-hero page-hero-dark">
        <div className="container page-hero__content animate-fade-up">
          <p className="eyebrow eyebrow-light">Request academic support</p>
          <h1>Tell us what you are working on, and we’ll reach out to you.</h1>
          <p>
            Share your contact details below. Our team will contact you to understand your course,
            assignment, practical, or certification situation and recommend the best next step.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container booking-layout">
          <div className="booking-info animate-fade-up">
            <p className="eyebrow">What happens next</p>
            <h2>Private, organized, and quick.</h2>
            <div className="booking-points">
              <p>
                <CheckCircle2 size={18} />
                We review your contact details and academic support request.
              </p>
              <p>
                <CheckCircle2 size={18} />
                We reach out to you by phone or email.
              </p>
              <p>
                <CheckCircle2 size={18} />
                We help you choose the right support path for your course, assignment, practical, or certification.
              </p>
            </div>
          </div>

          <div className="booking-card animate-fade-up delay-200">
            {submitted ? (
              <div className="booking-success" role="status">
                <CheckCircle2 size={42} />
                <h2>Thank you. We’ll reach out to you soon.</h2>
                <p>
                  Your request has been received locally for now. Next, we can connect this form
                  to wherever you want to view the leads.
                </p>
                <button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Full name</label>
                  <div className="input-wrap">
                    <User size={18} />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email address</label>
                  <div className="input-wrap">
                    <Mail size={18} />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone number</label>
                  <div className="input-wrap">
                    <Phone size={18} />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-accent booking-submit">
                  Request Support <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCall;
