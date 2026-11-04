import {
  Settings, Handshake, ShoppingBag, Link2, Package, MessageSquare, Hospital, Building2, HardHat, MapPin,
  BarChart3, CalendarDays, Target, GraduationCap, Mail, LifeBuoy, Rocket, Search, Download, Phone,
  TrendingUp, CircleDollarSign, Lightbulb, Trophy, Video, Globe, Pencil, Zap, Scale, CheckCircle2,
  CircleHelp, type LucideIcon,
} from "lucide-react";

/** Line icons that stand in for the emoji used in the page data. Size follows the surrounding font-size. */
const MAP: Record<string, LucideIcon> = {
  "⚙️": Settings, "🤝": Handshake, "🛍️": ShoppingBag, "🔗": Link2, "📦": Package, "💬": MessageSquare,
  "🏥": Hospital, "🏢": Building2, "🏗️": HardHat, "🇲🇽": MapPin, "📊": BarChart3, "📅": CalendarDays,
  "🎯": Target, "🎓": GraduationCap, "✉️": Mail, "🛟": LifeBuoy, "🚀": Rocket, "🔍": Search, "📥": Download,
  "📞": Phone, "📈": TrendingUp, "💲": CircleDollarSign, "💡": Lightbulb, "🏆": Trophy, "🎥": Video,
  "🌐": Globe, "✏️": Pencil, "⚡": Zap, "⚖️": Scale, "✅": CheckCircle2,
};

export default function Ico({ e, className }: { e: string; className?: string }) {
  const Icon = MAP[e] ?? CircleHelp;
  return <Icon aria-hidden size="1em" strokeWidth={1.75} className={className} />;
}
