'use client'

import { useState } from 'react'

interface PasswordFormProps {
    error?: boolean
}

export default function PasswordForm({ error }: PasswordFormProps) {
    const [password, setPassword] = useState('')


    async function checkPassword(formData: FormData) {
        const password = formData.get("password") as string;
        // Redirect to the same page with password as query param
        const url = new URL(window.location.href);
        url.searchParams.set("password", password);
        window.location.href = url.toString();
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        formData.set('password', password)
        await checkPassword(formData)
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Enter Password to View Page
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                </div>
                {error && (
                    <p className="text-red-500">Incorrect password. Please try again.</p>
                )}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Access Demo
                </button>
            </form>
        </div>
    )
}