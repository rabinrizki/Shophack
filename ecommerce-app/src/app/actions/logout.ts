'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function logoutHandle(){
    cookies().delete('Authorization')
    return redirect('/login')
}