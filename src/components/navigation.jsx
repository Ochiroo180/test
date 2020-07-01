import React from 'react';
import { Button } from './';
import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */
        const history = useHistory()
        const loginPush = () => {
        history.push('/login')
   };

    return (
        <div className=' w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary ph-5 mt-5'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 ph-5 mr-5 mt-5 b-primary" onClick={() => { alert("loginPush!") }}>Нэвтрэх</Button>
        </div>
    );
};