import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import RenderTr from './RenderTr';

const Table = ({
    inputs,
    data
}) => {
    if (Object.keys(data).length > 0) {
        return renderTable(data, inputs);
    }

    return (<div key={0}></div>)
};

const renderTable = (data, inputs) => {
    let tables = [];
    let k = 0;
    for (let i in data) {
        let dataNew = data[i];
        k++;
        tables.push(
            <div className='download-table-xls-button'>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table={k + 'customers'}
                    filename={inputs.loaiPhieu === 'phieu-xuat' ? "phieu-xuat" + k : 'phieu-nhap' + k}
                    sheet={inputs.loaiPhieu === 'phieu-xuat' ? "phieu-xuat" + k : 'phieu-nhap' + k}
                    buttonText={inputs.loaiPhieu === 'phieu-xuat' ? "Download phiếu xuất " + k : 'Download phiếu nhập' + k}
                    key={k}
                />
                <table className='customers-hidden' style={{ lineHeight: 0 }} id={k + 'customers'}>
                    <tbody>
                        <tr style={{ height: '30px', verticalAlign: 'middle' }}>
                            <td colSpan={4} style={{ textAlign: 'left', fontSize: '15px', fontFamily: "Times New Roman", fontWeight: 'bold', fontStyle: 'italic' }}>{inputs.tenCongTy}</td>
                            <td ></td>
                            <td></td>
                            <td colSpan={2} style={{ fontSize: '13px', fontFamily: "Times New Roman", fontWeight: 'bold', textAlign: 'center' }}>Mẫu số : {inputs.maSoThue}</td>
                        </tr>
                        <tr style={{ height: '25px', verticalAlign: 'middle' }}>
                            <td colSpan={6} style={{ textAlign: 'left', fontSize: '15px', fontFamily: "Times New Roman", fontWeight: 'bold', fontStyle: 'italic' }}>{inputs.diaChi}</td>

                            <td colSpan={2} style={{ textAlign: 'left', fontSize: '13px', fontFamily: "Arial" }}>(Ban hành theo QĐ số 15/2006/QĐ-BTC</td>
                        </tr>
                        <tr style={{ height: '25px', verticalAlign: 'middle' }}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} style={{ textAlign: 'left', fontSize: '13px', fontFamily: "Arial" }}>ngày 20/03/2006 của Bộ trưởng BTC)</td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} style={{ fontSize: 20, fontFamily: "Arial", fontWeight: 'bold', textAlign: 'center' }}>{inputs.loaiPhieu === 'phieu-xuat' ? 'PHIẾU XUẤT KHO' : 'PHIẾU NHẬP KHO'}</td>
                            <td></td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ textAlign: 'right' }}>Số :</td>
                            <td style={{ textAlign: 'center', backgroundColor: '#ccffcc', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold' }}>PX {k}</td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={3} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial" }}></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td style={{ fontSize: '13px', fontFamily: "Arial" }}>{inputs.loaiPhieu === 'phieu-xuat' ? '- Họ và tên người nhận hàng' : '- Họ và tên người giao:'}</td>
                            <td colSpan={4} style={{ fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold' }}>{inputs.loaiPhieu === 'phieu-xuat' ? 'Bột Khoáng Holeim' : ' Cát  Như Ý'}</td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td colSpan={7} style={{ fontSize: '13px', fontFamily: "Arial" }} >{inputs.loaiPhieu === 'phieu-xuat' ? '- Lý do xuất kho: Xuất Bột đá Holeim' : '- Lý do nhập kho: Nhập Cát'}</td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td colSpan={5} style={{ fontSize: '13px', fontFamily: "Arial" }}  > {inputs.loaiPhieu === 'phieu-xuat' ? '- Xuất tại kho: KHO NPL' : '- Nhập tại kho: KHO NPL'} </td>
                            <td colSpan={2} style={{ fontSize: '13px', fontFamily: "Arial" }}  >- Địa điểm :</td>
                        </tr >
                        <tr style={{ verticalAlign: 'middle' }} >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr style={{ height: 50, verticalAlign: 'middle' }} >
                            <td style={{ backgroundColor: '#ccffff', textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold', border: '.1pt solid windowtext' }}>Số TT</td>
                            <td style={{ backgroundColor: '#ccffff', textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold', border: '.1pt solid windowtext' }} colSpan={3}>Tên, nhãn hiệu, quy cách phẩm chất, vật tư (sản phẩm hàng hóa)</td>
                            <td style={{ backgroundColor: '#ccffff', textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold', border: '.1pt solid windowtext' }}>Mã </td>
                            <td style={{ backgroundColor: '#ccffff', textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold', border: '.1pt solid windowtext' }}>Đơn vị tính </td>
                            <td style={{ backgroundColor: '#ccffff', textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold', border: '.1pt solid windowtext' }}>Số lượng xuất theo hóa đơn</td>
                            <td style={{ backgroundColor: '#ccffff', textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold', border: '.1pt solid windowtext' }}>Ghi chú</td>
                        </tr>
                        <RenderTr
                            data={dataNew}
                        />

                        <tr style={{ height: '25px', verticalAlign: 'middle' }}>
                            <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext', backgroundColor: '#ccffff', fontWeight: 'bold' }}></td>
                            <td colSpan={3} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext', backgroundColor: '#ccffff', fontWeight: 'bold' }}>CỘNG</td>
                            <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext', backgroundColor: '#ccffff', fontWeight: 'bold' }}></td>
                            <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext', backgroundColor: '#ccffff', fontWeight: 'bold' }}></td>
                            <td style={{ textAlign: 'right', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext', backgroundColor: '#ccffff', fontWeight: 'bold' }}>{total(dataNew)}</td>
                            <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext', backgroundColor: '#ccffff', fontWeight: 'bold' }}></td>
                        </tr>

                        <tr style={{ height: '30px', verticalAlign: 'middle' }}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{ height: '25px', verticalAlign: 'middle' }}>
                            <td colSpan={2} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold' }}>Người lập phiếu</td>
                            <td colSpan={2} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold' }}>Người nhận hàng</td>
                            <td colSpan={3} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold' }}>Thủ kho</td>
                            <td colSpan={2} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", fontWeight: 'bold' }}>Thủ trưởng đơn vị</td>
                        </tr>
                        <tr style={{ verticalAlign: 'middle' }}>
                            <td colSpan={2} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial" }}>(Ký, họ tên)</td>
                            <td colSpan={2} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial" }}>(Ký, họ tên)</td>
                            <td colSpan={3} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial" }}>(Ký, họ tên)</td>
                            <td colSpan={2} style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial" }}>(Ký, họ tên)</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
    return tables
}

const total = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i][10];
    }
    return formatMoney(total);
}


const formatMoney = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};




export default Table;