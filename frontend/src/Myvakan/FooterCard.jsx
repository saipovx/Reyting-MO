import { Link } from "react-router-dom";
import './myvakan.scss'
import axios from "axios";
import { useState } from "react";
 

export default function FooterCard ({izmen, deletet,toggleModal, deletePostVakan, currentId, ...info}) {

    const token = JSON.parse(localStorage.getItem("token"));

    const [ hide, setHide ] = useState(info.is_active)  


    async function hideHandle (id) {

      setHide(!hide);

      await axios

        .post(`http://127.0.0.1:8000/api/vacancy/${info.id}/deactivate/`, null, {

          headers: {
            "content-type": "application/json",
            authorization: `Token ${token}`,
          },

        })

        .catch(err => console.error(err))

    }


    async function hideHandleFalse(id) {

      setHide(!hide);

      await axios

      .post(`http://127.0.0.1:8000/api/vacancy/${info.id}/activate/`, null, {

          headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },

      })

      .catch(err => console.error(err))

    }

    return (

        <>
        
        <div className="VAC__out_botline">

<div className="VAC__out_botline_change">

<div className="VAC__out_botline_change_pics">


    <button  className="VAC__out_botline_change_pics_blue"
    onClick={ hide  ? (event) => hideHandle(event.currentTarget.id) : (event) => hideHandleFalse(event.currentTarget.id) }
    id={info.id}
    >
        
{ hide ? 

"Скрыть резюме"

:

"Показать резюме"

}
         
    </button>

</div>

<Link className="VAC__out_botline_change_pics_blue" to={`/responsesvakanclicks/${info.id}`}>Посмотреть Отклики</Link>


    <div className="VAC__out_botline_change_pics">

    <img className="mini__outer_botline_change_pics_other" src={izmen} alt="" />

        <Link to={`/leadvakan/${info.id}`} id={info.id}  className="VAC__out_botline_change_pics_blue">
            Изменить
        </Link>

    </div>

    <div className="VAC__out_botline_change_pics">

    <img className="mini__outer_botline_change_pics_other" src={deletet} alt="" />

        <div id={info.id}  onClick={((event) => deletePostVakan(event.currentTarget.id))} className="VAC__out_botline_change_pics_delete">
            Удалить
        </div>

    </div>
</div>



</div>

        </>

    )
}