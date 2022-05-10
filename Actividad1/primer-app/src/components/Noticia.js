function Noticia(){

    const noticia = {
        titulo : "Primera Noticia Informatorio React",
        descripcion: "Descripcion de la Primera Noticia acerca del curso de React impartido por el Informatorio."
    }

    const {titulo, descripcion} = noticia

    return (
        <div className="mi-clase">
            <h1 className="mi-titulo">Mi noticia: {titulo}</h1>
            <p className="mi-descripcion">{descripcion}</p>
        </div>
    )
    


}

export default Noticia