import React, {useState, useEffect} from 'react';
import ExportFile from './ExportFile';

export default function TableCSV(props) {
    
  const [updateCvs, setUpdateCsv] = useState([]);
    
  const updateCsvFunc=()=>{
    const newData = props.csvFile.map((item) => {
      let acc= item.filter((itt, ind)=>{
        return ind===parseInt(props.operation[1]);
    })
    return acc;
    })
    setUpdateCsv(newData);
    console.log(updateCvs)
  }
  useEffect(() => {
    updateCsvFunc();
  }, [props.operation])


    return (
        <div className='table-responsive'>
            <h4>Updated CSV</h4>
            <ExportFile users={props.csvFile} />
            {
                (props.csvFile.length !== 0) ?
                    <table className='table'>
                        <thead>
                            <tr>
                                {
                                    props.csvFile[0].map((itt, id) => (
                                        <th key={id}>{itt}</th>
                                    ))
                                }
                                <th>{props.operation[2]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.csvFile.map((item, i) => (
                                    <tr key={i}>
                                        {
                                            item.map((itt, id) => (itt) && (
                                                <td key={id}>{itt}</td>
                                            ))
                                            
                                        }
                                        {
                                            props.operation[0]==="split" ?
                                            <td>{updateCvs[i]? updateCvs[i].slice(0, parseInt(props.operation[3])) : ""}</td> :
                                            <td style={{paddingLeft: `${props.operation[3]}px`}}>{updateCvs[i]}</td>
                                        }
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> : ""}
        </div>
    );
}