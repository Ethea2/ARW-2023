import React, { useState } from "react";
import Question from "./components/Question";
import FAQDesign from "./components/FAQDesign";
import { TABS, QUESTIONS } from "./constants/queries";
import Tabs from "./components/Tabs";
import Questions from "./components/Questions";

const FAQs = () => {
    const [selected, setSelected] = useState(TABS[0]);

    return (
        <>
            <div className="w-full min-h-screen font-monda">
                <FAQDesign />
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full p-10 flex flex-col gap-8 justify-center items-center">
                        <div className="w-full flex justify-center">
                            <h1 className="text-5xl font-bit">FAQs</h1>
                        </div>
                        <div className="">
                            <Tabs
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                        <div>
                            <Questions selected={selected} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQs;
