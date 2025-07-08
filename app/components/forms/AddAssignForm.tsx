'use client'

import { SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Schema
const assignSchema = z.object({
  departmentName: z.string().min(1, 'Event name is required'),
  contactPersonName: z.string().min(1, 'Assign person name is required'),
})

type AssignFormData = z.infer<typeof assignSchema>

type AddAssignFormProps = {
  onSave: (data: AssignFormData & { id: number; status: string }) => void
}

export default function AddAssignForm({ onSave }: AddAssignFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AssignFormData>({
    resolver: zodResolver(assignSchema)
  })

  const onSubmit = (data: AssignFormData) => {
    onSave({ ...data, id: Date.now(), status: 'Live' })
    reset()
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold">Add Assign</h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 overflow-y-auto p-6 space-y-4"
        id="assignForm"
      >
        {/* Event Dropdown */}
        <div>
          <label className="block font-medium">Event Name *</label>
          <select
            {...register('departmentName')}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          >
            <option value="">Select Event</option>
            <option value="Tech Conference">Tech Conference</option>
            <option value="Innovation Expo">Innovation Expo</option>
          </select>
          {errors.departmentName && (
            <p className="text-sm text-red-500 mt-1">{errors.departmentName.message}</p>
          )}
        </div>

        {/* Assign Person Dropdown */}
        <div>
          <label className="block font-medium">Assign Person Name *</label>
          <select
            {...register('contactPersonName')}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          >
            <option value="">Select Person</option>
            <option value="Mohammad Adil">Mohammad Adil</option>
            <option value="Fatima Shaikh">Fatima Shaikh</option>
          </select>
          {errors.contactPersonName && (
            <p className="text-sm text-red-500 mt-1">{errors.contactPersonName.message}</p>
          )}
        </div>
      </form>

      {/* Footer */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t px-6 py-4 flex justify-between">
        <SheetClose asChild>
          <Button type="button" variant="outline" className="border border-gray-400">
            Close
          </Button>
        </SheetClose>
        <Button
          type="submit"
          form="assignForm"
          className="bg-sky-800 text-white hover:bg-sky-900"
        >
          Save
        </Button>
      </div>
    </div>
  )
}
