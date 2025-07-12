'use client';

import { useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

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

const sessionTypes = ['Registration', 'Breakfast', 'Presentation', 'Break', 'Reception', 'Keynote'];

export default function AddSessionForm({ onSave }: AddSessionFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<SessionFormData>({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      commonTrack: false,
    },
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      setValue('description', editor.getHTML());
    },
  });

  const onSubmit = (data: SessionFormData) => {
    console.log('Form Data:', data);
    onSave({ ...data, id: Date.now(), status: 'Live' })
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Session Type */}
      <div>
        <label className="text-sm font-medium">Session Type</label>
        <select {...register('sessionType')} className="w-full border rounded p-2">
          <option value="">Select a session type</option>
          {sessionTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.sessionType && <p className="text-red-500 text-xs">{errors.sessionType.message}</p>}
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
        <input {...register('eventDay')} className="w-full border rounded p-2" />
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
        <span className="text-sm">Common for all tracks</span>
      </div>

      {/* Track */}
      <div>
        <label className="text-sm font-medium">Track</label>
        <input {...register('track')} className="w-full border rounded p-2" />
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

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button type="button" className="border px-4 py-2 rounded">Cancel</button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </div>
    </form>
  );
}
