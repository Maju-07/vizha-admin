import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AppIcon from "@/assets/vizha.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  return (
    <main className="w-full min-h-screen flex">
      <div className="w-1/2 min-h-screen bg-[#EBEBEB]">
        <img className="mt-5 ml-5" src={AppIcon} alt="vizha" />
      </div>
      <div className="w-1/2 min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Login As Admin</CardTitle>
            <CardDescription>
              Enter your email below to Login your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="Email">Email</Label>
              <Input id="Email" defaultValue="m@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" defaultValue="******" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => Navigate("/")} className="w-full">
              Login Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Login;
