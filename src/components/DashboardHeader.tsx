import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="glass-panel p-4 pl-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* University Logo */}
          <img
            src="/ShivNadarUniversityLogo.avif"
            alt="Shiv Nadar University"
            className="h-12 w-auto object-contain"
          />
          <div className="border-l border-border/30 pl-4">
            <h1 className="font-display text-xl font-black tracking-wider cyber-text">
              CAMPUS TWIN
            </h1>
            <p className="text-[11px] text-muted-foreground tracking-wide">
              Digital Carbon Footprint Monitor
            </p>
          </div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
        <div className="w-2 h-2 rounded-full bg-carbon-low animate-pulse" />
        <span className="text-[10px] text-muted-foreground">System Online</span>
        <span className="text-[10px] text-muted-foreground ml-auto">
          Last sync: Just now
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
