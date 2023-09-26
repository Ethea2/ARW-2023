import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const CyberClash = () => {
  const { data: cyberClash } = useFetch('/api/clash')

  //GUIDE FOR DATA STRUCTURE
  useEffect(() => {
    cyberClash?.map((game) => {
      game.teams.map((vs) => {
        console.log(`GAME: ${game.game} || ${vs[0].org} vs. ${vs[1].org}`)
      })
    } )
  }, [cyberClash])

  return (
    <div className="flex justify-center items-center w-full h-screen">
      Hello
    </div>
  )
}

export default CyberClash