import bcrypt from "bcryptjs"

const comparePassword = async (
  input: string,
  hashed: string
): Promise<boolean> => await bcrypt.compare(input, hashed)

const hashPassword = async (passwordToHash: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(passwordToHash, salt)
}
export {comparePassword, hashPassword}
