import UserCard from "@/features/pages/account/components/user-card";
import UserCardProps from "@/features/pages/account/types/user-card";

export default async function Account(){

    const response = await fetch(`http://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    console.log(users);
    return( <div className="grid grid-cols-1 md:grid-cols-2 lп:grid-col-3 xl:grid-cols-4 gap-4">
        {users.map((user :UserCardProps)=>
        <UserCard key={user.id} user={user}/>
    )}</div>);
};