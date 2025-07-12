"use client"
import { useState } from "react";
import { Button } from "../button/Button";
import "./homePage.css";


export const HomePage = () => {
    // const [paragraph, setParagraph] = useState<string>("");
    // const handleSubmit = (formData: FormData) => {
    //     setParagraph(formData.get("paragraphMessage") as string);
    // };
    
    // const [hideHeader, setHideHeader] = useState<boolean>(false);
    // const handleToggleHeader = () => {
    //     setHideHeader(!hideHeader);
    // };

    return(
        <div>
            {/* <h3 className={hideHeader ? "hide" : "show"}>welcome to my homepage 1</h3>
            
            {!hideHeader && <h3>welcome to my homepage 2</h3>}
            <p>{paragraph}</p>
            <form action={handleSubmit}>
                <input type="text" name="paragraphMessage"/>
                <button type="submit">update paragraph</button>
            </form>
            <Button
                action={handleToggleHeader}
                appearance= ""
                text= {hideHeader ? "show header" : "hide header"}
                type="button"
            /> */}
        </div>
    )
}