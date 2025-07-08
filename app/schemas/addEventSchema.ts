// schemas/addEventSchema.ts
import { z } from 'zod'

export const addEventSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  shortName: z.string().min(1, 'Short name is required'),
  eventCode: z.string().min(1, 'Event code is required'),
  regNumber: z.string().optional(),
  uploadImage: z.any().optional(),
  organizer: z.string().min(1, 'Organizer is required'),
  department: z.string().min(1, 'Department is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  timeZone: z.string().min(1, 'Time zone is required'),
  venue: z.string().min(1, 'Venue is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  eventType: z.enum(['In-Person', 'Virtual']),
  registrationType: z.enum(['Paid', 'Free']),
  currency: z.enum(['Indian Rupee', 'USD']),
  isAirplaneMode: z.boolean(),
})
