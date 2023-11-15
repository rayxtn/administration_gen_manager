import React from "react";
import { useFormik } from "formik";

function personelsForm(){
    
    const formik = useFormik({});

    return(
        <div>
            <form>

                <label htmlFor="name">Number</label>
                <input type="text" id="number" name="number"/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"/>
                <label htmlFor="name">Family Name</label>
                <input type="text" id="familyname" name="familyname"/>
                <label htmlFor="name">Father Name</label>
                <input type="text" id="fathername" name="fathername"/>


                <label htmlFor="name">ARM</label>
                <input type="text" id="arm" name="arm"/>
                <label htmlFor="name">Class</label>
                <input type="text" id="class" name="class"/>
                <label htmlFor="name">Grade</label>
                <input type="" id="grade" name="grade"/>
                <label htmlFor="name">Structure</label>
                <input type="text" id="structure" name="structure"/>


                <label htmlFor="name">Departement</label>
                <input type="text" id="departement" name="departement"/>
                <label htmlFor="name">Situation</label>
                <input type="text" id="situation" name="situation"/>
                <label htmlFor="name">CIN Number</label>
                <input type="text" id="cin" name=""cin/>
                <label htmlFor="name">Indentifier</label>
                <input type="text" id="identifier" name="identifier"/>
                <button>Submit</button>

            </form>
        

        </div>
    )

}
export default personelsForm;