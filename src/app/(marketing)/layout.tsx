import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing",
  description: "Marketing forms built using the components.",
};

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
