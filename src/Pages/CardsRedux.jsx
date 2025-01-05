import { useSelector, useDispatch, useDispatch } from "react-redux"
const CardsRedux = () => {

    const ApiData = useSelector((state) => state.API.getData)
    const useDispatch = useDispatch()
    return (
        <div>
            {/* {
                ApiData.map((data) => {
                    return (
                        <div>
                            <span>{data}</span>
                            <div />
                            )
            }
            )} */}

                            <h1>this is cards displaying using Redux</h1>
                        </div>
                    )
                }

export default CardsRedux