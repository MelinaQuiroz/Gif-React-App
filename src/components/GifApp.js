import React, {useState} from "react";
import AddCategory from './AddCategory';

export default function GifApp() {
       const [categories, setCategories] = useState(["Pulp Fiction", "DeathProof", "Trainspotting", "Old Boy"]);

      //  const handleAdd = () => {
      //    
      //  }



  return (
    <div>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
          {
              categories.map(category => {
                  return <li key={category}>{category}</li>
              })
          }
      </ol>
    </div>
  );
}
