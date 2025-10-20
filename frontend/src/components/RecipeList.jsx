

function RecipeList({ recipes }){

    if(recipes && recipes.length === 0){
        return <p className="text-center text-xl">No Recipes Found</p>
    }

    /*const getIngridients = (recipe) => {
        const ingridients = []
        for (let i = 1; i <= 20; i++ ){
            const ingridient = recipe[`strIngredient${i}`]
            const measure = recipe[`strMeasure${i}`]
            if(ingridient && ingridient.trim() !== ""){
                ingridients.push(`${ingridient} - ${measure || ""}`)
            }
        }
        return ingridients
    }*/

    return(
        <div>
            {
                recipes.map((item) => (
                    <div key={item.idMeal} >
                        <div className="">
                            <div className="flex items-center justify-center">
                                <img src={item.strMealThumb} alt={item.strMeal} className="w-96 " />
                            </div>
                            
                            <div>
                                <h1 className="text-center">{item.strMeal}</h1>
                                <p className="w-96">{item.strInstructions}</p>
                                <div>
                                    <a target="_blank" href={item.strSource || item.strYoutube} >View Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeList