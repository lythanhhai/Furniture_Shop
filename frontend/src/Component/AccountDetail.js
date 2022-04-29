import React from 'react' 
import '../Asset/AccountDetail/AccountDetail.scss';
const AccountDetail = () => {

  return (
        <section className='Account'>
                <p className='Account__title'>ACCOUNT DETAIL</p>
                <form name="Account__form" className='Account__form'>
                    <div className='Name'>
                        <div className='Firstname'>
                            <label htmlFor='Firstname'>Fisrt Name</label>
                            <input type='text' placeholder='' name='Firstname'/>

                        </div>

                        <div className='Lastname'>
                            <label htmlFor='Lastname'>Last Name</label>
                            <input type='text' placeholder='' name='Lastname'/>
                        </div>
                    </div>

                    <div className='Username'>
                        <label htmlFor='Username'>Username</label>
                        <input type='text' placeholder='' name='Username'/>

                    </div>

                    <div className='Phone'>
                        <label htmlFor='Phone'>Phone</label>
                        <input type='text' placeholder='' name='Phone'/>
                    </div>
                    
                    <div className='Change__Password'>
                        <div className='CurrentPass'>
                            <label htmlFor='CurrentPass'>Current password (leave blank to leave unchanged)</label>
                            <input type='text' placeholder='' name='CurrentPass'/>

                        </div>

                        <div className='NewPass'>
                            <label htmlFor='NewPass'>New password (leave blank to leave unchanged)</label>
                            <input type='text' placeholder='' name='NewPass'/>
                        </div>

                        <div className='ConfirmPass'>
                            <label htmlFor='ConfirmPass'>Confirm new password</label>
                            <input type='text' placeholder='' name='ConfirmPass'/>
                        </div>
                    </div>
                    <button type='submit' className='Account__form-saveChange'>SAVE CHANGE</button>
                </form>
        </section>
  );
}

export default React.memo(AccountDetail);

