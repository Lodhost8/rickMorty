import ResidentCard from "./ResidentCard"
import './ResidentsList.css'

function ResidentsList ({ residents }){

    return (
        <div className='residents-list'>
            <ul className="residents-grid">
                {residents.map(resident => (
                    <ResidentCard key={resident}  //Cambio a tener en cuenta resident => resident.id
                    url={resident} />
                ))}
            </ul>
        </div>
    )
}

export default ResidentsList