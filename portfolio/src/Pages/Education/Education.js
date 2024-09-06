import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from "react-icons/fa6";


const Education = () => {
  return (
    <>
      <div className='container-fluid educations-container' id='education'>
        <div className='container educations'>
            <h2>Education</h2>

            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#219ebc', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: '#219ebc', color: '#ffb703' }}
                icon={<FaUserGraduate />}
            >
                <h3 className="vertical-timeline-element-title">M.C.A.(Mater of Computer Applications)</h3>
                <h4 className="vertical-timeline-element-subtitle">Dr. A. P. J. A. K. T. University, U.P., India</h4>
                <p>
                CGPA 7.37
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#219ebc', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: '#219ebc', color: '#ffb703' }}
                icon={<FaUserGraduate />}
            >
                <h3 className="vertical-timeline-element-title">B.Sc. - Maths'</h3>
                <h4 className="vertical-timeline-element-subtitle">M. J. P. R. University, U.P., India</h4>
                <p>
                Percentage 66.44%
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default Education