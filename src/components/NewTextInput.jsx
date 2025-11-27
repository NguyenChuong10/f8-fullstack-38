import { forwardRef, useImperativeHandle, useRef } from "react";

const Newtextinput = forwardRef(({ value, onChange, ...props }, ref) => {
        const inputRef = useRef();
        useImperativeHandle(ref,
                () => {
                        return {
                                focus() {
                                        inputRef.current.focus();
                                }
                        }
                }
        )
        return (

                <label ref={ref}>
                        <input className="w-50 h-10 border border-gray-300" type="text"
                                ref={inputRef}
                                placeholder="moi ban nhap vao day"
                                value={value}
                                onChange={onChange}
                                {...props} />
                </label>
        )
})
export default Newtextinput;