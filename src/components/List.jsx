import { useState } from "react"

const List = ({movies, onRemove, onEdit}) => {
  const [editIndex, setEditIndex] = useState(-1)
  const [editValue, setEditValue] = useState("")

  const handleEdit = (index, value) => {
    setEditIndex(index)
    setEditValue(value)
  }

  const handleCancelEdit =() => {
    setEditIndex(-1)
    setEditValue("")
  }

  const handleSaveEdit = (index) => {
    onEdit(index, editValue)
    setEditIndex(-1)
    setEditValue("")
  }
  return (
    <div className=" bg-white border border-gray-300 p-4 bg-gradient-to-b from-transparent to-gray-200 bg-contain bg-repeat-y">
      {movies.length === 0? (
        <p>No movies added yet.</p>
      ) : (
        <ul className=" list-disc pl-4">
          {movies.map((movie, index)=>{
            return <li key={index} className="mb-2 pb-2 border-b flex justify-between items-center">
              {index == editIndex? (
                <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
                <div>
                  <button 
                    className="text-green-500 hover:text-green-700 mr-2" onClick={()=> handleSaveEdit(index) }>
                      Save
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                </div>
                </>
              ) :(
                <>
                <div className=" overflow-x-auto">
                  <span className="mr-2">{`${index + 1}. ${movie}`}</span>

                </div>
                  <div className="flex">
                    <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={()=>handleEdit(index, movie)}>
                      Edit
                    </button>
                    <button className="text-red-500 hover:txt-red-700" onClick={() => onRemove(index)}>
                      Remove
                    </button>
                  </div>
                </>
              )}
            </li>
          })}
        </ul>
      )}
    </div>
  )
}
export default List