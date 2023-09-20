import menucard from '../../assets/images/MenuCard.PNG';

function menupage () {
    const styleObj = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
    }
    return (
        <>
            <img style={styleObj} src={menucard} alt="Menu card image"></img>
        </>
    );
}

export default menupage;