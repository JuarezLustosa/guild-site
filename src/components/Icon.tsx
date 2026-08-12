export default function Icon({ id, className }: { id: string; className?: string }) {
  return (
    <svg className={className}>
      <use href={`#${id}`} />
    </svg>
  );
}
