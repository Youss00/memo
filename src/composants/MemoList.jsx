import './MemoList.scss';
import { motion } from "framer-motion"
import Memos from './Memos';


function MemoList({ memoTd, setMemoTd, memoFiltre }) {

    function effaceMemo(id) {
        setMemoTd(memoTd.filter(elt => elt.id !== id))
    }

    function completeMemo(id) {
        let memoCompletee = memoTd.map(memo => {
            if (memo.id === id) {
                return { ...memo, completee: !memo.completee };
            }
            return memo;
        });
        setMemoTd(memoCompletee);
        window.localStorage.setItem('memo', JSON.stringify(memoCompletee));
    }


    return (
        <div className='memoList'>

            {
                memoFiltre.length === 0
                    ?
                    <motion.li className='aucun-memo'>
                        Aucune tâche à faire :D
                    </motion.li>
                    :
                    memoFiltre.map(memo => (
                        <Memos
                            key={memo.id}
                            id={memo.id}
                            couleur={memo.couleur}
                            titre={memo.titre}
                            completee={memo.completee}
                            dateMemo={memo.dateMemo}
                            effaceMemo={effaceMemo}
                            completeMemo={completeMemo}
                        />
                    ))
            }

        </div>
    )
}

export default MemoList;