import React from 'react'
import highIcon from '../../Assets/icons_FEtask/Img - High Priority.svg'
import medIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg'
import lowIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg'
import noIcon from '../../Assets/icons_FEtask/No-priority.svg'
import urgentIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg'
import './Card.css'

export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={noIcon} alt="icon"/></div>,
                        1: <div className="card-tag-icon"><img src={lowIcon} alt="icon"/></div>,
                        2: <div className="card-tag-icon"><img src={medIcon} alt="icon"/></div>,
                        3: <div className="card-tag-icon"><img src={highIcon} alt="icon"/></div>,
                        4: <div className="card-tag-icon"><img src={urgentIcon} alt="icon"/></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
