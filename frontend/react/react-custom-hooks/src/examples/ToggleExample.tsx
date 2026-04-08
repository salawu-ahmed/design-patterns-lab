import useToggle from '../hooks/useToggle'

const ToggleExample = () => {
    const { isToggled: isDropDownOpen, toggle: toggleDropDown } = useToggle()
    return (
        <div>
            <h1>useToggle Custom Hook Application</h1>

            {/* DropDown Menu */}
            <section>
                <h2>Simple drop menu application</h2>
                <div className='flex items-end gap-2'>
                    <p className=''>
                        Which pattern do you want to practice today?
                    </p>
                    <div className="w-max relative">
                        <button onClick={toggleDropDown} className='p-2 rounded text-slate-900 bg-slate-200 cursor-pointer'>Choose Pattern</button>
                        {
                            isDropDownOpen && (
                                <ul className=' bg-slate-300 text-slate-900 w-max absolute top-11 left-0 rounded'>
                                    <li className='p-2 text-left cursor-pointer border-b' onClick={toggleDropDown}>Reach Custom Hooks</li>
                                    <li className='p-2 text-left cursor-pointer border-b' onClick={toggleDropDown}>Higher Order Components</li>
                                    <li className='p-2 text-left cursor-pointer border-b' onClick={toggleDropDown}>Conditional Rendering</li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ToggleExample