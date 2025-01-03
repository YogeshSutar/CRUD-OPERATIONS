    import { useState } from "react"
    import { useNavigate } from "react-router-dom"
    import axios from "axios"
    const Adddata = ()=>{
        const [addingData, setAddingData]=useState({
            title:"",
        })

        const handleInputTitleName=(e)=>{
            setAddingData({...addingData, title: e.target.value})
        }
    
        const navigate = useNavigate()

        const AddDetail= async()=>{
            try{
                const response = await axios.post("http://localhost:5000/cards",addingData)
                console.log(`this is adding data details : ${response.data}`)
                // setAddingData((prev)=>[...prev,response.data])
                navigate("/Cards")
            }
            catch(error){
                console.log(`this is adddetails error : ${error}`)
            }
        }

        // useEffect(()=>{
        //     AddDetail()
        // },[])  
        return(
            <>
            <h1>Card Detail...</h1>
            <div>
                <span>Title : </span>
                <input type="text" value={addingData.title} onChange={handleInputTitleName}/>
                <button onClick={AddDetail}>Add Detail</button>
            </div>
            </>
        )
    }

    export default Adddata