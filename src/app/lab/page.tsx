import { Metadata } from 'next';
import LabContent from './LabContent';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Experiments, prototypes, and web development learning in public.',
};

export default function LabPage() {
  return <LabContent />;
}
