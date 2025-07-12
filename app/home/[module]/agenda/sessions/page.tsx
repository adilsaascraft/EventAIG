'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from "@/components/ui/button"
import AddSessionForm from '@/app/components/forms/AddSessionForm'

export default function SessionPage() {
    const handleSave = () => {
    console.log('Event saved:')
    // TODO: Add saving logic here
  }

  return (
    <div className="w-full p-6">
      <div className="flex flex-col mb-4">
        <h2 className="text-2xl font-bold">Add Session Details</h2>
        </div>
        <div className="flex items-center justify-center p-[436px]">
            <Sheet>
                  <SheetTrigger asChild>
                    <Button className="bg-[#035D8A] hover:bg-[#02466b] text-white cursor-pointer">
                      Add Sessions
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <AddSessionForm onSave={handleSave} />
                  </SheetContent>
                </Sheet>
        </div>
    </div>
  )
}