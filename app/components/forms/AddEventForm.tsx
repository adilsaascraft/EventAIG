'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { SheetClose} from '@/components/ui/sheet'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const addEventSchema = z
  .object({
    fullName: z.string().min(3, 'Full name is required'),
    shortName: z.string().min(2, 'Short name is required'),
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
    eventType: z.string(),
    registrationType: z.string(),
    currency: z.string(),
    isAirplaneMode: z.boolean()
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message: 'End date must be after start date',
    path: ['endDate']
  })

type AddEventFormData = z.infer<typeof addEventSchema>

type AddEventFormProps = {
  onSave: (data: AddEventFormData & { id: number; status: string }) => void
}

export default function AddEventForm({ onSave }: AddEventFormProps) {
  const [preview, setPreview] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors }
  } = useForm<AddEventFormData>({
    resolver: zodResolver(addEventSchema),
    defaultValues: {
      fullName: '',
      shortName: '',
      eventCode: '',
      regNumber: '',
      uploadImage: undefined,
      organizer: '',
      department: '',
      startDate: '',
      endDate: '',
      timeZone: '',
      venue: '',
      city: '',
      state: '',
      country: '',
      eventType: 'In-Person',
      registrationType: 'Paid',
      currency: 'Indian Rupee',
      isAirplaneMode: false
    }
  })

  const imageFile = watch('uploadImage')

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0]
      const fileUrl = URL.createObjectURL(file)
      setPreview(fileUrl)
      return () => URL.revokeObjectURL(fileUrl)
    }
  }, [imageFile])

  const onSubmit = (data: AddEventFormData) => {
    const event = { ...data, id: Date.now(), status: 'Live' }
    onSave(event)
    toast.success('Event saved!')
    reset()
    setPreview('')
  }

  return (
    
      <div className="flex flex-col h-screen bg-white">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Add Event</h2>
        </div>
        <div className="flex-1 overflow-y-auto custom-scroll">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto p-6 space-y-1"
        >
          <div>
            <label className="block font-medium">Event Full Name *</label>
            <input
              type="text"
              {...register('fullName')}
              placeholder="Enter event name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Event Short Name *</label>
            <input
              type="text"
              {...register('shortName')}
              placeholder="Event short name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.shortName && (
              <p className="text-sm text-red-500">{errors.shortName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Upload Image *</label>
            <input
              type="file"
              {...register('uploadImage')}
              accept="image/*"
              className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
            />
            {preview && (
              <Image
                src={preview}
                alt="Preview"
                width={96}
                height={96}
                objectFit="contain"
                className="mt-2 h-24 object-contain rounded"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Event Code *</label>
              <input
                type="text"
                {...register('eventCode')}
                placeholder="Event code"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              {errors.eventCode && (
                <p className="text-sm text-red-500">{errors.eventCode.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Registration Number</label>
              <input
                type="text"
                {...register('regNumber')}
                placeholder="Registration Number"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Organizer</label>
              <select
                {...register('organizer')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select organizer</option>
                <option value="Org A">Org A</option>
                <option value="Org B">Org B</option>
              </select>
              {errors.organizer && (
                <p className="text-sm text-red-500">{errors.organizer.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Department *</label>
              <select
                {...register('department')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
              {errors.department && (
                <p className="text-sm text-red-500">{errors.department.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Start Date *</label>
              <input
                type="date"
                {...register('startDate')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              {errors.startDate && (
                <p className="text-sm text-red-500">{errors.startDate.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">End Date *</label>
              <input
                type="date"
                {...register('endDate')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              {errors.endDate && (
                <p className="text-sm text-red-500">{errors.endDate.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium">Time Zone *</label>
              <select
                {...register('timeZone')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select time zone</option>
                <option value="IST">
                  (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                </option>
              </select>
              {errors.timeZone && (
                <p className="text-sm text-red-500">{errors.timeZone.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium">Venue Name *</label>
              <select
                {...register('venue')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select venue</option>
                <option value="HICC">HICC</option>
                <option value="Taj Krishna">Taj Krishna</option>
              </select>
              {errors.venue && (
                <p className="text-sm text-red-500">{errors.venue.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">City *</label>
              <input
                type="text"
                {...register('city')}
                placeholder="Enter city name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              {errors.city && (
                <p className="text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">State *</label>
              <input
                type="text"
                {...register('state')}
                placeholder="Enter state name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
              {errors.state && (
                <p className="text-sm text-red-500">{errors.state.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Country *</label>
              <select
                {...register('country')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select country</option>
                <option>India</option>
                <option>USA</option>
              </select>
              {errors.country && (
                <p className="text-sm text-red-500">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Event Type *</label>
              <select
                {...register('eventType')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>In-Person</option>
                <option>Virtual</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Registration Type *</label>
              <select
                {...register('registrationType')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>Paid</option>
                <option>Free</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Currency *</label>
              <select
                {...register('currency')}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option>Indian Rupee</option>
                <option>USD</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-4">
            <Label htmlFor="airplane-mode">Event App</Label>
            <Switch
              id="airplane-mode"
              checked={watch('isAirplaneMode')}
              onCheckedChange={(checked) => setValue('isAirplaneMode', checked)}
            />
          </div>
        </form>
        </div>

        <div className="sticky bottom-0 left-0 right-0 bg-white border-t px-6 py-4 flex justify-between">
          <SheetClose asChild>
            <Button
              type="button"
              variant="outline"
              className="border border-gray-400"
            >
              Close
            </Button>
          </SheetClose>
          <Button
            type="submit"
            form="form"
            className="bg-sky-800 text-white hover:bg-sky-900"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </div>
      </div>
    
  )
}
