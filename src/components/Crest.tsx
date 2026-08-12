type CrestProps = {
  small?: boolean;
};

export function Crest({ small = false }: CrestProps) {
  return (
    <svg
      className={small ? "crest crest--small" : "crest"}
      viewBox="0 0 80 96"
      role="img"
      aria-label="Emblema da Pode Wipar"
    >
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5d389" />
          <stop offset="0.45" stopColor="#b8792f" />
          <stop offset="1" stopColor="#f0c86b" />
        </linearGradient>
      </defs>
      <path d="M40 2 49 27 40 24 31 27 40 2Z" fill="url(#gold)" />
      <path d="M40 18v65" stroke="url(#gold)" strokeWidth="5" />
      <path d="M38 34C23 25 12 30 8 40c9-3 17 1 23 9L38 34Z" fill="none" stroke="url(#gold)" strokeWidth="4" />
      <path d="M42 34c15-9 26-4 30 6-9-3-17 1-23 9L42 34Z" fill="none" stroke="url(#gold)" strokeWidth="4" />
      <path
        d="M18 45c1 20 9 34 22 45 13-11 21-25 22-45-7 5-13 7-22 8-9-1-15-3-22-8Z"
        fill="rgba(8,13,22,.75)"
        stroke="url(#gold)"
        strokeWidth="4"
      />
      <path d="m40 53 8 9-8 12-8-12 8-9Z" fill="#8c54ed" stroke="#d8c6ff" strokeWidth="1.5" />
    </svg>
  );
}
