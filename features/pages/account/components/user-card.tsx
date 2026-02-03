import Link from "next/link";
import UserCardProps from "../types/user-card";

export default function UserCard({user}:{user: UserCardProps}){
    return(<Link href={`/account/${user.id}`}>
    <div className="border-2 border-gray-300 rounded-md p-4 ">
        <div className="flex flex-col qap-2 text-center">
            <div className="rounded-full bg-gray-200 h-20 mx-auto w-20 flex items-center justify-center  font-bold text-2xl">
                {user.name.charAt(0).toUpperCase()}
            </div>
            <p> {user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    </div>
</Link>);
};