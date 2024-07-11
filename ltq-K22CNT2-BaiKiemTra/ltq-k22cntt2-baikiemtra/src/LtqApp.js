// src/LtqApp.js
import React, { useState } from 'react';
import './App.css';
import LtqSinhVienList from './coponents/LtqSinhVienList';
import LtqSinhVienAddOrEdit from './coponents/LtqSinhVienAddOrEdit';

function LtqApp() {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleSaveStudent = async (student) => {
    if (student.id) {
      // Cập nhật thông tin sinh viên
      const response = await fetch(`http://667ccf883c30891b865dbd27.mockapi.io/ltq/Ap1/V1/${student.MaSV}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      const updatedStudent = await response.json();
      setStudents(students.map(s => (s.MaSV === updatedStudent.MaSV ? updatedStudent : s)));
    } else {
      // Thêm mới sinh viên
      const response = await fetch(`http://667ccf883c30891b865dbd27.mockapi.io/ltq/Ap1/V1/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      const newStudent = await response.json();
      setStudents([...students, newStudent]);
    }
    setCurrentStudent(null);
  };

  const handleEditStudent = (student) => {
    setCurrentStudent(student);
  };

  const handleDeleteStudent = async (id) => {
    await fetch(`http://667ccf883c30891b865dbd27.mockapi.io/ltq/Ap1/V1/${id}`, {
      method: 'DELETE'
    });
    setStudents(students.filter(s => s.MaSV !== id));
  };

  const handleAddStudent = () => {
    setCurrentStudent(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Ltq App</h1>
      </header>
      <LtqSinhVienList
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
        onAdd={handleAddStudent}
      />
      <LtqSinhVienAddOrEdit
        student={currentStudent}
        onSave={handleSaveStudent}
      />
    </div>
  );
}

export default LtqApp;
