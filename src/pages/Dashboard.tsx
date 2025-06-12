
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const stats = [
    { label: "Total Contracts", value: "1,247", change: "+12%", color: "text-blue-600" },
    { label: "Under Review", value: "23", change: "+5%", color: "text-orange-600" },
    { label: "AI Processed", value: "1,156", change: "+18%", color: "text-green-600" },
    { label: "High Risk", value: "7", change: "-3%", color: "text-red-600" },
  ];

  const recentContracts = [
    { name: "Software License Agreement", status: "Under Review", risk: "Medium", date: "2024-01-15" },
    { name: "Service Level Agreement", status: "Approved", risk: "Low", date: "2024-01-14" },
    { name: "Partnership Agreement", status: "AI Processing", risk: "High", date: "2024-01-13" },
    { name: "Employment Contract", status: "Draft", risk: "Low", date: "2024-01-12" },
  ];

  const aiInsights = [
    { title: "Clause Extraction", completed: 95, total: 100 },
    { title: "Risk Assessment", completed: 87, total: 100 },
    { title: "Version Analysis", completed: 78, total: 100 },
    { title: "QA Processing", completed: 92, total: 100 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Contract lifecycle management overview</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          AI System Active
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <span className={`text-xs ${stat.color}`}>{stat.change}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contracts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContracts.map((contract, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{contract.name}</p>
                    <p className="text-sm text-muted-foreground">{contract.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={contract.status === "Approved" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {contract.status}
                    </Badge>
                    <Badge 
                      variant={contract.risk === "High" ? "destructive" : contract.risk === "Medium" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {contract.risk} Risk
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Processing Status */}
        <Card>
          <CardHeader>
            <CardTitle>AI Processing Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{insight.title}</span>
                    <span>{insight.completed}%</span>
                  </div>
                  <Progress value={insight.completed} className="w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600">🔍</span>
                <h3 className="font-semibold text-blue-900">Clause Analysis</h3>
              </div>
              <p className="text-sm text-blue-700">23 contracts contain non-standard termination clauses that may require legal review.</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-600">⚠️</span>
                <h3 className="font-semibold text-orange-900">Risk Alert</h3>
              </div>
              <p className="text-sm text-orange-700">7 high-risk contracts detected with liability caps below industry standards.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600">✅</span>
                <h3 className="font-semibold text-green-900">Compliance</h3>
              </div>
              <p className="text-sm text-green-700">92% of contracts are compliant with current regulatory requirements.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
