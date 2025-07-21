// app/api/registrations/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const registrations = [
  {
    regNumber: "REG-001",
    fullName: "Mohammad Adil Rasheed",
    category: "Speaker",
    mobileNumber: 9876543210,
    email: "adil@example.com",
    city: "Hyderabad",
    state: "Telangana",
    date: "2025-07-21",
    time: "10:00:00"
  },
  {
    regNumber: "REG-002",
    fullName: "Sarah Sharma",
    category: "Attendee",
    mobileNumber: 9123456789,
    email: "sarah@example.com",
    city: "Mumbai",
    state: "Maharashtra",
    date: "2025-07-22",
    time: "11:30:00"
  },
  {
    regNumber: "REG-003",
    fullName: "John Verma",
    category: "Exhibitor",
    mobileNumber: 9988776655,
    email: "johnv@example.com",
    city: "Delhi",
    state: "Delhi",
    date: "2025-07-23",
    time: "14:15:00"
  },
  {
    regNumber: "REG-004",
    fullName: "Anita Reddy",
    category: "Volunteer",
    mobileNumber: 9345678901,
    email: "anita.reddy@example.com",
    city: "Chennai",
    state: "Tamil Nadu",
    date: "2025-07-24",
    time: "09:00:00"
  },
  {
    regNumber: "REG-005",
    fullName: "Rajeev Nair",
    category: "Attendee",
    mobileNumber: 9445566778,
    email: "rajeev.nair@example.com",
    city: "Kochi",
    state: "Kerala",
    date: "2025-07-25",
    time: "10:30:00"
  },
  {
    regNumber: "REG-006",
    fullName: "Pooja Malhotra",
    category: "Speaker",
    mobileNumber: 9786123456,
    email: "pooja.m@example.com",
    city: "Pune",
    state: "Maharashtra",
    date: "2025-07-25",
    time: "11:00:00"
  },
  {
    regNumber: "REG-007",
    fullName: "Imran Shaikh",
    category: "Attendee",
    mobileNumber: 9667123456,
    email: "imran.shaikh@example.com",
    city: "Ahmedabad",
    state: "Gujarat",
    date: "2025-07-26",
    time: "12:00:00"
  },
  {
    regNumber: "REG-008",
    fullName: "Simran Kaur",
    category: "Volunteer",
    mobileNumber: 9877654321,
    email: "simran.kaur@example.com",
    city: "Amritsar",
    state: "Punjab",
    date: "2025-07-26",
    time: "13:00:00"
  },
  {
    regNumber: "REG-009",
    fullName: "Manish Kumar",
    category: "Exhibitor",
    mobileNumber: 9432123456,
    email: "manish.k@example.com",
    city: "Patna",
    state: "Bihar",
    date: "2025-07-27",
    time: "09:30:00"
  },
  {
    regNumber: "REG-010",
    fullName: "Anjali Thakur",
    category: "Attendee",
    mobileNumber: 9345566778,
    email: "anjali.t@example.com",
    city: "Shimla",
    state: "Himachal Pradesh",
    date: "2025-07-27",
    time: "10:15:00"
  },

  // REG-011 to REG-050 auto-generated
  ...Array.from({ length: 40 }, (_, i) => {
    const id = i + 11;
    return {
      regNumber: `REG-${String(id).padStart(3, '0')}`,
      fullName: `User ${id}`,
      category: ["Speaker", "Attendee", "Exhibitor", "Volunteer"][i % 4],
      mobileNumber: 9000000000 + i,
      email: `user${id}@example.com`,
      city: ["Hyderabad", "Mumbai", "Delhi", "Bangalore", "Chennai", "Pune"][i % 6],
      state: ["Telangana", "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh"][i % 6],
      date: `2025-07-${String((i % 10) + 21).padStart(2, '0')}`,
      time: `${9 + (i % 5)}:${(i % 2 === 0 ? "00" : "30")}:00`
    };
  })
];


  return NextResponse.json(registrations);
}
