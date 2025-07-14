'use client';

import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { z } from 'zod';

export const sessionSchema = z.object({
  sessionType: z.string().min(1, 'Session type is required'),
  title: z.string().min(1, 'Title is required'),
  eventDay: z.string().min(1, 'Event Day is required'),
  startTime: z.date({ required_error: 'Start time is required' }),
  durationHr: z.coerce.number().min(0, 'Hours must be 0 or more'),
  durationMin: z.coerce.number().min(0, 'Minutes must be 0 or more'),
  hall: z.string().optional(),
  commonTrack: z.boolean().optional(),
  track: z.string().min(1, 'Track is required'),
  tags: z.string().min(1, 'At least one tag is required'),
  description: z.string().optional(),
});

export type SessionFormData = z.infer<typeof sessionSchema>;

export default function StartTime() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<SessionFormData>();

  return (
    <div className="w-full max-w-[550px]">
      <div className="flex gap-4">
        {/* Start Time */}
        <div className="flex-1">
          <label className="text-sm font-medium block mb-1">Start Time</label>
          <Controller
            name="startTime"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="w-full border rounded-lg p-2"
                placeholderText="Select time"
                ref={ref}
              />
            )}
          />
          {errors.startTime && (
            <p className="text-red-500 text-xs mt-1">{errors.startTime.message}</p>
          )}
        </div>

        {/* Duration Hr */}
        <div className="w-[100px]">
          <label className="text-sm font-medium block mb-1">Hr</label>
          <input
            type="number"
            min={0}
            {...register('durationHr')}
            className="w-full border rounded-lg p-2"
          />
          {errors.durationHr && (
            <p className="text-red-500 text-xs mt-1">{errors.durationHr.message}</p>
          )}
        </div>

        {/* Duration Min */}
        <div className="w-[100px]">
          <label className="text-sm font-medium block mb-1">Min</label>
          <input
            type="number"
            min={0}
            {...register('durationMin')}
            className="w-full border rounded-lg p-2"
          />
          {errors.durationMin && (
            <p className="text-red-500 text-xs mt-1">{errors.durationMin.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
