import { createContext, useState} from "react";

export const myContext = createContext()  
// export const contextVakan = createContext()

export default function Context (props) {

   

   const [ FullName , setFullName ] = useState('')

   const [ PhoneNumber , setPhoneNumber ] = useState('')

   const [ data , setData ] = useState('')

   const [ city , setCity ] = useState('')

   const [ address , setAddress ] = useState('')

   const [ education , setEducation ] = useState('')

   const [ AddEducation , setAddEducation ] = useState('')

   const [ placeWork , setPlaceWork ] = useState('')

   const [ postwork , setPostwork ] = useState('')

   const [ DataStart , setDataStart ] = useState('')

   const [ DataEnd , setDataEnd ] = useState('')

   const [ About , setAbout ] = useState('')

   const [ skills , setSkills ] = useState('')

   const [ startSalary , setStartSalary ] = useState('')

   const [ endSalary , setEndSalary ] = useState('')

   const [foto, setFoto] = useState([]);

   const [recommendation, setRecommendation] = useState([]);

   const [certificate, setCertificate] = useState([]);


   const [secondary_edu, setsecondary_edu] = useState(['Среднее']);

   const [secondary_special_edu, setsecondary_special_edu] = useState(['Среднее специальное']);

   const [incomplete_higher_edu, setincomplete_higher_edu] = useState(['Неоконченное высшее']);

   const [higher_edu, sethigher_edu] = useState(['Высшее']);

   const [bachelor_edu, setbachelor_edu] = useState(['Бакалавр']);

   const [master_edu, setmaster_edu] = useState(['Магистр']);

   const [candidate_science_edu, setcandidate_science_edu] = useState(['Кандидат наук']);

   const [doctor_science_edu, setdoctor_science_edu] = useState(['Доктор наук']);


   const [busyness, setbusyness] = useState('')

   const [experience, setexperience] = useState('')



   


   return (
    <>

    <myContext.Provider value={[

FullName, setFullName,
PhoneNumber, setPhoneNumber,
data , setData,
city , setCity,
address , setAddress,
education , setEducation,
AddEducation , setAddEducation,
placeWork , setPlaceWork,
postwork , setPostwork,
DataStart , setDataStart,
DataEnd , setDataEnd,
About , setAbout,
skills , setSkills,
startSalary , setStartSalary,
endSalary , setEndSalary,

foto, setFoto,
recommendation, setRecommendation,
certificate, setCertificate,

secondary_edu, setsecondary_edu,
secondary_special_edu, setsecondary_special_edu,
incomplete_higher_edu,setincomplete_higher_edu,
higher_edu,sethigher_edu,
bachelor_edu,setbachelor_edu,
master_edu,setmaster_edu,
candidate_science_edu,setcandidate_science_edu,
doctor_science_edu,setdoctor_science_edu,

busyness, setbusyness,
experience, setexperience

]} >

{props.children}

</myContext.Provider>

{/* <contextVakan.Provider value={[info, setInfo]}> 
    {props.children}
</contextVakan.Provider> */}

    
    </>

    
   )

}  


