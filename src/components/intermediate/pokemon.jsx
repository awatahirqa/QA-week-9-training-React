import Pokemon from "./poke.json";
 
const PokemonTest = () => {


 
    return (
        <table>
            <tbody>
        <>
 
            {Pokemon.map((item, i) => (
 
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.url}</td>
                    
                </tr>
 
            ))}
        </>
        </tbody>
        </table>
    )
 
}
export default PokemonTest