interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
}
export default function Input({
  type,
  name,
  placeholder,
  required,
  errors
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="
              h-10 bg-gray-900 ring-2 ring-neutral-200 rounded-md p-2 placeholder:text-neutral-400 transition
                focus:ring-orange-500 focus:ring-3 focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required} />  
      
      {errors?.map((error, index) => 
        <span key={index} className="text-red-500 font-medium">{error}</span>
      )}
    </div>
  )
}