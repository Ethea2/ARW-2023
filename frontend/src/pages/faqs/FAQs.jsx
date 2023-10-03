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
                    <div className="w-full w-1/4 p-10 bg-black/50 flex flex-col gap-4 justify-center items-center">
                        <div className="w-full bg-green-200 flex justify-center">
                            <h1 className="text-5xl font-bit">FAQs</h1>
                        </div>
                        <div className="w-full">
                            <Tabs
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    </div>

                    <div>
                        <Questions selected={selected} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQs;
