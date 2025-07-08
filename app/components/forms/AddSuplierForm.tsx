'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { SheetClose} from '@/components/ui/sheet'

const supplierSchema = z.object({
  supplierName: z.string().min(1, 'Supplier name is required'),
  services: z.string().min(1, 'Services are required'),
  contactPersonName: z.string().min(1, 'Contact person name is required'),
  contactPersonEmail: z.string().email('Invalid email address'),
  contactPersonMobile: z
    .string().min(10, 'Mobile must be at least 10 digits')
    .max(10, 'Mobile number can not be more than 10 digits')
    .regex(/^\d{10}$/, 'Mobile number must be 10 digits only'),
})

type SupplierFormData = z.infer<typeof supplierSchema>

type AddSupplierFormProps = {
  onSave: (data: SupplierFormData & { id: number; status: string }) => void
}

export default function AddSupplierForm({onSave }: AddSupplierFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupplierFormData>({
    resolver: zodResolver(supplierSchema),
  })

  const onSubmit = (data: SupplierFormData) => {
    onSave({ ...data, id: Date.now(), status: 'Live' })
    reset()
  }

  return (
      <div className="flex flex-col h-screen bg-white">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Add Supplier</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label className="block font-medium">Supplier Name *</label>
            <input
              type="text"
              {...register('supplierName')}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Enter supplier name"
            />
            {errors.supplierName && <p className="text-red-500 text-sm">{errors.supplierName.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Services *</label>
            <input
              type="text"
              {...register('services')}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Enter service name"
            />
            {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Contact Person Name *</label>
            <input
              type="text"
              {...register('contactPersonName')}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Enter contact person name"
            />
            {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Contact Person Email *</label>
            <input
              type="email"
              {...register('contactPersonEmail')}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Enter contact person email"
            />
            {errors.contactPersonEmail && <p className="text-red-500 text-sm">{errors.contactPersonEmail.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Contact Person Mobile Number *</label>
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
            {errors.contactPersonMobile && <p className="text-red-500 text-sm">{errors.contactPersonMobile.message}</p>}
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
