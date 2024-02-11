import '../estilos/LinkPagina.css'

export const LinkPagina = ({nombrePagina}) => {
  return (
    <a className="link" >
        {nombrePagina}
    </a>
  )
}
