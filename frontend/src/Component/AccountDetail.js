import React from 'react' 
import '../Asset/AccountDetail/AccountDetail.scss';
import axios from "axios";
import { useState, useEffect } from 'react'
export const phone = "0985367105";

const AccountDetail = () => {


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
    const { user_name, phone_number,address} = inforPerson
   //
   const [infor, setInfor] = useState({
    phone_number: "",
    user_name: "",
    pass_word: "",
    address:"",
  });

  const handleupdate = (e) => {
    e.preventDefault()
    const infor1 = {
        ...infor
    };
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    axios
      .post(`http://127.0.0.1:8000/sale/Customer-update/${phone}/`, infor1)
      .then((response) => {
        console.log(response);
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
                        <input type='text' placeholder='' name='Username' value={user_name} disabled
                        onChange={(e) => {
                            setInfor({
                              ...infor,
                              user_name: {user_name},
                            });
                          }}
                        />

                    </div>

                    <div className='Phone'>
                        <label htmlFor='Phone'>Phone</label>
                        <input type='text' placeholder='' name='Phone' value={phone_number} disabled
                         onChange={(e) => {
                            setInfor({
                              ...infor,
                              phone_number: {phone_number},
                            });
                          }}
                        />
                    </div>
                    <div className='Phone'>
                        <label htmlFor='Phone'>Address</label>
                        <input type='text' placeholder='' name='Phone' value={address}
                         onChange={(e) => {
                            setInfor({
                              ...infor,
                              address: address,
                            });
                          }}
                        />
                    </div>
                    <div className='Change__Password'>
                        <div className='CurrentPass'>
                            <label htmlFor='CurrentPass'>Current password (leave blank to leave unchanged)</label>
                            <input type='password' placeholder='' name='CurrentPass' />

                        </div>

                        <div className='NewPass'>
                            <label htmlFor='NewPass'>New password (leave blank to leave unchanged)</label>
                            <input type='password' placeholder='' name='NewPass'
                            onChange={(e) => {
                                setInfor({
                                  ...infor,
                                  pass_word: e.target.value,
                                });
                              }}/>
                        </div>

                        <div className='ConfirmPass'>
                            <label htmlFor='ConfirmPass'>Confirm new password</label>
                            <input type='password' placeholder='' name='ConfirmPass'/>
                        </div>
                    </div>
                    <button type='submit' className='Account__form-saveChange'>SAVE CHANGE</button>
                </form>
        </section>
  );
}

export default React.memo(AccountDetail);

