import Countdown from "../pages/countdown/Countdown";
import CrownQuest from "../pages/crownquest/CrownQuest";
import CyberClash from "../pages/cyberclash/CyberClash";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Homepage from "../pages/homepage/Homepage";
import OrgSelect from "../pages/organization_select/OrgSelect";
import IndivOrgPage from "../pages/individual_org/IndivOrgPage";
import FAQs from "../pages/faqs/FAQs";
import About from "../pages/about/About";
import { GoHome } from "react-icons/go";
import { VscOrganization } from "react-icons/vsc";
import { LiaCrownSolid } from "react-icons/lia";
import { BsShield } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";

const routes = [
    //for now countdown is root route
    { path: "/", element: <Homepage />, name: "Homepage", icon: <GoHome /> },
    { path: "/countdown", element: <Countdown /> },
    {
        path: "/orgSelect",
        element: <OrgSelect />,
        name: "Organizations",
        icon: <VscOrganization />,
    },
    { path: "/:orgname", element: <IndivOrgPage /> },
    {
        path: "/crownquest",
        element: <CrownQuest />,
        name: "Crown Quest",
        icon: <LiaCrownSolid />,
    },
    {
        path: "/cyberclash",
        element: <CyberClash />,
        name: "Cyber Clash",
        icon: <BsShield />,
    },
    {
        path: "/faqs",
        element: <FAQs />,
        name: "FAQs",
        icon: <AiOutlineQuestionCircle />,
    },
    {
        path: "/about",
        element: <About />,
        name: "About",
        icon: <IoMdInformationCircleOutline />,
    },
    { path: "*", element: <ErrorPage /> },
];

export default routes;
