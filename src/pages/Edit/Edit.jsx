import {useDispatch, useSelector} from 'react-redux';
import styles from './Edit.module.css';
import {useForm} from "react-hook-form";
import {editUser} from "../../redux/features/userSlice";

const Edit = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch()

    // const fullName = `${user.name || ''} ${user.surname || ''}`;

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: 'onSubmit'})

    const handleEditUser = (data) => {
        dispatch(editUser({userId: user._id, data}))
    }

    return (
        <>
            <section>
                <div className={styles['basic']}>
                    <h4>Профиль</h4>
                    <div className={styles['cover']}></div>
                    <div className={styles['info']}>
                        <label className={styles['avatar']}>
                            <img
                                src={
                                    user.avatar ||
                                    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                                }
                                alt='AVATAR'
                            />
                            <input type='file' name='avatar' />
                        </label>
                        <form onSubmit={handleSubmit(handleEditUser)}>
                            <input {...register("name")} type='text' placeholder='Имя' defaultValue={user.name}/>
                            <input {...register("surname")} type='text' placeholder='Фамилия' defaultValue={user.surname}/>
                            <button type='submit'>Cохранить</button>
                        </form>
                    </div>
                </div>
                <div className={styles['additional']}></div>
            </section>
            <div className='aside-container'>COMMUNITY</div>
        </>
    );
};

export default Edit;