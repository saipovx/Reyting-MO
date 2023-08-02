
import { useContext, useEffect, useState } from 'react'
import m from '../AddVakan/addvakan.module.scss'
import Header from '../components/header/Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { contextVakan } from '../ContextVakan'
import axios from 'axios'

export default function LeadVakan ({auth, setAuth, ...myVakanId}) {

    const params = useParams()
    const userVakanId = myVakanId.myVakanId.findIndex(user => user.id === +params.userVakanId)
    const mas = myVakanId.myVakanId[userVakanId]



    const [

        NameVakan, setNameVakan,
        NameKompany, setNameKompany,
        AboutKompany, setAboutKompany,
        Requirement, setRequirement,
        conditions, setConditions,
        ZpOt, setZpOt,
        ZpDo, setZpDo,
        Experience, setExperience,
        ExperienceDo, setExperienceDo,
        designations, setdesignations,
        Type, setType,
        Grafic, SetGrafic,
        Logo, setLogo ,
    
    ] = useContext(contextVakan)

    const fotoUpload = (e) => {
        setLogo(e.target.files[0])
    }

    const token = JSON.parse(localStorage.getItem('token'))

    const navigate = useNavigate('')

    const [userId, setUserId] = useState()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/vacancy/',{

             headers: {
                'Content-Type': 'application/json ',
                authorization: `Token ${token}`
             }
            
            })

        .then(res => {setUserId(res.data[0].id)
            // window.location.reload()
            
        })

    }, [])

    const PreapVakan = () => {       
    
        axios.patch(`http://127.0.0.1:8000/api/vacancy/${mas.id}/`, {

        job_title: NameVakan,
        company_name: NameKompany,
        about_company: AboutKompany, //об компании
        requirements: Requirement, // Требования
        conditions: conditions, // Условия
        start_salary: ZpOt, // заработная плата от 
        final_salary: ZpDo, // заработная плата до 
        start_experience: Experience, // Опыт работы от
        final_experience: ExperienceDo, // Опыт работы до
        application_type: designations, // Тип оформления ,  select выподающий список сделай у себя просто текст 
        employment_type: Type, // Тип занятости , select тоже
        schedule: Grafic, // График работы 
        logo: Logo , // лого компании 

        user: userId // айдишка пользвателя 
            
        },
        
        {
            headers : {
            'Content-Type': 'application/json , multipart/form-data',
            authorization: `Token ${token}`
            }            
        }

        
        )

        .then(res => { res.request.status === 200 ? navigate('/tarifvakan') : navigate(navigate.pathname)
           window.location.reload()
        } )

        .catch(err => alert('Неправильно ввели данные или не до конца заполнили форму'));



    };


    return(

        <>

<Header

link='vakan/#vakan'
title='Разместить вакансию'

link2='vakan/#poisk' 
title2='Резюме'

link3='vakan/#reyting' 
title3='Рейтинг работников'

link4='vakan/#obuch' 
title4='Обучение'

myRezume = 'Мои вакансии'

myRezume_link = '/myvakan'

tarif_link= '/tarifvakan'

myLiveVakan = '/myliverezume'
auth={auth}
setAuth={setAuth}


 />

<section className={m.sectionCreateVaccancy6}>

    <div className={m.container}>

        <div className={m.sectionCreateVaccancy}>

            <div className={m.sectionCreateVaccancy__outer}>

                <p className={m.sectionCreateVaccancy__outer_title}>
                    Изменения вакансии
                </p>

                <p className={m.sectionCreateVaccancy__outer_punkts}>
                    Заполнить все пункты отмеченные*
                </p>

                <form onSubmit={PreapVakan} className={m.sectionCreateVaccancy__outer_inner}>

                    <div className={m.sectionCreateVaccancy__outer_inner_form}>

                        <div className={m.sectionCreateVaccancy__outer_inner_form_top2}>

                            <input value={NameVakan} onChange={(event) => setNameVakan(event.target.value)} type="text" className={m.sectionCreateVaccancy__outer_inner_form_top2_left}
                                placeholder="Название вакансии*" />



                        </div>

                        <input value={NameKompany} onChange={(event) => setNameKompany(event.target.value)} type="text" className={m.sectionCreateVaccancy__outer_inner_form_CN}
                            placeholder="Название компании*" />


                        <textarea value={AboutKompany} onChange={(event) => setAboutKompany(event.target.value)} placeholder='О компании*' className={m.sectionCreateVaccancy__outer_inner_form_textArea}></textarea>

                        <textarea value={Requirement} onChange={(event) => setRequirement(event.target.value)} className={m.sectionCreateVaccancy__outer_inner_form_textArea}  placeholder="Требования*"></textarea>

                        <textarea value={conditions} onChange={(event) => setConditions(event.target.value)} placeholder="Условия*" className={m.sectionCreateVaccancy__outer_inner_form_textArea}></textarea>


                    </div>

                    <div className={m.sectionCreateVaccancy__outer_inner_right}>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_logo}>

                            <input type="file" onChange={fotoUpload}  />

                            <p className={m.sectionCreateVaccancy__outer_inner_right_logo_textLogo}>
                                Логотип компании*
                            </p>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Размер заработной платы*
                            </p>

                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input value={ZpOt} onChange={(event) => setZpOt(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input value={ZpDo} onChange={(event) => setZpDo(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Опыт работы*
                            </p>

                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input value={Experience} onChange={(event) => setExperience(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input value={ExperienceDo} onChange={(event) => setExperienceDo(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Тип занятости*
                            </p>


                            <select type="text" value={Type} onChange={(event) => setType(event.target.value)} >

                            <option value="Выберите">Выберите</option>
                            
                            <option value="Полная занятость">Полная занятость</option>
                            <option value="Частичная занятость">Частичная занятость</option>
                            <option value="Среднее специальное">Среднее специальное</option>
                            <option value="Проектная работа">Проектная работа</option>
                            <option value="Волонтерство">Волонтерство</option>
                            <option value="Стажировка">Стажировка</option>
                            </select>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

<p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
    График Работы*
</p>


<div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

<input value={Grafic} onChange={(event) => SetGrafic(event.target.value)} type="text" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
    placeholder="с 9:00 до 20:00 " />

</div>

</div>





                        <div className={m.sectionCreateVaccancy__outer_inner_right_checking}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_checking_typeZ}>
                                Тип оформления*
                            </p>

                            <select type="text" value={designations} onChange={(event) => setdesignations(event.target.value)}>
                                <option value="Выберите">Выберите</option>
                                <option value="По трудовой">По трудовой</option>
                                <option value="По контракту">По контракту</option>
                            </select>

                        </div>
                    </div>
                </form>

            </div>

            {/* <Link to='/tarifvakan'  className={m.sectionCreateVaccancy__link}>Разместить</Link> */}
            <button type='submit' onClick={PreapVakan}  className={m.sectionCreateVaccancy__link}>Разместить</button>
            
        </div>
    </div>

</section>

</>

    )

}
