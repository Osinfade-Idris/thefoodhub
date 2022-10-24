import "./widgetLg.css";
import Passport from './avatar.png';
import { Visibility } from "@mui/icons-material";

export default function WidgetLg() {

    const Button = ({type}) => {
      return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Details</th>

        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Passport} alt="Passport" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$50,097</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
          <td className="widgetLgView"><Visibility/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Passport}  alt="Passport" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$50,097</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
          <td className="widgetLgView"><Visibility/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Passport}  alt="Passport" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$50,097</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
          <td className="widgetLgView"><Visibility/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Passport} alt="Passport" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$50,097</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
          <td className="widgetLgView"><Visibility/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Passport} alt="Passport" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$50,097</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
          <td className="widgetLgView"><Visibility/></td>
        </tr>
      </table>
    
    
    </div>
  )
}
