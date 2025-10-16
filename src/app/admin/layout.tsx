import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin forms built using the components.",
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
