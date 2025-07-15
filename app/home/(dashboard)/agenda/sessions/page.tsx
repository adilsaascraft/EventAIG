'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import AddSessionForm from '@/app/components/forms/AddSessionForm'

export default function SessionPage() {
    const handleSave = () => {
    console.log('Event saved:')
    // TODO: Add saving logic here
  }

  return (
    <div className="w-full p-6">
      <div className="flex flex-col mb-4">
        <h2 className="text-2xl font-bold">Sessions</h2>
        </div>
        <div className="flex items-center justify-center min-h-[30vh] w-full pt-[200px] rounded">
          <div className="text-center">
            <Image
              src="https://res.cloudinary.com/dr5kn8993/image/upload/v1752386248/AIG_Event_Software/icons/add-sessions_os6c88.png"
              alt="Add Session Icon"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Add Session</h3>
            <p className="text-base text-gray-600">
              Ready to build an engaging agenda for your event? Start by adding a session.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-[#035D8A] hover:bg-[#02466b] text-white cursor-pointer mt-6">
                  Add Sessions
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full max-w-[480px] sm:w-[90vw] md:w-[400px] lg:w-[550px]"
              >
                <AddSessionForm onSave={handleSave} />
              </SheetContent>
            </Sheet>

        </div>
    </div>
  )
}