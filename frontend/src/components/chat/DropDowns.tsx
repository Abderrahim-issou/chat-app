import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";







const DropDowns = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div className="w-full self-start flex flex-col items-center">
        <div className="w-full flex justify-between items-center py-4">
            <h1 className="font-normal text-2xl">Shared Docs</h1>
            <div className="p-2">
              {isOpen ? <ChevronDown onClick={() => setIsOpen(prev => !prev)} size={30}/> : <ChevronUp onClick={() => setIsOpen(prev => !prev)} size={30}/> }
            </div>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
          <p>this is the content</p>
          <p>this is the content</p>
          <p>this is the content</p>
          <p>this is the content</p>
          <p>this is the content</p>
          <p>this is the content</p>
          <p>this is the content</p>
        </div>
    </div>
  )
}

export default DropDowns