'use client'

import { FC } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import {TriangleAlert} from 'lucide-react'
interface ClearModalProps {
  open: boolean
  onClose: (open: boolean) => void
  onYes : () => void
}

export const Clearmodal: FC<ClearModalProps> = ({ open, onClose , onYes}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
  <DialogContent className="sm:max-w-[425px] bg-blue-50 border border-blue-200 rounded-lg shadow-lg">
    <DialogTitle className="text-lg font-semibold text-red-600 flex flex-row">
      Warning 
       <TriangleAlert/>
    </DialogTitle>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <p className="col-span-4 text-blue-700">
          Are you sure you want to clear your Sudoku?
        </p>
      </div>
    </div>
    <DialogFooter className="flex justify-end gap-2">
      <Button
        onClick={() => {
          // Handle clearing Sudoku
          onYes()
          onClose(false) // Close dialog
        }}
        variant={"destructive"}
        className=" font-medium rounded-md px-4 py-2"
      >
        Yes
      </Button>
      <Button
        onClick={() => onClose(false)}
        className="bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 font-medium rounded-md px-4 py-2"
      >
        No
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}
