import Encoding from 'encoding-japanese';
import FileSaver from 'file-saver';

if (typeof window !== 'undefined') {

  const downloadCsv = () => {
    const csvFormat = (col => `"${col}"`);

    const csvData = [
      ['列1', '列2', '列3'].map(csvFormat).join(','),
      ['あいうえお', 'かきくけこ', 'さしすせそ\nたちつてと'].map(csvFormat).join(','),
      ['キズナアイ', '輝夜月', '虹河ラキ'].map(csvFormat).join(','),
    ].join('\n');

    const unicodeList = [];
    for (let i = 0; i < csvData.length; i += 1) {
      unicodeList.push(csvData.charCodeAt(i));
    }

    // 変換処理の実施
    const shiftJisCodeList = Encoding.convert(unicodeList, 'sjis', 'unicode');
    const uInt8List = new Uint8Array(shiftJisCodeList);

    // csv書き込みの実装
    const writeData = new Blob([uInt8List], { type: 'text/csv' });

    FileSaver.saveAs(writeData, `shift-jis-${(new Date()).getTime()}.csv`);
  };

  const button = window.document.createElement('button');
  button.onclick = downloadCsv;
  button.innerHTML = 'download!!';

  window.document.body.appendChild(button);
}

