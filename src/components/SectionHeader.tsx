interface SectionHeaderProps {
  title: string
  description?: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  )
}
