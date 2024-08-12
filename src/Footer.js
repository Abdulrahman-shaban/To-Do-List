const Footer = ({ length }) => {
    return (
        <footer>

            <p>{length} Listed {length === 1 ? "Mission" : "Missions"}</p>
        </footer>
    )
}

export default Footer
