import React from 'react'
import backIcon from '../../Assets/icons_FEtask/Backlog.svg'
import highIcon from '../../Assets/icons_FEtask/Img - High Priority.svg'
import medIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg'
import lowIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg'
import toIcon from '../../Assets/icons_FEtask/To-do.svg'
import inIcon from '../../Assets/icons_FEtask/in-progress.svg'
import noIcon from '../../Assets/icons_FEtask/No-priority.svg'
import doneIcon from '../../Assets/icons_FEtask/Done.svg'
import cancelIcon from '../../Assets/icons_FEtask/Cancelled.svg'
import urgentIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg'
import dotIcon from '../../Assets/icons_FEtask/3 dot menu.svg'
import addIcon from '../../Assets/icons_FEtask/add.svg'

import './List.css'
import Card from '../Card/Card'

let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                        <img src={backIcon} alt="icon"/>
                                    </div>,
                                    'Todo': <div className="list-icon">
                                        <img src={toIcon} alt="icon"/>
                                    </div>,
                                    'In progress': <div className="list-icon">
                                        <img src={inIcon} alt="icon"/>

                                    </div>,
                                    'Done': <div className="list-icon">
                                    <img src={doneIcon} alt="icon"/>

                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                        <img src={cancelIcon} alt="icon"/>

                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><img src={noIcon} alt="icon"/></div>,
                                    1: <div className="card-tag-icon"><img src={lowIcon} alt="icon"/></div>,
                                    2: <div className="card-tag-icon"><img src={medIcon} alt="icon"/></div>,
                                    3: <div className="card-tag-icon"><img src={highIcon} alt="icon"/></div>,
                                    4: <div className="card-tag-icon"><img src={urgentIcon} alt="icon"/></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                        <img src={addIcon} alt="icon"/>
                    </div>
                    <div className="list-option-item">
                        <img src={dotIcon} alt="icon"/>
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
