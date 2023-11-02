import Card from "./Card";

const Grid = ( {data} ) => {
    return (
        <div className="grid">
        {data.map((item, index) => (
            <Card key={index} image={item.image} name={item.name} description={item.description}/>
        ))}
        </div>
    )
    
}
export default Grid;