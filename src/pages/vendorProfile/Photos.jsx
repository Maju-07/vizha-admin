import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Trash2 } from "lucide-react";
import Demo from "@/assets/demo.png";
const Photos = () => {
  return (
    <TabsContent value="photos">
      <div className="flex gap-4">
        <div className="w-max relative group">
          <img src={Demo} alt="" />
          <Button className="absolute invisible transition-all group-hover:visible bottom-3 right-3 bg-white bg-opacity-40 backdrop-blur-[2.5px]">
            <Trash2 />
            Delete
          </Button>
        </div>
        <div className="w-max relative group">
          <img src={Demo} alt="" />
          <Button className="absolute invisible transition-all group-hover:visible bottom-3 right-3 bg-white bg-opacity-40 backdrop-blur-[2.5px]">
            <Trash2 />
            Delete
          </Button>
        </div>
        <div className="w-max relative group">
          <img src={Demo} alt="" />
          <Button className="absolute invisible transition-all group-hover:visible bottom-3 right-3 bg-white bg-opacity-40 backdrop-blur-[2.5px]">
            <Trash2 />
            Delete
          </Button>
        </div>
        <div className="w-max relative group">
          <img src={Demo} alt="" />
          <Button className="absolute invisible transition-all group-hover:visible bottom-3 right-3 bg-white bg-opacity-40 backdrop-blur-[2.5px]">
            <Trash2 />
            Delete
          </Button>
        </div>
      </div>
    </TabsContent>
  );
};

export default Photos;
