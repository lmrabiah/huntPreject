import { Link, Route } from 'react-router-dom'
import RandomBtn from './buttons/RandomBtn'
import TresureBtn from './buttons/TreasureBtn'
import Signup from './Signup'

const Home = () => {
  return (
    <>
      <Link to={'/things/random'}>
        <RandomBtn />
      </Link>

      <Link to={'/things/treasure'}>
        <TresureBtn />
      </Link>
      <Link to={'/signup'}>
        <button>Sign up</button>
      </Link>
    </>
  )
}

export default Home
