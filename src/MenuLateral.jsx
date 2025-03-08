import userImg from './assets/user.jpg'
function MenuLateral() {
  return (
    <aside className="panel-control-aside">
      <div>
        <img src={userImg} alt="" />
      </div>
      <nav>
        <a href="">Enlace</a>
        <a href="">Enlace</a>
        <a href="">Enlace</a>
        <a href="">Enlace</a>
      </nav>
    </aside>
  )
}
export default MenuLateral