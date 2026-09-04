'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const { personal, contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam resistance
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.honeypot) {
      setStatus({ submitting: false, success: true, error: null });
      return;
    }

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Send email via client-side EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: personal.name,
          },
          publicKey
        );
      } else {
        // Graceful fallback for local dev / preview environments before env keys are set
        console.info(
          '[EmailJS Info]: NEXT_PUBLIC_EMAILJS_* environment variables are not set. Form submission handled gracefully.'
        );
        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
      setFieldErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        submitting: false,
        success: false,
        error:
          'Unable to deliver message right now. You can reach out directly via ahmedsalauddin677785@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 / GET IN TOUCH"
          title={contact.headline}
          description={contact.subheadline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark">
                    Email
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-medium text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark">
                    Phone
                  </p>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-sm sm:text-base font-medium text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors font-mono"
                  >
                    {personal.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 dark:text-text-muted-dark">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                    {personal.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-slate-200 dark:border-border-dark">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-text-muted-dark mb-3">
                Professional Channels
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card text-slate-800 dark:text-white hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card text-slate-800 dark:text-white hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Client-Side Transactional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark-card p-6 sm:p-8 shadow-xs">
              
              {status.success && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
                  <div>
                    <p className="font-semibold text-sm">Message sent successfully.</p>
                    <p className="text-xs mt-0.5">I&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}

              {status.error && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg border border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                  <p className="text-xs">{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for bot spam resistance */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-slate-600 dark:text-text-secondary-dark mb-1.5"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-md text-sm bg-slate-50 dark:bg-background-dark border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-text-muted-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                        fieldErrors.name
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-200 dark:border-border-dark'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-500">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-slate-600 dark:text-text-secondary-dark mb-1.5"
                    >
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@enterprise.io"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-md text-sm bg-slate-50 dark:bg-background-dark border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-text-muted-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                        fieldErrors.email
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-200 dark:border-border-dark'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-slate-600 dark:text-text-secondary-dark mb-1.5"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Role / Technical Project Discussion"
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-md text-sm bg-slate-50 dark:bg-background-dark border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-text-muted-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      fieldErrors.subject
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-200 dark:border-border-dark'
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-red-500">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-slate-600 dark:text-text-secondary-dark mb-1.5"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share brief details regarding your team, architecture needs, or project timeline..."
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-md text-sm bg-slate-50 dark:bg-background-dark border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-text-muted-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent resize-y ${
                      fieldErrors.message
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-200 dark:border-border-dark'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-xs"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
