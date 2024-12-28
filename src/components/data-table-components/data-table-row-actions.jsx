import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, UserPlus, UserRoundX, UserSquare, UserX } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DataTableRowActions({ row }) {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>
          <Edit />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/verification/naga")}>
          <UserSquare />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus />
          Verify Vendor
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserX />
          Reject Vendor
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRoundX />
          Suspend Vendor
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
