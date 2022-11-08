export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // console.log("body: ", body)

  // if (!body.name || !body.email) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: "다 입력해주세요" })
  // }

  // res.status(200).json({ data: ` userName: ${body.name} \n userEmail: ${body.email} \n agree: ` })
  console.log(` userName: ${body.name} \n userEmail: ${body.email} \n agree: `)
}
