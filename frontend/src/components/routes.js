import Countdown from '../pages/countdown/Countdown'
import CrownQuest from '../pages/crownquest/CrownQuest'
import ErrorPage from '../pages/errorpage/ErrorPage'
import Homepage from '../pages/homepage/Homepage'
import OrgSelect from '../pages/organization_select/OrgSelect'
import IndivOrgPage from '../pages/individual_org/IndivOrgPage'
import AboutUs from '../pages/aboutus/AboutUs'

const routes = [
    //for now countdown is root route
    {path: '/homepage', element: <Homepage />},
    {path: '/', element: <Countdown />},
    {path: '/orgSelect', element: <OrgSelect />},
    {path: '/indivOrg', element: <IndivOrgPage />},
    {path: '/crownquest', element: <CrownQuest />},
    {path: '/aboutus', element: <AboutUs />},
    {path: '*', element: <ErrorPage />}
]

export default routes