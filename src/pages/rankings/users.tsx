import Header from '../../Components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/rankingtables.module.scss';

type Token = {
    username: string,
    tokenID: string,
    role: string,
    creationData: number,
    expirationData: number
}

export default function Users() {

    const token: Token = Cookies.getJSON('token');

    const [users, setUsers] = useState([]);

    useEffect( () => {
        axios.post('https://helpinhand-318217.ey.r.appspot.com/rest/users/user/hours', token)
            .then(response => { setUsers(response.data)})
    }, [])

    return  (

        <div className={styles.container}>

            <div className={styles.header}>
                <Header/>
            </div> 

            <div className={styles.scoreTable}>
                <table>
                    <tbody>
                        <tr>
                            <th>Posição</th>
                            <th>Nome</th>
                            <th>Horas Realizadas</th>
                        </tr>
                    </tbody>
                    {users.map( (user, index) => 
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1 + "."}</td>
                                    <td>{user.username}</td> 
                                    <td>{user.hoursDone}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    )
}