import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TabsContent } from "@/components/ui/tabs";
import StarIcon from "@/assets/star.svg";
import { Progress } from "@/components/ui/progress";
import { Star, Trash2 } from "lucide-react";

const Reviews = () => {
  return (
    <TabsContent value="reviews" className="flex gap-2 p-2">
      <Card className="w-[40%]">
        <CardHeader className="flex flex-row w-full justify-between">
          <CardTitle>Overall Rating</CardTitle>
          <CardDescription className="flex">
            <img src={StarIcon} alt="Rating" />
            4.5
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex gap-2 items-center justify-center">
            <p className=" whitespace-nowrap">5 Star</p>
            <Progress value={90} />
            <p>90</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className=" whitespace-nowrap">4 Star</p>
            <Progress value={80} />
            <p>80</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className=" whitespace-nowrap">3 Star</p>
            <Progress value={40} />
            <p>40</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className=" whitespace-nowrap">2 Star</p>
            <Progress value={20} />
            <p>20</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <p className=" whitespace-nowrap">1 Star</p>
            <Progress value={5} />
            <p>05</p>
          </div>
        </CardContent>
      </Card>
      {/* ............... */}
      <div className="w-[60%] flex flex-col gap-2">
        {comments.map((value, idx) => (
          <Card className="w-full" key={idx}>
            <CardHeader className="flex flex-row w-full justify-between">
              <div className="flex items-center justify-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-xl">{value.name}</CardTitle>
                  <CardDescription>{value.date}</CardDescription>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-7 flex items-center justify-center bg-success rounded-2xl">
                  <Star size={22} fill="white" color="white" />
                  <p>5</p>
                </div>
                <div>
                  <Trash2 color="red" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="">{value.comment}</CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};

export default Reviews;

const comments = [
  {
    id: 1,
    name: "naga",
    date: "April 28",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Arcu congue justo tellus diam eu. Nunc nunc eleifend sed ut pharetra mauris. Id eget nisi enim ",
  },
  {
    id: 1,
    name: "maju",
    date: "April 28",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Arcu congue justo tellus diam eu. Nunc nunc eleifend sed ut pharetra mauris. Id eget nisi enim ",
  },
  {
    id: 1,
    name: "imman",
    date: "April 28",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Arcu congue justo tellus diam eu. Nunc nunc eleifend sed ut pharetra mauris. Id eget nisi enim ",
  },
];
