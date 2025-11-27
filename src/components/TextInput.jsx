
const Textinput = ({placeholder , value , onChange , ...props}) => {
    return (
        <input
            className="border-1 border-blue-500" 
            type="text" 
            placeholder={placeholder}
            value={value} 
            onChange={()=>{onChange}}
            {...props}
        />
    );
}
export default Textinput;