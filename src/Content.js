import ItemList from "./ItemList.js"

const Content = ({items , setitems , deleteinput , changeinput}) => {
    

  
    return (
        <main className="sibal">
            {items.length ?  <ItemList items={items} setitems={setitems} deleteinput={deleteinput} changeinput={changeinput} /> 
            : <p>ddd</p>} 
          
                
                
            
            
        </main>
    )
}

export default Content
