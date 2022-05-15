import type {Response} from "express"
const setCookies = (
  res: Response,
  refreshToken: string | null,
  accessToken: string | null
) => {
  try {
    const date = new Date()
    const expires = new Date(date.setHours(22)) // 2h
    res.cookie("refreshToken", refreshToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      expires,
    })
    // will expire at the end of the session, since no expire date was passed
    res.cookie("accessToken", accessToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
    })
  } catch (error) {
    console.error(error)
  }
}

export {setCookies}
