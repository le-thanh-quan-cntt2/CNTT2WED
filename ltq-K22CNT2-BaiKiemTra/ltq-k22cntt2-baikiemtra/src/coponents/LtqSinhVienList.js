// src/components/LtqSinhVienList.js
import React, { useState, useEffect } from 'react';

const LtqSinhVienList = ({ onEdit, onDelete, onAdd }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://667ccf883c30891b865dbd27.mockapi.io/ltq/Ap1/V1/');
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <button onClick={onAdd}>Thêm mới</button>
      <ul>
        {students.map((student) => (
          <li key={student.MaSV}>
            {`${student.HoSV} ${student.TenSV}`}
            <button onClick={() => onEdit(student)}>Sửa</button>
            <button onClick={() => onDelete(student.MaSV)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LtqSinhVienList;
