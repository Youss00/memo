import { useEffect, useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import FrmMemo from './FrmMemo';
import MemoList from './MemoList';
import Pied2Page from './Pied2Page';

function Appli() {
  const [memoTd, setMemoTd] = useState(
    () => JSON.parse(window.localStorage.getItem('memo')) || []
  )
  const [filtre, setFiltre] = useState('toutes'); 
  
  let memoFiltre = memoTd;

  switch (filtre) {
      case 'terminees':
          memoFiltre = memoTd.filter(memo => memo.completee);
          break;
      case 'actives':
          memoFiltre = memoTd.filter(memo => !memo.completee);
          break;
      default:
          break;
  }

 
  const tachesRestantes = memoTd.filter(memo => !memo.completee).length;

  useEffect(
    () => window.localStorage.setItem("memo", JSON.stringify(memoTd))
    ,
    [memoTd]
  )
  console.log("memo ", memoTd);

  function ajouterMemo(titre, couleur) {
    if (titre.trim() !== '') {
      let nouveauMemo = {
        id: window.crypto.randomUUID(),
        titre: titre.length > 30 ? titre.substring(0, 30) + '...' : titre,
        dateMemo:"("+ new Date().toLocaleDateString() + ' à ' + new Date().toLocaleTimeString()+")",
        completee: false,
        couleur: couleur

      }
      setMemoTd([...memoTd, nouveauMemo])
    }
  }

  const supprimerTachesCompletees = () => {
    const tachesNonCompletees = memoTd.filter(memo => !memo.completee);
    setMemoTd(tachesNonCompletees);
  }


  return (
    <div className="Appli">
      <Entete />
      <FrmMemo
        ajouterMemo={ajouterMemo}
      />
      <MemoList
        memoTd={memoTd}
        setMemoTd={setMemoTd}
        ajouterMemo={ajouterMemo}
        memoFiltre={memoFiltre}

      />
      <Pied2Page
        supprimerTachesCompletees={supprimerTachesCompletees}
        filtre={filtre}
        setFiltre={setFiltre}
        tachesRestantes={tachesRestantes}
      />
    </div>
  )
}

export default Appli;