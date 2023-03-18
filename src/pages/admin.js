import Layout from "@/components/layout/Layout"
import { useSession } from "next-auth/react"

const Admin = () => {
  const { data: session, status } = useSession()
  console.log(status, session)

  return (
    <Layout>
      {session?.user?._id ? `Welcome ${session?.user?.fName}!` : null}
    </Layout>
  )
}

export default Admin
