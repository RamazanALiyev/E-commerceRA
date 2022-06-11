import React, {useEffect, useState} from 'react'
import commerce from "../../../../lib/Ecommerce";
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import './order.scss'


const Orders = () => {
    const [listOrder, setListOrder] = useState([])
    useEffect(() => {
        commerce.customer
            .getOrders(`${localStorage.getItem("commercejs_customer_id")}`)
            .then((orders) => setListOrder(orders?.data))
    }, [])

    console.log('list', listOrder?.length)


    return (
        <div className='order-side'>
            {
                listOrder?.length === undefined ?
                    <div className='empty-basket'>
                        <h2>Sifarişlərim</h2>

                        <div className="empty-basket-box">
                                <SiHomeassistantcommunitystore className='store-icon'/>
                                <span>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</span>
                        </div>



                    </div>
                :
                <h2>sometig</h2>
                }
                </div>
                )
            }

            export default Orders