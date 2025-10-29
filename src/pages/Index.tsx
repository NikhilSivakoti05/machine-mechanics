import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cog, Printer, Factory, Lightbulb, MapPin, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import service3DPrinting from "@/assets/service-3d-printing.jpg";
import serviceManufacturing from "@/assets/service-manufacturing.jpg";
import serviceProductDev from "@/assets/service-product-dev.jpg";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Graticule } from "react-simple-maps";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const services = [
    {
      icon: Cog,
      title: "End To End World Class CAD/CAE Services ",
      description: "2D & 3D CAD services, simulations tailored to your engineering projects.",
      image: "src/assets/32.jpg",
      link: "/services",
    },
    {
      icon: Printer,
      title: "Innovative Product Design & Development",
      description: "From concept to creation, designing market ready products.",
      image: "src/assets/33.jpg",
      link: "/services",
    },
    {
      icon: Factory,
      title: "Advanced 3D Printing & Plastics Manufacturing",
      description: "Fast, flexible 3D printing, rapid prototyping and plastic manufacturing solutions.",
      image: "src/assets/34.jpg",
      link: "/services",
    },
    {
      icon: Lightbulb,
      title: "Special Purpose Machinery & Industrial Design",
      description: "Special purpose machines & production lines engineered for your unique challenges.",
      image: "src/assets/35.jpg",
      link: "/services",
    },
    {
      icon: Lightbulb,
      title: "Expert CNC Manufacturing & Fabrication Services",
      description: "High-precision CNC machining and fabrications for metal & plastic.",
      image: "src/assets/36.jpg",
      link: "/services",
    },
  ];

  const products = [
    {
      name: "Benchtop Vertical Milling Machine",
      // description: "High-precision industrial 3D printer with multi-material capability.",
      image: "src/assets/Launching soon (2).jpg",
    },
    {
      name: "Benchtop Injection moulding machine",
      // description: "Advanced 5-axis CNC machining center for complex precision parts.",
      image: "src/assets/Launching soon (2).jpg",
    },
    {
      name: "Benchtop Vaccum Forming machine",
      // description: "High-precision industrial 3D printer with multi-material capability.",
      image: "src/assets/Launching soon (2).jpg",
    },
    {
      name: "Automated Press machine for Blanking",
      // description: "High-precision industrial 3D printer with multi-material capability.",
      image: "src/assets/Launching soon (2).jpg",
    },
   
  ];
   const collaboration= [
    {
      name: "Maaya Made",
      description: "A creative manufacturing studio specializing in artistic products, decorative pieces, custom gifts, sculptures, and 3D printing solutions.",
      image: "src/assets/38.jpg",
    },
    {
      name: "PLANADESK",
      description: "A multinational company providing innovative mobile workstations designed to meet diverse industrial and consumer needs.",
      image: "src/assets/39.jpg",
    },
  ];

  const stats = [
    { icon: Users, value: "10+", label: "Years of Experience" },
    { icon: Users, value: "15+", label: "Team Members" },
    { icon: Award, value: "150+", label: "Completed Projects" },
    { icon: Globe, value: "5+", label: "Countries Served" },
  ];
  const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};
 const projects = [
    {
      title: "Aerospace Components",
      description: "Precision manufacturing for critical aerospace parts.",
      image: serviceEngineering,
    },
    {
      title: "Medical Device Prototyping",
      description: "Rapid prototyping for innovative medical solutions.",
      image: service3DPrinting,
    },
    {
      title: "Automotive Production",
      description: "High-volume manufacturing with consistent quality.",
      image: serviceManufacturing,
    },
  ];


const slides = [
  {
    image: "src/assets/27.jpg",
    title: "End To End World Class CAD/CAE",
    accent: "Services",
  },
  {
    image: "src/assets/28.jpg",
    title: "Innovative Product Design & Development",
    accent: "Services",
  },
  {
    image: "src/assets/29.jpg",
    title: "Advanced 3D Printing & Plastics Manufacturing",
    accent: "Services",
  },
  {
    image: "src/assets/30.jpg",
    title: "Special Purpose Machinery & Plant Design",
    accent: "Services",
  },
  {
    image: "src/assets/31.jpg",
    title: "Expert CNC Machining & Fabrication",
    accent: "Services",
  },
];
const [index, setIndex] = useState(0);

  // Handlers for manual navigation
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  // Change text & image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Slides */}
        <div className="absolute inset-0 transition-opacity duration-1000">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].image}
              src={slides[index].image}
              alt={slides[index].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration:0 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 hero-gradient opacity-80 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        {/* Text & Buttons */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl text-white/90 font-body max-w-3xl mx-auto mb-12 text-center"
          >
            {slides[index].title}
            <br />
            <span className="text-accent">{slides[index].accent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-white/90 font-body max-w-3xl mx-auto mb-12"
          >
            Transforming ideas into reality with cutting-edge manufacturing technology and engineering excellence
          </motion.p>

          {/* Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-6 sm:px-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="text-white/100 hover:text-white hover:bg-white/10 rounded-full p-3"
            >
              <ChevronLeft className="h-30 w-10" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-3"
            >
              <ChevronRight className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-10 bg-gradient-to-b from-background via-background/80 to-background/60 overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl font-body max-w-2xl mx-auto text-gray-900 ">
            Empowering innovation through engineering, simulation, and precision manufacturing solutions.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ">

          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              // variants={fadeInUp}
              viewport={{ once: true }}
            >
              <Card className="group bg-background/60 backdrop-blur-lg border border-border/30 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden ">
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <CardHeader className="p-6">
                  <div className="flex justify-center mb-5 ">
                    <service.icon className=" h-12 w-12 text-accent group-hover:text-primary transition-colors duration-300 drop-shadow-glow" />
                  </div>
                  <CardTitle className=" text-center font-display text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center text-gray-900 font-body">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center font-medium border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Portfolio Preview */}
     <section className="relative py-24 px-6 sm:px-8 lg:px-10 bg-gradient-to-b from-background via-background/95 to-background/70 overflow-hidden">
  {/* Decorative gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 pointer-events-none" />
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-purple-500">
        Our Portfolio
      </h2>
      <p className="text-lg md:text-xl font-body max-w-2xl mx-auto text-gray-900">
        Showcasing excellence across diverse industries worldwide
      </p>
    </motion.div>

    {/* Single responsive image with button overlay */}
   <div className="relative w-full h-screen rounded-2xl overflow-hidden shadow-lg mx-auto">
    <Link to="/portfolio" > <img
    src="src/assets/portfolio.jpg" // Replace with your image URL or import
    alt="Portfolio Highlight"
    className="w-full h-full object-cover"   
  /></Link>

</div>
</div>

</section>


      {/* Products Section */}
  <section className="relative py-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-background via-background/80 to-background/60 overflow-hidden">
  {/* Subtle floating gradient orbs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    <div className="text-center mb-20 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-display font-extrabold text-foreground tracking-tight mb-5">
        Explore Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Products</span>
      </h2>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((product, index) => (
        <Card
          key={index}
          className="transform hover:scale-[1.03] hover:shadow-2xl border border-border/40 rounded-3xl overflow-hidden transition-all duration-500 group bg-primary bg-sky-800 backdrop-blur-sm animate-fade-in"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="relative h-72 overflow-hidden">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className=" via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <CardHeader className="p-6">
            <CardTitle className="font-display text-2xl font-semibold mb-2 text-white" >{product.name}</CardTitle>
            {/* <CardDescription className="font-body text-base text-muted-foreground text-gray-900">
              {product.description}
            </CardDescription> */}
          </CardHeader>

          <CardContent className="px-6 pb-6">

          </CardContent>
        </Card>
      ))}
    </div>

    <div className="text-center mt-20">
      <Link to="/products">
        <Button variant="cta" size="lg" className="tracking-wide gap-2 hover:scale-105 transition-transform duration-300">
          View All Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
</section>

{/* Ventures & Collaborations */}
 <section className="relative py-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-background via-background/80 to-background/60 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    <div className="text-center mb-20 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-display font-extrabold text-foreground tracking-tight mb-5">
        Explore Our  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Ventures & Collaborations </span>
      </h2>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
      {collaboration.map((product, index) => (
        <Card
          key={index}
          className="transform hover:scale-[1.03] hover:shadow-2xl border border-border/40 rounded-2xl overflow-hidden transition-all duration-500 group bg-card backdrop-blur-sm animate-fade-in"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="relative h-80 overflow-hidden">
            
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <CardHeader className="p-6">
            <CardTitle className="font-display text-2xl font-semibold mb-2">{product.name}</CardTitle>
            <CardDescription className="font-body text-base text-muted-foreground text-gray-900">
              {product.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6">

          </CardContent>
        </Card>
      ))}
    </div>
    {/* explore buttons */}
  </div>
</section>
 {/* World Map Locations */}
  <section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
        Our <span className="text-gradient">Global Presence</span>
      </h2>
      <p className="text-xl text-muted font-body max-w-2xl mx-auto">
        Delivering trusted solutions to our clients across the globe
      </p>
    </div>

    {/* World Map Image */}
    <div className="rounded-xl overflow-hidden shadow-xl relative">
      <img
        src="src/assets/India.jpg" // <-- replace with your actual image path
        alt="Global presence map"
        className="w-full h-[600px] object-cover"
      /> 
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-12 w-12 text-accent mx-auto" />
                <div className="text-5xl md:text-6xl font-display font-black text-white">{stat.value}</div>
                <p className="text-base md:text-lg font-body text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
