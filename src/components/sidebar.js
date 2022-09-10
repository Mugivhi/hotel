import SidebarItems from "./SidebarItems";
// import items from "../data/sidebar.json";
import items from '../adminsite/sidebar.json'
import './sidebaritem.css';


export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItems key={index} item={item} />) }
        </div>
    )
}