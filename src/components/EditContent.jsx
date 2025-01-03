import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"

const EditContent = () => {
    const { id } = useParams()
    const [fetchingData, setFechingData] = useState({title:""})
    const navigator = useNavigate()
    const editContentFun = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/cards/${id}`)
            setFechingData(response.data)
        }
        catch (error) {
            console.log(`this this edit error message : ${error}`);
        }
    }


    const handleEditSubmit = async() => {
        try {
            const respo = await axios.patch(`http://localhost:5000/cards/${id}`,{
                title: fetchingData.title
            });
            setFechingData(respo.data)
            if(fetchingData.title !== undefined || (fetchingData.title).lenght > 0){
                navigator("/Cards") 
            } 
            else{
                window.alert("Your data is not proper")                
            }
        }
        catch (error) {
            console.log(`this is handleeditsubmit error : ${error}`)
        }
    }



    useEffect(() => {
        editContentFun();
    }, [id]);


    const setEditValue = (e) => {
        const editedvalue = e.target.value
        setFechingData((prev)=>({
            ...prev,
            title:editedvalue
        }))
        console.log("this is Data edited ", editedvalue)
        // e.taget.value
    }
    return (
        <>
            <h1>this is edit box</h1>
            {
                fetchingData ?(
                    <div>
                        <span>Id : {fetchingData.id}</span>
                        <span>Title : </span>
                        <input
                            type="text"
                            value={fetchingData.title}
                            onChange={(e) => setEditValue(e)} 
                        />
                        <button onClick={()=>{handleEditSubmit()}}>Edit</button>
                    </div > )
                    :
                    <h1>loding content</h1>

            }
        </>
    )
}

export default EditContent