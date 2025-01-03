import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const ReadContent = () => {
    //Read Data
    const { id } = useParams();
    const [readData, setReadData] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/cards/${id}`)
                console.log(JSON.stringify(response.data))
                setReadData(response.data)
            }
            catch (Error) {
                console.log(`This is Reding Section error : ${Error}`)
            }
        };
        fetchData();
    }, [id]);
    return (
        <>
            <h1>Read Content</h1>
            <div>
                {
                    readData ? 
                            <div>
                                <span>Id : {readData.id}</span>
                                <span>Title : {readData.title}</span>
                            </div>
                        :
                        <h1>Loading Content..... </h1>
                }
            </div>
        </>
    )
}

export default ReadContent