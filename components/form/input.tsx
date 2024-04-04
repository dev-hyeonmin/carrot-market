import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}
export default function Input({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        {...rest}
        className="
              h-10 bg-gray-900 ring-2 ring-neutral-200 rounded-md p-2 placeholder:text-neutral-400 transition
                focus:ring-orange-500 focus:ring-3 focus:outline-none"/>
      {errors.map((error, index) => 
        <span key={index} className="text-red-500 font-medium">{error}</span>
      )}
    </div>
  )
}