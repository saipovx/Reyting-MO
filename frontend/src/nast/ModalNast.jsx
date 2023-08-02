import './modalNast.scss'


const ModalNast = ({ show, onCloseButtonClick }) => {

    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">

        <div className="modal">

        <div onClick={onCloseButtonClick} className="close">x</div>


        <div className="form__change">
                    
                    <p className="form__change__titleC"> Смена пароля</p>
    
                    <input type="password" className="form__change__input" placeholder="Введите старый пароль" />
    
                    <input type="password" className="form__change__input" placeholder="Введите новый пароль" />
    
                    <input type="password" className="form__change__input" placeholder="Повторите пароль" />
    
                         
                    
                    <button className="form__change__link"> Сохранить</button>
        </div>



        </div>

      </div>
    );
  };
  
  export default ModalNast;