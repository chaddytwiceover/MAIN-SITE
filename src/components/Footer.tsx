export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-12">
        <a href="mailto:contact@chaddytwiceover.com" className="font-mono text-[11px] text-textFaint hover:text-textDim transition-colors">
          contact@chaddytwiceover.com
        </a>
        <div className="font-mono text-[11px] text-textFaint">
          © {new Date().getFullYear()} CHADDYTWICEOVER
        </div>
      </div>
    </footer>
  );
}
