import { useForm } from "react-hook-form"

interface HookFormTypes {
  name: string
  email: string
  check: boolean
}

const Input = () => {
  const inputStyle = {
    padding: 5,
    margin: 10,
  }

  const { register, handleSubmit, reset } = useForm<HookFormTypes>()

  const onValid = (data: HookFormTypes) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onValid)}
        method="post"
        style={{
          display: "grid",
          maxWidth: 600,
          margin: "0 auto",
          padding: 30,
        }}
      >
        <div>
          <label htmlFor="name">이름을 입력해주세요.</label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            placeholder="name"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email">이메일을 입력해주세요.</label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="example@gmail.com"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="check">약관에 동의하시면 체크해주세요.</label>
          <input
            {...register("check")}
            type="checkBox"
            name="check"
            id="check"
            style={inputStyle}
          />
        </div>
        {/* <button type="submit" style={inputStyle}>
          완료
        </button>
         */}
        <input type="submit" title="완료" />
      </form>
    </>
  )
}
export default Input
