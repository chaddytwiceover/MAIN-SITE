import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { labProjects } from '@/lib/lab-projects';
import LabProjectContent from './LabProjectContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return labProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = labProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function LabProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = labProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <LabProjectContent project={project} />;
}
