import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";

import { resumeItems } from "@/data/PortfolioData";
import Header from "@/components/Header";

const Resume: React.FC = () => {

    return (
        <section id="resume" className="wrapper">
            <div className="flex flex-col gap-y-4 px-4 py-12 items-center justify-center">
                <Header text="education & experience"></Header>
                <VerticalTimeline lineColor="#E4D9B6">
                    { resumeItems.map((item, index) => (
                        <VerticalTimelineElement
                            key={ index }
                            className="vertical-timeline-element--work"
                            contentStyle={{ 
                                background: "#DDCBB7",
                                boxShadow: "none",
                                border: "4px solid #E4D9B6",
                                borderRadius: "1rem"
                            }}
                            contentArrowStyle={{ 
                                borderRight: "12px solid #E4D9B6" 
                            }}
                            date={ item.date }
                            icon={ item.type === "education" ? <School className="text-earth-yellow-dark" />
                                : <Work className="text-earth-yellow-dark" />
                            }
                            iconStyle={{
                                background: "#7B4B36",
                                boxShadow: "0 0 0 4px #E4D9B6"
                            }}
                        >
                            <h2 className="vertical-timeline-element-title 
                                font-caladea font-bold text-earth-grey">
                                { item.title }
                            </h2>
                            <h4 className="vertical-timeline-element-subtitle
                                font-poppins font-light italic text-earth-green">
                                { item.company }
                            </h4>
                            <h4 className="vertical-timeline-element-subtitle
                                font-poppins font-light text-earth-grey">
                                { item.location }
                            </h4>
                            { item.description ? <p>{ item.description }</p> : null }
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Resume;