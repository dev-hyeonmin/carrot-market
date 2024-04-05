"use client";

import Button from "@/components/actions/button";
import Input from "@/components/form/input";
import { useFormState } from "react-dom";
import { smsLogin } from "./actions";

const initialState = {
  token: false,
  error: undefined
}

export default function SMS() {
  const [state, dispatch] = useFormState(smsLogin, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>

      <form action={dispatch} className="flex flex-col gap-3" autoComplete="off">
        <Input
          name="phone"
          type="text"
          placeholder="+8201000000000"
          errors={!state.token ? state.error?.formErrors : undefined}
          required />

        {state.token &&
          <Input
            name="token"
            type="text"
            placeholder="Verification code"
            errors={state.error?.formErrors}
            min={100000}
            max={999999}
            required />
        }

        <Button
          text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  )
}