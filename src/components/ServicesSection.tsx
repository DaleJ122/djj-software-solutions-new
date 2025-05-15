import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Code, Palette, Globe, Rocket } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  details = "",
}: ServiceCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4 text-primary">
                <div className="p-3 rounded-full bg-primary/10">{icon}</div>
              </div>
              <CardTitle className="text-center text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center pt-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{details}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            Contact us to learn more about our {title.toLowerCase()} services
            and how we can help your business grow.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ServicesSection = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description:
        "Custom websites built with modern frameworks and technologies to deliver exceptional user experiences.",
      details:
        "Our web development services include full-stack development using React, Vue, Angular, Node.js, and other modern technologies. We focus on creating responsive, accessible, and performant websites that drive results.",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
      details:
        "Our design process starts with understanding your users and business goals. We create wireframes, prototypes, and high-fidelity designs that are both beautiful and functional, ensuring a seamless user experience.",
    },
    {
      icon: <Globe size={32} />,
      title: "E-Commerce Solutions",
      description:
        "Scalable online stores with secure payment gateways, inventory management, and customer analytics.",
      details:
        "From small boutique shops to large enterprise stores, we build e-commerce solutions that drive sales. Our platforms include features like secure payment processing, inventory management, customer accounts, and detailed analytics.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to increase your online visibility, drive traffic, and convert leads.",
      details:
        "Our digital marketing services include SEO optimization, content strategy, social media marketing, email campaigns, and PPC advertising. We help you reach your target audience and achieve measurable results.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive web solutions tailored to your business
            needs, from design to development and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
