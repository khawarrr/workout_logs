import { useEffect } from "react"
//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"


const Home = () => {
  //update local states
  const {workouts, dispatch} = useWorkoutsContext()

  // fires a function when a componenet is rendered
  useEffect(() => {
    const fetchWorkouts = async () => {
      // used to be http://localhost:4000/api/workout but we added proxy to package.json
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()

  }, [dispatch]); // [] means it'll only fire once

  return (
    <div className="home">
        <div className="workouts">
          {workouts && workouts.map((workout) =>(
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
        <WorkoutForm />
    </div>
  )
}

export default Home
