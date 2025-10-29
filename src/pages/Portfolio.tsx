import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import serviceEngineering from "@/assets/service-engineering.jpg";
import service3DPrinting from "@/assets/service-3d-printing.jpg";
import serviceManufacturing from "@/assets/service-manufacturing.jpg";
import serviceProductDev from "@/assets/service-product-dev.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
  title: "Industrial Shed Structural Design",
  category: "CAD",
  description: "Developed a cost-efficient large-span industrial shed structure. Ensured maximum strength and stability using optimized assembly method. Focused on ease of assembly and material efficiency.",
  image: "src/assets/49.jpg",
},
{
  title: "Customized Panel For Rugged System",
  category: "CAD",
  description: "Designed an IP67-rated rugged plastic enclosure for extreme environments. Provided waterproof and dustproof protection for critical components. Focused on compactness and modular assembly.",
  image: "src/assets/50.jpg",
},
{
  title: "State Of The Art Server Rack",
  category: "CAD",
  description: "Engineered a server rack with advanced airflow and cable management. Improved cooling performance and maintenance accessibility. Ensured high durability with a modular frame design.",
  image: "src/assets/51.jpg",
},
{
  title: "Cost Efficient Enclosure for Control Module",
  category: "CAD",
  description: "Designed a lightweight aluminum enclosure for industrial control modules. Integrated modular panels for easy servicing and wiring. Optimized for cost, strength, and corrosion resistance.",
  image: "src/assets/52.jpg",
},
{
  title: "Refrigeration Unit for Client Requirement",
  category: "CAD",
  description: "Designed a compact refrigeration unit for energy-efficient cooling. Optimized airflow and compressor placement for performance. Tailored the system to meet specific client requirements.",
  image: "src/assets/53.jpg",
},
{
  title: "Power Conversion Module",
  category: "CAD",
  description: "Developed a rugged housing for an industrial power conversion system. Integrated advanced cooling system  and EMI protection. Designed for long-term durability in harsh conditions.",
  image: "src/assets/54.jpg",
},
{
  title: "Communication Module Enclosure",
  category: "CAD",
  description: "Designed a durable communication module enclosure with optimized layout. Included ventilation and sealing features for reliable operation. Ensured easy access for wiring and maintenance.",
  image: "src/assets/55.jpg",
},
{
  title: "Belt Conveyor For Industrial Automation",
  category: "Plant Design",
  description: "Designed an efficient belt conveyor for automated material handling. Focused on smooth motion, stability, and durability. Reduced operational downtime through simplified maintenance.",
  image: "src/assets/56.jpg",
},
{
  title: "Customized Gripper for Pick and Place System",
  category: "Plant Design",
  description: "Developed a lightweight pneumatic gripper for automation systems. Enhanced precision and grip strength for industrial applications. Designed for easy integration into robotic arms.",
  image: "src/assets/57.jpg",
},
{
  title: "XY Mechanism for Pick and Place System",
  category: "Plant Design",
  description: "Created an XY mechanism enabling accurate two-axis movement. Ensured repeatable and high-speed motion for automation setups. Designed for compactness and high mechanical efficiency.",
  image: "src/assets/58.jpg",
},
{
  title: "Vacuum Forming Machine",
  category: "Plant Design",
  description: "Designed a vacuum forming machine with optimized heating layout. Achieved high forming quality. Enhanced productivity through automated control features.",
  image: "src/assets/59.jpg",
},
{
  title: "25 Ton Press Machine",
  category: "Plant Design",
  description: "Developed a 25-ton hydraulic press for precision metal forming. Designed for balanced load distribution and reliability. Integrated with a sturdy frame for high operational life and modularity.",
  image: "src/assets/60.jpg",
},
{
  title: "Futuristic Speaker with Stylish Design",
  category: "Product Design",
  description: "Designed a sleek Bluetooth speaker with premium aesthetics. Delivered powerful sound with an ergonomic and modern structure. Combined style and performance for modern users.",
  image: "src/assets/41.jpg",
},
{
  title: "Kid Friendly Portable Air Purifier (Pikachu Theme)",
  category: "Product Design",
  description: "Developed a Pikachu-themed portable air purifier for kids. Ensured safe, quiet, and efficient air purification. Designed to make clean air fun and appealing to children.",
  image: "src/assets/42.jpg",
},
{
  title: "Leg Press Machine",
  category: "Product Design",
  description: "Created an ergonomic leg press machine for gym training. Ensured user comfort with optimal force alignment. Designed for strength, safety, and durability under load.",
  image: "src/assets/43.jpg",
},
{
  title: "Kid Friendly Portable Air Purifier (Doraemon Theme)",
  category: "Product Design",
  description: "Designed a Doraemon-themed air purifier for child-safe usage. Provided compact filtration with an engaging design. Balanced efficiency with portability for home use.",
  image: "src/assets/44.jpg",
},
{
  title: "Trolley Bag with Inbuilt Drawers",
  category: "Product Design",
  description: "Innovated a multifunctional trolley bag with built-in drawers. Enhanced storage organization for frequent travelers. Combined style, strength, and travel convenience.",
  image: "src/assets/45.jpg",
},
{
  title: "Ride On Toy Car for Kids (Mustang Theme)",
  category: "Product Design",
  description: "Developed a Mustang-inspired ride-on toy car for children. Focused on safety and durability. Designed an attractive and realistic automotive look.",
  image: "src/assets/Launching soon (3).jpg",
},
{
  title: "Customized Housing for Camera",
  category: "Product Design",
  description: "Engineered a compact and impact-resistant housing for cameras. Offered protection and easy mounting options. Designed for durability and aesthetic appeal.",
  image: "src/assets/47.jpg",
},
{
  title: "Power Press Gym Equipment",
  category: "Product Design",
  description: "Developed a heavy-duty power press machine for gyms. Ensured  precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/48.jpg",
},
{
  title: "FDM 3D Printed Part With Brass Nut Inserts",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/61.jpg",
},
{
  title: "SLS 3D Printed Drone Body With PA12(Nylon)",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/62.jpg",
},
{
  title: "SLA 3D Printed Module With Brass Nut Inserts",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/63.jpg",
},{
  title: "FDM Batch Production With PetG Material",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/64.jpg",
},{
  title: "Screw Sorting Scale Printed With Dimensional Accuracy",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/65.jpg",
},{
  title: "FDM 3D Printed Parts With Prefect Thread Forms ",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/66.jpg",
},{
  title: "FDM 3D Printed Parts With Gear Teeth",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/67.jpg",
},{
  title: "FDM 3D Printed Parts With Exceptional Strength and Finish",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/68.jpg",
},{
  title: "Multiple Color Options For    FDM 3D Printed Parts ",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/69.jpg",
},{
  title: "FDM 3D Printed Part With ASA Material ",  
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/70.jpg",
},{
  title: "FDM 3D Printed Parts With ABS Material",
  category: "3D Printing",
  // description: "Developed a heavy-duty power press machine for gyms. Ensured biomechanical precision and user safety. Designed for long life and professional-level performance.",
  image: "src/assets/71.jpg",
},
  
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "CAD", label: " CAD/CAE" },
    { id: "Product Design", label: "Product Design" },
    { id: "Plant Design", label: "Special Purpose Machinery & Industrial Design" },
    { id: "3D Printing", label: "3D Printing" },
    // { id: "CNC & Fabrication", label: "CNC & Fabrication" },
   
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6 animate-fade-in">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted font-body max-w-3xl mx-auto animate-fade-in-up">
            Showcasing excellence in engineering and manufacturing across diverse industries
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-12 h-auto bg-transparent text-gray-900">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 font-display font-bold data-[state=active]:bg-accent data-[state=active]:text-secondary"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="hover-lift border-2 overflow-hidden group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-display font-bold text-xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="font-body text-gray-900">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <div className="text-5xl md:text-6xl font-display font-black text-accent">500+</div>
              <p className="text-sm md:text-base font-body text-muted">Projects Completed</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl md:text-6xl font-display font-black text-accent">150+</div>
              <p className="text-sm md:text-base font-body text-muted">Global Clients</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl md:text-6xl font-display font-black text-accent">25+</div>
              <p className="text-sm md:text-base font-body text-muted">Countries Served</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl md:text-6xl font-display font-black text-accent">98%</div>
              <p className="text-sm md:text-base font-body text-muted">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
