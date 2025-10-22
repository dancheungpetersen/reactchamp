import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
  description: "Main forms built using the components.",
};

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
