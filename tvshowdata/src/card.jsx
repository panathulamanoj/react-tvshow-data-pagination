export default function({obj})
{
    const s=obj.show;
    return (
        <span className="cardContainer">
      {s.image && s.image.original && <img src={s.image.original} id="imag"/>}
        <span id="info">
       {s.name && <label>Name : {s.name}</label>}
       {s.language && <label>Language : {s.language}</label>}
      {s.rating && s.rating.average && <label>Rating : {s.rating.average}</label>}
      {s.network && s.network.name &&  <label>Network : {s.network.name}</label>}
       {s.status && <label>Status : {s.status}</label>}
        {s.premiered && <label>Premiered : {s.premiered}</label>}
        {s.ended && <label>Ended : {s.ended}</label>}
        </span>
        </span>
    );
}
