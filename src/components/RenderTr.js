import React from 'react';

const RenderTr = ({ data }) => {
    let tr = []
    for (let i = 0; i < data.length; i++) {
        tr.push(
            <tr key={i} style={{ height: '25px', verticalAlign: 'middle' }}>
                <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext' }}>{i}</td>
                <td colSpan={3} style={{ textAlign: 'left', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext' }}>{data[i][6]}</td>
                <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext' }}>{data[i][5]}</td>
                <td style={{ textAlign: 'center', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext' }}>{data[i][11]}</td>
                <td style={{ textAlign: 'right', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext' }}>{formatMoney(data[i][10])}</td>
                <td style={{ textAlign: 'right', fontSize: '13px', fontFamily: "Arial", border: '.1pt solid windowtext' }}></td>
            </tr>
        )
    }

    return tr
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

export default RenderTr;