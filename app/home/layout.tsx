import '../globals.css';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <DashboardNavbar />
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">{children}</div>
    </div>
    </>
  );
}
