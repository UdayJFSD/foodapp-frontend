import {
  useEffect,
  useState
} from "react"

import RestaurantCard
  from "../components/RestaurantCard"

import {
  getRestaurants
} from "../services/restaurantService"

function RestaurantsPage() {

  const [restaurants, setRestaurants] =
    useState([])

  const [loading, setLoading] =    useState(true)

  const [error, setError] =    useState("")

  useEffect(() => {

    fetchRestaurants()

  }, [])

  const fetchRestaurants = async () => {

    try {

      const data =
        await getRestaurants()

      setRestaurants(data)

    } catch (err) {

      console.log(err)

      setError(
        "Failed to load restaurants"
      )

    } finally {

      setLoading(false)
    }
  }

  if (loading) {

    return (
      <h1 className="text-3xl">
        Loading...
      </h1>
    )
  }

  if (error) {

    return (
      <h1 className="text-red-500 text-2xl">
        {error}
      </h1>
    )
  }

  return (

    <div>

      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        Restaurants
      </h1>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >

        {
          restaurants.map((restaurant) => (

            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />

          ))
        }

      </div>

    </div>
  )
}

export default RestaurantsPage