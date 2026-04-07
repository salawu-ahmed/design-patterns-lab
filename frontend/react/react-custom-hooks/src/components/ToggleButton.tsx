import useToggle from '../hooks/useToggle'

interface ToggleButtonProps {
    value: boolean,
    setValue: (value:boolean) => void
}

const ToggleButton = ({value, setValue}: ToggleButtonProps) => {
    const [isToggled, toggle] = useToggle()
    return (
        <button
            className=''
            onClick={toggle}
        >
            {isToggled ? 'Hide Content' : 'Show Content'}
        </button>
    )
}

export default ToggleButton