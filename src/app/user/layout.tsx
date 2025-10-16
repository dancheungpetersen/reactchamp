import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User",
  description: "User forms built using the components.",
};

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
