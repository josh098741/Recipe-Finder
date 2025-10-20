import React,{useState} from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import RecipeList from '../components/RecipeList'
import { Loader } from 'lucide-react'

function Home(){

    const [loading, setLoading] = useState(false)
    const [ recipes, setRecipes ] = useState([])

    const searchRecipes = async (query) => {
        try{
            setLoading(true)
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            console.log(response.data.meals)
            setRecipes(response.data.meals)
        }catch(error){
            console.log("error in Loading recipes",error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <div>
            <SearchBar onSearch={searchRecipes} />
            <div className={loading ? `flex justify-center`:''}>
                {
                    loading ? <div className="w-20 h-20 border-2 rounded-full border-l-blue-500 animate-spin"></div>
                    : <RecipeList recipes={recipes} />
                }  
            </div>
        </div>
    );
}

export default Home