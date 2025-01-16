import DashboardHeader from "@/components/dashboard/header";
import { SummaryDashboard } from "@/components/summary/summary-dashboard";

export default async function SummaryPage() {
  return (
    <>
      <DashboardHeader title="Financial Summary" />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <SummaryDashboard />
      </main>
    </>
  );
}
