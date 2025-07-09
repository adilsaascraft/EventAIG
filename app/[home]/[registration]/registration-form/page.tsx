'use client'
import { FaPencilAlt } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from "@/components/ui/button"
import RegistrationForm from '@/app/components/forms/RegistrationForm'

export default function VenuePage() {
    const handleSave = () => {
    console.log('Event saved:')
    // TODO: Add saving logic here
  }

  return (
    <div className="w-full p-6">
      <div className="flex flex-col mb-4">
        <h2 className="text-2xl font-bold">Registration Form</h2>
        <p>Edit form to customize it </p>
        </div>
        <div className="flex items-center justify-center p-[436px]">
            <Sheet>
                  <SheetTrigger asChild>
                    <Button className="bg-[#035D8A] hover:bg-[#02466b] text-white cursor-pointer">
                    <FaPencilAlt size={24} color="white" />
                      Edit Registration Form
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <RegistrationForm onSave={handleSave} />
                  </SheetContent>
                </Sheet>
        </div>
    </div>
  )
}