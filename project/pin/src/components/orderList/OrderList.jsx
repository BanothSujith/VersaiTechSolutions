import React, { useState } from "react";
import { BiFileFind } from "react-icons/bi";

const tableData = [
  {
    invoiceId: "INV001",
    customer: "John Doe",
    tableNumber: 5,
    type: "Dine-In",
    totalAmount: "$120.50",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV002",
    customer: "Jane Smith",
    tableNumber: 3,
    type: "Takeaway",
    totalAmount: "$45.00",
    status: "Pending",
    action: "View Details",
  },
  {
    invoiceId: "INV003",
    customer: "Alex Johnson",
    tableNumber: 8,
    type: "Dine-In",
    totalAmount: "$78.90",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV004",
    customer: "Emily Davis",
    tableNumber: 1,
    type: "Takeaway",
    totalAmount: "$34.75",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV005",
    customer: "Michael Brown",
    tableNumber: 10,
    type: "Dine-In",
    totalAmount: "$98.20",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV006",
    customer: "Olivia Wilson",
    tableNumber: 2,
    type: "Takeaway",
    totalAmount: "$65.30",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV007",
    customer: "Liam Taylor",
    tableNumber: 7,
    type: "Dine-In",
    totalAmount: "$88.40",
    status: "Pending",
    action: "View Details",
  },
  {
    invoiceId: "INV008",
    customer: "Sophia Martinez",
    tableNumber: 4,
    type: "Takeaway",
    totalAmount: "$52.15",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV009",
    customer: "James Anderson",
    tableNumber: 6,
    type: "Dine-In",
    totalAmount: "$72.60",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV010",
    customer: "Isabella Thomas",
    tableNumber: 9,
    type: "Takeaway",
    totalAmount: "$110.80",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV011",
    customer: "William White",
    tableNumber: 12,
    type: "Dine-In",
    totalAmount: "$54.90",
    status: "Pending",
    action: "View Details",
  },
  {
    invoiceId: "INV012",
    customer: "Mia Harris",
    tableNumber: 11,
    type: "Takeaway",
    totalAmount: "$39.95",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV013",
    customer: "Benjamin King",
    tableNumber: 14,
    type: "Dine-In",
    totalAmount: "$92.75",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV014",
    customer: "Amelia Wright",
    tableNumber: 15,
    type: "Takeaway",
    totalAmount: "$78.35",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV015",
    customer: "Ethan Scott",
    tableNumber: 13,
    type: "Dine-In",
    totalAmount: "$67.40",
    status: "Pending",
    action: "View Details",
  },
  {
    invoiceId: "INV016",
    customer: "Ava Adams",
    tableNumber: 16,
    type: "Takeaway",
    totalAmount: "$120.00",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV017",
    customer: "Lucas Baker",
    tableNumber: 17,
    type: "Dine-In",
    totalAmount: "$59.10",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV018",
    customer: "Charlotte Clark",
    tableNumber: 18,
    type: "Takeaway",
    totalAmount: "$68.25",
    status: "Pending",
    action: "View Details",
  },
  {
    invoiceId: "INV019",
    customer: "Henry Walker",
    tableNumber: 19,
    type: "Dine-In",
    totalAmount: "$105.50",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV020",
    customer: "Harper Young",
    tableNumber: 20,
    type: "Takeaway",
    totalAmount: "$94.75",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV021",
    customer: "Jack Allen",
    tableNumber: 21,
    type: "Dine-In",
    totalAmount: "$43.20",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV022",
    customer: "Ella Nelson",
    tableNumber: 22,
    type: "Takeaway",
    totalAmount: "$85.35",
    status: "Pending",
    action: "View Details",
  },
  {
    invoiceId: "INV023",
    customer: "Sebastian Carter",
    tableNumber: 23,
    type: "Dine-In",
    totalAmount: "$73.45",
    status: "Completed",
    action: "View Details",
  },
  {
    invoiceId: "INV024",
    customer: "Luna Mitchell",
    tableNumber: 24,
    type: "Takeaway",
    totalAmount: "$60.25",
    status: "Ongoing",
    action: "View Details",
  },
  {
    invoiceId: "INV025",
    customer: "Henry Perez",
    tableNumber: 25,
    type: "Dine-In",
    totalAmount: "$49.80",
    status: "Pending",
    action: "View Details",
  },
];

function OrderList() {
  const orderListStatus = ["All", "Completed", "Ongoing", "Pending"];
  const orderListHeadings = [
    "Invoice ID",
    "Customer",
    "Table Number",
    "Dine-In/Takeaway",
    "Total Amount",
    "Status",
    "Action",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-[#D1FAE5] text-[#084F3C]";
      case "Ongoing":
        return "bg-[#D7D1FA] text-[#13084F]";
      case "Pending":
        return "bg-[#F4FAD1] text-[#424F08]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const [data, setData] = useState(tableData);
  const [currentFilterButton, setCurrentFilterButton] = useState("All");
  return (
    <div className="w-full h-full bg-[#F4F4F4] max-w-[70.375rem] max-h-[57.75rem] flex flex-col gap-6">
      <div className="w-full h-14 rounded-md border-b-2 max-h-14">
        <div className="flex justify-between items-center w-full h-full">
          <span className="font-bold uppercase text-xl">Order List</span>
          <div className="flex w-full gap-2 justify-evenly items-center max-w-[25.75rem] pr-4">
            {orderListStatus.map((status, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentFilterButton(status);
                  setData(
                    status === "All"
                      ? tableData
                      : tableData.filter((item) => item.status === status)
                  );
                }}
                className={`px-5 py-3 rounded-md duration-75 ${
                  currentFilterButton === status
                    ? "bg-[#1B2827] text-white"
                    : "bg-[#FAFAFA] text-[#878181] hover:bg-[#979d9d] hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-y-auto hide-scrollbar w-full h-full bg-transparent max-w-[70.313rem] max-h-[52.125rem]">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr>
              {orderListHeadings.map((heading, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-left text-[#4B5563] border-b"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {data.map((item, i) => (
    <tr key={i} className="h-12 odd:bg-[#F4F4F4] even:bg-[#FFFFFF]">
      {Object.entries(item).map(([key, value], j) => (
        <td key={j} className="px-4 py-2 border-b">
          {key === "status" ? (
            <span
              className={`inline-block px-2 py-1 text-sm font-medium rounded ${getStatusColor(value)}`}
            >
              {value}
            </span>
          ) : key === "action" ? (
              <button
                className="  bg-transperent rounded-md  w-full max-w-[72px] h-7 max-h-7  border border-[#484848] flex items-center justify-between px-2  active:scale-75 duration-75 "
                onClick={() => console.log("view")}
              >
                <BiFileFind className="text-[#3E7F57]" />
                view
              </button>
              
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default OrderList;
