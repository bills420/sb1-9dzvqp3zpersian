import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Build your career with Bills Co. LTD and be part of our mission to deliver excellence.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {openPositions.map((position) => (
            <Card key={position.title} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <Button className="gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

const openPositions = [
  {
    title: "Construction Site Manager",
    description: "Lead and oversee construction projects from planning to completion.",
    location: "On-site",
    type: "Full-time",
  },
  {
    title: "Landscape Designer",
    description: "Create beautiful and functional outdoor spaces for our clients.",
    location: "Hybrid",
    type: "Full-time",
  },
  {
    title: "Senior Web Developer",
    description: "Build and maintain web applications using modern technologies.",
    location: "Remote",
    type: "Full-time",
  },
];