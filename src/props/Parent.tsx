import { Child } from "./Child"

export const Parent = () => {
    return (
        <Child color="purple" onClick={() => console.log("I have been clicked!")}/>
    )
}