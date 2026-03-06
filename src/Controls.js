
function Delete() {
    return (
        <div>
            <input type="text" id="deleteText"></input>
            <button id="delete">Delete</button>
        </div>
    )
}

function Controls() {
    return (
        <div>
            <Delete/>
            <button id="group">Sort by Group</button>
            <button id="id">Sort by ID</button>
            <button id="grid/list">Grid/List</button>
        </div>
    )
}

export default Controls;