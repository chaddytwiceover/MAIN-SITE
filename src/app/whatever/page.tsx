import { Metadata } from 'next';
import WhateverContent from './WhateverContent';

export const metadata: Metadata = {
  title: 'Whatever',
  description: 'Thoughts, logs, and random updates.',
};

export default function WhateverPage() {
  return <WhateverContent />;
}
