import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import service3DPrinting from "@/assets/service-3d-printing.jpg";
import serviceManufacturing from "@/assets/service-manufacturing.jpg";
import { Link } from "react-router-dom";

const Products = () => {
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
      image:"src/assets/Launching soon (2).jpg",
    },
   
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6 animate-fade-in">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-muted font-body max-w-3xl mx-auto animate-fade-in-up">
            Industry-leading equipment and solutions for modern manufacturing
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-background via-background/80 to-background/60 overflow-hidden">
  {/* Subtle floating gradient orbs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* <div className="text-center mb-20 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-display font-extrabold text-foreground tracking-tight mb-5">
        Explore Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Products</span>
      </h2> 

    </div> */}

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

    {/* <div className="text-center mt-20">
      <Link to="/products">
        <Button variant="cta" size="lg" className="tracking-wide gap-2 hover:scale-105 transition-transform duration-300">
          View All Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div> */}
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-black text-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted font-body mb-8">
            We can design and manufacture custom equipment tailored to your specific requirements
          </p>
          <Link to="/contact">
          <Button variant="cta" size="lg">
            Request Custom Quote
          </Button>
          </Link>
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
