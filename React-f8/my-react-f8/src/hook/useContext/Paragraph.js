import { useContext } from "react"//
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <p className={ context.theme }>who the men !!!!!!!!!!!!!!!!!!!!!!</p>
    )
}

export default Paragraph