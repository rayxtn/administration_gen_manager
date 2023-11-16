import React from "react";
import { useFormik } from "formik";


function PersonelsForm(){
    const formik = useFormik({

        initialValues:{
            number:'',
            name:'',
            familyname:'',
            fathername:'',
    
            arm:'',
            class:'',
            grade:'',
            structure:'',
    
            departement:'',
            situation:'',
            cin:'',
            identifier:''
        },
        onSubmit: values =>{
            console.log('form data :', values);
        }
        
    });
    // console.log('formik values' ,formik.values)
    

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Number</label>
                <input type="text" id="number" name="number" onChange={formik.handleChange} value={formik.values.number}/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                <label htmlFor="name">Family Name</label>
                <input type="text" id="familyname" name="familyname" onChange={formik.handleChange} value={formik.values.familyname}/>
                <label htmlFor="name">Father Name</label>
                <input type="text" id="fathername" name="fathername" onChange={formik.handleChange} value={formik.values.fathername}/>


                <label htmlFor="name">ARM</label>
                <input type="text" id="arm" name="arm" onChange={formik.handleChange} value={formik.values.arm}/>
                <label htmlFor="name">Class</label>
                <input type="text" id="class" name="class" onChange={formik.handleChange} value={formik.values.class}/>
                <label htmlFor="name">Grade</label>
                <input type="" id="grade" name="grade" onChange={formik.handleChange} value={formik.values.grade}/>
                <label htmlFor="name">Structure</label>
                <input type="text" id="structure" name="structure" onChange={formik.handleChange} value={formik.values.structure}/>


                <label htmlFor="name">Departement</label>
                <input type="text" id="departement" name="departement" onChange={formik.handleChange} value={formik.values.departement}/>
                <label htmlFor="name">Situation</label>
                <input type="text" id="situation" name="situation" onChange={formik.handleChange} value={formik.values.situation}/>
                <label htmlFor="name">CIN Number</label>
                <input type="text" id="cin" name="cin" onChange={formik.handleChange} value={formik.values.cin}/>
                <label htmlFor="name">Indentifier</label>
                <input type="text" id="identifier" name="identifier" onChange={formik.handleChange} value={formik.values.identifier}/>
                <button type="submit">Submit</button>

            </form>
        

        </div>
    )

}
export default PersonelsForm;