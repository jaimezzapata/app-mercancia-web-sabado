import userImg from './assets/user.jpg'
function MenuLateral() {
  let enlaces = ["Inicio", "Servicios", "Contacto", "Productos", "Acerca de", "Trabaja con nsotros"]
  return (
    <aside className="panel-control-aside">
      <div>
        <img src={userImg} alt="" />
      </div>
      <nav>
        {
          enlaces.map((enlace) => {
            return <a href="">{enlace}</a>
          })
        }
      </nav>
    </aside>
  )
}
export default MenuLateral