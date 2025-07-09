interface Registration {
  id: number;
  name: string;
  email: string;
  category: string;
  slab: string;
  amount: number;
}

const registrationData: Registration[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    category: "Regular",
    slab: "A",
    amount: 15000,
  },
  {
    id: 2,
    name: "Brian Lee",
    email: "brian.lee@example.com",
    category: "Premium",
    slab: "B",
    amount: 30000,
  },
  {
    id: 3,
    name: "Chloe Smith",
    email: "chloe.smith@example.com",
    category: "Student",
    slab: "C",
    amount: 75000,
  },
  {
    id: 4,
    name: "David Kumar",
    email: "david.kumar@example.com",
    category: "VIP",
    slab: "A",
    amount: 50000,
  },
  {
    id: 5,
    name: "Eva Martinez",
    email: "eva.martinez@example.com",
    category: "Regular",
    slab: "B",
    amount: 12000,
  },
]
export default registrationData
