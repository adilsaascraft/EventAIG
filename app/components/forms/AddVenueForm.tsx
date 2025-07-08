// Updated Venue Form with react-hook-form, zod, validation, image preview, toast, reset
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Image from 'next/image'
import { useState } from 'react'
import {SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const venueSchema = z.object({
  venueName: z.string().min(1, 'Venue name is required'),
  address: z.string().min(1, 'Address is required'),
  uploadImage: z
    .any()
    .refine((file) => file?.length === 1, 'Image is required')
    .refine(
      (file) => file?.[0]?.type?.startsWith('image/'),
      'File must be an image'
    ),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  website: z.string().url('Enter a valid website URL'),
  googleMapLink: z.string().url('Enter a valid map URL'),
  distanceFromAirport: z.string().min(1, 'Distance is required'),
  distanceFromRailwayStation: z.string().min(1, 'Distance is required'),
  nearestMetroStation: z.string().min(1, 'Metro station is required'),
})

export type VenueFormData = z.infer<typeof venueSchema>

type AddVenueFormProps = {
  onSave: (venue: VenueFormData & { id: number; status: string }) => void
}

export default function AddVenueForm({ onSave }: AddVenueFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VenueFormData>({
    resolver: zodResolver(venueSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: VenueFormData) => {
    onSave({ ...data, uploadImage: imagePreview || '', id: Date.now(), status: 'Live' })
    toast.success('Venue added successfully')
    reset()
    setImagePreview(null)
  }

  return (
      <div className="flex flex-col h-screen bg-white">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Add Venue</h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          <div>
            <label className="block font-medium">Venue Name *</label>
            <input
              {...register('venueName')}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.venueName && <p className="text-sm text-red-500">{errors.venueName.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Address *</label>
            <input
              {...register('address')}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Upload Image *</label>
            <input
              type="file"
              accept="image/*"
              {...register('uploadImage')}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setImagePreview(URL.createObjectURL(file))
                }
              }}
              className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
            />
            {errors.uploadImage && <p className="text-sm text-red-500"></p>}
            {imagePreview && <Image
            src={imagePreview} 
            alt="Preview"
            width={96} height={96}
            objectFit="contain"
            className="mt-2 h-24 rounded" />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">City *</label>
              <input {...register('city')} className="w-full border px-3 py-2 rounded-md" />
              {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
            </div>
            <div>
              <label className="block font-medium">State *</label>
              <input {...register('state')} className="w-full border px-3 py-2 rounded-md" />
              {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
            </div>
            <div>
              <label className="block font-medium">Country *</label>
              <select {...register('country')} className="w-full border px-3 py-2 rounded-md">
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
              {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
            </div>
            <div>
              <label className="block font-medium">Website *</label>
              <input {...register('website')} className="w-full border px-3 py-2 rounded-md" />
              {errors.website && <p className="text-sm text-red-500">{errors.website.message}</p>}
            </div>
          </div>

          <div>
            <label className="block font-medium">Google Map Link *</label>
            <input {...register('googleMapLink')} className="w-full border px-3 py-2 rounded-md" />
            {errors.googleMapLink && <p className="text-sm text-red-500">{errors.googleMapLink.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Distance From Airport *</label>
            <input {...register('distanceFromAirport')} className="w-full border px-3 py-2 rounded-md" />
            {errors.distanceFromAirport && (
              <p className="text-sm text-red-500">{errors.distanceFromAirport.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Distance From Railway Station *</label>
            <input {...register('distanceFromRailwayStation')} className="w-full border px-3 py-2 rounded-md" />
            {errors.distanceFromRailwayStation && (
              <p className="text-sm text-red-500">{errors.distanceFromRailwayStation.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Nearest Metro Station *</label>
            <input {...register('nearestMetroStation')} className="w-full border px-3 py-2 rounded-md" />
            {errors.nearestMetroStation && (
              <p className="text-sm text-red-500">{errors.nearestMetroStation.message}</p>
            )}
          </div>
        </form>

        <div className="sticky bottom-0 left-0 right-0 bg-white border-t px-6 py-4 flex justify-between">
          <SheetClose asChild>
            <Button type="button" variant="outline" className="border border-gray-400">
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
