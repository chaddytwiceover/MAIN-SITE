import LabCard from './LabCard';

export default function Labs() {
  const labs = [
    {
      title: "Happy Little Pixels",
      accent: "lime" as const,
      tech: ["Canvas API", "Spray", "Color Presets"],
      description: "Lightweight pixel editor with spray brush and tiny QoL tools for quick doodads.",
      href: "/labs/pixels"
    },
    {
      title: "Tic Tac Toe — Neural Grid",
      accent: "neon" as const,
      tech: ["Minimax", "Game AI", "Unbeatable"],
      description: "Neon-flavored build where hardest mode stays fully unbeatable.",
      href: "/labs/tictactoe"
    },
    {
      title: "Simon Says",
      accent: "amber" as const,
      tech: ["State Machine", "Timing", "UI"],
      description: "Classic memory loop with sharper feedback and faster pacing on streaks.",
      href: "/labs/simon"
    }
  ];

  return (
    <section id="labs" className="mx-auto max-w-[1100px] px-6 py-24 md:px-12">
      <div className="mb-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-textFaint">02 / labs</span>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {labs.map((lab) => (
          <LabCard key={lab.title} {...lab} />
        ))}
      </div>
    </section>
  );
}
