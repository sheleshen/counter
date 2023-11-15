function Button(props) {  
    const { title, onClick } = props

    return(
        <button onClick={onClick} className="bg-blue-400 rounded text-lg px-4 py-2 text-white font-bold">
            {title}
        </button>
    )
}

export default Button