
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
      <div className="flex flex-col items-center p-5 rounded-xl bg-[#f5f5f5] shadow-md w-[100px]">
        {icons.map((IconItem, index) => (
          <div key={index}>
            <div className="w-[50px] h-[50px] rounded-full bg-[#e0e0e0] flex justify-center items-center mb-3 shadow-sm">
              <IconItem.Icon className="w-[60%] h-[60%] text-gray-600" />
            </div>
            {index < icons.length - 1 && (
              <div className="w-[3px] h-[60px] bg-[#d1d5db] mx-auto block mb-3"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlice;
