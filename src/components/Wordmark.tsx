interface WordmarkProps {
  className?: string;
}

export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={className}>
      <span className="wordmark-shaza">Shaza</span>
      <span className="wordmark-la">La</span>
      <span className="wordmark-kazoo">Kazoo</span>
    </span>
  );
}
