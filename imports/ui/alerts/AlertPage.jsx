import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';
import Datetime from 'react-datetime';

export default class AlertPage extends Component {

    renderAlerts(){
     return(<tr>
         <td>
             <Datetime
                 className="time-only"
                 dateFormat={false}
                 value={"6:00pm"}
                 viewMode="time"
         />
         </td>
         <td>
             <div className="checkbox" >
                 <label>
                     <input type="checkbox" value=""/>
                         <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                         Su
                 </label>
             </div>
             <div className="checkbox">
                 <label>
                     <input type="checkbox" value=""/>
                     <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                     M
                 </label>
             </div>

             <div className="checkbox">
                 <label>
                     <input type="checkbox" value=""/>
                     <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                     T
                 </label>
             </div>
             <div className="checkbox">
                 <label>
                     <input type="checkbox" value=""/>
                     <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                     W
                 </label>
             </div>
             <div className="checkbox">
             <label>
                 <input type="checkbox" value=""/>
                 <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                 Th
             </label>
            </div>
             <div className="checkbox">
             <label>
                 <input type="checkbox" value=""/>
                 <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                 F
             </label>
            </div>
             <div className="checkbox">
                 <label>
                     <input type="checkbox" value=""/>
                     <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                     Su
                 </label>
             </div>
         </td>
         <td>
             <div className="checkbox">
                 <label>
                     <input type="checkbox" value=""/>
                     <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                     Sound
                 </label>
             </div>
             <div className="checkbox">
                 <label>
                     <input type="checkbox" value=""/>
                     <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                     Email
                 </label>
             </div>
         </td>
     </tr>)
    }

    render(){
        return (<div>
            <button className="btn black-text"><i className="fa fa-plus fa-fw"/>Create New</button>
            <table className="table">
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Days</th>
                    <th>Alert Type</th>
                </tr>
                </thead>
                <tbody>
                {this.renderAlerts()}
                </tbody>
            </table>
        </div>);
    }
}