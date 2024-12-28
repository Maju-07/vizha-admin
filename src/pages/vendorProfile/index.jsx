import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import Reviews from "./Reviews";
import Photos from "./Photos";
import VerificationProfile from "./VerificationProfile";
import { Check, X } from "lucide-react";
import { useParams } from "react-router-dom";

export default function Index() {
  const [title, setTitle] = useState("Profile Details");
  const { id } = useParams();

  const handleTitle = (title) => {
    switch (title) {
      case "profile-details":
        setTitle("Profile Details");
        break;
      case "reviews":
        setTitle("Reviews");
        break;
      case "photos":
        setTitle("Photos");
        break;
      case "verification":
        setTitle("Verification");
        break;
      default:
        console.log("Unknown title");
    }
  };

  return (
    <main className="">
      <div>
        <h1 className="text-4xl p-2">Vendor Profile</h1>
      </div>
      <Tabs defaultValue="profile-details" className="w-full py-2 pl-2">
        <TabsList className="grid w-full grid-cols-4 max-w-[400px]">
          <TabsTrigger
            onClick={() => handleTitle("profile-details")}
            value="profile-details"
          >
            Profile Details
          </TabsTrigger>
          <TabsTrigger onClick={() => handleTitle("reviews")} value="reviews">
            Reviews
          </TabsTrigger>
          <TabsTrigger onClick={() => handleTitle("photos")} value="photos">
            Photos
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleTitle("verification")}
            value="verification"
          >
            Verification
          </TabsTrigger>
        </TabsList>
        <div className="flex justify-between items-center px-5">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="flex gap-4">
            <Button variant="outline">
              <X />
              Reject
            </Button>
            <Button className="bg-success hover:bg-success hover:opacity-[0.9]">
              <Check />
              Approve
            </Button>
          </div>
        </div>
        {/* ........... */}
        <ProfileDetails />
        <Reviews />
        <Photos />
        <VerificationProfile />
        {/* ........... */}
      </Tabs>
    </main>
  );
}
