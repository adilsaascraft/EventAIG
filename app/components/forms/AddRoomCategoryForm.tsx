'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { SheetClose} from '@/components/ui/sheet';

const formSchema = z.object({
  hotelName: z.string().min(1, 'Hotel name is required'),
  roomCategory: z.string().min(1, 'Room category is required'),
  roomType: z.string().min(1, 'Room type is required'),
  status: z.string().min(1, 'Status is required'),
});

type RoomFormData = z.infer<typeof formSchema>;

interface AddRoomFormProps {
  onSave: (data: RoomFormData & { id: number; status: string }) => void;
}

export default function AddRoomForm({onSave }: AddRoomFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoomFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: RoomFormData) => {
    onSave({ ...data, id: Date.now(), status: 'Live' });
    reset();
  };

  return (
      <div className="flex flex-col h-screen bg-white">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Add Rooms</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label className="block font-medium">Hotel Name *</label>
            <input
              type="text"
              {...register('hotelName')}
              placeholder="Enter hotel name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.hotelName && <p className="text-red-500 text-sm">{errors.hotelName.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Room Category *</label>
            <input
              type="text"
              {...register('roomCategory')}
              placeholder="Enter room category"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.roomCategory && <p className="text-red-500 text-sm">{errors.roomCategory.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Room Type *</label>
            <input
              type="text"
              {...register('roomType')}
              placeholder="Enter room type"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Status *</label>
            <input
              type="text"
              {...register('status')}
              placeholder="Enter status (Available, Booked etc.)"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
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
            onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </div>
      </div>
  );
}
