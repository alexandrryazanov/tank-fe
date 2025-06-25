'use client'

import React, { useEffect, useState } from 'react';

const BitcoinPrice = () => {
  const [price, setPrice] = useState<string>('');

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade'); // подключаемся

    // Колбек который срабатывает при получении данных от сервера через WebSockets
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data); // парсим из строки в JSON
      setPrice(parseFloat(data.p).toFixed(2)); // на каждое сообщение от сервера - записываем данные в стейт
    };

    return () => {
      socket.close(); // отключаемся
    };
  }, []);

  return (
    <div>
      <h2>BTC/USDT</h2>
      <p>Цена: {price ? `$${price}` : 'Загрузка...'}</p>
    </div>
  );
};

export default BitcoinPrice;