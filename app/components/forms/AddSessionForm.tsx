'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import SessionTypeDropdown from '@/app/components/input/SessionType';
import EventdayDropdown from '@/app/components/input/EventDay';
import StartTime, {
  sessionSchema,
  SessionFormData,
} from '@/app/components/input/StartTime';

type AddSessionFormProps = {
  onSave: (data: SessionFormData & { id: number; status: string }) => void;
};

export default function AddSessionForm({ onSave }: AddSessionFormProps) {
  const methods = useForm<SessionFormData>({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      commonTrack: false,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World</p>',
    onUpdate({ editor }) {
      setValue('description', editor.getHTML());
    },
  });

  const onSubmit = (data: SessionFormData) => {
    console.log('Form Data:', data);
    onSave({ ...data, id: Date.now(), status: 'Live' });
    reset();
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col h-screen bg-white p-4">
        <div className="flex items-center justify-between border-b">
          <h2 className="text-xl font-semibold">Add Session</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="pt-4 space-y-4">
          {/* Session Type */}
          <div>
            <label className="text-sm font-medium">Session Type</label>
            <SessionTypeDropdown />
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
            <EventdayDropdown />
          </div>

          {/* Start Time & Duration (modularized) */}
          <StartTime />

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
            {errors.track && <p className="text-red-500 text-xs">{errors.track.message}</p>}
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm font-medium">Tags</label>
            <input {...register('tags')} className="w-full border rounded p-2" />
            {errors.tags && <p className="text-red-500 text-xs">{errors.tags.message}</p>}
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
    </FormProvider>
  );
}
