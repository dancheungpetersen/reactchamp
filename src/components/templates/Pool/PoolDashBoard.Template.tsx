import React from 'react';

interface PoolDashboardTemplateProps {
  poolId: string;
  children: React.ReactNode;
}

const PoolDashboardTemplate = ({ poolId, children }: PoolDashboardTemplateProps) => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Dashboard for Pool: <span className="font-mono bg-gray-200 p-1 rounded">{poolId}</span></h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default PoolDashboardTemplate;
