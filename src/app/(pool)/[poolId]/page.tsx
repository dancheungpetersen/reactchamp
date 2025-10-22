// src/app/(pool)/[poolId]/dashboard/page.tsx
import PoolDashboardTemplate from "@/components/templates/Pool/PoolDashBoard.Template";

interface PoolDashboardPageProps {
  params: {
    poolId: string;
  };
}

export default function PoolDashboardPage({ params }: PoolDashboardPageProps) {
  const { poolId } = params;

  return (
    <PoolDashboardTemplate poolId={poolId}>
      <div>
        <p className="text-lg">This is the main content area of the dashboard.</p>
        <p className="mt-2">You can fetch and display pool-specific data here, such as matches, leaderboards, etc.</p>
      </div>
    </PoolDashboardTemplate>
  );
}
