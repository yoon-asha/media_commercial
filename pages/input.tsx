const Input = () => {
  const userSubmit = (res: any) => {
    console.log(res)
  }
  return (
    <>
      <form onSubmit={userSubmit} method="post">
        <input type="text" id="name" name="name" />
        <label htmlFor="email">이메일을 입력해주세요.</label>
        <input
          type="email"
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="example@gmail.com"
          required
        />
        <input type="checkBox" />
        <button type="submit">완료</button>
      </form>
    </>
  )
}

export default Input
