import React from 'react';
import { ReactComponent as VKLogo } from "../../../assets/vectors/content-logo.svg";
import {InputField} from "../../ui";
import { IoIosArrowDown } from 'react-icons/io'
import {HiSearch} from "react-icons/hi";
import {BiSolidBell} from 'react-icons/bi'
import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = () => {
    const { user } = useSelector((state) => state.user)
    return (
        <header className={styles['header']}>
            <div className="container">
                <div className={styles['wrapper']}>
                    <a className={styles['logo']} href="/">
                        <h1><VKLogo /></h1>
                    </a>
                    <div className={styles['handlers']}>
                        <label className={styles['search']}>
                            <HiSearch color="#8FADC8" />
                            <InputField type="text" label="Поиск" />
                        </label>
                        <BiSolidBell size='20' color='#1E3C5F' cursor='pointer' />
                    </div>
                    <div className={styles['profile']}>
                        {!!user ? (<>
                            <h3 className={styles['name']}>{user.name}</h3>
                            <div className={styles['avatar']}>
                                <img src={'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg'} alt="Картинка профиля" />
                                <IoIosArrowDown />
                            </div>
                        </>) : (
                            <Link to='/auth'>Вход</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;