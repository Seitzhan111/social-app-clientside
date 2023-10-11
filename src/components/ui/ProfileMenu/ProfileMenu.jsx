import React, {useRef, useState} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import {Link} from "react-router-dom";
import {FiHelpCircle, FiLogOut, FiSettings} from "react-icons/fi";
import userPlaceholder from 'assets/vectors/content-logo.svg';
import UniversalTransition from "../UniversalTransition/UniversalTransition";
import useOutsideClick from "../../../hooks/useOutsideClick";
import styles from './ProfileMenu.module.css'


const ProfileMenu = ({user}) => {
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const avatar = user.avatar || userPlaceholder

    const profileRef = useRef()

    const handleClickProfile = () => {
        setShowProfileMenu((prevState) => !prevState)
    }

    useOutsideClick(profileRef, () => setShowProfileMenu(false))

    return (
        <div className={styles['profile']} ref={profileRef}>
            <div className={styles['profile__inner']} onClick={handleClickProfile}>
                <h3>{user.name}</h3>
                <div className={styles['avatar']}>
                    <img src={avatar} alt='avatar' />
                    <MdKeyboardArrowDown color='#fff' />
                </div>
            </div>
            <UniversalTransition
                in={showProfileMenu}
                timeout={300}
                transitionType='fade'
                className={styles['profile__menu']}
            >
                <ul>
                    <li>
                        <Link to='/settings'>
                            <FiSettings size='16' color='var(--secondary-color)' /> Настройки
                        </Link>
                    </li>
                    <li>
                        <Link to='/support'>
                            <FiHelpCircle size='16' color='var(--secondary-color)' />Техподдержка
                        </Link>
                    </li>
                    <li>
                        <Link to='/logout'>
                            <FiLogOut size='16' color='var(--secondary-color)' />
                        </Link>
                    </li>
                </ul>
            </UniversalTransition>

        </div>
    );
};

export default ProfileMenu;