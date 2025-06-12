
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Contracts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const contracts = [
    {
      id: "CTR-001",
      name: "Software License Agreement - Microsoft",
      type: "License",
      status: "Active",
      risk: "Low",
      value: "$125,000",
      expiry: "2024-12-31",
      lastModified: "2024-01-10",
      aiScore: 94
    },
    {
      id: "CTR-002",
      name: "Service Level Agreement - AWS",
      type: "SLA",
      status: "Under Review",
      risk: "Medium",
      value: "$50,000",
      expiry: "2024-06-30",
      lastModified: "2024-01-15",
      aiScore: 87
    },
    {
      id: "CTR-003",
      name: "Partnership Agreement - TechCorp",
      type: "Partnership",
      status: "Draft",
      risk: "High",
      value: "$500,000",
      expiry: "2025-03-15",
      lastModified: "2024-01-14",
      aiScore: 72
    },
    {
      id: "CTR-004",
      name: "Employment Contract - John Doe",
      type: "Employment",
      status: "Active",
      risk: "Low",
      value: "$85,000",
      expiry: "2025-01-01",
      lastModified: "2024-01-08",
      aiScore: 96
    },
    {
      id: "CTR-005",
      name: "Vendor Agreement - SupplyChain Inc",
      type: "Vendor",
      status: "Expired",
      risk: "Medium",
      value: "$75,000",
      expiry: "2023-12-31",
      lastModified: "2023-12-15",
      aiScore: 89
    }
  ];

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || contract.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "under review": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "draft": return "bg-blue-100 text-blue-800 border-blue-200";
      case "expired": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low": return "bg-green-100 text-green-800 border-green-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "high": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold">Contract Management</h1>
            <p className="text-muted-foreground">Manage and track all your contracts</p>
          </div>
        </div>
        <Button>
          + New Contract
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search contracts by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="under review">Under Review</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Contracts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Contracts ({filteredContracts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredContracts.map((contract) => (
              <div key={contract.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {contract.type.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{contract.name}</h3>
                        <p className="text-sm text-muted-foreground">{contract.id}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Badge className={getStatusColor(contract.status)}>
                      {contract.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <Badge className={getRiskColor(contract.risk)}>
                      {contract.risk} Risk
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="font-semibold">{contract.value}</p>
                    <p className="text-sm text-muted-foreground">Value</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">AI Score:</span>
                      <Badge variant={contract.aiScore >= 90 ? "default" : contract.aiScore >= 80 ? "secondary" : "destructive"}>
                        {contract.aiScore}%
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t flex justify-between text-sm text-muted-foreground">
                  <span>Expires: {contract.expiry}</span>
                  <span>Modified: {contract.lastModified}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contracts;
