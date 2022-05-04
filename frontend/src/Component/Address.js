import React from 'react' 
import '../Asset/Address/Address.scss';
const Address = () => {

  return (
        <section className='Address'>
            <p className='Address__title'>My Address</p>
            <div className='Address__detail'>
                <div className='Address__detail-fullname'>
                    <p className='part'>Fullname: </p>
                    <p className='content'>Ly Thanh Hai</p>
                </div>
                <div className='Address__detail-phone'>
                    <p className='part'>Phone Number: </p>
                    <p className='content'>Ly Thanh Hai</p>
                </div>
                <div className='Address__detail-address'>
                    <p className='part'>Address: </p>
                    <p className='content'>Ly Thanh Hai</p>
                </div>
            </div>
            <div className='Address__button'>
                <button className='Address__button-update'>Update</button>
                <button className='Address__button-delete'>Delete</button>
            </div>
        </section>
  );
}

export default React.memo(Address);

