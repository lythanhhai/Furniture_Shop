import React from 'react' 
import '../Asset/AccountDetail/AccountDetail.scss';
import axios from "axios";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SignInReducer from '../Reducer/SignInReducer';
// export const phone = "0978337444";
import { SignInAction, ChangeAddress } from '../Action/SignInAction';

const AccountDetail = () => {

    const phone = useSelector(state => state.SignInReducer).phone_number
    // console.log(phone)
    //
    const dispatch = useDispatch()
    const [input, setInput] = useState({
      CurrentPass: '',
      NewPass: '',
      ConfirmPass: ''
    });
   
    const [error, setError] = useState({
      CurrentPass: '',
      NewPass: '',
      ConfirmPass: ''
    })
   
    const onInputChange = e => {
      const { name, value } = e.target;
      
      setInput(prev => ({
        ...prev,
        [name]: value
      }));
      validateInput(e);
    }
   
    const validateInput = e => {
      let { name, value } = e.target;
      setError(prev => {
        const stateObj = { ...prev, [name]: "" };
   
        switch (name) {
          case "CurrentPass":
            if (value!== passs) {
              stateObj[name] = "incorrect password .";
            }
            break;
   
          case "NewPass":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            } else if (input.ConfirmPass && value !== input.ConfirmPass) {
              stateObj["ConfirmPass"] = "Password and Confirm Password does not match.";
            } else {
              stateObj["ConfirmPass"] = input.ConfirmPass ? "" : error.ConfirmPass;
            }
            break;
   
          case "ConfirmPass":
            if (!value) {
              stateObj[name] = "Please enter Confirm Password.";
            } else if (input.NewPass && value !== input.NewPass) {
              stateObj[name] = "New Password and Confirm Password does not match.";
            }
            break;
   
          default:
            break;
        }
   
        return stateObj;
      });
    }



    //
    const [inforPerson, setInforPerson] = useState({
        // phone_number: "",
        // user_name: "",
       // pass_word: "",
        // address:"",
      });
    
      const handleperson = () => {
       
       
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        axios
          .get(`http://127.0.0.1:8000/sale/Customer-get/${phone}`)
          .then((response) => {
            // console.log(response);
            setInforPerson(response.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
    useEffect(() => {
        handleperson()
    },[])
   const { user_name, phone_number, address, pass_word} = inforPerson
   //
   const passs = pass_word;
  
   var typee = ""
   const check=(err,err1)=>
   {
    if (err == "" && err1 == "")
    {
      typee="submit";
    }
    else
    {
      typee="button"
    }
   }

  const notification = (typee) => {
    if(typee === "button")
    {
      alert("Không thành công!!")
    }
  }
  
  var noti = "Thanh cong roi me"
  const handleupdate = (e) => {
    e.preventDefault()
    const infor1 = {
        ...inforPerson
    };
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    axios
      .post(`http://127.0.0.1:8000/sale/Customer-update/${phone}/`, infor1)
      .then((response) => {
        console.log(response);
        return response.data
      })
      .then(data => {
        dispatch(ChangeAddress(data.address))
        alert(noti)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
        <section className='Account'>
                <p className='Account__title'>ACCOUNT DETAIL</p>
                <form name="Account__form" className='Account__form'
                method="POST"
                onSubmit={(e) => {
                    handleupdate(e);
                  }}
                >
                    {/* <div className='Name'>
                        <div className='Firstname'>
                            <label htmlFor='Firstname'>Fisrt Name</label>
                            <input type='text' placeholder='' name='Firstname'/>

                        </div>

                        <div className='Lastname'>
                            <label htmlFor='Lastname'>Last Name</label>
                            <input type='text' placeholder='' name='Lastname'/>
                        </div>
                    </div> */}

                    <div className='Username'>
                        <label htmlFor='Username'>Username</label>
                        <input type='text' placeholder='' name='Username' disabled
                         value={user_name}
                        
              
                        />

                    </div>

                    <div className='Phone'>
                        <label htmlFor='Phone'>Phone</label>
                        <input type='text' placeholder='' name='Phone'  disabled
                        value={phone_number}
                       
                        />
                    </div>
                    <div className='Phone'>
                        <label htmlFor='Phone'>Address</label>
                        <input type='text' placeholder='' name='Phone' 
                        value={address}
                        onChange={(e) => {
                          setInforPerson({
                            ...inforPerson,
                            address: e.target.value,
                          });
                        }}
                        />
                    </div>

                    <div className='Change__Password'>
                        <div className='CurrentPass'>
                            <label htmlFor='CurrentPass'>Current password (leave blank to leave unchanged)</label>
                            <input type='password' placeholder='' name='CurrentPass'
                            //
                          //  value={input.pass}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            //
                            />
                            {error.CurrentPass && <span className='err'>{error.CurrentPass}</span>}
                        </div>

                        <div className='NewPass'>
                            <label htmlFor='NewPass'>New password (leave blank to leave unchanged)</label>
                            <input type='password' placeholder='' name='NewPass'
                             onChange={(e) => {
                             
                             
                             
                              setInforPerson({
                                ...inforPerson,
                                pass_word: e.target.value,
                              });
                            
                              onInputChange(e);
                             

                            }}
                            onBlur={validateInput}
                            
                              />
                               {error.ConfirmPass&& <span className='err'>{error.ConfirmPass}</span>}
                        </div>

                        <div className='ConfirmPass'>
                            <label htmlFor='ConfirmPass'>Confirm new password</label>
                            <input type='password' placeholder='' name='ConfirmPass'
                          onChange={(e) => {
                            console.log(error.ConfirmPass +""+error.CurrentPass+""+e.target.value)
                            onInputChange(e)
                          
                          }}
                           
                            onBlur={validateInput
                            }
                            />
                            {
                            
                            error.ConfirmPass && <span className='err' onChange={ check(error.ConfirmPass,error.CurrentPass)} >{error.ConfirmPass}</span>
                          
                            
                            }
                        </div>
                    </div>
                    <button type={typee} className='Account__form-saveChange' onClick={() => {
                        notification(typee)
                    }}>SAVE CHANGE</button>
                </form>
        </section>
  );
}

export default React.memo(AccountDetail);

