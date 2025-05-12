
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["C#", ".NET Core", "ASP.NET Core", "JavaScript", "TypeScript"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure Functions", "APIM", "Web Apps", "Service Bus", "Event Hub", "Logic Apps", "Docker", "Kubernetes", "Azure DevOps", "YAML"]
    },
    {
      category: "Databases",
      skills: ["Azure SQL", "SQL Server", "Cosmos DB", "MongoDB", "Cassandra"]
    },
    {
      category: "Architecture",
      skills: ["REST APIs", "Microservices", "Cloud Automation"]
    },
    {
      category: "ORMs & Testing",
      skills: ["Entity Framework", "LINQ", "Dapper", "XUnit", "MSTest", "TDD"]
    },
    {
      category: "Security & Tools",
      skills: ["JWT", "OAuth 2.0", "RBAC", "Git", "Visual Studio", "Swagger", "Azure Boards"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="badge bg-secondary hover:bg-secondary/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
