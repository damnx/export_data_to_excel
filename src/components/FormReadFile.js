import React from 'react';
import XLSX from 'xlsx';

const FormReadFile = ({
    inputs,
    onChange
}) => {
    return (
        <div className="col-md-4 login-sec">
            <h2 className="text-center">Thông tin</h2>
            <div className="login-form">
                <div className="form-group">
                    <label className="text-uppercase">Mã số thuế</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Mã số thuế"
                        value={inputs.maSoThue}
                        onChange={(e) => onChangeInput('maSoThue', e.target.value, inputs, onChange)}
                    />

                </div>
                <div className="form-group">
                    <label className="text-uppercase">Tên công ty</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên công ty"
                        value={inputs.tenCongTy}
                        onChange={(e) => onChangeInput('tenCongTy', e.target.value, inputs, onChange)}
                    />
                </div>

                <div className="form-group">
                    <label className="text-uppercase">Địa chỉ</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={inputs.diaChi}
                        onChange={(e) => onChangeInput('diaChi', e.target.value, inputs, onChange)}
                    >
                    </textarea>

                </div>

                <div className="form-group">
                    <label className="text-uppercase">Chọn phiếu xuất</label>
                    <select
                        className="form-control form-control-sm"
                        value={inputs.loaiPhieu}
                        onChange={(e) => onChangeInput('loaiPhieu', e.target.value, inputs, onChange)}
                    >
                        <option value='phieu-xuat'>Phiếu xuất</option>
                        <option value='phieu-nhap'>Phiếu nhập</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="text-uppercase">Dữ liệu nguồn</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        accept={".xlsx,.xls"}
                        onChange={(e) => onChangeFile('data', e, onChange)}
                    />
                </div>
            </div>
            <div className="copy-text">Created with <i className="fa fa-heart"></i> by <a href="https://www.facebook.com/damnx.dev">Mr Đạm</a></div>
        </div>
    );
};

const onChangeInput = (name, value, data, fn) => {
    data[name] = value
    fn('inputs', data)
}

const onChangeFile = (name, e, fn) => {
    let files = e.target.files, file;
    let rABS = false;
    if (!files || files.length == 0) return;
    file = files[0];
    let fileReader = new FileReader();
    let _self = this;
    fileReader.onload = function (e) {
        let dataBuffer = e.target.result;
        let data = new Uint8Array(dataBuffer);
        let workbook = XLSX.read(data, { type: rABS ? 'binary' : 'array' });
        fn('data', convertDataTo(workbook.Sheets['DL Nguồn']))
    };
    fileReader.readAsArrayBuffer(file);
}

const convertDataTo = (workbook) => {
    var first_worksheet = workbook;
    var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
    let dataNew = [];
    let dataObj = {};
    for (let i in data) {
        if (i > 9) {
            dataNew.push(data[i])
            dataObj[data[i][1]] = [];
        }
    }
    for (let i in dataObj) {
        for (let j in dataNew) {
            if (i === dataNew[j][1]) {
                dataObj[i].push(dataNew[j]);
            }
        }
    }
    return dataObj;
}


export default FormReadFile;