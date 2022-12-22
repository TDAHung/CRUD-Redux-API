import AddForm from './AddForm';
import SamplePageShow from './SamplePageShow';
import {useState} from 'react';

import { IValueSample } from '../../reducers/samplePageSlice';
const valueSample: IValueSample = {
    id: '',
    name: '',
    title: ''
  };
  

export const TestPage = () => {
    const [isEdit, setIsEdit] = useState<number>(-1);
      //useState for submit
    const [dataSubmit,setDataSubmit]= useState<IValueSample>(valueSample);

  return <div>
    <AddForm isEdit = {isEdit} setIsEdit={setIsEdit} dataSubmit={dataSubmit} setDataSubmit={setDataSubmit}/>
    <SamplePageShow setIsEdit = {setIsEdit} setDataSubmit={setDataSubmit}/>
  </div>;
};