import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserRoundCheck, User, Phone, MapPin, Mail } from "lucide-react";
import EventPlannerIcon from "@/assets/EventPlannerIcon.svg";
import { TabsContent } from "@/components/ui/tabs";

const ProfileDetails = () => {
  return (
    <TabsContent value="profile-details" className="flex gap-3 w-full p-2">
      <Card className="w-[30%]">
        <CardHeader>
          <CardTitle>Basic Details</CardTitle>
          <CardDescription>Basic details of the vendor</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <div>
              <Phone />
            </div>
            <div>
              <h4>Mobile Number</h4>
              <p>699554785</p>
            </div>
          </div>
          <div>
            <div>
              <Mail />
            </div>
            <div>
              <h4>Email</h4>
              <p>jackson.lee@email.com</p>
            </div>
          </div>
          <div>
            <div>
              <MapPin />
            </div>
            <div>
              <h4>From</h4>
              <p>Chennai,Tamilnadu</p>
            </div>
          </div>
          <div>
            <div>
              <UserRoundCheck />
            </div>
            <div>
              <h4>Customer Preference</h4>
              <p>Chennai,Trichy,Madurai</p>
            </div>
          </div>
          <div>
            <div>
              <User />
            </div>
            <div>
              <h4>Member Since</h4>
              <p>05 July 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col w-[20%] gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Category</CardTitle>
            <CardDescription>Category of the vendor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <div>
                <img src={EventPlannerIcon} alt="" />
              </div>
              <div>
                <h4>Category Type</h4>
                <p>Event Planner</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Category</CardTitle>
            <CardDescription>Category of the vendor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <div>
                <p>wedding</p>
              </div>
              <div>
                <p>Temple Festivals</p>
              </div>
              <div>
                <p>School/College Cultural</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="w-[50%]">
        <CardHeader>
          <CardTitle>About Vendor</CardTitle>
          <CardDescription>Vendor Bio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Oh Yes Events is known for their creative excellency in designing
            any event, which are personally planned down to the very last detail
            in coherence with the client’s expectations. We are highly organized
            when it comes to planning and prioritizing the micro and macro Read
            Moreour wedding events. We are a one-stop-shop for any event related
            requirements. We are capable of creating any theme or recreating any
            situation as per client’s request. Every single event project we
            have ever taken up and executed, we have satisfied our clients by
            fulfilling their requests to the maximum extent possible.
          </p>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ProfileDetails;
