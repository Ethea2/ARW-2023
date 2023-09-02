import Countdown from '../pages/countdown/Countdown'
import Homepage from '../pages/homepage/Homepage'

const routes = [
    {path: '/', element: <Homepage />},
    {path: '/countdown', element: <Countdown />}
]

export default routes