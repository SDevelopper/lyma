// export default async function User({params}: {params: {id : string}}){
//     const response = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`)
//     const user = await response.json();
    
// return(<div>
//     <p>hello</p>
// </div>);
// };
export default async function User({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    
    return (<div className="container">
        <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
            <p className="text-gray-500">{user.website}</p>
            <p className="text-gray-500">{user.company.name}</p>
            <p className="text-gray-500">{user.company.bs}</p>
            <p className="text-gray-500">{user.address.geo.lat}</p>
            <p className="text-gray-500">{user.address.geo.lng}</p>
        </div>
    </div>
    );
}