import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AuthData } from "@/types";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Profile() {
    const { profile } = useOutletContext() as AuthData;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("authScheme");
        navigate("/login");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/400" width={40} className="rounded-full" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-start">
                        <p className="font-semibold">{profile?.user.fname} {profile?.user.lname}</p>
                        <p className="text-xs">@{profile?.account.username}</p>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}