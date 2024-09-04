"use client";

import React from "react";

interface searchProps {
searchHandle: (search: string) => void
search: string
}

export default function Search({
    search,
    searchHandle,
}: searchProps
) {
    const searchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchHandle(e.target.value)
    }
    return (
        <div className="flex justify-center px-40" style={{marginLeft:10}}>
            <input
                value={search}
                onChange={searchHandleChange}
                type="text"
                placeholder="Search something..."
                className="bg-transparent border-2 border-gray-300 text-sm w-full px-5 text-gray-300 rounded-full h-9 outline-none"
            />
            <button id="toggleOpen" className="lg:hidden ml-7">
                <svg
                    className="w-7 h-7 fill-gray-300"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
}
