import { useForm } from "react-hook-form"
import api from "../api/axios"

function LoginPage() {

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {

    try {

      const response = await api.post(
        "/auth/login",
        data
      )

      console.log(response.data)

      localStorage.setItem(
        "token",
        response.data.token
      )

      alert("Login Successful")

    } catch (error) {

      console.log(error)

      alert("Login Failed")
    }
  }

  return (

    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg p-8 rounded w-96"
      >

        <h1 className="text-3xl mb-6 font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          {...register("password")}
        />

        <button
          className="bg-black text-white p-2 w-full"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default LoginPage