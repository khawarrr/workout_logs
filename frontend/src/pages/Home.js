import { useEffect, useState } from "react"

const Home = () => {
  //update local states
  const [workouts, setWorkouts] = useState(null)

  // fires a function when a componenet is rendered
  useEffect(() => {
    const fetchWorkouts = async () => {
      
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()

  }, []); // [] means it'll only fire once

  return (
    <div className="home">
        <div className="workouts">
          {workouts && workouts.map((workout) =>(
            <p key={workout._id} >{workout.title}</p>
          ))}
        </div>
    </div>
  )
}

export default Home
