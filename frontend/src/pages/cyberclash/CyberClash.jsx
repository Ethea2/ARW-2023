import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const CyberClash = () => {
  const { data: cyberClash } = useFetch('/api/clash')

  return (
    <div className="flex justify-center items-center w-full h-screen">
      Hello
    </div>
  )
}

export default CyberClash