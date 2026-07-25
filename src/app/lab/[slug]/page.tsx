import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { labProjects } from '@/lib/lab-projects';
import LabProjectContent from './LabProjectContent';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return labProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = labProjects.find((p) => p.slug === params.slug);

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

export default function LabProjectPage({ params }: Props) {
  const project = labProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <LabProjectContent project={project} />;
}
