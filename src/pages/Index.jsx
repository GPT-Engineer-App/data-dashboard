import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, User, Settings, LogOut, Users, Activity, DollarSign, PlusCircle, FileText } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b bg-background">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6" />
          <span className="font-semibold text-xl">Dashboard</span>
        </div>
        <DropdownMenu open={userMenuOpen} onOpenChange={setUserMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r bg-muted/40">
          <nav className="flex flex-col gap-4">
            <NavItem to="/" icon={<Home className="h-5 w-5" />}>
              Overview
            </NavItem>
            <NavItem to="/analytics" icon={<Activity className="h-5 w-5" />}>
              Analytics
            </NavItem>
            <NavItem to="/settings" icon={<Settings className="h-5 w-5" />}>
              Settings
            </NavItem>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h1>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,234</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">567</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$12,345</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
            <ul className="list-disc list-inside">
              <li>User John Doe signed up</li>
              <li>User Jane Smith updated profile</li>
              <li>Generated monthly report</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <PlusCircle className="h-5 w-5" />
                Add User
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Generate Report
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-4 border-t bg-background text-center">
        <p>&copy; 2023 Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

const NavItem = ({ to, icon, children }) => (
  <a href={to} className="flex items-center gap-2 p-2 rounded hover:bg-muted transition-colors">
    {icon}
    <span>{children}</span>
  </a>
);

export default Index;