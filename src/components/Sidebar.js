import {
    GrFacebookOption as Facebook,
    GrTwitter as Twitter,
    GrInstagram as Instagram,
    GrLinkedin as Linkedin

} from 'react-icons/gr'


export default (props) =>
{
    const ICON_SIZE = 20;
    return(

        <div className={(props.isActive)? "sidebar":"sidebar closed"}>
            <div className="sidebar-social-media-tags">
                <Facebook className="icon facebook" size={ICON_SIZE} />
                <Twitter className="icon twitter" size={ICON_SIZE} />
                <Instagram className="icon instagram" size={ICON_SIZE} />
                <Linkedin className="icon linkedin" size={ICON_SIZE} />
            </div>
            <div className="nav-items">
            {props.children}
            </div>
        </div>
    );
}


