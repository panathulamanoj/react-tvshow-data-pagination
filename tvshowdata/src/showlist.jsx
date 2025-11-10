import Card from './card';
import {v4 as uuid} from 'uuid';
export default function showlist({data})
{
    return(
        <>
         {data.length>=1 && data.map((ele)=>{
              return <Card key={uuid()} obj={ele}/>
            })}
        </>
    );
}