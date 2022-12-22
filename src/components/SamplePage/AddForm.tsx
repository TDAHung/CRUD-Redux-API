import React, { useState } from 'react';

// import Redux
import { useAppDispatch } from '../../redux/hooks';
import { addData, editData } from '../../reducers/samplePageSlice';
import { nanoid } from '@reduxjs/toolkit';

// import Interface
import { IValueSample } from '../../reducers/samplePageSlice';
import methodAPI from '../../api/callAPI';
import Button from '@mui/material/Button';

const valueSample: IValueSample = {
    id: '',
    name: '',
    title: ''
  };

interface Iprops{
    isEdit: number,
    setIsEdit: React.Dispatch<React.SetStateAction<number>>, 
    dataSubmit: IValueSample, 
    setDataSubmit: React.Dispatch<React.SetStateAction<IValueSample>>,
}

const AddForm = ({isEdit,setIsEdit, dataSubmit, setDataSubmit} : Iprops) =>{
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
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddForm;