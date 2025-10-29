import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Cog, Printer, Factory, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceEngineering from "@/assets/service-engineering.jpg";
const Services = () => {
  const [activeTab, setActiveTab] = useState("CAD/CAE");
  const services = {
  "CAD/CAE": [
    {
      title: "Design Refinement & DFM/DFA Development",
      description:
        "We develop your designs to improve manufacturability, assembly, serviceability, and product functionality. All documentation from drawings to service manuals is provided in your preferred format, complete with your organization’s branding.",
      image: serviceEngineering,
    },
    {
      title: "2D to 3D Conversion & Part Modeling",
      description:
        "Share a drawing, image, or sketch, and we’ll transform it into a precise 3D CAD model. Assembly integration and part modeling are included to support your complete design workflow.",
      image: "src/assets/1.jpg",
    },
    {
      title: "Reverse Engineering & Technical Data Preparation",
      description: "We reconstruct/modify products from drawings, models, or physical parts, using the latest reverse engineering methods. Updated technical data packages are delivered to match your new requirements.",
      image: "src/assets/2.jpg",
    },
    {
      title: "CAD Data Migration",
      description: "We securely migrate your CAD data between different software platforms and formats. Drawings and models are converted to meet your unique project needs.",
      image: "src/assets/3.jpg",
    },
    {
      title: "Finite Element Analysis (FEA)",
      description: "We provide detailed Finite Element Analysis to evaluate structural strength, durability, and performance under real-world conditions. FEA helps optimize products before prototyping, saving both time and cost.",
      image: "src/assets/4.jpg",
    },
    {
      title: "Computational Fluid Dynamics (CFD) Simulation",
      description: "Our CFD simulation services analyze fluid flow, and heat transfer within your components or assemblies. These insights enable design improvements for efficiency, safety, and thermal management.",
      image: "src/assets/5.jpg",
    },
  ],
  "Product design & Development": [
    {
      title: "Research and Development",
      description:
        "We conduct comprehensive research and development to address new product requirements from every angle. Our team also performs detailed market research to identify trends and factors that may influence your product’s success",
      image: "src/assets/6.jpg",
    },
    {
      title: "Concept Design and Evaluation",
      description:
        "We analyze research data, product needs, and consumer requirements to shape and develop your product concept. Each concept is evaluated from multiple perspectives, including real-world applications and scenarios.",
      image: "src/assets/7.jpg",
    },
    {
      title: "Design Development, Simulation & Prototyping",
      description:
        "Our engineers translate concepts into detailed designs optimized for manufacturability (DFM) and assembly (DFA). Using FMEA, CAE validation, and prototyping, we refine the product and rigorously test its performance.",
      image: "src/assets/8.jpg",
    },
    {
      title: "Design Development for Mass Production",
      description:
        "We enhance product designs to maximize manufacturing efficiency, assembly, and functionality. Comprehensive technical documentation—including drawings, BOMs, and manuals—is prepared according to your branding and standards for seamless production and lifecycle support.",
      image: "src/assets/9.jpg",
    },
  ],
  "3D Printing": [
    {
      title: "3D Printed Engineering Components",
      description:
        "We deliver 3d printed components with PA6, PA11, PA12(nylon), ABS, PETG, PLA, TPU, ASA that meet strict design and industrial standards, including options for thread inserts, helicoils, and reinforcements tailored to your custom needs. Our manufacturing facilities include FDM, SLS, SLA, MJF 3d printing machines ",
      image: "src/assets/10.jpg",
    },
    {
      title: "Miniature Models & Display Layouts",
      description:
        "Enhance your business demonstrations with visually striking miniature models and layouts. We offer options like integrated lighting and thematic details to make your proposals and displays truly stand out.",
      image: "src/assets/11.jpg",
    },
    { 
      title: "Batch & Mass Production of Parts",
      description:
        "Our facility supports batch and mass production of 3D printed parts, maintaining rigorous engineering standards at scale. Every part undergoes strict quality checks, with optional reinforcements and protective finishes to ensure performance and reliability.",
      image: "src/assets/12.jpg",
    },
     { 
      title: "Custom 3D Printed Models",
      description:
        "Get custom 3D printed models in multiple colors to suit your project requirements. Precision manufacturing, added reinforcements, and quality painting are standard, guaranteeing models that are both functional and visually impressive.",
      image: "src/assets/13.jpg",
    },
  ],
  "special purpose machinery": [
    {
      title: "Special Purpose Machinery",
      description:
        "We design and manufacture specialized machinery tailored for your specific industrial applications. Our solutions optimize productivity, reliability, and process efficiency on your shop floor.",
      image: "src/assets/14.jpg",
    },
    {
      title: "Jigs & Fixtures",
      description:
        "Custom-designed jigs and fixtures are developed to fulfill precise operational and assembly requirements. These solutions improve accuracy, speed, and quality in your manufacturing processes.",
      image: "src/assets/15.jpg",
    },
    {
      title: "Tooling",
      description:
        "We design and manufacture precision tooling for injection moulding, vacuum forming, and sheet metal bending. Every tool is crafted to ensure efficient production, reliability, and compatibility with your unique manufacturing requirements",
      image: "src/assets/16.jpg",
    },
    {
      title: "Manufacturing Line Design",
      description:
        "Our team provides complete manufacturing line design services, optimizing workflows and automation for seamless, high-efficiency production. From concept to layout, every line is engineered for your products and plant needs.",
      image: "src/assets/17.jpg",
    },
    {
      title: "Plant Setup & Industrial Layout",
      description:
        "We offer end-to-end plant setup, including facility layout planning and integration of machinery, utilities, and safety systems. Our services ensure efficient, scalable production environments tailored to your business objectives.",
      image: "src/assets/18.jpg",
    },
  ],
  "CNC Manfacturing & fabrication": [
    {
      title: "CNC Machining",
      description:
        "High-precision machining services for complex components using advanced CNC milling and multi-axis technologies. We deliver tight tolerances and consistent quality for various industries.",
      image: "src/assets/19.jpg",
    },
    {
      title: "CNC Turning",
      description:
        "Expert CNC turning services to produce precision parts with exact specifications. Perfect for prototypes or high-volume production runs.",
      image: "src/assets/20.jpg",
    },
    {
      title: "CNC Laser Cutting",
      description:
        "Accurate laser cutting for metals, plastics, and other materials to create intricate profiles and components. Our processes support both custom and batch production needs.",
      image:" src/assets/21.jpg",
    },
    {
      title: "CNC Wire Cutting",
      description:
        "Precision wire cut EDM (Electrical Discharge Machining) for detailed and complex shapes. Ideal for dies, molds, and parts requiring exceptional accuracy.",
      image: "src/assets/22.jpg",
    },
    {
      title: "CNC Routing",
      description:
        "CNC routing services for cutting, shaping, and drilling on plastics, composites, wood, and metals. Used for signage, panels, and detailed fabrication projects.",
      image: "src/assets/23.jpg",
    },
    {
      title: "CNC Bending",
      description:
        "Advanced CNC bending for sheet metal parts with complex geometries. Consistent, repeatable bends for both prototyping and mass production.",
      image: "src/assets/24.jpg",
    },
    {
      title: "Fabrication",
      description:
        "Comprehensive metal fabrication including cutting, forming, welding, and finishing. We deliver complete, custom-fabricated solutions for industrial applications.",
      image:" src/assets/25.jpg",
    },
  ],
};

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tabIcons = {
    engineering: <Cog className="h-5 w-5 text-gray-900" />,
    printing: <Printer className="h-5 w-5" text-gray-900/>,
    manufacturing: <Factory className="h-5 w-5 text-gray-900" />,
    development: <Lightbulb className="h-5 w-5 text-gray-900" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background ">
      <Navigation />

      {/* HERO */}
  <motion.section
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex flex-col items-center justify-center min-h-screen text-center 
             bg-[url('src/assets/26.jpg')] bg-cover bg-center bg-no-repeat"
>
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Text content */}
  <div className="relative z-10 px-4">
    <h1 className="text-6xl md:text-7xl font-display font-black text-foreground mb-6
                   bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient-x text-white">
      Our <span className="text-gradient text-white">Services</span>
    </h1>

    <p className="text-xl text-white max-w-3xl mx-auto font-body ">
      Innovative solutions from design to delivery — crafted with precision and passion.
    </p>
  </div>
</motion.section>



      {/* SERVICES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent blur-3xl" />
        <div className="max-w-7xl mx-auto relative">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent mb-12">
              {Object.keys(services).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={` text-gray-900 px-6 py-3 rounded-xl font-display font-bold flex items-center gap-2 transition-all duration-300 backdrop-blur-md border hover:bg-accent/10 ${
                    activeTab === key
                      ? "bg-accent text-secondary border-accent"
                      : "bg-card/50 border-muted-foreground/10"
                  }`}
                >
                  {tabIcons[key]}
                  <span className="hidden sm:inline capitalize">{key}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent key={activeTab} value={activeTab} forceMount>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
                >
                  {services[activeTab].map((service, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.04, y: -5 }}
                      className="relative rounded-3xl overflow-hidden group transition-all duration-500 "
                    >
                      <Card className=" border-none shadow-xl bg-gradient-to-br from-card/60 via-background/50 to-accent/10 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                        <div className="h-52 overflow-hidden ">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <CardHeader className="p-6">
                          <CardTitle className="font-display text-2xl text-foreground mb-2 ">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-base font-body text-gray-900">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted font-body mb-12 animate-fade-in-up">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg">
                Explore Services
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
