import "./featuredInfo.css"
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

export default function Featuredinfo() {
  return (
    <div className="customcontainer">
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Expenditure</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$45,000</span>
                <span className="featuredMoneyRate">-11.4<ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,365,300</span>
                <span className="featuredMoneyRate">-1.4<ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,755,000</span>
                <span className="featuredMoneyRate">7.4<ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        
        </div>
    </div>
    </div>
  )
}
