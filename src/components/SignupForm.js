import React, { useRef,useState } from 'react'

function SignupForm() {
    const [ageCategory, setAgeCategory] = useState('');
    let msgLabelRef= useRef();
    let stateSelectRef = useRef();
    let fnInputRef = useRef();
    let lnInputRef = useRef();
    let maleRbRef = useRef();
    let femaleRbRef = useRef();
    let ageInputRef = useRef();
    let ageSpanRef = useRef();

    let selectedGender;
    let salutation;
    let maritalStatus;

    let languagesKnown = {
        tel:"false",
        hin:"false",
        eng:"false",
        tam:"false",
        kan:"false"
    }
    

    let onCreateAccount = ()=>{
        if(selectedGender == "Male"){
            salutation="Mr";
        }
        else{
            if(maritalStatus == "Married"){
                salutation = "Mrs"
            }
            else{
                salutation = "Ms";
            }
        }

        console.log(languagesKnown);
        msgLabelRef.current.innerHTML = `${salutation}. ${fnInputRef.current.value} ${lnInputRef.current.value} 
        from ${stateSelectRef.current.value}, your account has been created. You know 
        ${languagesKnown.tel == true? "Telugu ":""} 
        ${languagesKnown.hin == true? "Hindi ":""}
        ${languagesKnown.eng == true? "English ":""}
        ${languagesKnown.tam == true? "Tamil ":""}
        ${languagesKnown.kan == true? "Kannada":""}.`;
    }


    const handleAgeChange = () => {
        let age = Number(ageInputRef.current.value);
        if (age <= 5) {
            setAgeCategory('Infant');
        } else if (age <= 12) {
            setAgeCategory('Child');
        } else if (age <= 19) {
            setAgeCategory('Teenager');
        } else if (age <= 30) {
            setAgeCategory('Youth');
        } else if (age <= 65) {
            setAgeCategory('Middle Aged');
        } else if (age <= 100) {
            setAgeCategory('Old');
        } else {
            setAgeCategory('Not a valid age');
        }
    };
    



  return (
    <div>
    <h1>Signup Form</h1>
    <form>
        <div>
            <label>First Name</label>
            <input ref={fnInputRef}></input>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lnInputRef}></input>
        </div>
        <div>
            <label>Gender</label>
            <input type="radio" name='gender' ref={maleRbRef} onChange={()=>{
                if(maleRbRef.current.checked == true){
                    selectedGender="Male";
                }
            }}></input>
            <label>Male</label>
            <input type="radio" name='gender' ref={femaleRbRef} onChange={()=>{
                if(femaleRbRef.current.checked == true){
                    selectedGender="Female";
                }
            }}></input>
            <label>Female</label>
        </div>

        <div>
            <label>Marital Status</label>
            <input type="radio" name="marraige" onChange={(eo)=>{
                console.log(eo);
                if(eo.target.checked == true){
                    maritalStatus="Married";
                }
            }}></input>
            <label>Married</label>

            <input type="radio" name="marraige" onChange={(e)=>{
                if(e.target.checked == true){
                    maritalStatus = "Unmarried";
                }
            }}></input>
            <label>Unmarried</label>
        </div>

        <div>
    <label>Age</label>
    <input
        ref={ageInputRef}
        onChange={handleAgeChange}  
    ></input>
    <span>{ageCategory}</span>
</div>
        <div>
            <label>Email</label>
            <input type="email"></input>
        </div>
        <div>
            <label>Password</label>
            <input type="password"></input>
        </div>
        <div>
            <label>State</label>
            <select ref={stateSelectRef}>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Karnataka</option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
                <option>MadhyaPradesh</option>
            </select>
        </div>

            <div>
                <label>Languages</label>
                <div id="lang">
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.tel = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Telugu</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.hin = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Hindi</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.eng = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>English</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.tam = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Tamil</label>
                <input type="checkbox" onChange={(e)=>{
                    languagesKnown.kan = e.target.checked;
                }}></input>
                <label style={{width:'auto'}}>Kannada</label>
                </div>
            </div>

        <div>
            <button type='button' onClick={()=>{
                onCreateAccount();
            }}>Signup</button>
        </div>

        <label id="msg" ref={msgLabelRef}></label>
    </form>
    </div>
  )
}

export default SignupForm;