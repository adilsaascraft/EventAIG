'use client';

import { useForm} from 'react-hook-form';
import { SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import SessionTypeDropdown from '@/app/components/input/SessionType';
import EventdayDropdown from '@/app/components/input/EventDay'


const sessionSchema = z.object({
  sessionType: z.string().min(1, 'Session type is required'),
  title: z.string().min(1, 'Title is required'),
  eventDay: z.string().min(1, 'Event Day is required'),
  startTime: z.string().min(1, 'Start time is required'),
  durationHr: z.string(),
  durationMin: z.string(),
  hall: z.string(),
  commonTrack: z.boolean().optional(),
  track: z.string().min(1, 'Track is required'),
  tags: z.string().min(1, 'At least one tag is required'),
  description: z.string().optional(),
});

type SessionFormData = z.infer<typeof sessionSchema>;
type AddSessionFormProps = {
  onSave: (data: SessionFormData & { id: number; status: string }) => void
}

export default function AddSessionForm({ onSave }: AddSessionFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SessionFormData>({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      commonTrack: false,
    },
  });

  const editor = useEditor({
  extensions: [
    StarterKit.configure({}) // ← all extensions enabled by default
  ],
  content: '<p>Hello World</p>',
})

  const onSubmit = (data: SessionFormData) => {
    console.log('Form Data:', data);
    onSave({ ...data, id: Date.now(), status: 'Live' })
    reset()
  };

  return (
    <div className='flex flex-col h-screen bg-white p-4'>
      <div className="flex items-center justify-between border-b">
        <h2 className="text-xl font-semibold">Add Session</h2>
      </div>
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4 space-y-4">
      {/* Session Type */}
      <div>
        <label className="text-sm font-medium">Session Type</label>
        <SessionTypeDropdown/>
      </div>

      {/* Title */}
      <div>
        <label className="text-sm font-medium">Title</label>
        <input {...register('title')} className="w-full border rounded p-2" />
        {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
      </div>

      {/* Event Day */}
      <div>
        <label className="text-sm font-medium">Event Day</label>
        <EventdayDropdown/>
      </div>

      {/* Time & Duration */}
      <div className="flex gap-4">
        <div>
          <label className="text-sm font-medium">Start Time</label>
          <input type="time" {...register('startTime')} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Duration (Hr)</label>
          <input type="number" {...register('durationHr')} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Duration (Min)</label>
          <input type="number" {...register('durationMin')} className="w-full border rounded p-2" />
        </div>
      </div>

      {/* Hall */}
      <div>
        <label className="text-sm font-medium">Hall</label>
        <input {...register('hall')} className="w-full border rounded p-2" />
      </div>

      {/* Common Track */}
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register('commonTrack')} />
        <span className="text-sm">To be Announced</span>
      </div>

      {/* Track */}
      <div>
        <label className="text-sm font-medium">Track</label>
        <input {...register('track')} className="w-full border rounded p-2" />
      </div>
      {/* Common Track */}
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register('commonTrack')} />
        <span className="text-sm">Common for all tracks</span>
      </div>

      {/* Tags */}
      <div>
        <label className="text-sm font-medium">Tags</label>
        <input {...register('tags')} className="w-full border rounded p-2" />
      </div>

      {/* Rich Text Editor (Tiptap) */}
      <div>
        <label className="text-sm font-medium">Session Description</label>
        <div className="border rounded min-h-[150px] p-2">
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* Hidden field to store description HTML */}
      <input type="hidden" {...register('description')} />

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
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
