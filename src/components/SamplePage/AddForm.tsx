import React, { useState } from 'react';

// import Redux
import { useAppDispatch } from '../../redux/hooks';
import { addData, editData } from '../../reducers/samplePageSlice';
import { nanoid } from '@reduxjs/toolkit';

// import Interface
import { IValueSample } from '../../reducers/samplePageSlice';
import methodAPI from '../../api/callAPI';

const valueSample: IValueSample = {
    id: '',
    name: '',
    title: ''
  };

const AddForm = ({isEdit,setIsEdit, dataSubmit, setDataSubmit} : {isEdit: number,setIsEdit: any, dataSubmit: IValueSample, setDataSubmit: any}) =>{
  //state and actions from Slice
  const dispatch = useAppDispatch();

  //Handle the data input
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataSubmit({...dataSubmit, [name]: value});
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(dataSubmit.name && dataSubmit.title){
        if(isEdit <= -1){
            dispatch(addData({...dataSubmit, id:nanoid()}));
            await methodAPI.postElement(dataSubmit);
        }
        else{
            dispatch(editData({dataSubmit, isEdit}));
            await methodAPI.updateById(dataSubmit.id, {...dataSubmit});
            setIsEdit(-1);
        }
    }
    setDataSubmit(valueSample);
  }
  //Handle the data input

  return (
    <form action="" onSubmit={(event)=>{onSubmit(event)}}>
      <input type="text" name="name" value={dataSubmit.name} onChange={(event)=>{onChangeInput(event)}}/>
      <input type="text" name="title" value={dataSubmit.title} onChange={(event)=>{onChangeInput(event)}}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;