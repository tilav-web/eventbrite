import { Badge } from "../ui/badge";

export default function NotificationBadge({
  className = "",
  count = 0,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <Badge
      className={`rounded-full font-mono tabular-nums w-4 h-4 px-1 pt-1 bg-rose-400 ${className}`}
    >
      {count}
    </Badge>
  );
}
