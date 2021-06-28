import React from 'react';
import classes from './ProfileInfo.module.css';
import foneimage from "../../../mountains-under-mist-morning-amazing-260nw-1725825019.webp";
import Preloader from "../../Common/Preloader/preloader";
import lookingForJobPic from '../../../assets/images/LookingForJob.jpg'
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else
        return (

            <div>
               {/* <div>
                    <img src={foneimage} alt='phoneimage'/>
                </div>*/}
                <div className={classes.profileInfoBlock}>
                    <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt=''/>
                    <ProfileStatusWithHooks status={props.status}  updateUserStatus={props.updateUserStatus}/>
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJob ?
                        <img className={classes.JobLooker} src={lookingForJobPic} alt=''/>
                        : props.profile.lookingForAJobDescription}
                </div>
            </div>
        )
}

export default ProfileInfo;