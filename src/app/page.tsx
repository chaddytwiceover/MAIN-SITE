import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Labs from '@/components/Labs';
import Socials from '@/components/Socials';
import XCTA from '@/components/XCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-bg text-text min-h-screen">
      <Nav />
      <Hero />
      <Labs />
      <Socials />
      <XCTA />
      <Footer />
    </main>
  );
}
