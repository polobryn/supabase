const SmoothieCard = ({ smoothie }) => {
    return (
        <div className="smoothie-card">
            <h3>{smoothie.name}</h3>
            <p>{smoothie.iso2}</p>
            <div className="rating">{smoothie.iso3}</div>
        </div>
    )
}

export default SmoothieCard