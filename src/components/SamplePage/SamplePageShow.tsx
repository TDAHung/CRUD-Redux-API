// import redux
import { deleteData } from "../../reducers/samplePageSlice";
import { SamplePage } from '../../reducers/samplePageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { middleware } from "../../reducers/samplePageSlice";

import { useEffect, useState } from 'react';

//import interface
import { IinitialState } from "../../reducers/samplePageSlice";
import { IValueSample } from "../../reducers/samplePageSlice";
import methodAPI from "../../api/callAPI";

interface Iprops{
    setIsEdit: React.Dispatch<React.SetStateAction<number>>, 
    setDataSubmit: React.Dispatch<React.SetStateAction<IValueSample>>,
};

const SamplePageShow = ({setIsEdit, setDataSubmit} : Iprops) =>{
  const SamplePageData = useAppSelector(SamplePage);
  const dispatch = useAppDispatch();

    const handleRemove = async (element: IValueSample) => {
        dispatch(deleteData(element));
        await methodAPI.deleteById(element.id);
    }

    const handleEdit = (element: IValueSample, index:number) => {
        setIsEdit(index);
        setDataSubmit(element);
    }

  useEffect(()=>{
    dispatch(middleware());
  },[]);

  const renderUIData = (objectData: IinitialState)=>{
    return objectData.data.map((element: IValueSample, index: number)=>{
      return <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.title}</td>
        <button onClick={()=>{handleRemove(element)}}>Delete</button>
        <button onClick={()=>{handleEdit(element, index)}}>Edit</button>
      </tr>
    });
  }

  return (
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>title</th>
      </tr>
      {renderUIData(SamplePageData)}
    </table>
  );
}

export default SamplePageShow;