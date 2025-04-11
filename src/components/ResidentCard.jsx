import { useEffect } from "react";
import { useFetchApi } from "../hooks/useFetchApi";
import './ResidentCard.css';

function ResidentCard({ url }) {
    const { data: resident, request, loading, error } = useFetchApi();

    useEffect(() => {
        request(url);
    }, [url]);

    if (loading) return <p className="loading">Cargando...</p>;
    if (error) return <p className="error">Error al cargar residente</p>;
    if (!resident) return null;

    const episodeCount = resident.episode?.length || 0;

    return (
        <div className="resident-card">
            <img 
                src={resident.image} 
                alt={resident.name} 
                className="resident-image"
            />
            <div className="cardContent">
                <h2 className="resident-name">{resident.name}</h2>
                <span className={`status ${resident.status?.toLowerCase()}`}>
                    {resident.status}
                </span>
                <ul className="infoList">
                    <li className="infoItem">
                        <span>Species:</span> {resident.species}
                    </li>
                    <li className="infoItem">
                        <span>Origin:</span> {resident.origin?.name || "Unknown"}
                    </li>
                    <li className="infoItem">
                        <span>Appearances:</span> {episodeCount} 
                        {episodeCount === 1 ? " episode" : " episodes"}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ResidentCard;