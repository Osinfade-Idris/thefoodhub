import "./widgetSm.css";
import Passport from './avatar.png';
import Visibility from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">Applicants</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={Passport} alt="Passport" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Idris Abiodun</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Branch 1
                </button>
            </li>
            
            
            <li className="widgetSmListItem">
                <img src={Passport} alt="Passport" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Idris Abiodun</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Branch 2
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Passport} alt="Passport" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Blessing Okafor</span>
                    <span className="widgetSmUserTitle">Kitchen Assistant</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Branch 1
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Passport} alt="Passport" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Akoi Grace Blessing</span>
                    <span className="widgetSmUserTitle">Purchase Manager</span>
                
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Branch 2
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src={Passport} alt="Passport" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Akoi Grace</span>
                    <span className="widgetSmUserTitle">Purchase Manager</span>
                
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Branch 2
                </button>
            </li>
        </ul>
    </div>
  )
}
