import './modalNast.scss'


const ModalNastTwo = ({ show, onCloseButtonClick }) => {

    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">

        <div className="modal">

        <div onClick={onCloseButtonClick} className="close">x</div>


        <div className="form__change">
                    
                    <p className="form__change__titleC">Редактировать</p>
    
                    <input type="text" className="form__change__input" placeholder="Имя" />

                    <input type="text" className="form__change__input" placeholder="Фамилия" />

                    <input type="text" className="form__change__input" placeholder="Отчество" />

                    <input type="number" className="form__change__input" placeholder="Дата рождения" />
                         
                    <button className="form__change__link"> Сохранить</button>
        </div>



        </div>

      </div>
    );
  };
  
  export default ModalNastTwo;