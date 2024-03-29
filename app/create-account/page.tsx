import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="
              h-10 bg-gray-900 ring-1 ring-neutral-200 rounded-md p-2 placeholder:text-neutral-400
                focus:ring-orange-500 focus:ringt-a focus:outline-none"
            type="text"
            placeholder="Username"
            required />
          <span className="text-red-500 font-medium">Input error</span>
        </div>

        <button className="primary-btn h-10">Create account</button>
      </form>

      <div className="w-full h-px bg-neutral-500"/>

      <div>
        <Link href="/sms" className="primary-btn flex items-center justify-center h-10 gap-3">
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6"/>
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  )
}