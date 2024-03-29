import Button from "@/components/actions/button";
import Input from "@/components/form/input";
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
        <Input
          type="text"
          placeholder="Username"
          required />

        <Input
          type="text"
          placeholder="Email"
          required />

        <Input
          type="text"
          placeholder="Password"
          required />

        <Input
          type="text"
          placeholder="Confirm Password"
          required />

        <Button 
          text="Create Account"/>
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <div>
        <Link href="/sms" className="primary-btn flex items-center justify-center h-10 gap-3">
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  )
}