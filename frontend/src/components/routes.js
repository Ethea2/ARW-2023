import Countdown from '../pages/countdown/Countdown'
import Homepage from '../pages/homepage/Homepage'
import OrgSelect from '../pages/organization_select/OrgSelect'

const routes = [
    //for now countdown is root route
    {path: '/homepage', element: <Homepage />},
    {path: '/', element: <Countdown />},
    {path: '/orgSelect', element: <OrgSelect />}
]

export default routes