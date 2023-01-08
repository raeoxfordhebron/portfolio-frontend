function Footer(props) {
    const navStyle ={
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "1em auto",
        
    }
    return <div className="footer">
        <nav style={navStyle}>
    <a href="https://github.com/raeoxfordhebron">
        <div>GITHUB</div>
    </a>
    <a href="https://www.linkedin.com/in/rae-hebron/">
        <div>LINKEDIN</div>
    </a>
</nav>;
</div>
  }
  
  export default Footer;