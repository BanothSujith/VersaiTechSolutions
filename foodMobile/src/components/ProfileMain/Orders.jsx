import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

const orderStatus = ["Active", "Completed", "Cancelled"];
const foodOrders = [
  {
    img: "https://picsum.photos/200/300?random=1",
    name: "Margherita Pizza",
    price: 12.99,
    orderDate: "12 Nov 2023, 12:00 PM",
    quantity: 2,
    status: "Active",
  },
  {
    img: "https://picsum.photos/200/300?random=2",
    name: "Spaghetti Carbonara",
    price: 14.5,
    orderDate: "10 Nov 2023, 7:30 PM",
    quantity: 1,
    status: "Completed",
  },
  {
    img: "https://picsum.photos/200/300?random=3",
    name: "Cheeseburger",
    price: 9.99,
    orderDate: "8 Nov 2023, 6:45 PM",
    quantity: 3,
    status: "Cancelled",
  },
  {
    img: "https://picsum.photos/200/300?random=4",
    name: "Caesar Salad",
    price: 7.49,
    orderDate: "5 Nov 2023, 1:15 PM",
    quantity: 1,
    status: "Active",
  },
  {
    img: "https://picsum.photos/200/300?random=5",
    name: "Chicken Biryani",
    price: 11.99,
    orderDate: "3 Nov 2023, 8:00 PM",
    quantity: 2,
    status: "Cancelled",
  },
  //   {
  //     img: "https://picsum.photos/200/300?random=6",
  //     name: "Tandoori Chicken",
  //     price: 13.75,
  //     orderDate: "1 Nov 2023, 9:20 PM",
  //     quantity: 1,
  //     status: "Completed"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=7",
  //     name: "Sushi Platter",
  //     price: 19.99,
  //     orderDate: "30 Oct 2023, 7:00 PM",
  //     quantity: 2,
  //     status: "Active"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=8",
  //     name: "Pancakes",
  //     price: 8.50,
  //     orderDate: "28 Oct 2023, 9:30 AM",
  //     quantity: 3,
  //     status: "Cancelled"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=9",
  //     name: "Chocolate Cake",
  //     price: 6.99,
  //     orderDate: "25 Oct 2023, 5:00 PM",
  //     quantity: 1,
  //     status: "Completed"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=10",
  //     name: "Grilled Salmon",
  //     price: 18.25,
  //     orderDate: "22 Oct 2023, 8:30 PM",
  //     quantity: 2,
  //     status: "Active"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=11",
  //     name: "Veggie Wrap",
  //     price: 10.25,
  //     orderDate: "18 Oct 2023, 12:45 PM",
  //     quantity: 1,
  //     status: "Cancelled"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=12",
  //     name: "Steak",
  //     price: 22.50,
  //     orderDate: "15 Oct 2023, 7:10 PM",
  //     quantity: 1,
  //     status: "Completed"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=13",
  //     name: "French Fries",
  //     price: 5.99,
  //     orderDate: "10 Oct 2023, 3:25 PM",
  //     quantity: 2,
  //     status: "Active"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=14",
  //     name: "BBQ Chicken Wings",
  //     price: 12.75,
  //     orderDate: "7 Oct 2023, 8:15 PM",
  //     quantity: 4,
  //     status: "Cancelled"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=15",
  //     name: "Mango Smoothie",
  //     price: 6.49,
  //     orderDate: "4 Oct 2023, 10:30 AM",
  //     quantity: 2,
  //     status: "Completed"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=16",
  //     name: "Tomato Soup",
  //     price: 7.89,
  //     orderDate: "1 Oct 2023, 5:00 PM",
  //     quantity: 1,
  //     status: "Active"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=17",
  //     name: "Pasta Alfredo",
  //     price: 13.99,
  //     orderDate: "28 Sep 2023, 6:45 PM",
  //     quantity: 3,
  //     status: "Completed"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=18",
  //     name: "Falafel Wrap",
  //     price: 9.50,
  //     orderDate: "25 Sep 2023, 1:30 PM",
  //     quantity: 2,
  //     status: "Cancelled"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=19",
  //     name: "Strawberry Cheesecake",
  //     price: 8.99,
  //     orderDate: "22 Sep 2023, 4:15 PM",
  //     quantity: 1,
  //     status: "Active"
  //   },
  //   {
  //     img: "https://picsum.photos/200/300?random=20",
  //     name: "Grilled Veggie Sandwich",
  //     price: 11.75,
  //     orderDate: "18 Sep 2023, 12:10 PM",
  //     quantity: 2,
  //     status: "Completed"
  //   }
];

function Orders() {
  const [orders, setOrders] = useState(
    foodOrders.filter((item) => item.status == "Active")
  );
  const [activeStatus, setActiveStatus] = useState("Active");
  return (
    <div className="w-full h-full mt-4 flex flex-col gap-4 items-center overflow-hidden   " >
      <div className="flex items-center justify-evenly w-full">
        {orderStatus.map((status, i) => (
          <span
            key={i}
            className={`capitalize   pt-1.5 pb-1.5 px-3.5 shrink-0 rounded-[.625rem] border border-[#f8e8e8] ${
              activeStatus == status
                ? "bg-[#820F11]  text-white"
                : "text-[#8C8C8C]"
            }  transition-all duration-100 ease-in  `}
            onClick={() => {
              setOrders(foodOrders.filter((item) => item.status == status));
              setActiveStatus(status);
            }}
          >
            {status}
          </span>
        ))}
      </div>
      <div className="h-full flex flex-col gap-8 overflow-auto py-2 border-t  border-t-[#f8e8e8]">
        {orders.map((item, i) => (
          <div className="w-[21.4rem]   flex gap-2.5 shrink-0 " key={i}>
            <img
              src={item.img}
              className="h-20 aspect-square rounded-[1.1rem]"
            />
            <div className="w-full  justify-between flex flex-col gap-2 ">
              <div className="flex justify-between items-baseline w-full  ">
                <div className="flex flex-col capitalize ">
                  <p className="text-xl leading-tight font-medium text-[#391713]">
                    {item.name}
                  </p>
                  <p className="text-sm font-light text-[#391713] ">
                    {item.orderDate}
                  </p>
                   {
                    item.status !== "Active" && (
                        <span className="flex gap-2 text-[#820F11]  items-center "><CiCircleCheck className="text-xl font-bold"/> Order {item.status == "Completed" ? "Completed" : "Cancelled" }</span>

                    )
                   }
                </div>
                <div className="flex flex-col capitalize ">
                  <h3 className="text-xl font-bold text-[#391713]">
                    ${item.price}
                  </h3>
                  <p className="text-sm font-light leading-3.5text-[#391713] font-[Sofia Sans] ">
                    {item.quantity} {item.quantity == 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
              {
                item.status !== "Cancelled" && (
                    <div className="flex w-full justify-between">
                <button className={`capitalize flex items-center justify-center w-[6.25rem] h-6 ${item.status == "Active" ? 'bg-[#820F11] text-white': 'bg-[#F8E8E8] text-[#820F11]' }  rounded-[6.5rem] text-[.75rem]`}>
                  {
                     item.status == "Active" ? "Cancel Order" : "Leave a Review"                     
                  }
                </button>
                <button className="capitalize flex items-center justify-center w-[6.25rem] h-6 bg-[#F8E8E8] text-[#820F11] rounded-[6.5rem] text-[.75rem]  ">
                {
                     item.status == "Active" ? "Track Driver" : "Order Again"                     
                  }                </button>
              </div>
                ) 
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
