import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";

import { resumeItems } from "@/data/PortfolioData";

const Resume: React.FC = () => {

    return (
        <div id="resume-section" className="wrapper">
            <div className="flex flex-col gap-y-4 p-12 items-center justify-center">
                <h3 className="font-caladea text-6xl text-earth-grey">education & experience</h3>
                <VerticalTimeline lineColor="#E4D9B6">
                    { resumeItems.map((item) => (
                        <VerticalTimelineElement
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
                            textClassName="font-poppins text-earth-grey"
                        >
                            <h2 className="vertical-timeline-element-title font-medium">{ item.title }</h2>
                            <h4 className="vertical-timeline-element-subtitle">{ item.company }</h4>
                            <h4 className="vertical-timeline-element-subtitle">{ item.location }</h4>
                            { item.description ? <p>{ item.description }</p> : null }
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Resume;