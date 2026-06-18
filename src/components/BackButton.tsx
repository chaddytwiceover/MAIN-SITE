'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

export default function BackButton() {
    const skip = useSkipAnimation()

    return (
        <motion.div
            className="back-button-wrapper"
            initial={skip ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: skip ? 0 : 0.4, ease: 'easeOut', delay: skip ? 0 : 0.15 }}
        >
            <Link href="/" className="back-button" aria-label="Back to home">
                <svg
                    className="back-button-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>Back</span>
            </Link>
        </motion.div>
    )
}
