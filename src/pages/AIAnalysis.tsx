
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AIAnalysis = () => {
  const [selectedContract, setSelectedContract] = useState("CTR-001");

  const analysisData = {
    "CTR-001": {
      name: "Software License Agreement - Microsoft",
      riskScore: 25,
      clauses: [
        { type: "Termination", risk: "Low", confidence: 94, text: "Either party may terminate this agreement with 30 days written notice." },
        { type: "Liability", risk: "Medium", confidence: 87, text: "Liability shall not exceed the total amount paid under this agreement." },
        { type: "Intellectual Property", risk: "Low", confidence: 96, text: "Customer retains all rights to their data and configurations." },
        { type: "Payment Terms", risk: "Low", confidence: 92, text: "Payment is due within 30 days of invoice date." }
      ],
      insights: [
        "Contract contains standard termination clauses with appropriate notice period",
        "Liability cap is reasonable for software licensing agreements",
        "IP rights are clearly defined and protect customer interests",
        "Payment terms align with industry standards"
      ]
    }
  };

  const currentAnalysis = analysisData[selectedContract as keyof typeof analysisData];

  const qaResponses = [
    {
      question: "What are the termination conditions?",
      answer: "Either party may terminate this agreement with 30 days written notice. The agreement also terminates automatically if either party breaches material terms and fails to cure within 15 days of notice.",
      confidence: 95
    },
    {
      question: "What is the liability cap?",
      answer: "The total liability of either party shall not exceed the total amount paid by Customer under this Agreement in the twelve months preceding the claim.",
      confidence: 92
    },
    {
      question: "Are there any auto-renewal clauses?",
      answer: "Yes, this agreement automatically renews for successive one-year terms unless either party provides 60 days written notice of non-renewal.",
      confidence: 88
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold">AI Analysis</h1>
            <p className="text-muted-foreground">AI-powered contract analysis and insights</p>
          </div>
        </div>
        <Button>
          Analyze New Contract
        </Button>
      </div>

      <Tabs defaultValue="risk-analysis" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="risk-analysis">Risk Analysis</TabsTrigger>
          <TabsTrigger value="clause-extraction">Clause Extraction</TabsTrigger>
          <TabsTrigger value="qa-assistant">QA Assistant</TabsTrigger>
          <TabsTrigger value="version-diff">Version Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="risk-analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment - {currentAnalysis.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="text-4xl font-bold text-green-700 mb-2">{currentAnalysis.riskScore}</div>
                    <div className="text-green-600 font-medium">Risk Score</div>
                    <div className="text-sm text-green-500 mt-1">Low Risk</div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="font-semibold mb-4">Risk Breakdown by Category</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Financial Risk</span>
                        <span>15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Legal Risk</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Operational Risk</span>
                        <span>10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Compliance Risk</span>
                        <span>5%</span>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-3">AI Insights</h3>
                <div className="space-y-2">
                  {currentAnalysis.insights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-600 mt-0.5">💡</span>
                      <span className="text-blue-800 text-sm">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clause-extraction" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Extracted Clauses - {currentAnalysis.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentAnalysis.clauses.map((clause, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{clause.type}</h3>
                        <Badge className={
                          clause.risk === "Low" ? "bg-green-100 text-green-800 border-green-200" :
                          clause.risk === "Medium" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                          "bg-red-100 text-red-800 border-red-200"
                        }>
                          {clause.risk} Risk
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Confidence:</span>
                        <Badge variant="outline">{clause.confidence}%</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground bg-gray-50 p-3 rounded italic">
                      "{clause.text}"
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qa-assistant" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contract QA Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">How to use the QA Assistant</h3>
                  <p className="text-blue-700 text-sm">Ask natural language questions about your contracts and get AI-powered answers with confidence scores.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Recent Questions & Answers</h3>
                  {qaResponses.map((qa, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-blue-600">❓</span>
                        <div className="flex-1">
                          <p className="font-medium text-blue-900">{qa.question}</p>
                        </div>
                        <Badge variant="outline">{qa.confidence}% confident</Badge>
                      </div>
                      <div className="flex items-start gap-3 ml-6">
                        <span className="text-green-600">🤖</span>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{qa.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ask a question about this contract..."
                    className="flex-1 p-3 border rounded-lg"
                  />
                  <Button>Ask AI</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="version-diff" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Version Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Version A</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>v1.0 - Original (2024-01-01)</option>
                      <option>v1.1 - Amendment 1 (2024-01-15)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Version B</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>v1.1 - Amendment 1 (2024-01-15)</option>
                      <option>v1.2 - Amendment 2 (2024-02-01)</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full">Compare Versions</Button>
                
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold mb-3">AI-Detected Changes</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-green-600">+ Added</span>
                        <Badge variant="outline" className="text-xs">Section 5.2</Badge>
                      </div>
                      <p className="text-sm text-green-700">New data protection clause added to comply with GDPR requirements.</p>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-yellow-600">~ Modified</span>
                        <Badge variant="outline" className="text-xs">Section 3.1</Badge>
                      </div>
                      <p className="text-sm text-yellow-700">Payment terms changed from 30 days to 45 days.</p>
                    </div>
                    
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-red-600">- Removed</span>
                        <Badge variant="outline" className="text-xs">Section 7.3</Badge>
                      </div>
                      <p className="text-sm text-red-700">Obsolete warranty clause removed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIAnalysis;
