'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'

const formSchema = z.object({
  organizerName: z.string().min(1, 'Organizer name is required'),
  contactPersonName: z.string().min(1, 'Contact person name is required'),
  contactPersonEmail: z.string().email('Enter a valid email address'),
  contactPersonMobile: z
    .string()
    .min(10, 'Mobile number must be at least 10 digits')
    .max(10, 'Mobile number can not be more than 10 digits')
    .regex(/^\d{10}$/, 'Only numeric digits allowed'),
})

type OrganizerFormData = z.infer<typeof formSchema>

type AddOrganizerFormProps = {
  onSave: (organizer: OrganizerFormData & { id: number; status: string }) => void
}

export default function AddOrganizerForm({onSave }: AddOrganizerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrganizerFormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: OrganizerFormData) => {
    onSave({ ...data, id: Date.now(), status: 'Live' })
    reset()
  }

  return (
      <div className="flex flex-col h-screen bg-white">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Add Organizer</h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">Organizer Name *</label>
            <input
              type="text"
              {...register('organizerName')}
              placeholder="Enter organizer name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.organizerName && (
              <p className="text-red-600 text-sm mt-1">{errors.organizerName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Person Name *</label>
            <input
              type="text"
              {...register('contactPersonName')}
              placeholder="Enter contact person name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.contactPersonName && (
              <p className="text-red-600 text-sm mt-1">{errors.contactPersonName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Person Email Id *</label>
            <input
              type="email"
              {...register('contactPersonEmail')}
              placeholder="Enter contact person email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.contactPersonEmail && (
              <p className="text-red-600 text-sm mt-1">{errors.contactPersonEmail.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Person Mobile Number *</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              {...register('contactPersonMobile')}
              placeholder="Enter 10-digit mobile number"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              onInput={(e) => {
                const input = e.currentTarget
                input.value = input.value.replace(/\D/g, '').slice(0, 10) // keep only digits and max 10
              }}
            />

            {errors.contactPersonMobile && (
              <p className="text-red-600 text-sm mt-1">{errors.contactPersonMobile.message}</p>
            )}
          </div>
        </form>

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
