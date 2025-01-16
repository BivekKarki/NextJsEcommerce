
let users = [];

async function UsersPage() {
    try {
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        // throw new Error("Something went wrong");
        users = await data.json();
    } catch (error) {
        throw new Error("Something went wrong");
    }

    return (
        <div className="flex items-center justify-center flex-col container mx-auto py-1">
            <h1 className="text-xl font-bold">Users List</h1>
            {users.map((user)=>(
                <div key={user.id} className="w-full bg-slate-700 px-8 py-3 my-3 ">
                    <p className="w-full h-6 text-white">Name: {user.name}</p>
                </div>
            ))}
        </div>
    )
}

export default UsersPage;