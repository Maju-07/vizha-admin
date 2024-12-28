import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link2Icon, User } from "lucide-react";
import PanCardPng from "@/assets/image.png";

const VerificationProfile = () => {
  return (
    <TabsContent
      className="flex flex-row w-full gap-2 p-2"
      value="verification"
    >
      <Card className="w-[35%]">
        <CardHeader>
          <CardTitle>Verification id</CardTitle>
          <CardDescription>Government verification id</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex">
            <Avatar>
              <AvatarFallback>
                <User strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>ID Type</h4>
              <p>Pan Card</p>
            </div>
          </div>
          {/* .... */}
          <div className="flex">
            <Avatar>
              <AvatarFallback>
                <User strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>ID Number</h4>
              <p>234567654323</p>
            </div>
          </div>
          {/* .. */}
          <div>
            <img src={PanCardPng} alt="" />
          </div>
        </CardContent>
      </Card>
      {/* next */}
      <Card className="w-[35%]">
        <CardHeader>
          <CardTitle>Vendor Photo proof</CardTitle>
          <CardDescription>Vendor photo with his id</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex">
            <Avatar>
              <AvatarFallback>
                <User strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>ID Type</h4>
              <p>Pan Card</p>
            </div>
          </div>
          {/* .... */}
          <div className="flex">
            <Avatar>
              <AvatarFallback>
                <User strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>ID Number</h4>
              <p>234567654323</p>
            </div>
          </div>
          {/* .. */}
          <div>
            <img src={PanCardPng} alt="" />
          </div>
        </CardContent>
      </Card>
      {/* links */}
      <Card className="w-[30%]">
        <CardHeader>
          <CardTitle>Portfolio Work Links</CardTitle>
          <CardDescription>Vendor portfolio links</CardDescription>
        </CardHeader>
        <CardContent className="">
          <div>
            <Avatar>
              <AvatarFallback>
                <Link2Icon strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>Google business profile link</h4>
              <p>googleprofile.naga.com</p>
            </div>
          </div>
          <div>
            <Avatar>
              <AvatarFallback>
                <Link2Icon strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>Website link</h4>
              <p>naga.com</p>
            </div>
          </div>
          <div>
            <Avatar>
              <AvatarFallback>
                <Link2Icon strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>Social media page link</h4>
              <p>insta.naga.com</p>
            </div>
          </div>
          <div>
            <Avatar>
              <AvatarFallback>
                <Link2Icon strokeWidth={1.5} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4>Any other portfolio link</h4>
              <p>example.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default VerificationProfile;
