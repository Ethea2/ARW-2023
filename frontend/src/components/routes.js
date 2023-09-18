import Countdown from '../pages/countdown/Countdown'
import CrownQuest from '../pages/crownquest/CrownQuest'
import ErrorPage from '../pages/errorpage/ErrorPage'
import Homepage from '../pages/homepage/Homepage'
import OrgSelect from '../pages/organization_select/OrgSelect'

const routes = [
    //for now countdown is root route
    // {path: '/homepage', element: <Homepage />},
    {path: '/', element: <Countdown />},
    // {path: '/orgSelect', element: <OrgSelect />},
    // {path: '/crownquest', element: <CrownQuest />},
    {path: '*', element: <ErrorPage />}
]
//testpush
export default routes