'use strict'

const List = ({list,check,query}) =>{
const completed = (check) => (list)=> list.completed === check;

const byQuery = (query)=> (list) =>list.title.toLowerCase().includes(query.toLowerCase());




let filteredList = [];
if(check){
    filteredList = list.filter(completed(check)).filter(byQuery(query));
}else{

    filteredList = list.filter(byQuery(query));
}






    return(
<>
{list.map((item)=>(

    <div>
<h3>{item.title}</h3>
{item.completed ? <p style = {{textDecoration:"linethrough"}}>Completed</p>:<p>Completed</p>}



    </div>
))}



</>
    )

}

export default List