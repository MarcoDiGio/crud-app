import { useNavigate } from 'react-router-dom';
import Grid from '../components/Grid';
import HomeCSS from '../styles/pages/Home.module.css';

// This component simply displays the HomePage (url: '/')
export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <main className={HomeCSS.main}>
        <div>
          <h1>Interface for CRUD operations</h1>
          <button onClick={() => navigate('/crud-app/insert')}>Add Entry</button>
          <Grid />
        </div>
      </main>
    </>
  )
}
