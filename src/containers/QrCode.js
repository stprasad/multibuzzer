import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const QrCode = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <QRCode
        size={516}
        value={window.location.href.replace('qrcode', 'game')}
        logoImage='https://picsum.photos/id/67/300/300'
      />
    </div>
  );
};

export default QrCode;