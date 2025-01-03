import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
// import jsondata from "../jsonobjectdata.json"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import '../Style/Cards.css'
const Cards = () => {
    const [fetchData, setFetchData] = useState([]);
    const [loadingData, setLoading] = useState(loading());
    // const [deletingData, setDeletingData]= useState([])
    // const [addApiData, setAddApiData]=useState({
    // title:"name"
    // })

// Get Data
    const FetchData = async () => {
        try {
            const fetchingdata = await axios.get("http://localhost:5000/cards")
            // const datatojson = await fetchdata.json()
            console.log("this is axios data", fetchingdata.data)
            setFetchData(fetchingdata.data)
            setLoading(false)
        }
        catch (error) {
            console.log(`this is error ${error}`)
        }
    }

//Delete Data
    const deleteData = async (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this data");
        if (confirmation) {
            try {
                const response = await axios.delete(`http://localhost:5000/cards/${id}`)
                console.log(`This is Deleted Data : ${JSON.stringify(response.data)}`);
                setFetchData(fetchData.filter((selectDeletingCards) => selectDeletingCards.id !== id))
            }
            catch (error) {
                console.log(`This is Deleted Data Error Message : ${error}`)
            }
        }
    }


    useEffect(() => {
        FetchData()

    }, [])
    function loading() {
        return <Loading />
    }
    return (
        <>
            <h2>CARDS</h2>
            {/* <div> */}
            <span>{loadingData}</span>
            <div>
                <div className='addBtn'>
                    <NavLink to="/CardData"><button className='btn btn-success'>Add</button></NavLink>
                    <span> Click Add Button to add info in box </span>
                </div>
                {console.log(loadingData)}
                <div className="card_section">
                    <div className='row'>

                        {
                            fetchData.map((cardData, key) => {
                                return (
                                    <div key={key} className='col-lg-3 col-md-4 col-sm-6 mb-3'>
                                        {console.log("this is inner map function")}
                                        <div className="innerMapdiv">

                                            <div className='innterContentDiv' >

                                                <div>
                                                    <span>ID : {cardData.id}</span>
                                                </div>
                                                <div>
                                                    <span>TITLE : {cardData.title}</span>
                                                </div>
                                            </div>
                                            <div className='cardsButtonDiv'>
                                                <div className='innerButtonDiv'>
                                                    <NavLink to={`/ReadContent/${cardData.id}`}><button className='cardButton btn btn-info'
                                                    >Read</button></NavLink>
                                                    <NavLink to={`/EditContent/${cardData.id}`}>
                                                    <button className='cardButton btn btn-primary'>Edit</button>
                                                    </NavLink>
                                                    {/* <button className='cardButton btn btn-danger' onClick={()=>{deleteData(cardData.id)}}>Delete</button> */}
                                                    <button className='cardButton btn btn-danger' onClick={() => { deleteData(cardData.id) }}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })

                        }
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Cards