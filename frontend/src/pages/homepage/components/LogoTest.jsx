import {
    SiNike,
    Si3M,
    SiAbstract,
    SiAdobe,
    SiAirtable,
    SiAmazon,
    SiBox,
    SiBytedance,
    SiChase,
    SiCloudbees,
    SiBurton,
    SiBmw,
    SiHeroku,
    SiBuildkite,
    SiCouchbase,
    SiDailymotion,
    SiDeliveroo,
    SiEpicgames,
    SiGenius,
    SiGodaddy,
} from "react-icons/si";
const LogoItem = ({ Icon }) => {
    return <Icon className="text-4xl text-white md:text-5xl" />;
};

export const LogoItemsTop = () => (
    <>
        <LogoItem Icon={SiNike} />
        <LogoItem Icon={Si3M} />
        <LogoItem Icon={SiAbstract} />
        <LogoItem Icon={SiAdobe} />
        <LogoItem Icon={SiAirtable} />
        <LogoItem Icon={SiAmazon} />
        <LogoItem Icon={SiBox} />
        <LogoItem Icon={SiBytedance} />
        <LogoItem Icon={SiChase} />
        <LogoItem Icon={SiCloudbees} />
    </>
);

export const LogoItemsBottom = () => (
    <>
        <LogoItem Icon={SiBmw} />
        <LogoItem Icon={SiBurton} />
        <LogoItem Icon={SiBuildkite} />
        <LogoItem Icon={SiCouchbase} />
        <LogoItem Icon={SiDailymotion} />
        <LogoItem Icon={SiDeliveroo} />
        <LogoItem Icon={SiEpicgames} />
        <LogoItem Icon={SiGenius} />
        <LogoItem Icon={SiGodaddy} />
        <LogoItem Icon={SiHeroku} />
    </>
);
