import logo from '../assets/images/logo.svg'
import job from '../assets/images/job.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            A job description contains the following components: job title, job
            purpose, job duties and responsibilities, required qualifications,
            preferred qualifications, and working conditions.t
          </p>
          <Link to="/register"  className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={job} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
