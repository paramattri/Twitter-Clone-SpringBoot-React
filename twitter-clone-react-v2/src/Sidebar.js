import React, {useState} from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import TweetBox from './TweetBox';
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        position: 'absolute',
        top: theme.spacing(5)
    }
}))


function Sidebar() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles()
    const history = useHistory()
    const currentUserName = localStorage.getItem('userName')

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" onClick={() => history.push("/twitter")}/>

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile" handleUserProfile={() => history.push(`/twitter/user/${currentUserName}`)}/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            <SidebarOption Icon={ExitToAppIcon} text="Logout" handleLogout={() => {
                history.push("/logout")
            }}/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={handleClickOpen}>Tweet</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth={true} classes = {{paper : classes.dialogWrapper}}>
                <DialogTitle>
                    <div className="dialogTitle__close">
                        <CloseIcon onClick={handleClose}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <TweetBox setOpenPopup={setOpen}/>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Sidebar
