import React ,{useState} from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import RecentOrderCard from "../../cards/RecentOrderCard";

const recentOrders = [
  {
    id: 1,
    label: "Recommended",
    items: [
      {
        id: 1,
        name: "Hyderabadi Biryani",
        price: 199,
        rating: 4.8,
        category: "Biryani",
        type: "non-veg",
        image: "https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc",
      },
      {
        id: 2,
        name: "Paneer Butter Masala",
        price: 249,
        rating: 4.7,
        category: "Main Course",
        type: "veg",
        image: "https://picsum.photos/seed/paneer/200/300",
      },
    ],
  },
  {
    id: 2,
    label: "Today’s Special",
    items: [
      {
        id: 6,
        name: "Mughlai Chicken",
        price: 299,
        rating: 4.8,
        category: "Special",
        type: "non-veg",
        image: "https://picsum.photos/seed/mughlai/200/300",
      },
      {
        id: 7,
        name: "Tandoori Prawns",
        price: 349,
        rating: 4.7,
        category: "Special",
        type: "non-veg",
        image: "https://picsum.photos/seed/tandooriprawns/200/300",
      },
    ],
  },
  {
    id: 3,
    label: "Lip Smacking Starters",
    items: [
      {
        id: 8,
        name: "Crispy Corn",
        price: 149,
        rating: 4.6,
        category: "Starter",
        type: "veg",
        image: "https://picsum.photos/seed/crispycorn/200/300",
      },
      {
        id: 9,
        name: "Chicken Lollipop",
        price: 199,
        rating: 4.5,
        category: "Starter",
        type: "non-veg",
        image: "https://picsum.photos/seed/chickenlollipop/200/300",
      },
    ],
  },
  {
    id: 4,
    label: "Main Course",
    items: [
      {
        id: 10,
        name: "Dal Tadka",
        price: 189,
        rating: 4.6,
        category: "Main Course",
        type: "veg",
        image: "https://picsum.photos/seed/daltadka/200/300",
      },
      {
        id: 11,
        name: "Chicken Curry",
        price: 259,
        rating: 4.7,
        category: "Main Course",
        type: "non-veg",
        image: "https://picsum.photos/seed/chickencurry/200/300",
      },
    ],
  },
  {
    id: 5,
    label: "Dessert",
    items: [
      {
        id: 12,
        name: "Gulab Jamun",
        price: 79,
        rating: 4.8,
        category: "Dessert",
        type: "veg",
        image: "https://picsum.photos/seed/gulabjamun/200/300",
      },
      {
        id: 13,
        name: "Rasmalai",
        price: 99,
        rating: 4.7,
        category: "Dessert",
        type: "veg",
        image: "https://picsum.photos/seed/rasmalai/200/300",
      },
    ],
  },
];
function SuggesionsFotter() {
  const [showItem, setShowItem] = useState(null);

  return (
    <div className="flex flex-col gap-4 ">
      {recentOrders.map((item) => (
        <div key={item.id} className="bg-[#ffffff] p-4">
          <div
            className="flex justify-between items-center px-4"
            onClick={() =>
              setShowItem((prev) => (prev === item.id ? null : item.id))
            }
          >
            <span className="text-2xl font-semibold tracking-tight capitalize">
              {item.label} ({item.items?.length})
            </span>
            {showItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <AnimatePresence>
            {showItem === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-4 items-center overflow-hidden"
              >
                {item.items.map((item) => (
                  <div key={item.id}>
                    <RecentOrderCard item={item} />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default SuggesionsFotter;
