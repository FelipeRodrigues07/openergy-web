import React, { useState } from 'react';
import './css/Section.css';

import lampadaImg from './img/lampadaPlaca.png'

export default function Section() {

    const [power, setPower] = useState('');
    const [usageTime, setUsageTime] = useState('');
    const [daysPerMonth, setDaysPerMonth] = useState('');
    const [kwhPrice, setKwhPrice] = useState('');
    const [totalCost, setTotalCost] = useState(0);
  
    const calculateCost = () => {
      const powerInKw = power / 1000;
      const totalUsage = (powerInKw * usageTime * daysPerMonth) / 60; // Alteração: dividido por 60 para converter para minutos
      const cost = totalUsage * kwhPrice;
      setTotalCost(cost);
    };

    
  return (
    <section className='section'>
        <div className='calculo'>
                <h2 className='titulo'>Calcular Consumo de Energia:</h2>
                <div className='input-wrapper'>
                <label>Potência (em watts):</label>
                <input type='number' value={power} onChange={(e) => setPower(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                <label>Tempo de Uso (em minutos):</label>
                <input type='number' value={usageTime} onChange={(e) => setUsageTime(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                <label>Quantidade de Dias por Mês:</label>
                <input type='number' value={daysPerMonth} onChange={(e) => setDaysPerMonth(e.target.value)} />
                </div>
                <div className='input-wrapper'>
                <label>Valor do kWh (em reais):</label>
                <input type='number' value={kwhPrice} onChange={(e) => setKwhPrice(e.target.value)} />
                </div>
                <button className='botaoCal' onClick={calculateCost}>Calcular</button>
                <p className='result'>Custo Total: R$ {totalCost.toFixed(2)}</p>
        </div>

        <div className='imagenHeader'>
            <img className='imagenLam' src={lampadaImg}/>
        </div>
    </section>
  )
  }
