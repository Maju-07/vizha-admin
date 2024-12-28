import { DataTable } from "@/components/data-table-components/data-table";

const Verification = () => {
  return (
    <main>
      <DataTable data={verificationData} columns={verificationColumns} />
    </main>
  );
};

export default Verification;

const verificationData = [
  {
    vendor: "Naga",
    date: "Vizha-CM-234",
    vendorType: "Photographer",
    location: "chennai",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    verificationId: "pan card",
    status: "verified",
  },
  {
    vendor: "Naga",
    date: "Vizha-CM-234",
    vendorType: "Photographer",
    location: "chennai",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    verificationId: "driving license",
    status: "pending",
  },
  {
    vendor: "Naga",
    date: "Vizha-CM-234",
    vendorType: "Photographer",
    location: "chennai",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    verificationId: "pan card",
    status: "verified",
  },
  {
    vendor: "Naga",
    date: "Vizha-CM-234",
    vendorType: "Photographer",
    location: "chennai",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    verificationId: "driving license",
    status: "pending",
  },
  {
    vendor: "Naga",
    date: "Vizha-CM-234",
    vendorType: "Photographer",
    location: "chennai",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    verificationId: "pan card",
    status: "verified",
  },
  {
    vendor: "Naga",
    date: "Vizha-CM-234",
    vendorType: "Photographer",
    location: "chennai",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    verificationId: "driving license",
    status: "pending",
  },
];

import { DataTableColumnHeader } from "@/components/data-table-components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-components/data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const verificationColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "vendor",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="flex justify-center"
        column={column}
        title="Vendor"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[120px] capitalize flex gap-2">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <p>{row.getValue("vendor")}</p>
          <p className="text-gray-500 text-sm">{row.original.date}</p>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "vendorType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[100px] items-center">
          <span className="capitalize">{row.getValue("vendorType")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[100px] items-center">
          <span className="capitalize">{row.getValue("location")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[100px] items-center">
          <span>{row.getValue("number")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "mailId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mail id" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[100px] truncate items-center">
          <span>{row.getValue("mailId")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "verificationId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Verification ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[100px] items-center">
          <span className="capitalize">{row.getValue("verificationId")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div className="flex max-w-[100px] items-center">
          <p
            className={cn(
              "p-2 rounded-2xl capitalize",
              status === "verified"
                ? "text-green-600 bg-green-300"
                : "text-red-500 bg-red-300"
            )}
          >
            {status}
          </p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
