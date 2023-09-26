import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import GameContainer from "./components/GameContainer"

const CyberClash = () => {
  const { data: cyberClash,  loading} = useFetch('/api/clash')

  //GUIDE FOR DATA STRUCTURE
  useEffect(() => {
    cyberClash?.map((game) => {
      console.log(game)
    })
  }, [cyberClash])

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div id="container" className="flex justify-center flex-col items-center border-2 border-accent w-64 h-64">
        {cyberClash?.map((game) => (
          <GameContainer game={game} />
        ))}

      </div>
    </div>
  )
}

export default CyberClash