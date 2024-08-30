"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navlink = ({link}) => {
    const path = usePathname()
    
  return (
    <Link href={link.url} className={`rounded-md px-3 py-2 ${path===link.url?"bg-black text-white":" text-black"}`} >{link.title}</Link>
  )
}

export default Navlink