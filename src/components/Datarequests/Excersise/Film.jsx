import {useState} from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Movie from './Movie';

const Film = () => {
    // error 
    const [error, setError] = useState(null);
    //loading
    const [isLoaded, setLoaded] = useState(false);
   const apikey = f71818bf
  const [data,setData]= useState("");
  const [apiKey, setApiKey] = useState("");
  const [filmTitle, setFilmTitle] = useState("");

  const updateApiKey = (e) => {
      e.preventDefault(); 
      setApiKey(e.target.value);
  }
  const updateTitle = (e) => {
      e.preventDefault(); 
      setFilmTitle(e.target.value);
  }

  useEffect(() => {
    setTimeout( () => {
        axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
            .then((response) => {
                setLoaded(true);
                // data -> data -> array 
                setData(response.data.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
    }, 5000)
},[])

  return(
  <>
      <div>
      <h2>FilmRequest.js</h2>
      <p>Enter the name of the film you are searching for here</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />
      <p>
          Do not click this button until the fields above are correctly filled
      </p>
      <button onClick={(e) => makeRequest(e)}>Click me</button>
      </>
      
      if (error) {
        return <p>Oops.. something went wrong! {error.message}</p>
    } else if (!isLoaded) {
        return (
            <>
                <p>
                    Please wait.. we are loading your information!
                </p>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Title:</th>
                        <th>Year:</th>
                        <th>Rated:</th>
                        <th>Genre:</th>
                        <th>plot:</th>
                        <img src={data.Poster} alt="The poster"></img>
                    </tr>
                    {data.map((film) => (
                        <tr>
                            <Movie film={film} />
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }




}
  </>
  );
}

export default Film; 