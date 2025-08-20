import { useState } from 'react'
import './App.css'


export const App = () => {
  const [title, setTitle] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [errors, setErrors] = useState([]);

  const [record, setRecord] = useState({
    record1: { title: "勉強の記録1", time: 1 },
    record2: { title: "勉強の記録2", time: 3 },
    record3: { title: "勉強の記録3", time: 5 }
  });

  const addRecord = () => {
    const newErrors = [];

    // バリデーション
    if (title.trim() === "") {
      newErrors.push("学習内容を入力してください");
    }
    if (studyTime.trim() === "") {
      newErrors.push("学習時間を入力してください");
    }

    const valTime = Number(studyTime);
    if (studyTime.trim() !== "" && (isNaN(valTime) || valTime <= 0)) {
      newErrors.push("学習時間は正の数字で入力してください");
    }

    // エラーがある場合
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // 新規データの追加
    const newKey = `record${Object.keys(record).length + 1}`;
    const newRecord = {
      title: title,
      time: valTime,
    };
    setRecord(prevRecord => ({
      ...prevRecord,
      [newKey]: newRecord
    }));

    // 入力・エラーをリセット
    setTitle("");
    setStudyTime("");
    setErrors([]);
  };

  const totalTime = Object.values(record).reduce((sum, rec) => sum + rec.time, 0);

  return (
    <>
      <h1>学習記録一覧</h1>
      <p>学習内容 <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /></p>
      <p>学習時間 <input type="text" value={studyTime} onChange={(event) => setStudyTime(event.target.value)} /></p>
      <button onClick={addRecord}>登録</button>

      {/* エラー表示 */}
      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}

      <p>入力されている学習内容</p>
      <ul>
        {Object.keys(record).map(key => (
          <li key={key}>{record[key].title}</li>
        ))}
      </ul>

      <p>入力されている学習時間</p>
      <ul>
        {Object.keys(record).map(key => (
          <li key={key}>{record[key].time} 時間</li>
        ))}
      </ul>

      <p>合計学習時間: {totalTime} 時間</p>
    </>
  );
};

export default App;
