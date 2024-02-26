"use client";
import { Workflow, WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section className="mt-24 px-44">
      <h1 className="lg:text-5xl text-3xl  text-center my-8">Experience </h1>
      <VerticalTimeline animate={true} layout="1-column-right">
        <VerticalTimelineElement
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            background: "#1d1836",
            color: "#fff",
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
            // backdropFilter: "blur(3px) saturate(106%)",
            backgroundColor: "rgba(17, 25, 40, 0.83)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
            borderRadius: "6px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
          }}
          date="2011 - present"
          iconStyle={{
            background: "#854CE6",
            color: "#fff",
          }}
          icon={<WorkflowIcon />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            background: "#1d1836",
            color: "#fff",
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
            // backdropFilter: "blur(3px) saturate(106%)",
            backgroundColor: "rgba(17, 25, 40, 0.83)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
            borderRadius: "6px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
          }}
          date="2011 - present"
          iconStyle={{ background: "#854CE6", color: "#fff" }}
          icon={<WorkflowIcon />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
