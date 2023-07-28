import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div>Landing Page</div>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
    </div>
  );
};
export default LandingPage;
