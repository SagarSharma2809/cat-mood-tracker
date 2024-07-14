// import NavBar from "./NavBar"

export default function HistoryPage({catData}) {

    return (
        <>
            {/* <NavBar /> */}
            <ul>
                {catData.map((data)=>{
                    return (
                        <div style={{backgroundColor: 'lightblue', marginBottom: '1rem'}}>
                    <p> {data.date} </p>
                    <p>Mood: {data.mood}</p>
                    <p>{data.note}</p>
                    </div>
                )
                })}
            </ul>
        </>
    )
}