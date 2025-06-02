import { Zap } from "lucide-react";
import { Button } from "./ui/button.jsx"
import { Link } from "react-router-dom";
import { UserButton, useClerk, useUser } from '@clerk/clerk-react'
const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    return (
        <>
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Briefly
                                    </h1>
                                    <p className="text-sm text-slate-600">AI-Powered Newsroom</p>
                                </div>
                            </div>
                        </Link>
                        <div className="md:flex-col items-center space-x-4">
                            {user ? <UserButton /> : <Button
                                onClick={() => openSignIn()}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Sign In
                            </Button>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;