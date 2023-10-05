import React from 'react';
import {ReactComponent as HomeIcon} from 'assets/vectors/sidebar/home.svg';
import {ReactComponent as NewsIcon} from 'assets/vectors/sidebar/news.svg';
import {ReactComponent as MessagesIcon} from 'assets/vectors/sidebar/messages.svg';
import {ReactComponent as FriendsIcon} from 'assets/vectors/sidebar/friends.svg';
import {ReactComponent as GroupsIcon} from 'assets/vectors/sidebar/groups.svg';
import {ReactComponent as PhotosIcon} from 'assets/vectors/sidebar/photos.svg';
import {ReactComponent as MusicIcon} from 'assets/vectors/sidebar/music.svg';
import {ReactComponent as VideoIcon} from 'assets/vectors/sidebar/video.svg';
import {ReactComponent as ClipIcon} from 'assets/vectors/sidebar/clips.svg';
import {ReactComponent as GamesIcon} from 'assets/vectors/sidebar/games.svg';
import {ReactComponent as PayIcon} from 'assets/vectors/sidebar/pay.svg';
import {ReactComponent as WorkIcon} from 'assets/vectors/sidebar/work.svg';
import {ReactComponent as GoodsIcon} from 'assets/vectors/sidebar/goods.svg';
import {ReactComponent as BookmarksIcon} from 'assets/vectors/sidebar/bookmarks.svg';
import {ReactComponent as DocumentsIcon} from 'assets/vectors/sidebar/documents.svg';
import {ReactComponent as VirusIcon} from 'assets/vectors/sidebar/virus.svg';

import styles from './Sidebar.module.css'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const MenuItem = ({ text, link, icon: IconComponent, notice }) => {
    return (
        <li className={styles['menu__item']}>
            {
                !!text ? (
                    <a href={link} className={styles['menu__link']}>
                        <IconComponent />
                        <p>{text}</p>
                        {!!notice && <span className={styles['notice']}>{notice}</span>}
                    </a>
                ) : (
                    <div className={styles['separator']} />
                )
            }

        </li>
    )
}

const Sidebar = () => {
    const menuList = [
        {
            id: 1,
            text: 'Моя страница',
            link: '/',
            icon: HomeIcon,
            notice: 415,
        },
        {
            id: 2,
            text: 'Новости',
            link: '/',
            icon: NewsIcon,
            notice: 0,
        },
        {
            id: 3,
            text: 'Сообщения',
            link: '/',
            icon: MessagesIcon,
            notice: 34,
        },
        {
            id: 4,
            text: 'Друзья',
            link: '/',
            icon: FriendsIcon,
            notice: 0,
        },
        {
            id: 5,
            text: 'Сообщества',
            link: '/',
            icon: GroupsIcon,
            notice: 7,
        },
        {
            id: 6,
            text: 'Фотографии',
            link: '/',
            icon: PhotosIcon,
            notice: 0,
        },
        {
            id: 7,
            text: 'Музыка',
            link: '/',
            icon: MusicIcon,
            notice: 0,
        },
        {
            id: 8,
            text: 'Видео',
            link: '/',
            icon: VideoIcon,
            notice: 0,
        },
        {
            id: 9,
            text: 'Клипы',
            link: '/',
            icon: ClipIcon,
            notice: 0,
        },
        {
            id: 10,
            text: 'Игры',
            link: '/',
            icon: GamesIcon,
            notice: 0,
        },
        {
            id: 11,
            text: '',
            link: '',
            icon: null,
            notice: 0,
        },
        {
            id: 12,
            text: 'VK Pay',
            link: '/',
            icon: PayIcon,
            notice: 0,
        },
        {
            id: 13,
            text: 'Работа',
            link: '/',
            icon: WorkIcon,
            notice: 0,
        },
        {
            id: 14,
            text: '',
            link: '',
            icon: null,
            notice: 0,
        },
        {
            id: 15,
            text: 'Товары',
            link: '/',
            icon: GoodsIcon,
            notice: 0,
        },
        {
            id: 16,
            text: 'Закладки',
            link: '/',
            icon: BookmarksIcon,
            notice: 0,
        },
        {
            id: 17,
            text: 'Документы',
            link: '/',
            icon: DocumentsIcon,
            notice: 0,
        },
        {
            id: 18,
            text: '',
            link: '',
            icon: null,
            notice: 0,
        },
        {
            id: 19,
            text: 'Коронавирус',
            link: '/',
            icon: VirusIcon,
            notice: 0,
        },
        {
            id: 20,
            text: '',
            link: '',
            icon: null,
            notice: 0,
        },
    ]
    return (
        <aside className={styles['content']}>
            <ul className={styles['menu']}>
                {menuList.map((linkItem) => (
                    <MenuItem key={linkItem.id} {...linkItem} />
                ))}
            </ul>
            <div className={styles['links']}>
                <a href='/'>Блог</a> <a href='/'>Разработчикам</a>
                <a href='/'>Реклама</a>
                <a href='/'>
                    Еще <MdOutlineKeyboardArrowDown />
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;