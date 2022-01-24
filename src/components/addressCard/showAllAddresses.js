import { useState } from "react";
import { useStateContext } from "../../contexts";
import { Profile } from "../../Routes";
import { deleteAddressById } from "../axios/axios.address";
import { AddressForm } from "./addressForm";

export function ShowAllAddresses() {
    const { state: { address_details }, dispatch } = useStateContext();
    const [openAddressForm, setAddressForm] = useState(false)
    return <div className='profile'>
        <Profile />
        {openAddressForm ? <div className='address-modal'><AddressForm setAddressForm={setAddressForm} /></div> :
            <ul className='address-list'>
                {address_details.length >= 1 && address_details?.map((address) => {
                    const { _id, name, houseNo, streetName, landmark, city, district, pincode } = address
                    return <li className="address-li">
                        <p>{name}</p>
                        <p>{houseNo}</p>
                        <p>{streetName}</p>
                        <p>{landmark}</p>
                        <p>{city},{district},{pincode}</p>
                        <button className='btn delete' onClick={() => deleteAddressById(_id, dispatch)} >
                            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37l3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8v10z" fill="currentColor"></path></svg>
                        </button>
                    </li>

                })}
            </ul>}
        <button className='btn add' onClick={() => setAddressForm(true)}>
            <svg width="2em" height="2em" viewBox="0 0 24 24">
                <path d="M2 6H1l4-4l4 4H8v3H6V6H4v3H2V6m11 4.9l1.3 1.1H16V9h2v3h3V8h1l-5-5l-5 5h1v2.9m.8 11.1c-.5-.9-.8-1.9-.8-3c0-1.6.6-3.1 1.7-4.1L9 10l-7 6h2v6h3v-5h4v5h2.8m4.2-7v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" fill="currentColor">
                </path>
            </svg>
        </button>
    </div>

}
