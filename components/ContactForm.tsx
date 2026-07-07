"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { serviceOptions } from "@/lib/data";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[\d\s().-]{7,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a bit about your project.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide a few more details (10+ characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    // Placeholder submit handler — wire up to an API route or email service.
    console.log("Quote request submitted:", values);

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setValues(initialValues);
    }, 600);
  };

  return (
    <Section id="contact" className="bg-ink">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="section-heading mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            Get your free quote
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Fill out the form and one of our window film specialists will
            reach out within one business day with pricing and scheduling.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-accent-light">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Call us</p>
                <a href="tel:+18005550199" className="text-white hover:text-accent-light">
                  (800) 555-0199
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-accent-light">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Email us</p>
                <a href="mailto:hello@lumexfilms.com" className="text-white hover:text-accent-light">
                  hello@lumexfilms.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-accent-light">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Visit us</p>
                <p className="text-white">128 Maple Street, Riverdale, ST 00000</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-xl2 bg-white p-6 shadow-soft sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden />
              <h3 className="font-display text-2xl font-bold text-ink">Thank you!</h3>
              <p className="max-w-sm text-ink/70">
                Your quote request has been received. A Lumex specialist will
                contact you within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm font-semibold text-primary hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary"
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary"
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={values.service}
                  onChange={handleChange("service")}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary"
                >
                  <option value="" disabled>
                    Select a service&hellip;
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1.5 text-xs text-red-600">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary"
                  placeholder="Tell us about your windows, vehicle, or building..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Request My Free Quote"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
