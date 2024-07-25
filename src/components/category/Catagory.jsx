import { categoryinfo } from './catagkory'
import { CategoryCard } from './CategoryCard'
import classes from './category.module.css'
const Catagory = () => {
  return (
    <>
      <section className={classes.category_container}>
        {categoryinfo.map((infos) => {
          return <CategoryCard data={infos} key={infos.name} />;
        })}
      </section>
    </>
  );
}

export default Catagory




























