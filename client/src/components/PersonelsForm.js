import React from "react";
import { useFormik } from "formik";

function PersonelsForm(){

    const initialValues = {
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
    };
    const onSubmit = values =>{
        console.log('form data :', values);
    };
    const validate = values => {
        let errors = {};
        if(!values.number){
         errors.number = 'Required';
        }
        return errors;
     }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-controle">
                <label htmlFor="name">Number</label>
                <input type="text" id="number" name="number" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.number}/>
                {formik.touched.number && formik.errors.number ?  ( <div className="error">{formik.touched.number && formik.errors.number}</div> ) : null}
                </div>

                <div className="form-controle">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Family Name</label>
                <input type="text" id="familyname" name="familyname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.familyname}/>
                </div>

                <div className="form-controle"></div>
                <label htmlFor="name">Father Name</label>
                <input type="text" id="fathername" name="fathername" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fathername}/>

                <div className="form-controle">
                <label htmlFor="name">ARM</label>
                <input type="text" id="arm" name="arm" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.arm}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Class</label>
                <input type="text" id="class" name="class" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.class}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Grade</label>
                <input type="" id="grade" name="grade" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.grade}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Structure</label>
                <input type="text" id="structure" name="structure" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.structure}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Departement</label>
                <input type="text" id="departement" name="departement" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.departement}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Situation</label>
                <input type="text" id="situation" name="situation" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.situation}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">CIN Number</label>
                <input type="text" id="cin" name="cin" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.cin}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Indentifier</label>
                <input type="text" id="identifier" name="identifier" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.identifier}/>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )

}
export default PersonelsForm;