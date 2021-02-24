import People from "../People.json";
 
const PeopleTest = () => {


 
    return (
        <table>
            <tbody>
        <>
 
            {People.map((item, i) => (
 
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                </tr>
 
            ))}
        </>
        </tbody>
        </table>
    )
 
}


 
export default PeopleTest;