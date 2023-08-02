import './modal.scss'

const Modal = ({ show, onCloseButtonClick, deletePost , currentId}) => {
  
    if (!show) {
      return null;
    }

    
  
    return (
      <div className="modal-wrapper">

        <div className="modal">

          <div className="modal__body">

           <p className='modal__body_text'>
                 Вы действительно хотите удалить резюме?
           </p>

           <div className='modal__body_buttons'>
            
            <button className='modal__body_buttons_btn'>
                Нет
            </button>

            <button className='modal__body_buttons_btn' onClick={() => deletePost(currentId)}>
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