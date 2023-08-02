import '../Myrezume/modal.scss'

const Modal = ({ show, onCloseButtonClick }) => {

    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">

        <div className="modal">

          <div className="modal__body">

           <p className='modal__body_text'>
                 Вы действительно хотите удалить вакансию?
           </p>

           <div className='modal__body_buttons'>
            
            <button className='modal__body_buttons_btn'>
                Нет
            </button>

            <button className='modal__body_buttons_btn'>
                Да
             </button>

           </div>


            <div onClick={onCloseButtonClick} className="close">x</div>

          </div>


        </div>

      </div>
    );
  };
  
  export default Modal;