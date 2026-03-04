'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: string[]
  deliveryTime: string
  featured?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  deliveryTime,
  featured = false,
}: PricingCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={`pricing-card${featured ? ' pricing-card--featured' : ''}`}
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
      whileHover={prefersReduced ? {} : { y: -4 }}
    >
      {featured && <span className="pricing-card-badge">Popular</span>}
      <h3 className="pricing-card-title">{title}</h3>
      <div className="pricing-card-price">
        <span className="pricing-card-currency">$</span>
        <span className="pricing-card-amount">{price}</span>
      </div>
      <p className="pricing-card-description">{description}</p>
      <ul className="pricing-card-features" role="list">
        {features.map((feature) => (
          <li key={feature}>
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
            {feature}
          </li>
        ))}
      </ul>
      <div className="pricing-card-delivery">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>Delivery: {deliveryTime}</span>
      </div>
    </motion.div>
  )
}
