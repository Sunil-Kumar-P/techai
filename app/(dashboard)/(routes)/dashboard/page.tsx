import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function DashboardPage() {
  return (
    <div>
      <Button variant="destructive">Dashboard Page</Button>
      {/* <UserButton/> */}
    </div>
  );
}
