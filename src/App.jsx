import { useState } from 'react'
import './App.css'


export const App = () => {
  const [title, setTitle] = useState("")
  const [studyTime, setStudyTime] = useState("")

  const [record, setRecord] = useState({
    record1: { title: "勉強の記録1", time: 1 },
    record2: { title: "勉強の記録2", time: 3 },
    record3: { title: "勉強の記録3", time: 5 }
  });

  const addRecord = () => {
    const newKey = `record${Object.keys(record).length + 1}`;
    const newRecord = {
      title: title,
      time: Number(studyTime) || 0,
    };
    setRecord(prevRecord => ({
      ...prevRecord,
      [newKey]: newRecord
    }));
    setTitle("");
    setStudyTime("");
  }

<<<<<<< HEAD
  const totalTime = Object.values(record).reduce((sum,rec) => sum + rec.time,0);
=======
  const totalTime = Object.values(record).reduce((sum, item) => sum + item.time, 0);
>>>>>>> main


  // 学習内容→配列
  // 学習時間→???
  return (
    <>
<<<<<<< HEAD
    <h1>学習記録一覧</h1>
    <p>学習内容<input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/></p>
    <p>学習時間<input type="text" value={studyTime} onChange={(event) => setStudyTime(event.target.value)}/></p>
        <button onClick={addRecord}>登録</button>

    <p>入力されている学習内容</p>
    <ul>
      {Object.keys(record).map(key => (
       <li key={key}>
        {record[key].title}
      </li>
      ))}
     
    </ul>
    <p>入力されている学習時間</p>
    
    {Object.keys(record).map(key=>(
      <li key={key}>
        {record[key].time}
      </li>
    ))}
    <p>合計学習時間:{totalTime}</p>
=======
      <h1>学習記録一覧</h1>
      <p>学習内容<input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /></p>
      <p>学習時間<input type="text" value={studyTime} onChange={(event) => setStudyTime(event.target.value)} /></p>
      <button onClick={addRecord}>登録</button>

      <p>入力されている学習内容</p>
      <ul>
        {Object.keys(record).map(key => (
          <li key={key}>
            {record[key].title}
          </li>
        ))}

      </ul>
      <p>入力されている学習時間</p>

      {Object.keys(record).map(key => (
        <li key={key}>
          {record[key].time}
        </li>
      ))}
      <p>合計学習時間:{totalTime}</p>
>>>>>>> main
    </>
  )
}

export default App
