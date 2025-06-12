
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Analysis",
      description: "Advanced NLP models analyze contracts for risk assessment, clause extraction, and compliance checks.",
      color: "bg-blue-50 border-blue-200 text-blue-900"
    },
    {
      icon: "🔍",
      title: "Smart Search & QA",
      description: "Natural language search and AI assistant to answer questions about your contracts instantly.",
      color: "bg-green-50 border-green-200 text-green-900"
    },
    {
      icon: "📊",
      title: "Risk Detection",
      description: "Automatically identify potential risks, non-standard clauses, and compliance issues.",
      color: "bg-orange-50 border-orange-200 text-orange-900"
    },
    {
      icon: "🔄",
      title: "Version Control",
      description: "Track contract changes with AI-powered diff analysis and semantic comparison.",
      color: "bg-purple-50 border-purple-200 text-purple-900"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <SidebarTrigger />
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              AI System Active
            </Badge>
          </div>
          
          <div className="max-w-4xl mx-auto text-center py-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                AI
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CLM Platform
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-Augmented Contract Lifecycle Management platform that revolutionizes how you handle contracts with advanced machine learning and natural language processing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/upload")} className="px-8">
                Upload Contract
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/ai-analysis")} className="px-8">
                View AI Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform leverages cutting-edge AI technologies including spaCy, Transformers, LangChain, and OpenAI API to provide intelligent contract management capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className={`${feature.color} border-2`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                <div className="text-sm text-muted-foreground">Contracts Processed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-sm text-muted-foreground">AI Accuracy</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">76%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-900">Frontend</div>
                  <div className="text-sm text-blue-700">React, TypeScript, Tailwind</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-900">Backend</div>
                  <div className="text-sm text-green-700">Node.js, Express, PostgreSQL</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="font-semibold text-orange-900">AI/ML</div>
                  <div className="text-sm text-orange-700">Python, spaCy, Transformers</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="font-semibold text-purple-900">Cloud</div>
                  <div className="text-sm text-purple-700">AWS S3, Docker, Redis</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
