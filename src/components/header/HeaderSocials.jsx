import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {MdWork} from "react-icons/md";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/elie-guitton-592a681bb/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/elieguitton" target="_blank"><AiFillGithub/></a>
            <a href="https://www.malt.fr/profile/elieguitton" target="_blank"><MdWork/></a>
        </div>
    )

}

export default HeaderSocials;