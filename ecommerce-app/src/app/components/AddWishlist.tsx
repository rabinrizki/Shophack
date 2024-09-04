'use client'

import { FormEvent, useEffect, useState } from "react"

export default function AddWishlist(props: string) {
    const productId = props
    
    const [userId, setUserId] = useState("")
    
    useEffect(() => {
        const findUserId = () => {
            const cookieValue = document.cookie.split("; ").find(row => row.startsWith("_id="))?.split("=")[1]
            setUserId(cookieValue || "")
        }
        findUserId()
    },[])
    
    const addWishlistHandle = async (event: FormEvent<HTMLButtonElement>) => {
        // console.log(productId), "<<<<<<<>><><><><><><><><><><><><><><><><><><>><<!!!!!!!!!!!!!!!";
        
        event.preventDefault()

        const result = await fetch("http://localhost:3000/api/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({User_id : userId, productId : productId})
          });      
          
          let res = await result.json()
    }

    return (
        <button onClick={addWishlistHandle} className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded flex justify-center">
        Add to Wishlist
      </button>
    )
}