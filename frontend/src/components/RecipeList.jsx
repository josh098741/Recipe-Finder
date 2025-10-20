

function RecipeList({ recipes }){

    if(recipes && recipes.length === 0){
        return <p className={}>No Recipes</p>
    }

    return(
        <div>Reacipe List</div>
    )
}

export default RecipeList