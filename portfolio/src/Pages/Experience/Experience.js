import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from "react-icons/md";

const Experience = () => {
  return (
    <>
        <div className='container-fluid experience-container' id='experience'>
        <div className='container experience'>
            <h2> Work Experience</h2>

            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#219ebc', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: '#219ebc', color: '#ffb703' }}
                icon={<MdWorkHistory />}
            >
                <h3 className="vertical-timeline-element-title">MERN Stack Developer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">ASHPlan Pvt. Ltd.</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#219ebc', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: '#219ebc', color: '#ffb703' }}
                icon={<MdWorkHistory />}
            >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">ManpowerGroup Services India Pvt. Ltd.</h4>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default Experience