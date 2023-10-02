import React, {useState} from "react";
import Question from "./components/Question";
import FAQDesign from "./components/FAQDesign";
import {TABS, QUESTIONS} from "./constants/queries"
import Tabs from "./components/Tabs";
import Questions from "./components/Questions";

const FAQs = () => {
  const [selected, setSelected] = useState(TABS[0]);

    return (
        <>
            <div className="w-full min-h-screen font-monda p-4">
                <FAQDesign />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mt-faq-header mb-4 text-7xl font-bit">
                        FAQs
                    </h1>
                </div>
                <Tabs selected={selected} setSelected={setSelected} />
                <Questions selected={selected} />
            </div>
        </>
    );
};

export default FAQs;
