import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  results: string;
}

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Sample portfolio projects
  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with advanced filtering, cart functionality, and secure payment processing.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results:
        "Increased client sales by 45% within the first quarter after launch.",
    },
    {
      id: "2",
      title: "Healthcare Mobile App",
      description:
        "A mobile application for healthcare providers to manage patient appointments and medical records securely.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      technologies: ["React Native", "Firebase", "Express", "OAuth"],
      results:
        "Reduced administrative workload by 30% and improved patient satisfaction scores.",
    },
    {
      id: "3",
      title: "Real Estate Dashboard",
      description:
        "An interactive dashboard for real estate agents to track listings, client interactions, and market trends.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      technologies: ["Vue.js", "D3.js", "PostgreSQL", "AWS"],
      results:
        "Helped agents close 22% more deals by providing actionable insights.",
    },
    {
      id: "4",
      title: "Fitness Tracking App",
      description:
        "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow Lite"],
      results: "Achieved 100,000+ downloads within the first month of release.",
    },
    {
      id: "5",
      title: "Corporate Intranet Portal",
      description:
        "A secure intranet solution for enterprise communication, document management, and team collaboration.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
      results:
        "Improved internal communication efficiency by 60% across 5 departments.",
    },
    {
      id: "6",
      title: "Restaurant Ordering System",
      description:
        "An integrated ordering system for restaurants with kitchen display, inventory management, and analytics.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      technologies: ["React", "Node.js", "Redis", "Socket.io"],
      results:
        "Reduced order processing time by 75% and minimized errors by 90%.",
    },
  ];

  const categories = ["all", "web", "mobile", "design"];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects showcasing our expertise in web
            development, mobile applications, and digital experiences.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              className="cursor-pointer"
              onClick={() => openProjectDetails(project)}
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="outline">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={closeProjectDetails}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription>
                <Badge className="mt-2">
                  {selectedProject.category.charAt(0).toUpperCase() +
                    selectedProject.category.slice(1)}
                </Badge>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Project Overview
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Results</h4>
                  <p className="text-muted-foreground">
                    {selectedProject.results}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PortfolioGrid;
