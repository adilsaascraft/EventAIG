interface Department {
  id: number;
  status: 'Active' | 'Inactive';
  name: string;
  contact: string;
  phone: string;
  email: string;
}

const assignsData: Department[] = [
  {
    id: 1,
    status: 'Active',
    name: 'Mental Health & Wellbeing Symposium – Chennai',
    contact: 'Ahmad Rosser',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 2,
    status: 'Inactive',
    name: 'National Emergency Medicine Congress',
    contact: 'T.S Kumar',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
]
export default assignsData
