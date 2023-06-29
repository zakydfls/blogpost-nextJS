import { authOptions } from '../../pages/api/auth/[...nextauth]'
import Link from "next/link"
import Login from "./Login"
import { getServerSession } from "next-auth/next"

export default async function Nav(){
    const session = await getServerSession(authOptions)
    console.log(session)
    return(
        <nav className="flex justify-between items-center py-8">
            <Link href={"/"}>
            <h1 className="font-bold text-lg">Send it.</h1>
            </Link>
            <ul className="flex items-center gap-6">
                {!session?.user && <Login/>}
                {session?.user && <h1>{session.user.name}</h1> }
                <Login/>
            </ul>
        </nav>
    )
}