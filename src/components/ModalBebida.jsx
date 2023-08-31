import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
const ModalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBebidas()

  const mostrarIngresintes = () => {
    let ingredientes = []

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}
          </li>
        )
      }
    }
    return ingredientes
  }

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
            <h2>Instrucciones</h2>
            <p>{receta.strInstructions}</p>
            <h2>Ingredientes y Cantidades</h2>
            {mostrarIngresintes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebida
