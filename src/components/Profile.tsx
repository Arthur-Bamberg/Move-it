import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Arthur-Bamberg.png" alt="Foto de perfil de Arthur Bamberg do GitHub"/>
            <div>
                <strong>Arthur Bamberg</strong>
                <p>
                    <img src="icons/level.svg" alt="Seta verde pra cima indicando nível"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}