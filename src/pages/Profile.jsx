import { useContext } from "react"
import AuthContext from "../AuthContext"

export default function Profile() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <pre>
        {JSON.stringify(user)}
      </pre>
    </div>
  )
}