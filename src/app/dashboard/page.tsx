import { auth } from "@/auth";
import { ReposList } from "@/components/dashboard";
import { Header } from "@/components/layout/header";

export default async function DashboardPage() {
  const session = await auth();

  // Get first name for personalized greeting
  const firstName = session?.user?.name?.split(" ")[0] || "Developer";

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-[800px] px-200 md:px-300 py-400 md:py-600">
        {/* Header */}
        <Header className="mb-400 md:mb-500" />

        {/* Welcome Section */}
        <div className="mb-400 md:mb-500">
          <h1 className="text-preset-1 text-foreground">
            Welcome, {firstName}!
          </h1>
          <p className="text-preset-6 md:text-preset-4 text-muted-foreground mt-100">
            Your most recently updated repositories
          </p>
        </div>

        {/* Repository List */}
        <ReposList />
      </main>
    </div>
  );
}
