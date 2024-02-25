import React, { useState, useEffect } from 'react';

function VisitCounter() {
  // Inicializa el estado para almacenar la cantidad de visitas
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Obtiene la cantidad de visitas del localStorage o  0 si no existe
    const currentVisits = localStorage.getItem('visits') || '0';

    // Incrementa la cantidad de visitas y actualiza el estado
    setVisits(parseInt(currentVisits,  10) +  1);

    // Guarda la cantidad de visitas actualizada en el localStorage
    // Nota: Se utiliza visits +  1 directamente, ya que setVisits se encarga de actualizar el estado
    localStorage.setItem('visits', (visits +  1).toString());
  }, []); // Este efecto se ejecuta solo una vez, después del primer renderizado

  return (
    <div>
      <h2>Esta página fue visitada {visits} veces</h2>
    </div>
  );
}

export default VisitCounter;