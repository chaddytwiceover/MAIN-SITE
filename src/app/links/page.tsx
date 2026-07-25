import { Metadata } from 'next';
import LinksContent from './LinksContent';

export const metadata: Metadata = {
  title: 'Links',
  description: 'All my links in one place.',
};

export default function LinksPage() {
  return <LinksContent />;
}
