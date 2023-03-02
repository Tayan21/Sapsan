import React, { useEffect, useState } from 'react';

let array = ["box", "boxer", "bitboxer", "bitcoin"]

const SearchComponent = () => {
    let [value, setValue] = useState("")
    let [arr, setArr] = useState<string[]>([])

    const filterArr = (searchText: string, arr: string[]) => {
        if(!searchText) {
            return arr
        }
        return arr.filter((el:string) => el.toLowerCase().includes(searchText.toLowerCase()))
    }

    useEffect(() => {
        let filteredArr = filterArr(value, array)
        setArr(filteredArr)
    }, [value])

    return (
        <div>
            
          <input 
            type="text" 
            value={value} 
            onChange={(e) => {
                setValue(e.target.value)
            }}
           >
           </input>
           <div>
            {arr.map(el => <p>{el}</p>)} 
           </div>
            
        </div>
    );
};

export default SearchComponent;