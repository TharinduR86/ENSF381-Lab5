import user from  './users.js'


function UserList() {

    return (
        user.map(function(user){
            return (<article>
                        <h3>{user.first_name}</h3>
                        <p>User Group: {user.user_group}</p>
                        <p>ID: {user.id}</p>
                    </article>)
        })
    )
}

export default UserList;