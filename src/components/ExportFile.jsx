import React from 'react'


function ExportFile(props) {

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })

    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(props.users),
      fileName: 'users.json',
      fileType: 'text/json',
    })
  }

  const exportToCsv = e => {
    e.preventDefault()

    let acc = "";
    acc = JSON.stringify(props.users)

    downloadFile({
      data: acc.split("[[").join("").split("[").join("").split("],").join("\n").split("]]").join("").split('""').join(""),
      fileName: 'users.csv',
      fileType: 'text/csv',
    })
  }

  return (
      <div className='actionBtns'>
        <div>
          <button type='button' className="exportBtn" onClick={exportToJson}>
            Export to JSON
          </button>
        </div>
        <div>
          <button type='button' className="exportBtn" onClick={exportToCsv}>
            Export to CSV
          </button>
        </div>
      </div>
  )
}

export default ExportFile