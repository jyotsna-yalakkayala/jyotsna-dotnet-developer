
import { Cpu, Database, Cloud, Code2, Smartphone } from "lucide-react";

const VerticalSlice = () => {
  const icons = [
    { Icon: Cpu, alt: ".NET" },
    { Icon: Database, alt: "Database" },
    { Icon: Cloud, alt: "Cloud" },
    { Icon: Code2, alt: "API" },
    { Icon: Smartphone, alt: "Frontend" }
  ];
  
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="flex flex-col items-center p-5 rounded-xl bg-secondary shadow-md">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-background flex justify-center items-center shadow-sm">
              <item.Icon size={24} className="text-muted-foreground" />
            </div>
            {index < icons.length - 1 && (
              <div className="w-1 h-16 bg-border my-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlice;
