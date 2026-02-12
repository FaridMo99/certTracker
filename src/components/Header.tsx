import { Link } from "react-router-dom"


function Header({paths}:{paths:string[]}) {
  return (
      <header className='w-screen h-20 bg-black/0 text-black/0 hover:text-white hover:bg-black flex justify-between items-center absolute top-0 left-0'>
          {paths.map(path => <Link key={path} to={`/${path}`}>{path}</Link>)}
    </header>
  )
}

export default Header