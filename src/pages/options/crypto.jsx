import React, { useState, useEffect } from 'react';
import Header from '../../componets/Header';

const Crypto = () => {

  useEffect(() => {
    const scriptId = 'tradingview-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.text = `
        {
          "width": "900",
          "height": "510",
          "symbol": "BINANCE:BTCUSDT",
          "interval": "60",
          "timezone": "Europe/Warsaw",
          "theme": "dark",
          "style": "1",
          "locale": "pl",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_side_toolbar": false,
          "hide_legend": true,
          "save_image": false,
          "details": true,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }
      `;
      document.getElementById('tradingview-container').appendChild(script);
    }
  }, []);

  return (
    <>
    <Header/>
    <div>
      <div id="tradingview-container" className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
    </>
  );
};

export default Crypto;
