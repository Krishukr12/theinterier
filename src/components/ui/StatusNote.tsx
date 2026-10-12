export function StatusNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-sm bg-beige/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-graphite">
      {children}
    </p>
  );
}

export function PlannedBadge() {
  return <StatusNote>Planned capability</StatusNote>;
}

export function LiveBadge() {
  return (
    <p className="inline-flex items-center gap-2 rounded-sm bg-graphite px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-offwhite">
      Open for enquiry
    </p>
  );
}
