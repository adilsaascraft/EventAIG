export interface Event {
  id: number
  image: string
  title: string
  status: string
  dates: string
  eventType: string
  organizersCount: number
  attendeesCount: number
  location: string
  lastModifiedBy: {
    avatar: string
    timeAgo: string
  }
  registrationLink: string
}


const eventData: Event[] = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'India Medical Innovation Summit 2025',
    status: 'Running',
    dates: 'Sep 15, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'New Delhi, India',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '2 days ago',
    },
    registrationLink: 'https://example.com/register/1',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'National Cardiology Conference – Delhi Chapter',
    status: 'Running',
    dates: 'Sep 18, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 1,
    location: 'Delhi, India',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '1 day ago',
    },
    registrationLink: 'https://example.com/register/2',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'Ayush & Integrative Medicine Expo',
    status: 'Running',
    dates: 'Sep 27, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 5,
    location: 'Mau, Uttar Pradesh',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '3 days ago',
    },
    registrationLink: 'https://example.com/register/3',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'Global Health & Wellness Conclave – Mumbai',
    status: 'Running',
    dates: 'Oct 08, 2025',
    eventType: 'Virtual Event',
    organizersCount: 5,
    attendeesCount: 25,
    location: 'Mumbai, India',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '4 days ago',
    },
    registrationLink: 'https://example.com/register/4',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'AI in Healthcare India Summit',
    status: 'Running',
    dates: 'Oct 09, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 3,
    location: 'Kolkata, West Bengal',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '5 days ago',
    },
    registrationLink: 'https://example.com/register/5',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'Pediatric Care Congress India',
    status: 'Live',
    dates: 'Oct 10, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'Miami, FL',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '6 days ago',
    },
    registrationLink: 'https://example.com/register/6',
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'MedTech India Expo & Conference',
    status: 'Live',
    dates: 'Nov 1, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'Denver, CO',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '7 days ago',
    },
    registrationLink: 'https://example.com/register/7',
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'NeuroScience Forum India',
    status: 'Live',
    dates: 'Nov 2, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'Boston, MA',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '8 days ago',
    },
    registrationLink: 'https://example.com/register/8',
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'Indian Oncology Symposium',
    status: 'Live',
    dates: 'Nov 3, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'San Francisco, CA',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '9 days ago',
    },
    registrationLink: 'https://example.com/register/9',
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'Rural Health Mission Forum 2025',
    status: 'Drafts',
    dates: 'Nov 4, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'Houston, TX',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '10 days ago',
    },
    registrationLink: 'https://example.com/register/10',
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Public Health Policy & Practice Conference',
    status: 'Drafts',
    dates: 'Nov 5, 2025',
    eventType: 'In-Person Event',
    organizersCount: 1,
    attendeesCount: 0,
    location: 'Philadelphia, PA',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '11 days ago',
    },
    registrationLink: 'https://example.com/register/11',
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Global Ayurveda Summit – Kochi Edition',
    status: 'Drafts',
    dates: 'Nov 16, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 0,
    location: 'Phoenix, AZ',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '12 days ago',
    },
    registrationLink: 'https://example.com/register/12',
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Diabetes Awareness & Research Meet – Pune',
    status: 'Drafts',
    dates: 'Nov 17, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'San Diego, CA',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '13 days ago',
    },
    registrationLink: 'https://example.com/register/13',
  },
  {
    id: 14,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Infectious Diseases India Forum',
    status: 'Past',
    dates: 'Nov 18, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'Dallas, TX',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '14 days ago',
    },
    registrationLink: 'https://example.com/register/14',
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Women’s Health & Fertility Conference',
    status: 'Past',
    dates: 'Dec 9, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'San Jose, CA',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '15 days ago',
    },
    registrationLink: 'https://example.com/register/15',
  },
  {
    id: 16,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'All India Medical Students’ Convention',
    status: 'Past',
    dates: 'Dec 10, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'Jacksonville, FL',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '16 days ago',
    },
    registrationLink: 'https://example.com/register/16',
  },
  {
    id: 17,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'Orthopedics & Sports Medicine Meet – Bangalore',
    status: 'Past',
    dates: 'Dec 11, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'Columbus, OH',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '17 days ago',
    },
    registrationLink: 'https://example.com/register/17',
  },
  {
    id: 18,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'Pharmaceutical Sciences & Drug Discovery India',
    status: 'Cancelled',
    dates: 'Dec 22, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'Indianapolis, IN',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '18 days ago',
    },
    registrationLink: 'https://example.com/register/18',
  },
  {
    id: 19,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'Mental Health & Wellbeing Symposium – Chennai',
    status: 'Cancelled',
    dates: 'Dec 23, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'Charlotte, NC',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '19 days ago',
    },
    registrationLink: 'https://example.com/register/19',
  },
  {
    id: 20,
    image: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'National Emergency Medicine Congress',
    status: 'Cancelled',
    dates: 'Dec 24, 2025',
    eventType: 'Virtual Event',
    organizersCount: 2,
    attendeesCount: 10,
    location: 'San Antonio, TX',
    lastModifiedBy: {
      avatar: 'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '20 days ago',
    },
    registrationLink: 'https://example.com/register/20',
  },
]


export default eventData
