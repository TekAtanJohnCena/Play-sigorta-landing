import { Shield, Lock, Database, CheckCircle } from "lucide-react";

const badges = [
  { icon: Shield, label: "KVKK Uyumlu" },
  { icon: Lock, label: "256-bit SSL" },
  { icon: Database, label: "Türkiye Sunucuları" },
  { icon: CheckCircle, label: "SOC 2 Sertifikalı" },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 text-slate-600"
        >
          <badge.icon className="h-4 w-4 text-slate-400" strokeWidth={2} />
          <span className="text-[13px] font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
