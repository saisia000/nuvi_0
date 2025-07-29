import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const PolicyLayout = ({ title, lastUpdated, children }: PolicyLayoutProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 text-primary hover:text-primary-light"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="prose prose-lg max-w-none">
          <header className="mb-8 border-b border-border pb-6">
            <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>
          
          <div className="space-y-6 text-foreground/90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};