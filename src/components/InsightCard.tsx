import { LucideIcon } from 'lucide-react';

interface InsightItem {
    title: string;
    description: string;
    value?: string;
    impact?: string;
}

interface InsightCardProps {
    icon: LucideIcon;
    title: string;
    items: InsightItem[];
    type: 'peak_hours' | 'buildings' | 'trends' | 'recommendations';
}

const InsightCard = ({ icon: Icon, title, items, type }: InsightCardProps) => {
    const getGradientClass = () => {
        switch (type) {
            case 'peak_hours':
                return 'from-orange-500/20 to-red-500/20 border-orange-500/30';
            case 'buildings':
                return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
            case 'trends':
                return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
            case 'recommendations':
                return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
            default:
                return 'from-primary/20 to-secondary/20 border-primary/30';
        }
    };

    const getIconColor = () => {
        switch (type) {
            case 'peak_hours':
                return 'text-orange-400';
            case 'buildings':
                return 'text-blue-400';
            case 'trends':
                return 'text-purple-400';
            case 'recommendations':
                return 'text-green-400';
            default:
                return 'text-primary';
        }
    };

    return (
        <div
            className={`glass-panel p-6 bg-gradient-to-br ${getGradientClass()} border animate-fade-in hover:scale-[1.02] transition-transform duration-300`}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center ${getIconColor()}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-wide">{title}</h3>
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg bg-background/30 backdrop-blur-sm border border-border/20 hover:border-border/40 transition-colors"
                    >
                        <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="font-semibold text-sm">{item.title}</h4>
                            {item.value && (
                                <span className={`text-xs font-mono px-2 py-1 rounded ${getIconColor()} bg-background/50`}>
                                    {item.value}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>
                        {item.impact && (
                            <div className="mt-2 pt-2 border-t border-border/20">
                                <p className="text-xs text-green-400 font-medium">
                                    💡 {item.impact}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightCard;
