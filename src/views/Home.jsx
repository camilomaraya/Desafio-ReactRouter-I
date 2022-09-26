import '../styles.css';
export default function Home() {
  return (
    <div className="main">
        <h1>
            Bienvenidos a <b>Happy Cake</b>
        </h1>
        <hr />
        <div className='lacosa'>
          <h4>El lugar de los pasteles felices</h4>
          <img src="https://cdn-icons-png.flaticon.com/512/4525/4525698.png" alt="" width="40px" height="40px"/>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D9Ii6E_mcRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
