"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEvent, useState } from "react";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const router = useRouter()

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setForm({
          ...form,
          [name]: value
        })
    };

    console.log(form);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const result = await fetch("http://localhost:3000/api/user/register", {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        router.push("/product")
      };    

    return (
        <div className="font-[sans-serif]">
            <div className="text-center bg-gradient-to-r from-black to-gray-500  min-h-[160px] sm:p-6 p-4">
                <h4 className="sm:text-3xl text-2xl font-bold text-white">
                    Create your free account
                </h4>
            </div>
            <div className="mx-4 mb-4 -mt-16">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href={"/"}>
                            <img
                                src="https://i.ibb.co.com/Z2JyJHH/Welcome-to-The-EXTRADIONARY-png.png"
                                alt="logo"
                                className="w-36"
                            />
                        </Link>
                    </div>
                    <div className="my-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 text-center">Or</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all"
                                placeholder="Enter name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                username
                            </label>
                            <input
                                name="username"
                                type="text"
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all"
                                placeholder="Enter  username"
                                value={form.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Email
                            </label>
                            <input
                                name="email"
                                type="text"
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all"
                                placeholder="Enter email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all"
                                placeholder="Enter password"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                            <button
                                type="submit"
                                className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] hover:text-white focus:outline-none"
                                style={{ marginLeft: 700 }}
                            >
                                Sign Up
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
