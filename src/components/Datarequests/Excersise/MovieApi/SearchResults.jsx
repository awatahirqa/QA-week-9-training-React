const {default: Film} = require("./Film")


const SearchResults = ({films,getDetails}) =>{
<div className = "container">
    {films.map((films,i))=>(
        <div className = "col-md-3" key = {i}>
            <Film key = {i}{...film} getDetails={getDetails}/>
            </div>
    ))}
</div>
</div>


    )





}