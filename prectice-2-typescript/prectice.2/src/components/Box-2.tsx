import { useContext } from "react";
import { ThemeContext} from "../contexts/ThemeContext";

const Box2 = () =>
{
    const context = useContext(ThemeContext);
    
    if (!context) {
        return <div>Theme context not available</div>;
    }

    const {theme, toggleTheme} = context;
      
    return(
        <div className="boxContainer" style={{
            backgroundColor: theme === "light" ? "#fff" : "#333", 
            color: theme === "light" ? "#000" : "#fff",
             padding: "20px", 
             borderRadius: "8px",
              textAlign: "center"}}>
            <h1>
                Hello from Box2
            </h1>
            <button onClick={toggleTheme}>Click Me</button>
        </div>
    )
}
export default Box2;