import classes from './category.module.css'
import { Link } from 'react-router-dom'
const CategoryCard = ({data}) => {
  return (
    <div className={ ` ${classes.category}` }>
      <Link to={`/catagory/${data.name}`} >
        <span>
          <h2 >{data.title}</h2>
        </span>
        <img src={data.imglink} alt="" />
        <p >shop now</p>
      </Link>
    </div>
  );
}

export {CategoryCard} 



// // //w-1/4 p-4 
// // //className="rounded-lg h-32 w-auto mb-2"
// // //className="mt-1 text-sm text-blue-600"
// // //className="flex flex-col items-center justify-center"
// // //className="text-lg font-bold"


























































