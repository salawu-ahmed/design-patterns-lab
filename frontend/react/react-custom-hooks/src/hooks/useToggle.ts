import { useState } from "react";

function useToggle (initialValue : boolean = false) : ([boolean, ()=>void]) {
    const [isToggled, setIsToggled] = useState<boolean>(initialValue)

    const toggle = () => setIsToggled(!isToggled)

    return {isToggled, toggle}
}

export default useToggle;