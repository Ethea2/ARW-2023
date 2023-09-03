import Countdown from '../pages/countdown/Countdown'
import Homepage from '../pages/homepage/Homepage'

const routes = [
    //for now countdown is root route
    {path: '/homepage', element: <Homepage />},
    {path: '/', element: <Countdown />}
]

export default routes