import { Chart } from "@/components/chart";
import { PiChart } from "@/components/pie-chart";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DatePicker } from "@/components/date-picker";
import { Users, UserCheck2, PhoneCall } from "lucide-react";

const Dashboard = () => {
  return (
    <main className="w-full p-2">
      <div className="flex justify-between py-2">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex gap-2">
          <DatePicker />
          <Button>
            <Download />
            Export
          </Button>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex flex-col min-w-[200px] gap-2 p-2">
          <div className="flex justify-between">
            <p>Total vendors</p>
            <Users color="gray" size={22} />
          </div>
          <p className="text-4xl font-semibold">234</p>
          <p>+20.1% from last month</p>
        </div>

        <div className="flex flex-col min-w-[200px] gap-2 p-2">
          <div className="flex justify-between">
            <p>Verified vendors</p>
            <UserCheck2 color="gray" size={22} />
          </div>
          <p className="text-4xl font-semibold">56</p>
          <p>+30.1% from last month</p>
        </div>

        <div className="flex flex-col min-w-[200px] gap-2 p-2">
          <div className="flex justify-between">
            <p>Total Customers</p>
            <Users color="gray" size={22} />
          </div>
          <p className="text-4xl font-semibold">1234</p>
          <p>+12.1% from last month</p>
        </div>

        <div className="flex flex-col min-w-[200px] gap-2 p-2">
          <div className="flex justify-between">
            <p>Total Customers Inquiries</p>
            <PhoneCall color="gray" size={22} />
          </div>
          <p className="text-4xl font-semibold">2000</p>
          <p>+3.2% from last month</p>
        </div>
      </div>
      <Chart />
      <PiChart />
    </main>
  );
};

export default Dashboard;
