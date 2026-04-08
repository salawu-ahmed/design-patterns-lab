import { useState } from "react";

function useToggle (initialValue : boolean = false) : ({isToggled: boolean, toggle: ()=>void}) {
    const [isToggled, setIsToggled] = useState<boolean>(initialValue)

    const toggle = () => setIsToggled(prev => !prev)

    return {isToggled, toggle}
}

export default useToggle;