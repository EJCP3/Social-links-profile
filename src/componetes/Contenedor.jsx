import { LinkPagina } from "./LinkPagina"
import avatarJessica from '../assets/avatar-jessica.jpeg';
import '../estilos/Contenedor.css'


export const Contenedor = () => {
  return (
   <section className="conte">
    <img className="conte-img"  src={avatarJessica}/>
    <h1 className="conte-nombre" >Jessica Randall</h1>
    <p className="conte-pais">Londo, United Kingdom</p>
    <p className="conte-des">{'"Front-end developer and avid reader."'}</p>

    <LinkPagina pagina="GitHub" />
    <LinkPagina pagina="Fronted Mentor" />
    <LinkPagina pagina="LinkedIn" />
    <LinkPagina pagina="Twitter" />
    <LinkPagina pagina="Instagram" />
    
   </section>
  )
}
