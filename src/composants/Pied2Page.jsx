import './Pied2Page.scss';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Pied2Page({ supprimerTachesCompletees, filtre, setFiltre, tachesRestantes }) {
  const gererFiltre = (nouveauFiltre) => {
    setFiltre(nouveauFiltre);
  };

  return (
    <div className="Pied2Page">
      <div className="footer">
        <p>{tachesRestantes} tâches restantes</p>
        <div className="bouton">
          <Stack direction="row" spacing={2}>
            <Button onClick={() => gererFiltre('toutes')} variant={filtre === 'toutes' ? 'contained' : 'outlined'}>Toutes</Button>
            <Button onClick={() => gererFiltre('actives')} variant={filtre === 'actives' ? 'contained' : 'outlined'}>Actives</Button>
            <Button onClick={() => gererFiltre('terminees')} variant={filtre === 'terminees' ? 'contained' : 'outlined'}>Complétées</Button>
          </Stack>

          <Button onClick={supprimerTachesCompletees} color='error'variant="contained">Effacer les complétées</Button>

        </div>
      </div>
    </div>
  )
}

export default Pied2Page;