import { categories } from "../../utils/categories/categories";

const Filter = () => {
    return(
        <>
        <div> {categories.map((item)=> (
            <img src={item.src}></img>
        ))}</div>
        
       
        </>
    )
}

export default Filter;