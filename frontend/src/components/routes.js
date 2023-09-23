import Countdown from '../pages/countdown/Countdown'
import CrownQuest from '../pages/crownquest/CrownQuest'
import CyberClash from '../pages/cyberclash/CyberClash'
import ErrorPage from '../pages/errorpage/ErrorPage'
import Homepage from '../pages/homepage/Homepage'
import OrgSelect from '../pages/organization_select/OrgSelect'

const routes = [
    //for now countdown is root route
    {path: '/homepage', element: <Homepage />},
    {path: '/', element: <Countdown />},
    {path: '/orgSelect', element: <OrgSelect />},
    {path: '/crownquest', element: <CrownQuest />},
    {path: '/cyberclash', element: <CyberClash />},
    {path: '*', element: <ErrorPage />}
]

export default routes