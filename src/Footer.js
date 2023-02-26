const Footer = ({legnth}) => {
    const today = new Date();

    return (
        <footer >
            <p>Copyright &copy; {today.getFullYear()} , {legnth} List {legnth===1 ? "item" : "items"} </p>
            
        </footer>
    )
}

export default Footer
