import Button from "@/components/actions/button";
import Input from "@/components/form/input";

export default function SMS() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>

      <form className="flex flex-col gap-3">
        <Input
          name="phone"
          type="text"
          placeholder="Phone number"
          required />

        <Input
          name="token"
          type="text"
          placeholder="Verification code"
          required />

        <Button 
          text="Verify"/>
      </form>
    </div>
  )
}