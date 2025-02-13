import React, { useRef, useState,useEffect } from "react";
import Card from "./Card";
import FilterButtons from "./FilterButtons";
import { CiSearch } from "react-icons/ci";
import ItemDescription from './ItemDescrption'
const foodItems = [
    {
      id: 1,
      categoryId: "fastFood",
      category: "Fast Food",
      itemName: "Cheeseburger",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 220,
      quantity: [
        { id: 1, size: "Small", price: 220, quantity: 10 },
        { id: 2, size: "Medium", price: 270, quantity: 8 },
        { id: 3, size: "Large", price: 320, quantity: 3 },
      ],
      description: "Cheeseburger with grilled patty and melted cheese",
      addOn: [
        { id: 1, name: "Extra Cheese", price: 30 },
        { id: 2, name: "Extra Patty", price: 40 },
        { id: 3, name: "Extra Bacon", price: 50 },        
      ],
      stock: 10,
      isVeg: false,
      rattings: 4.7,
    },
    {
      id: 2,
      categoryId: "pizza",
      category: "Pizza",
      itemName: "Pepperoni Pizza",
      image:
        "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 350,
      quantity: [
        { id: 1, size: "Small", price: 350, quantity: 15 },
        { id: 2, size: "Medium", price: 500, quantity: 12 },
        { id: 3, size: "Large", price: 650, quantity: 5 },
      ],
      description: "Pizza with spicy pepperoni and mozzarella cheese",
      stock: 10,
      isVeg: false,
      rattings: 4.8,
    },
    {
      id: 3,
      categoryId: "desserts",
      category: "Desserts",
      itemName: "Strawberry Cheesecake",
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 180,
      quantity: [
        { id: 1, size: "Slice", price: 180, quantity: 20 },
        { id: 2, size: "Half", price: 400, quantity: 5 },
        { id: 3, size: "Full", price: 800, quantity: 2 },
      ],
      description: "Creamy cheesecake topped with fresh strawberries",
      stock: 10,
      isVeg: true,
      rattings: 4.9,
    },
    {
      id: 4,
      categoryId: "beverages",
      category: "Beverages",
      itemName: "Lemonade",
      image:
        "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg",
      price: 60,
      quantity: [
        { id: 1, size: "Can", price: 60, quantity: 30 },
        { id: 2, size: "Bottle", price: 120, quantity: 20 },
      ],
      description: "Freshly squeezed lemonade",
      stock: 10,
      isVeg: true,
      rattings: 4.3,
    },
    {
      id: 5,
      categoryId: "breakfast",
      category: "Breakfast",
      itemName: "French Toast",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 150,
      quantity: [
        { id: 1, size: "Single", price: 150, quantity: 25 },
        { id: 2, size: "Double", price: 250, quantity: 15 },
      ],
      description: "Golden French toast with maple syrup",
      stock: 10,
      isVeg: true,
      rattings: 4.6,
    },
    {
      id: 6,
      categoryId: "indian",
      category: "Indian Cuisine",
      itemName: "Chicken Tikka",
      image:
        "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 350,
      quantity: [
        { id: 1, size: "Half", price: 350, quantity: 10 },
        { id: 2, size: "Full", price: 700, quantity: 5 },
      ],
      description: "Juicy chicken tikka served with naan",
      stock: 10,
      isVeg: false,
      rattings: 4.8,
    },
    {
      id: 7,
      categoryId: "seafood",
      category: "Seafood",
      itemName: "Shrimp Tempura",
      image:
        "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 700,
      quantity: [
        { id: 1, size: "Small", price: 700, quantity: 5 },
        { id: 2, size: "Medium", price: 900, quantity: 3 },
      ],
      description: "Crispy shrimp tempura with dipping sauce",
      stock: 10,
      isVeg: false,
      rattings: 4.9,
    },
    {
      id: 8,
      categoryId: "snacks",
      category: "Snacks",
      itemName: "Onion Rings",
      image:
        "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 130,
      quantity: [
        { id: 1, size: "Small", price: 130, quantity: 20 },
        { id: 2, size: "Large", price: 180, quantity: 15 },
      ],
      description: "Crispy and golden onion rings",
      stock: 10,
      isVeg: true,
      rattings: 4.4,
    },
    {
      id: 9,
      categoryId: "salads",
      category: "Salads",
      itemName: "Greek Salad",
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 280,
      quantity: [
        { id: 1, size: "Small", price: 280, quantity: 10 },
        { id: 2, size: "Large", price: 450, quantity: 5 },
      ],
      description: "Classic Greek salad with olives and feta cheese",
      stock: 10,
      isVeg: true,
      rattings: 4.6,
    },
    {
      id: 10,
      categoryId: "soups",
      category: "Soups",
      itemName: "Chicken Noodle Soup",
      image:
        "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 150,
      quantity: [
        { id: 1, size: "Cup", price: 150, quantity: 15 },
        { id: 2, size: "Bowl", price: 220, quantity: 10 },
      ],
      description: "Warm chicken noodle soup with vegetables",
      stock: 10,
      isVeg: false,
      rattings: 4.7,
    },
    {
      id: 11,
      categoryId: "fastFood",
      category: "Fast Food",
      itemName: "Chicken Sandwich",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 180,
      quantity: [
        { id: 1, size: "Small", price: 180, quantity: 10 },
        { id: 2, size: "Medium", price: 230, quantity: 8 },
        { id: 3, size: "Large", price: 280, quantity: 3 },
      ],
      description: "Grilled chicken sandwich with lettuce and mayo",
      stock: 10,
      isVeg: false,
      rattings: 4.6,
    },
    {
      id: 12,
      categoryId: "pizza",
      category: "Pizza",
      itemName: "BBQ Chicken Pizza",
      image:
        "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 350,
      quantity: [
        { id: 1, size: "Small", price: 350, quantity: 15 },
        { id: 2, size: "Medium", price: 500, quantity: 12 },
        { id: 3, size: "Large", price: 650, quantity: 5 },
      ],
      description: "Pizza with BBQ chicken, onions, and peppers",
      stock: 10,
      isVeg: false,
      rattings: 4.8,
    },
    {
      id: 13,
      categoryId: "desserts",
      category: "Desserts",
      itemName: "Chocolate Mousse",
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 200,
      quantity: [
        { id: 1, size: "Small", price: 200, quantity: 20 },
        { id: 2, size: "Medium", price: 300, quantity: 10 },
      ],
      description: "Rich and creamy chocolate mousse",
      stock: 10,
      isVeg: true,
      rattings: 4.9,
    },
    {
      id: 14,
      categoryId: "beverages",
      category: "Beverages",
      itemName: "Coca-Cola",
      image:
        "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg",
      price: 60,
      quantity: [
        { id: 1, size: "Can", price: 60, quantity: 30 },
        { id: 2, size: "Bottle", price: 120, quantity: 20 },
      ],
      description: "Classic refreshing soft drink",
      stock: 10,
      isVeg: true,
      rattings: 4.4,
    },
    {
      id: 15,
      categoryId: "breakfast",
      category: "Breakfast",
      itemName: "Pancakes",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 200,
      quantity: [
        { id: 1, size: "Single", price: 200, quantity: 25 },
        { id: 2, size: "Double", price: 350, quantity: 15 },
      ],
      description: "Fluffy pancakes with syrup and butter",
      stock: 10,
      isVeg: true,
      rattings: 4.6,
    },
    {
      id: 16,
      categoryId: "indian",
      category: "Indian Cuisine",
      itemName: "Paneer Tikka",
      image:
        "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 280,
      quantity: [
        { id: 1, size: "Half", price: 280, quantity: 12 },
        { id: 2, size: "Full", price: 500, quantity: 6 },
      ],
      description: "Spicy paneer tikka with naan",
      stock: 10,
      isVeg: true,
      rattings: 4.7,
    },
    {
      id: 17,
      categoryId: "seafood",
      category: "Seafood",
      itemName: "Grilled Salmon",
      image:
        "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 950,
      quantity: [
        { id: 1, size: "Small", price: 950, quantity: 6 },
        { id: 2, size: "Large", price: 1200, quantity: 4 },
      ],
      description: "Grilled salmon served with a side of vegetables",
      stock: 10,
      isVeg: false,
      rattings: 4.9,
    },
    {
      id: 18,
      categoryId: "snacks",
      category: "Snacks",
      itemName: "Spring Rolls",
      image:
        "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 150,
      quantity: [
        { id: 1, size: "Small", price: 150, quantity: 25 },
        { id: 2, size: "Large", price: 200, quantity: 12 },
      ],
      description: "Crispy spring rolls filled with vegetables",
      stock: 10,
      isVeg: true,
      rattings: 4.4,
    },
    {
      id: 19,
      categoryId: "salads",
      category: "Salads",
      itemName: "Caesar Salad",
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 250,
      quantity: [
        { id: 1, size: "Small", price: 250, quantity: 18 },
        { id: 2, size: "Large", price: 380, quantity: 8 },
      ],
      description: "Classic Caesar salad with croutons and dressing",
      stock: 10,
      isVeg: true,
      rattings: 4.6,
    },
    {
      id: 20,
      categoryId: "soups",
      category: "Soups",
      itemName: "Tomato Soup",
      image:
        "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 120,
      quantity: [
        { id: 1, size: "Cup", price: 120, quantity: 20 },
        { id: 2, size: "Bowl", price: 180, quantity: 10 },
      ],
      description: "Warm tomato soup with a touch of basil",
      stock: 10,
      isVeg: true,
      rattings: 4.7,
    },
    
    
  ];
  

function Menu() {
  const [filterItems, setFilterItems] = useState(foodItems);
const [search, setSearch] = useState('')
const [selecteditem, setSelecteditem] = useState(false);
const [itemId, setItemId] = useState(null);
  const scrollContainerRef = useRef(null);

  const selectedItemIndex = foodItems.findIndex((item) => item.id === itemId);
//   console.log(selecteditem);
// console.log(itemId);
// console.log(selectedItemIndex);
  const handleScroll = (event) => {
    event.preventDefault();
    scrollContainerRef.current.scrollLeft += event.deltaY * 0.5;
  };
  const categories = [...new Set(foodItems.map((item) => item.category))];
  return (
    <div className="w-full h-full ">
      {selecteditem ? (
        <div className="w-full h-screen bg-red-600 ">
        <ItemDescription setSelecteditem={setSelecteditem} setFilterItems={setFilterItems} item={filterItems[selectedItemIndex]}/>
        </div>
      ) : (
        <div className="relative p-1 bg-[#f4f4f4] w-full h-full max-h-[70rem] max-w-[51.438rem]">
          <div className="w-full h-full max-h-28  ">
          <div className="h-full w-full max-h-10 flex mb-3">
            <div className="flex items-center bg-[#d9d9d9] ml-4 rounded-full">
              <span className="text-3xl text-gray-500">
                <CiSearch />
              </span>
              <input
                type="search"
                placeholder="Search for food items"
                className="bg-transparent outline-none text-gray-700 placeholder-gray-500 p-1"
                onChange={(e) => {
                  const searchValue = e.target.value.toLowerCase();
                  setSearch(searchValue);
                  setFilterItems(
                    foodItems.filter(
                      (food) =>
                        food.itemName.toLowerCase().includes(searchValue) ||
                        food.category.toLowerCase().includes(searchValue)
                    )
                  );
                }}
                value={search}
              />
            </div>
          </div>

          <div
            className="w-full h-full max-h-16 bg-[#f4f4f4] flex flex-nowrap overflow-auto gap-2 px-1 hide-scrollbar duration-100 mb-1"
            onWheel={handleScroll}
            ref={scrollContainerRef}
          >
            <div className="h-full w-[12.109rem]">
              <button
                className="bg-[#d9d9d9] max-h-14   h-14 rounded-xl w-[12.109rem] uppercase hover:bg-[#4a5c2f] transition-all duration-100 hover:text-white"
                onClick={() => {
                  setFilterItems(foodItems);
                }}
              >
                All
              </button>
            </div>
            {categories.map((item, i) => (
              <div key={i}>
                <FilterButtons item={item} foodItems={foodItems} setFilterItems={setFilterItems} />
              </div>
            ))}
          </div>
          </div>
          <div className="flex flex-wrap gap-4 h-full max-h-[50.5rem] overflow-auto hide-scrollbar mt-3">
            {filterItems.map((item) => (
              <Card key={item.id} item={item} setSelecteditem={setSelecteditem} setItemId={setItemId} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
