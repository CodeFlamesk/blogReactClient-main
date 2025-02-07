const AddGame = () => {
    return (
        <div className="layout-container admin">
            <p className="admin__title">Edit game info</p>
            <form action="submit" className="admin__form new-game">
                <p>Type</p>
                <input type="text" placeholder="Type" className="new-game__input" />
                <p>Date</p>
                <input type="text" placeholder="Date" className="new-game__input" />
                <p>Name</p>
                <input type="text" placeholder="Name" className="new-game__input" />
                <p>Map</p>
                <input type="text" placeholder="Map" className="new-game__input" />
                <p>About game</p>
                <input type="text " placeholder="About game" className="new-game__input" />

            </form>
        </div>
    )
}
export default AddGame;