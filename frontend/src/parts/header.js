import logo from './../assets/logo.png'

export default function Header(){
  const head = {
    "height": "5rem"
  }

  return(
    <div>
      <header style={ head } className="flex bg-sky-500 p-[0.1rem_0.5rem]">
        <img src={ logo } className="drop-shadow-[0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.5)]" alt="IT Paradigm Logo" />
        <div className="flex flex-col content-center justify-center mx-[1rem]">
          <h3 className="fjalla">Test Header</h3>
          <h5>Sample Subtitle</h5>
        </div>
      </header>
    </div>
  )
}
