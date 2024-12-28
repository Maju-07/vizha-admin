import { DataTable } from "@/components/data-table-components/data-table";
import { columns } from "@/components/data-table-components/columns";
import { Data } from "@/components/data-table-components/data";

const Customers = () => {
  return (
    <main className="w-full">
      <DataTable data={customerData} columns={customerColumns} />
    </main>
  );
};

export default Customers;

const customerData = [
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-200",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Female",
  },
  {
    name: "Naga",
    date: "Vizha-CM-234",
    number: "6383384276",
    mailId: "nagabala572@gmail.com",
    gender: "Male",
  },
];

import { DataTableColumnHeader } from "@/components/data-table-components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-components/data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const customerColumns = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px] capitalize flex gap-2">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <p>{row.getValue("name")}</p>
          <p className="text-gray-500">{row.original.date}</p>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">
            {row.getValue("number")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "mailId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mail id" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="">{row.getValue("mailId")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="">{row.getValue("gender")}</span>
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
