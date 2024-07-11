// src/components/LtqSinhVienAddOrEdit.js
import React, { useState, useEffect } from 'react';

const LtqSinhVienAddOrEdit = ({ student, onSave }) => {
  const [formData, setFormData] = useState({
    LtqMaSV: '',
    LtqHoSV: '',
    LtqTenSV: '',
    LtqPhai: '',
    LtqNgaySinh: '',
    LtqNoiSinh: '',
    LtqMaKH: '',
    LtqHocBong: '',
    LtqDiemTrungBinh: ''
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Mã SV</label>
        <input
          type="text"
          name="LtqMaSV"
          value={formData.MaSV}
          onChange={handleChange}
          disabled={!!student}
        />
      </div>
      <div>
        <label>Họ SV</label>
        <input
          type="text"
          name="LtqHoSV"
          value={formData.HoSV}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tên SV</label>
        <input
          type="text"
          name="LtqTenSV"
          value={formData.TenSV}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phái</label>
        <input
          type="text"
          name="LtqPhai"
          value={formData.Phai}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Ngày Sinh</label>
        <input
          type="date"
          name="LtqNgaySinh"
          value={formData.NgaySinh}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nơi Sinh</label>
        <input
          type="text"
          name="LtqNoiSinh"
          value={formData.NoiSinh}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mã KH</label>
        <input
          type="text"
          name="LtqMaKH"
          value={formData.MaKH}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Học Bổng</label>
        <input
          type="number"
          name="LtqHocBong"
          value={formData.HocBong}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Điểm Trung Bình</label>
        <input
          type="number"
          name="LtqDiemTrungBinh"
          value={formData.DiemTrungBinh}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{student ? 'Cập nhật' : 'Thêm mới'}</button>
    </form>
  );
};

export default LtqSinhVienAddOrEdit;
