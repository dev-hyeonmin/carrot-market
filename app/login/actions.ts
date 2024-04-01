"use server"

export async function handleSubmit(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(prevState);

  return {
    errors: ['Password too short', 'Wrong password']
  }
}