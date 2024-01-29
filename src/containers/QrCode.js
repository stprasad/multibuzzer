import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import clockImg from '../assets/img/clock.png';

const QrCode = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <QRCode
        size={516}
        value={window.location.href.replace('qrcode', 'game')}
        logoImage={clockImg}
      />
    </div>
  );
};

export default QrCode;