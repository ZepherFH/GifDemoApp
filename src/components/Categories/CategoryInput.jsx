import { useState } from "react"

const CategoryInput = ({categories = [], setCategories}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const handleAddCategoryButton = () => {
        setCategories([inputValue, ...categories])
        setInputValue("")
    }

    const handleClearList = () => {
        setCategories([])
    }

    return (
        <div>
            <input
                onChange={(e)=> handleInputChange(e)}
                placeholder="Write Category name"
                type="text"
                value={inputValue}
            />
            <button
                onClick={(e)=> handleAddCategoryButton(e)}
                className="btn btn-outline-success btn-sm ms-3 mb-2"
                type="button"
            >
                Add
            </button>
            <button
                onClick={(e)=> handleClearList(e)}
                className="btn btn-outline-danger btn-sm ms-3 mb-2"
                type="button"
            >
                Clean
            </button>
        </div>
    )
}

export default CategoryInput