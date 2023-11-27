import React from "react";
import {Formik , Form, Field ,ErrorMessage } from "formik";
import TextError from "./TextError";
// import * as Yup from "yup";

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
    // const onSubmit = values =>{
    //     console.log('form data :', values);
    // };
    const validate = values => {
        let errors = {};
        if(!values.number){
         errors.number = 'Required';
        }
        return errors;
     }
    //  const ValidationSchema = Yup.object({
    //     number: Yup.string().required('Required'),
    //  });


    return(
        <div>
            <Formik
            initialValues ={initialValues}
            validate = {validate} 
            onSubmit>
            <Form>
                <div className="form-controle">
                <label htmlFor="name">Number</label>
                <Field type="text" id="number" name="number" />
                <ErrorMessage  name="number" component={TextError}/>
                </div>

                <div className="form-controle">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Family Name</label>
                <Field type="text" id="familyname" name="familyname" />
                </div>

                <div className="form-controle"></div>
                <label htmlFor="name">Father Name</label>
                <Field type="text" id="fathername" name="fathername" />

                <div className="form-controle">
                <label htmlFor="name">ARM</label>
                <Field type="text" id="arm" name="arm" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Class</label>
                <Field type="text" id="class" name="class" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Grade</label>
                <Field type="" id="grade" name="grade" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Structure</label>
                <Field type="text" id="structure" name="structure" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Departement</label>
                <Field type="text" id="departement" name="departement" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Situation</label>
                <Field type="text" id="situation" name="situation" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">CIN Number</label>
                <Field type="text" id="cin" name="cin" />
                </div>

                <div className="form-controle">
                <label htmlFor="name">Indentifier</label>
                <Field type="text" id="identifier" name="identifier" />
                </div>
                <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )

}
export default PersonelsForm;