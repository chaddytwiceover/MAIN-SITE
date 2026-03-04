'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PricingCard from '@/components/PricingCard'
import BackButton from '@/components/BackButton'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const pricingPlans = [
  {
    title: 'Starter',
    price: 80,
    description: 'Perfect for a simple online presence.',
    features: [
      '1 page website',
      'Mobile responsive',
      'Contact section',
      'Basic SEO setup',
      'Deployment to Vercel or Netlify',
      '1 revision',
    ],
    deliveryTime: '1-2 days',
    featured: false,
  },
  {
    title: 'Business',
    price: 150,
    description: 'Best for small businesses needing multiple pages.',
    features: [
      'Up to 3 pages',
      'Responsive design',
      'Contact form',
      'Services section',
      'Image optimization',
      'Basic SEO',
      '2 revisions',
    ],
    deliveryTime: '3-4 days',
    featured: true,
  },
  {
    title: 'Creator/Portfolio',
    price: 200,
    description: 'Ideal for showcasing creative work.',
    features: [
      'Custom layout',
      'Portfolio or gallery section',
      'About page',
      'Contact form',
      'Motion animations',
      'Fully responsive',
    ],
    deliveryTime: '4-5 days',
    featured: false,
  },
]

const addOns = [
  { name: 'Extra page', price: 40 },
  { name: 'Logo generation', price: 25 },
  { name: 'Website edits after delivery', price: 30 },
  { name: 'Landing page redesign', price: 60 },
  { name: 'Custom animations', price: 40 },
]

const scopeItems = {
  offered: [
    'Static business websites',
    'Landing pages',
    'Portfolio sites',
    'Modern responsive UI',
  ],
  notOffered: [
    'E-commerce stores',
    'Databases',
    'User accounts',
    'Dashboards',
    'Backend systems',
  ],
}

export default function PricingContent() {
  const skip = useSkipAnimation()

  return (
    <>
      {/* Hero Section */}
      <section className="page-section pricing-hero">
        <motion.div
          className="section-content"
          initial={skip ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: skip ? 0 : 0.6, ease: 'easeOut' }}
        >
          <BackButton />
          <span className="section-label">Pricing</span>
          <h1>Simple websites for small businesses.</h1>
          <p>
            Fast, modern websites built with clean design and simple technology.
            Perfect for businesses that need an online presence without complex
            systems.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pricing-cards-section">
        <div className="section-content">
          <div className="pricing-cards-grid">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                deliveryTime={plan.deliveryTime}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="pricing-addons-section">
        <motion.div
          className="section-content"
          initial={skip ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
        >
          <span className="section-label">Add-Ons</span>
          <h2>Optional services</h2>
          <p className="pricing-addons-intro">
            Enhance your project with these additional services.
          </p>
          <ul className="pricing-addons-list" role="list">
            {addOns.map((addon) => (
              <li key={addon.name}>
                <span className="addon-name">{addon.name}</span>
                <span className="addon-price">${addon.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Scope Transparency Section */}
      <section className="pricing-scope-section">
        <motion.div
          className="section-content"
          initial={skip ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
        >
          <span className="section-label">Scope Transparency</span>
          <h2>What to expect</h2>
          <div className="pricing-scope-grid">
            <div className="pricing-scope-card pricing-scope-card--offered">
              <h3>What I Offer</h3>
              <ul role="list">
                {scopeItems.offered.map((item) => (
                  <li key={item}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pricing-scope-card pricing-scope-card--not-offered">
              <h3>Not Currently Offered</h3>
              <ul role="list">
                {scopeItems.notOffered.map((item) => (
                  <li key={item}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="pricing-cta-section">
        <motion.div
          className="section-content"
          initial={skip ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
        >
          <h2>Need a website for your business?</h2>
          <p>Let&apos;s build something simple and modern.</p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="pricing-cta-button-wrapper"
          >
            <Link href="/contact" className="cta-button">
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
