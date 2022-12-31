import React from 'react';

export default function TableCSV(props) {

    return (
        <div className='table-responsive'>
            {
                (props.csvFile.length !== 0) ?
                <>
                <h4>Original CSV</h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                {
                                    props.csvFile[0].map((itt, id) => (
                                        <th key={id}>{itt}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.csvFile.map((item, i) => (
                                    <tr key={i}>
                                        {
                                            item.map((itt, id) => (
                                                <td key={id}>{itt}</td>
                                            ))
                                            
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table></> : ""}
                    
        </div>
    );
}