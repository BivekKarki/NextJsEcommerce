
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

    return <div>
        {users.map((user)=>(
            <div key={user.id} className="my-4 mx-12">
                <p>Name: {user.name}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        ))}
    </div>
}

export default UsersPage;