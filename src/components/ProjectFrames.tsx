import Image from 'next/image'
import type { ProjectStills } from '@/lib/lab-projects'
import FrameControls from './FrameControls'

export function Still({ media, index, sizes, priority = false }: {
  media: ProjectStills; index: number; sizes: string; priority?: boolean
}) {
  const base = `/contact/${media.prefix}-${index + 1}`
  return (
    <picture>
      <source type="image/webp" sizes={sizes} srcSet={`${base}-${media.small}.webp ${media.small}w, ${base}-${media.width}.webp ${media.width}w`} />
      <Image unoptimized src={`${base}-${media.width}.webp`} width={media.width} height={media.height}
        alt={media.frames[index].alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
    </picture>
  )
}

export default function ProjectFrames({ media, featured = false, priority = false }: {
  media: ProjectStills; featured?: boolean; priority?: boolean
}) {
  const figures = media.frames.map((frame, i) => (
    <figure id={`${media.prefix}-frame-${i + 1}`} key={frame.caption} className="frame">
      <div className="exposure">
        <Still media={media} index={i} sizes={featured ? '(max-width: 640px) 94vw, (min-width: 1500px) 685px, 46vw' : '(max-width: 760px) 44vw, 22vw'} priority={priority && i === 0} />
      </div>
      <figcaption>{frame.caption}</figcaption>
    </figure>
  ))
  if (featured && figures.length > 1) {
    return <FrameControls prefix={media.prefix} labels={media.frames.map(f => f.caption)}>{figures}</FrameControls>
  }
  return <div className={`frames frames-${media.prefix}`}>{figures}</div>
}
